import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { CustomTableComponent } from './custom-table.component';
import { HighlightDirective } from './highlight.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HighlightDirective', () => {
  beforeEach(() => {
    let fixture: ComponentFixture<any>;
    fixture = TestBed.configureTestingModule({
      declarations: [CustomTableComponent, HighlightDirective],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(CustomTableComponent);
    fixture.detectChanges(); // initial binding
  })
  // it('should create an instance', () => {
  //   const directive = new HighlightDirective();
  //   expect(directive).toBeTruthy();
  // });
  // it('should have skyblue <h2>', () => {
  //   const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
  //   const bgColor = h2.style.backgroundColor;
  //   expect(bgColor).toBe('skyblue');
  // });
});
