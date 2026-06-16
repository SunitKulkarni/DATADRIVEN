import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homePage';
import { WelcomePage } from '../pages/welcomepage';
import { BrowserUtils } from '../utils/browserutils';
import { global } from '../config/global.json';

const xlsx = require('xlsx');


    // Need JS library >> which used to read xlsx file.
    // 1.Install  xlsx >> npm install xlsx
    // 2. Need to create method >> 
    // a) Create object for workbook
    // b) Create object sheet
    // c) Convert sheet data to JSON format

    // Step 1: Load the workbook (synchronous - no await needed)
    const workbook = xlsx.readFile('./testdata/TestData.xlsx');
    // Step 2: Get the first sheet NAME from the workbook
    const sheetName = workbook.SheetNames[0];
    // Step 3: Get the actual SHEET OBJECT using the sheet name
    const sheet = workbook.Sheets[sheetName];
    // Step 4: Convert sheet object to JSON
    const data = xlsx.utils.sheet_to_json(sheet);
    // For Eeach loop >> REad data from file. 
    data.forEach((res)=> {
        test(`Login TEst for ${res.TestCaseNo}`, async ({page}) => {
        await BrowserUtils.involeApp(page);

        let homepage = new HomePage(page);
        let loginpage = new LoginPage(page);
        let welcomepage = new WelcomePage(page);

        
        await homepage.verifyHomePage();
        await homepage.navigateToLoginPage();
        await loginpage.loginToApp(res);
       // 
if (res.valid === 'yes')
       {
        await welcomepage.logoutFromApp();
        await homepage.verifyLogoutSucess();
       }else {
      await welcomepage.verifyUnSucessLogin ();
       }
        //console.log("From Line 47", res.TestCaseNo)
        //console.log(res);
    
  });
  });
