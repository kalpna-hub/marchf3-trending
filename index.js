const puppeteer = require("puppeteer");
let page;
console.log("Before")
const browserOpenpromise = puppeteer.launch({ 
     headless : false,
     slowMo : true, 
     defaultViewport : null,
    args : ["--start-maximized"]
    });
browserOpenpromise
  .then(function (browser){
    //currently opened tabs
      const pageArrpromise = browser.pages(); 
      return pageArrpromise;
}).then(function (browserPages){
   page = browserPages[0];
   let gotoPromise = page.goto('https://github.com/trending');
   return gotoPromise;
}).then(function () {
    //waiting for the element to appear on the page
   let elementWaitPromise = page.waitForSelector("input[type='text']",{ visible:true });
   return elementWaitPromise;
}).then(function(){
    //page.keyboard to type special characters
  let enterWillBePressed = page.keyboard.press("Enter");
  return enterWillBePressed;
}).then(function () {
   let elementWaitpromise = page.waitForSelector("a.js-selected-navigation-item.selected.d-inline-block.py-2.py-md-3.mr-3.mr-md-4.no-underline.subnav-link", { visible : true});
   return elementWaitpromise;
}).then(function () {
    //mouse
    let keysWillBeSendPromise = page.click("a.js-selected-navigation-item.selected.d-inline-block.py-2.py-md-3.mr-3.mr-md-4.no-underline.subnav-link");
    return keysWillBeSendPromise;
})
.catch(function (err) {
console.log(err);
})
console.log("After")


