import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() message!: string;
  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter(); // 2

  @ViewChild('titleField', { static: false }) titleField!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick(newTitle: string): void {
    if (newTitle) {
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value = '';
    }
  }

}
