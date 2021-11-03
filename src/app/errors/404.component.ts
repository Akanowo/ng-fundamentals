import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
    .errorMessage {
      font-size: 170px;
      margin-bottom: 150px;
      text-align: center
    }
  `]
})

export class Error404Component {

}
