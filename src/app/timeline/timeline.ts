import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, HostListener, Input } from '@angular/core';
import { Infocard } from '../infocard';
import { AutoShrinkDirective } from './auto-shrink.directive';
import { CommonModule } from '@angular/common';
import { InfoPopup } from './infopopup/infopopup';
import { CARDS_BY_YEAR } from '../../datas/cards';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, AutoShrinkDirective, InfoPopup],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css', './infocard.css', './filterbar.css', './developmentcard.css']
})
export class Timeline implements AfterViewInit {
  years = Array.from({ length: 2026 - 1998 + 1 }, (_, i) => 2026 - i);

  cardsByYear: Record<number, Infocard[]> = CARDS_BY_YEAR;

  activeYear: number | null = null;

  /** 메인 필터 */
  activeFilters = new Set<'project' | 'game'>(['game']);

  /** 서브필터 */
  subFilters = new Set<string>();
  activeSubFilters = new Set<string>();
  showSubFilters = true;

  @ViewChildren('rows') rows!: QueryList<ElementRef<HTMLElement>>;

  // 팝업 상태
  activeCard: Infocard | null = null;
  showPopup: boolean = false;
  public activeCardHtml: string | null = null;


  ngOnInit() {
    this.initializeVisibility();
    this.rebuildSubFilters(); // ⭐ 여기로 이동
  }

  ngAfterViewInit() {
    this.updateActiveYear();
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

  isEnglish(str: string) {
    return /^[A-Za-z]/.test(str);
  }

  isKorean(str: string) {
    return /^[가-힣]/.test(str);
  }

  rebuildSubFilters() {
    // subType → 어떤 타입에 속하는지 기록
    const ownership = new Map<string, { project: boolean; game: boolean }>();

    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(card => {
        if (!this.activeFilters.has(card.type)) return;

        card.subTypes?.forEach(tag => {
          if (!ownership.has(tag)) {
            ownership.set(tag, { project: false, game: false });
          }
          ownership.get(tag)![card.type] = true;
        });
      });
    }

    const sorted = Array.from(ownership.keys()).sort((a, b) => {
      const oa = ownership.get(a)!;
      const ob = ownership.get(b)!;

      const priority = (o: { project: boolean; game: boolean }) => {
        if (o.project && !o.game) return 0; // project 전용
        if (o.project && o.game) return 1;  // 공통 (중립)
        return 2;                           // game 전용
      };

      const pa = priority(oa);
      const pb = priority(ob);

      // 1️⃣ ownership 기준
      if (pa !== pb) return pa - pb;

      const aEng = this.isEnglish(a);
      const bEng = this.isEnglish(b);

      // 2️⃣ 영어 → 한글
      if (aEng && !bEng) return -1;
      if (!aEng && bEng) return 1;

      // 3️⃣ 같은 언어권 정렬
      return a.localeCompare(b, 'ko');
    });

    this.subFilters = new Set(sorted);

    // 활성 서브필터 정리
    this.activeSubFilters.forEach(t => {
      if (!this.subFilters.has(t)) this.activeSubFilters.delete(t);
    });
  }
hasVisibleCards(year: number): boolean {
  // 서브필터가 하나도 없으면 연도 숨기지 않음
  if (this.activeSubFilters.size === 0) return true;

  const cards = this.cardsByYear[year] || [];

  return cards.some(c => {
    // 메인 필터
    if (!this.activeFilters.has(c.type)) return false;

    // 서브필터
    return c.subTypes?.some(t => this.activeSubFilters.has(t));
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
