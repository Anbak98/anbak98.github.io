import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Infocard } from '../infocard';

@Component({
  selector: 'app-info-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infopopup.html',
  styleUrls: ['./infopopup.css']
})
export class InfoPopup implements OnChanges {
  @Input() htmlFile: string | null = null;
  @Input() item: Infocard | null = null; // 카드 객체 자체
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  public htmlContent: string = '';

  ngOnChanges() {
    if (this.item && this.show) {
      this.loadHtml(this.item.htmlFile || '');
    }
  }

  loadHtml(path: string) {
    if (!path) {
      this.htmlContent = ''; // 파일이 없으면 빈 값
      return;
    }

    fetch(path)
      .then(res => res.text())
      .then(html => this.htmlContent = html)
      .catch(err => this.htmlContent = `<p>불러오기 실패: ${err.message}</p>`);
  }

  onClose() {
    this.show = false;
    this.close.emit();
  }
}
