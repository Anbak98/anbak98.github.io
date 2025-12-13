import { Component, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profilepopup',
  standalone: true,
  templateUrl: './profilepopup.html',
  styleUrls: ['./profilepopup.css'],
})
export class Profilepopup {
  @Input() file = '';
  @Input() htmlContent: string = '';
  @Output() close = new EventEmitter<void>();

  isClosing = false; // ✨ fade-out 상태 표시

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.file) {
      this.http.get(this.file, { responseType: 'text' })
        .subscribe(html => this.htmlContent = html);
    }
  }

  onClose() {
    this.isClosing = true;

    // ✨ 애니메이션 지속시간(300ms) 후 부모에게 닫기 요청
    setTimeout(() => this.close.emit(), 300);
  }

  onOverlayClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.onClose();
    }
  }
}
