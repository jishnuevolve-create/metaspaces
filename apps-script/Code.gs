/**
 * Metaspaces lead capture — Google Apps Script Web App.
 *
 * SETUP:
 * 1. Go to https://sheets.new to create a new Google Sheet (name it e.g. "Metaspaces Leads").
 * 2. In the Sheet, go to Extensions > Apps Script.
 * 3. Delete any placeholder code and paste this entire file in.
 * 4. Click Deploy > New deployment.
 *    - Select type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions Google asks for.
 * 6. Copy the resulting Web App URL (ends in /exec) and send it back —
 *    that's what gets pasted into APPS_SCRIPT_URL in index.html.
 *
 * Every submission appends one row. The header row is created automatically
 * on the first submission if the sheet is empty.
 */
function doPost(e) {
  var HEADERS = [
    'submitted_at', 'lead_id', 'name', 'phone', 'property_type', 'budget',
    'timeline', 'gclid', 'gbraid', 'wbraid', 'utm_campaign', 'utm_term', 'landing_url'
  ];

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill hidden fields humans never see. Accept silently,
    // don't record, don't tip the bot off that it was caught.
    if (data._honey) {
      return ContentService.createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow(HEADERS.map(function (key) { return data[key] || ''; }));

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
