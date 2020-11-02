import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-home .nav-left')).getText() as Promise<string>;
  }

  getProfileWorkflow(){
    return element(by.css('app-card .circle')) ; 
  }
  getProfileFooter(){
    return element(by.css('app-profile .footer-text')).getText() as Promise<string> ; 
  }


}
