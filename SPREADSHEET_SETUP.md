# How to Connect Your Waitlist Form to Google Sheets

Since your website is a static site (React), the easiest and free way to store data in a spreadsheet is by using **Google Apps Script**.

Follow these steps to set it up:

## Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it "Nature Haven Waitlist".
3. In the first row, add these headers:
   - **Column A**: `Date`
   - **Column B**: `Name`
   - **Column C**: `Email`

## Step 2: Create the Script
1. In your Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the `Code.gs` file and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([new Date(), data.name, data.email]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **Save** icon (floppy disk).

## Step 3: Deploy the Script
1. Click the blue **Deploy** button > **New deployment**.
2. Click the **Select type** gear icon > **Web app**.
3. Fill in the details:
   - **Description**: Waitlist API
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (This is important so your website can send data)
4. Click **Deploy**.
5. You might be asked to authorize the script. Click **Review permissions**, choose your account, click **Advanced** > **Go to (Script Name) (unsafe)** > **Allow**.
6. Copy the **Web App URL** (it starts with `https://script.google.com/macros/s/...`).

## Step 4: Connect to Your Website
1. Open the file `src/components/Footer.jsx` in your project.
2. Find the line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with the Web App URL you just copied.

## Done!
Now, when someone submits the form on your website, their name and email will automatically appear in your Google Sheet!
