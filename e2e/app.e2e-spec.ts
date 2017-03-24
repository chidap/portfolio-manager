import { PortfolioManagerPage } from './app.po';

describe('portfolio-manager App', () => {
  let page: PortfolioManagerPage;

  beforeEach(() => {
    page = new PortfolioManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
