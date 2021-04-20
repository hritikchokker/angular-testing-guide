import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing-guide';
  message = 'This Project also demonstrates CI/CD (circleCI) pipelines and docker intergration in angular Project';

  /**
   *
   * adds two number
   * @param num1
   * @param num2
   * @returns
   */
  addTwoNumber(num1 = 0, num2 = 0): number {
    return num1 + num2;
  }
}

