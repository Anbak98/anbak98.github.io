import { Component } from '@angular/core';
import { Profilepopup } from './profilepopup/profilepopup'

@Component({
  selector: 'app-home',
  imports: [
Profilepopup
  ],
  templateUrl: './home.html',
  styleUrls: [
    './home.css',
    './timeline.css'
  ]
})
export class Home {
  photoUrl: string = 'assets/logo.jpg';
  name: string = '유승민';
  altText = 'User avatar';
  bio = "안녕하세요! 게임 개발자 유승민입니다.";// Component.ts
monthsDescending = Array.from({ length: 12 }, (_, i) => 12 - i); // [12,11,...,1]

// 월별 top 위치 계산 (40px 간격 예시)
monthPositions = Array.from({ length: 12 }, (_, i) => i * 40);

monthHeight = 32; // 한 달 높이(px)
monthGap = 8;     // 월 사이 간격(px)

getMonthTop(month: number): number {
  return (12 - month) * (this.monthHeight + this.monthGap);
}

getMonthHeight(start: number, end: number): number {
  const length = end - start;
  return length * this.monthHeight;
}


 timeline = [
  {
    year: "2025",
    items: [
      {
        monthStart: 7,
        monthEnd: 9,
        title: "(주)메타빌 프리랜서",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
      {
        monthStart: 2,
        monthEnd: 6,
        title: "팀스파르타 부트캠프 유니티 트랙",
        file: "assets/popup/2025-03.html",
        icon: ""
      },
    ]
  },
  {
    year: "2024",
    items: [
      {
        monthStart: 7,
        monthEnd: 9,
        title: "GIGDC 제작부문 동상",
        file: "assets/popup/2025-01.html",
        icon: "assets/icons/bronze.svg"
      },
      {
        monthStart: 8,
        monthEnd: 8,
        title: "아주대학교 졸업",
        file: "assets/popup/2025-03.html",
        icon: ""
      },
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 언리얼 클라이언트 개발",
        file: "assets/popup/2025-03.html",
        icon: ""
      },
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 유니티 클라이언트 개발",
        file: "assets/popup/2025-03.html",
        icon: ""
      },
    ]
  },
  {
    year: "2023",
    items: [
      {
        monthStart: 7,
        monthEnd: 7,
        title: "아주대학교 소프트콘 AI 부문 최우수상",
        file: "assets/popup/2025-01.html",
        icon: "assets/icons/ultimate.svg"
      },
      {
        monthStart: 7,
        monthEnd: 7,
        title: "GEEKS 게임부문 대상",
        file: "assets/popup/2025-01.html",
        icon: "assets/icons/ultimate.svg"
      },
      {
        monthStart: 7,
        monthEnd: 7,
        title: "855 포병대대 통신병 병장 전역",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2022",
    items: [
      {
        monthStart: 1,
        monthEnd: 1,
        title: "현역 입대",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2021",
    items: [
      {
        monthStart: 1,
        monthEnd: 1,
        title: "게임 창업동아리 운영",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
      {
        monthStart: 1,
        monthEnd: 1,
        title: "게임 제작동아리 TML 부회장",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2020",
    items: [
      {
        monthStart: 1,
        monthEnd: 1,
        title: "게임 제작동아리 TML 부회장",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2019",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 유니티 기획",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
      {
        monthStart: 2,
        monthEnd: 2,
        title: "아주대학교 입학",
        file: "assets/popup/2025-01.html",
        icon: ""
      }
    ]
  },
  {
    year: "2017",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "구리고등학교 졸업",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2014",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "구리인창중학교 졸업",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2013",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 쯔꾸르 게임 제작",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2012",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 스팀 게임 플레이",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2011",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "구리동인초등학교 졸업",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2010",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 스타 유즈맵 제작",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "2006",
    items: [
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 공책 게임 제작",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
      {
        monthStart: 2,
        monthEnd: 2,
        title: "첫 필통 축구 제작",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
  {
    year: "1998",
    items: [
      {
        monthStart: 5,
        monthEnd: 5,
        title: "첫 울음",
        file: "assets/popup/2025-01.html",
        icon: ""
      },
    ]
  },
];
expandedYears: boolean[] = [];

toggleYear(index: number) {
  this.expandedYears[index] = !this.expandedYears[index];
}

onDetailClick() {
  console.log("상세 옵션 클릭됨");
}
  typedBio = "";
  typingSpeed = 80;

  ngOnInit() {

  // 기본값: 전부 펼쳐진 상태
  this.expandedYears = this.timeline.map(() => false);
    this.startTyping();
  }

  startTyping() {
    let i = 0;
    const interval = setInterval(() => {
      this.typedBio += this.bio[i];
      i++;
      if (i >= this.bio.length) clearInterval(interval);
    }, this.typingSpeed);
  }

  get initials(): string {
    if (!this.name) return '';
    const parts = this.name.trim().split(/\s+/);
    const firstTwo = parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '');
    return (firstTwo.join('') || this.name[0]?.toUpperCase() || '');
  }

  onImageError() {}

  // ⭐ 팝업에서 사용할 실제 변수
  selectedItem: any = null;

  openPopup(item: any) {
    // this.selectedItem = item;
  }

  closePopup() {
    this.selectedItem = null;
  }
}
