const { Builder, By, Key, until } = require('selenium-webdriver');
async function runTests() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Test Case 1: Open Google
        await driver.get('https://www.google.com');
        console.log('Test Case 1: Google homepage opened successfully');
        
        // Test Case 2: Search for "Selenium WebDriver"
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
        console.log('Test Case 2: Search performed for "Selenium WebDriver"');
        
        // Test Case 3: Click on Images
        let imagesLink = await driver.findElement(By.linkText('Images'));
        await imagesLink.click();
        console.log('Test Case 3: Clicked on Images');
        
        // Test Case 4: Click on News
        let newsLink = await driver.findElement(By.linkText('News'));
        await newsLink.click();
        console.log('Test Case 4: Clicked on News');
        
    } finally {
        // Close the WebDriver session after all tests have been executed
        await driver.quit();
    }
}

runTests();