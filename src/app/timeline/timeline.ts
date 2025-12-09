// timeline.component.ts
import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  HostListener,
  Input,
} from '@angular/core';
import { Infocard } from '../infocard';
import { AutoShrinkDirective } from './auto-shrink.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    AutoShrinkDirective,
  ],
  templateUrl: './timeline.html',
  styleUrls: [
    './timeline.css',
    './infocard.css',
    './filterbar.css'
  ], // styleUrl -> styleUrls 로 수정
})

export class Timeline implements AfterViewInit {
  @Input() years: number[] = [];
  @Input() cardsByYear: Record<
    number,
    Infocard[]
  > = {};

  activeYear: number | null = null;

  /** 🔥 필터: 복수 선택 */
  activeFilters = new Set<'project' | 'game'>(['project', 'game']);

  @ViewChildren('rows') rows!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    this.updateActiveYear();
    this.initializeVisibility();
  }

  initializeVisibility() {
    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(card => (card._visible = true));
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

    this.rows.forEach((row, index) => {
      const rect = row.nativeElement.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;
      const distance = Math.abs(centerY - rowCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    this.activeYear = this.years[closestIndex];
  }

  scrollToYear(index: number) {
    const row = this.rows.get(index)?.nativeElement;
    if (row) row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  getFilteredCards(year: number) {
    const cards = this.cardsByYear[year] || [];
    const visibleTypes = this.activeFilters;

    cards.forEach(c => (c._visible = false));
    this.triggerReflow();

    cards
      .filter(c => visibleTypes.has(c.type))
      .forEach(c => (c._visible = true));

    return cards;
  }

  triggerReflow() {
    void document.body.offsetHeight;
  }

  toggleFilter(type: 'project' | 'game') {
    if (this.activeFilters.has(type)) {
      this.activeFilters.delete(type);
    } else {
      this.activeFilters.add(type);
    }
    this.triggerReflow();
  }

  onCardMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  onCardMouseLeave(card: HTMLElement) {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  }
}
