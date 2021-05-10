import {
  Component,
  DebugElement,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  TestModuleMetadata
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-test-component',
  template: `
  <h1 appHighlight>Top element</h1>
  <a appHighlight (click)="toggleEl(element1)" [details]="element1?.isActive" color="primary">
          {{!element1?.isActive?'Highlight':'Remove Highlight'}}
        </a>
        <p appHighlight (click)="toggleEl(element2)" [details]="element2?.isActive">{{!element2?.isActive?'Highlight':'Remove Highlight'}}</p>
        <h2 [ngStyle]="{'background-color':'skyblue'}">Highlight Directive</h2>
        `
})
class TestComponent {
  element1 = { isActive: false };
  element2 = { isActive: true };
  toggleEl(details?: any): void {
    this.element1.isActive = !this.element1.isActive;
  }
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  // tslint:disable-next-line: prefer-const
  let des: DebugElement[];
  // tslint:disable-next-line: prefer-const
  let bareH2: DebugElement; // the <h2> w/o the directive
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(TestComponent);
    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    // the h2 without the HighlightDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
  });
  it('should inject `highlightDirective` in <h1>', () => {
    const inj = des[0].injector.get(HighlightDirective, null);
    expect(inj).toBeTruthy();
  });
  it('should have skyblue <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
  it('should have <p> with red color', () => {
    const p: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(p.style.color).toBe('red');
  });
  it('cannot inject `HighlightDirective` in  <h2>', () => {
    const dir = bareH2.injector.get(HighlightDirective, null);
    expect(dir).toBe(null);
  });

  it('should have `HighlightDirective` in 1st <h2> providerTokens', () => {
    expect(des[0].providerTokens).toContain(HighlightDirective);
  });

  it('should not have `HighlightDirective` in 3rd <h2> providerTokens', () => {
    expect(bareH2.providerTokens).not.toContain(HighlightDirective);
  });

  it('should update <a> values on click with red value', () => {
    const a: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    a.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(a.style.color).toBe('red');
  });
});
