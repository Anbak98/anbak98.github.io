import { Component } from '@angular/core';
import { Timeline } from './timeline/timeline';
import { CommonModule } from '@angular/common';
import { Infocard } from './infocard';
import { CARDS_BY_YEAR } from './datas/cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  years = Array.from({ length: 2026 - 1998 + 1 }, (_, i) => 2026 - i);

  cardsByYear: Record<number, Infocard[]> = CARDS_BY_YEAR;
}
