import { StaggeringPage } from './app.po';

describe('staggering App', () => {
  let page: StaggeringPage;

  beforeEach(() => {
    page = new StaggeringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
