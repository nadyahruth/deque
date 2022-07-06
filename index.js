import chromedriver from 'chromedriver'
import webdriver from 'selenium-webdriver'
import AxeBuilder from '@axe-core/webdriverjs'
import {By} from 'selenium-webdriver'

//use selenium to reach out to browser
const driver = new webdriver.Builder().forBrowser('chrome').build();
 driver.get('https://dequeuniversity.com/demo/mars/').then(() => {

  new AxeBuilder(driver).analyze((err, results) => {
    if(err) throw(err)

        // const css = driver.findElement(By.className('main-nav'))
        //not retunrning elements on page
        console.log(results.violations)
        console.log(css)
   
   
   
  });
});