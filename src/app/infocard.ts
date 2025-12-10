export interface Infocard {
  name: string;
  type: 'project' | 'game';
  time: number;
  year: number;
  month: number;
  photo: string;
  htmlFile: string;
  subTypes: string[];   // 🔥 여러 서브타입 가능
  _visible?: boolean;
}