import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display My ChatBot message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('My Chatbots');
  });
  it('should route to profile page ', ()=> {
    page.navigateTo() ; 
    page.getProfileWorkflow().click() ; 
    expect(page.getProfileFooter()).toEqual('2019, BLIP todos os diretos reservados | Termos de Uso');

  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
