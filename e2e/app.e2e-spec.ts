import { NKPickParkPage } from './app.po';

describe('nk-pick-park App', function() {
  let page: NKPickParkPage;

  beforeEach(() => {
    page = new NKPickParkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
