import { NgDiaryPage } from './app.po';

describe('ng-diary App', () => {
  let page: NgDiaryPage;

  beforeEach(() => {
    page = new NgDiaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
