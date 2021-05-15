import { ComponentFixture } from '@angular/core/testing';
import { NullcheckPipe } from './nullcheck.pipe';

describe('NullcheckPipe', () => {
  let pipe!: NullcheckPipe;
  beforeEach(() => {
    pipe = new NullcheckPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should check for truthy values', () => {
    expect(pipe.transform('Hritik')).toBeTruthy();
  });
  it('should return `--` for no value', () => {
    expect(pipe.transform('')).toBe('---');
  });
  it('should return same inplace as passed in transform func', () => {
    expect(pipe.transform('', '$$')).toBe('$$');
  });
});
