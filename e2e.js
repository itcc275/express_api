const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Set to true if you want to run in headless mode
        args: ["--window-size=1220,1080"],
        slowMo: 100, // Slows down the execution for better visibility
    })

    const page = await browser.newPage()

    await page.goto('https://www.tipitakachantingcouncil.co.in/')
    await page.setViewport({ width: 1220, height: 1080 });

    console.log("Webpage loaded successfully");

    const loginButtonLink = ".justify-content-end > a:nth-child(3)"
    await page.waitForSelector(loginButtonLink)
    await page.click(loginButtonLink)
    console.log("Login button clicked");

    const usernameInput = ".MuiInputBase-input"
    const submutButton = ".MuiButtonBase-root"
    await page.waitForSelector(submutButton)

    await page.click(usernameInput); // Focus the input
    // await page.evaluate((usernameInput) => document.querySelector(usernameInput).value = ''); // Clear any existing value
    await page.type(usernameInput, 'myUsername'); // Type the new value



    await page.click(submutButton)
    console.log("Submit button clicked");




    await browser.close()

})()

