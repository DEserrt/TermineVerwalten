import { AppPage } from './app.po';
import {browser} from "protractor";

describe('test-material App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    let gremlins = browser.Gremlins;
    gremlins.unleash().then(history => {
      console.log('test');
      // history provides browserLogs and gremlinLogs, both ordered by timestamp
      // history.gremlinErrors provides a correlation of 'SEVERE' level browserlogs with the 10 previous gremlins actions
    });
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
