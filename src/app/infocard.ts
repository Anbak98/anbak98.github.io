export interface Infocard {
  name: string;
  type: 'project' | 'game';
  time: number;        // 예: 14.5 (시간)
  year: number;        // 연도
  month: number;       // 월
  photo: string;
  _visible?: boolean;  // Timeline 내부에서 사용
}
