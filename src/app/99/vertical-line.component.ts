// vertical-line.component.ts (Standalone component, Angular 21+)
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-line',
  standalone: true,
  template: `
    <div class="page">
      <!-- 실제 페이지 컨텐츠는 여기에 -->
      <div class="content">
        <h1>페이지 컨텐츠 (예시)</h1>
        <p>중앙에 수직선이 고정됩니다.</p>
      </div>

      <!-- 중앙 수직선 -->
      <div class="vertical-line" aria-hidden="true"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh; /* 전체 화면 높이 */
      width: 100%;
    }

    .page {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: auto; /* 컨텐츠가 길면 스크롤 가능 */
      box-sizing: border-box;
      padding: 24px;
      background: #f7f7f7; /* 배경 예시 */
    }

    .content {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    /* 수직선 스타일(중요) */
    .vertical-line {
      --line-width: 2px;          /* 선 두께 */
      --line-color: #333333;      /* 선 색상 */
      --line-top-offset: 0px;     /* 위쪽 시작 오프셋 (원하면 조정) */
      --line-height: 100vh;       /* 선 높이 (뷰포트를 기준) */

      position: fixed;            /* 스크롤해도 화면 가운데에 고정 */
      top: var(--line-top-offset);
      left: 50%;                  /* 화면 가로 가운데 */
      transform: translateX(-50%);/* 정확히 가운데 정렬 */
      width: var(--line-width);
      height: var(--line-height);
      background-color: var(--line-color);
      z-index: 999;               /* 필요하면 더 크게 조정 */
      pointer-events: none;       /* 클릭 등 이벤트 통과 */
    }

    /* 예: 점선으로 바꾸고 싶다면 (선택) */
    /* .vertical-line { background: none; border-left: var(--line-width) dashed var(--line-color); } */

    /* 예: 위에서 아래로 라인 애니메이션 */
    .vertical-line {
         background: linear-gradient(to bottom, var(--line-color) 0%, rgba(0,0,0,0) 100%);
         background-size: 100% 200%;
         animation: slide 2s linear infinite;
       }
       @keyframes slide { from { background-position: 0 0 } to { background-position: 0 100% } }
  `]
})
export class VerticalLineComponent {}
