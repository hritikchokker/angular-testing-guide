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

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
