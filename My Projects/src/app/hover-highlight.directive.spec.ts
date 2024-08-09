import { HoverHighlightDirective } from './hover-highlight.directive';

describe('HoverHighlightDirective', () => {
  it('should create an instance', () => {
    let newColor:any=""
    const directive = new HoverHighlightDirective(newColor);
    expect(directive).toBeTruthy();
  });
});
