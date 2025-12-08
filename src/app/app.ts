import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  HostListener,
} from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  template: `
    <!-- ==========================
         🔵 최상단 메뉴바
    =========================== -->
    <header class="navbar">
      <div class="nav-content">
        <div class="nav-logo">My Website</div>
        <nav class="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <!-- ==========================
         🟣 옵션 필터 메뉴바
    =========================== -->
    <div class="filter-bar">
      <button 
        (click)="toggleFilter('project')" 
        [class.active]="activeFilters.has('project')">
        프로젝트
      </button>

      <button 
        (click)="toggleFilter('game')" 
        [class.active]="activeFilters.has('game')">
        게임
      </button>
    </div>

    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true" />
      </header>

      <div class="vertical-line"></div>

      <div class="timeline-container" id="timeline">
        @for (y of years; track $index) {

          <div class="timeline-row" #rows (click)="scrollToYear($index)">

            <!-- 왼쪽 카드 -->
            <div class="side left-side">
              @if (($index % 2) === 0) {
                <div class="card-group">
                  @for (item of getFilteredCards(y); track item.name) {
                    <div class="info-card fade-card" [class.show]="item._visible">
                      <img [src]="item.photo" />
                      <div class="name">{{ item.name }}</div>
                    </div>
                  }
                </div>
              }
            </div>

            <!-- 중앙 연도 -->
            <div class="center-zone">
              <div class="dot" [class.active]="activeYear === y"></div>
              <div class="year" [class.active]="activeYear === y">{{ y }}</div>
            </div>

            <!-- 오른쪽 카드 -->
            <div class="side right-side">
              @if (($index % 2) === 1) {
                <div class="card-group">
                  @for (item of getFilteredCards(y); track item.name) {
                    <div class="info-card fade-card" [class.show]="item._visible">
                      <img [src]="item.photo" />
                      <div class="name">{{ item.name }}</div>
                    </div>
                  }
                </div>
              }
            </div>

          </div>

        }
      </div>

      <section class="content" id="home">
        <app-home></app-home>
      </section>
    </main>
  `,
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
      { photo: '/assets/p1.jpg', name: '홍길동', type: 'project' },
      { photo: '/assets/p2.jpg', name: 'Shoot Mania', type: 'game' },
      { photo: '/assets/p3.jpg', name: '박철수', type: 'project' },
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

  /** 카드 visibility 초기화 */
  initializeVisibility() {
    for (const year in this.cardsByYear) {
      this.cardsByYear[+year].forEach(card => (card._visible = true));
    }
  }

  /** ===========================
      🔵 스크롤 시 연도 강조
  ============================ */
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

  /** ===========================
      🔥 필터 적용 함수
  ============================ */
  getFilteredCards(year: number) {
    const cards = this.cardsByYear[year] || [];

    const visibleTypes = this.activeFilters;

    // 아무것도 선택 X → 모두 숨김
    if (visibleTypes.size === 0) {
      cards.forEach(c => c._visible = false);
      return [];
    }

    // fade-out
    cards.forEach(c => c._visible = false);
    this.triggerReflow();

    // fade-in 대상만 재활성화
    cards
      .filter(c => visibleTypes.has(c.type))
      .forEach(c => c._visible = true);

    return cards;
  }

  /** ⭐ CSS transition 강제 재적용 */
  triggerReflow() {
    void document.body.offsetHeight;
  }

  /** ===========================
      🟣 필터 버튼 토글
  ============================ */
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
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  }
}
