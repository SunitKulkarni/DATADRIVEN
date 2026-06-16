import { test, expect } from '@playwright/test';

const xlsx = require('xlsx');

test('This is to read data from XLSX file', async () => {
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

    // Case 1- Read and Print file data in Array  using for loop
    for (let res of data){
        console.log ("Case 1- Print file data in Array using for loop >>>>",res);
    }

    // Case 2 - Read and Print file data one by one 
for (let res of data){
    console.log("Case 2 - Read and Print file data one by one", res.TestCaseNo)
    console.log(res);
}

// Case 3 - Using for loop 
//for (let i=0;i<data.length;i++)
//    console.log ("test Case no ", +data[i].TestCaseNo)
//console.log(data[i]);

 /*console.log("This will print all data from file ",data);
   console.log("This prining specific Row value using index ",data [0]);
    //console.log("This will print specific field data from file ",data[1].UserId);
   //console.log("This will print specific field data from file ",data[1].Password);
*/
// For Eeach loop >> REad data from file. 
data.forEach((res)=>{
console.log ("From Line 47",res.TestCaseNo)
console.log(res);
});
});

///Sesion 40 - 9th Jun --40 min