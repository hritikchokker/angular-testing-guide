import {
  Component,
  VERSION
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-guide';
  version = VERSION;
  test = 'hritik';
  inputMessage = 'Message to Title component';
  testVar = 'hell';
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
