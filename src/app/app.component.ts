import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-header id="content"></app-header>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      .app {
        background: #e0efef;
        color: #0b1641;
        min-height: 100%;
      }
      @media (max-width: 530px) {
        #content {
          background: #e0efef;
          color: #0b1641;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'curriculum';
}
