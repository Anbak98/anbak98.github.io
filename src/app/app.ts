import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements AfterViewInit {
  years = Array.from({ length: 2026 - 1998 + 1 }, (_, i) => 2026 - i);
  activeYear: number | null = null;
  
  /** 🔥 필터: 복수 선택 */
  activeFilters = new Set<'project' | 'game'>(['project', 'game']);

  /** 🔵 데이터 */
  cardsByYear: Record<
    number,
    { photo: string; name: string; type: 'project' | 'game'; _visible?: boolean }[]
  > = {
    2026: [
      { photo: "./assets/logo.jpg", name: '홍길동', type: 'project' },
      { photo: '/src/assets/logo.jpg', name: 'Shoot Mania', type: 'game' },
      { photo: '/src/app/assets/logo.jpg', name: '박철수', type: 'project' },
    ],
    2025: [
      { photo: '/assets/p4.jpg', name: '이지은', type: 'project' },
      { photo: '/assets/p5.jpg', name: 'Dungeon Maker', type: 'game' },
    ],
    2024: [
      { photo: '/assets/p6.jpg', name: '보라', type: 'project' },
      { photo: '/assets/p7.jpg', name: '하늘', type: 'project' },
      { photo: '/assets/p8.jpg', name: 'Cyber Run', type: 'game' },
      { photo: '/assets/p9.jpg', name: '혜진', type: 'project' },
    ],
  };

  @ViewChildren('rows') rows!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    this.updateActiveYear();
    this.initializeVisibility();
  }

  /** 초기 visibility */
  initializeVisibility() {
    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(card => (card._visible = true));
    }
  }

  /** 스크롤 시 연도 강조 */
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

  /** 필터 적용 */
  getFilteredCards(year: number) {
    const cards = this.cardsByYear[year] || [];

    const visibleTypes = this.activeFilters;

    // if (visibleTypes.size === 0) {
    //   cards.forEach(c => (c._visible = false));
    //   return [];
    // }

    cards.forEach(c => (c._visible = false));
    this.triggerReflow();

    cards
      .filter(c => visibleTypes.has(c.type))
      .forEach(c => (c._visible = true));

    return cards;
  }

  /** CSS transition 초기화 */
  triggerReflow() {
    void document.body.offsetHeight;
  }

  /** 필터 버튼 토글 */
  toggleFilter(type: 'project' | 'game') {
    if (this.activeFilters.has(type)) {
      this.activeFilters.delete(type);
    } else {
      this.activeFilters.add(type);
    }
    this.triggerReflow();
  }

  /** 카드 3D 효과 */
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
