require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//set timeout for waiting on DOM elements
driver.manage().timeouts().implicitlyWait(20000);
driver.manage().timeouts().pageLoadTimeout(20000);

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 1000);

function check_title() {
  var promise = driver.getTitle().then( function(title) {
    if (title === 'webdriver - Google Search' )
    {
      console.log('success');
      return true;
    }
    else
    {
      console.log('fail -- ' + title);
    }
  });
  return promise;
}
