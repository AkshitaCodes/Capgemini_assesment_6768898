import { test, expect } from '@playwright/test';
import path from "path"
import fs from "fs"
import Upload from "../../testdata/POM/TaskUpload.page"
const jsonData=fs.readFileSync(path.join(__dirname,"../../testdata/uploadTask.json"))
const data=JSON.parse(jsonData)
test('Upload Files', async ({ page }) => {
    let UploadPage=new Upload(page,data);
    await page.goto(data.url);
    await UploadPage.handleUpload();
    await UploadPage.checkUpload();
    
});