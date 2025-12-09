import {Component} from '@angular/core';
import {Home} from './home/home';
@Component({
  selector: 'app-root',
  imports: [Home],
  template: `
    <main>
      <header class="brand-name">
        <img src="assets/logo.jpg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
