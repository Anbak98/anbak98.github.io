import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, HostListener, Input } from '@angular/core';
import { Infocard } from '../infocard';
import { AutoShrinkDirective } from './auto-shrink.directive';
import { CommonModule } from '@angular/common';
import { InfoPopup } from './infopopup/infopopup';
import { CARDS_BY_YEAR } from '../datas/cards';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, AutoShrinkDirective, InfoPopup],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css', './infocard.css', './filterbar.css']
})
export class Timeline implements AfterViewInit {
  years = Array.from({ length: 2026 - 1998 + 1 }, (_, i) => 2026 - i);

  cardsByYear: Record<number, Infocard[]> = CARDS_BY_YEAR;

  activeYear: number | null = null;

  /** 메인 필터 */
  activeFilters = new Set<'project' | 'game'>(['project', 'game']);

  /** 서브필터 */
  subFilters = new Set<string>();
  activeSubFilters = new Set<string>();
  showSubFilters = true;

  @ViewChildren('rows') rows!: QueryList<ElementRef<HTMLElement>>;

  // 팝업 상태
  activeCard: Infocard | null = null;
  showPopup: boolean = false;
  public activeCardHtml: string | null = null;

  ngAfterViewInit() {
    this.updateActiveYear();
    this.initializeVisibility();
    this.rebuildSubFilters();
  }

  initializeVisibility() {
    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(c => (c._visible = true));
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveYear();
  }

  updateActiveYear() {
    const centerY = window.innerHeight / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    this.rows.forEach((row, i) => {
      const rect = row.nativeElement.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;
      const dist = Math.abs(centerY - rowCenter);

      if (dist < closestDistance) {
        closestDistance = dist;
        closestIndex = i;
      }
    });

    this.activeYear = this.years[closestIndex];
  }

  scrollToYear(index: number) {
    const row = this.rows.get(index)?.nativeElement;
    if (row) row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  rebuildSubFilters() {
    const set = new Set<string>();
    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(card => {
        if (this.activeFilters.has(card.type)) {
          card.subTypes?.forEach(tag => set.add(tag));
        }
      });
    }
    this.subFilters = set;
    this.activeSubFilters.forEach(t => {
      if (!this.subFilters.has(t)) this.activeSubFilters.delete(t);
    });
  }

  toggleFilter(type: 'project' | 'game') {
    if (this.activeFilters.has(type)) this.activeFilters.delete(type);
    else this.activeFilters.add(type);
    this.rebuildSubFilters();
    this.updateRowOffsets();
  }

  toggleSubFilter(tag: string) {
    if (this.activeSubFilters.has(tag)) this.activeSubFilters.delete(tag);
    else this.activeSubFilters.add(tag);
    this.updateRowOffsets();
  }

  getFilteredCards(year: number) {
    const cards = this.cardsByYear[year] || [];
    let result = cards.filter(c => this.activeFilters.has(c.type));
    if (this.activeSubFilters.size > 0) {
      result = result.filter(c => c.subTypes?.some(t => this.activeSubFilters.has(t)));
    }
    cards.forEach(c => (c._visible = false));
    this.triggerReflow();
    result.forEach(c => (c._visible = true));
    return result;
  }

  triggerReflow() {
    void document.body.offsetHeight;
  }

  onCardMouseMove(event: MouseEvent, card: HTMLElement | null) {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  onCardMouseLeave(card: HTMLElement | null) {
    if (!card) return;
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  }

  updateRowOffsets() {
    requestAnimationFrame(() => {
      this.updateActiveYear();
    });
  }

  // ⭐ 팝업 열기
  openCardPopup(item: Infocard) {
    this.activeCard = item;              // ← 이 부분이 있어야 item이 전달됨
    this.activeCardHtml = item.htmlFile || null;
    this.showPopup = true;
  }

  closePopup() {
    this.activeCard = null;
    this.showPopup = false;
  }
}
