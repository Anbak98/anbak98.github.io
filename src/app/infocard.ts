export type CardLinkIconType =
  | 'notion'
  | 'blog'
  | 'achievement-100'
  | 'github'
  | 'steam'
  | 'youtube';

export interface CardLinkIcon {
  type: CardLinkIconType;
  url?: string;        // 클릭 가능한 경우
  tooltip?: string;    // hover 설명
  active?: boolean;    // 상태성 (ex: 100% 달성)
}

export interface Infocard {
  name: string;
  type: 'project' | 'game';
  time: string;
  year: number;
  month: number;
  photo: string;
  comment?: string;
  htmlFile: string;
  subTypes: string[];   // 🔥 여러 서브타입 가능
  tags?: string[];
  icons?: CardLinkIcon[];

  _visible?: boolean;
}