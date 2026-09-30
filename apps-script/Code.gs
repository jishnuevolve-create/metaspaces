/**
 * Metaspaces lead capture — Google Apps Script Web App.
 *
 * Sends every lead straight to seasun.public@gmail.com using Google's own
 * mail service (MailApp) — no third-party email service in the loop, so
 * it doesn't depend on FormSubmit (or any other outside provider) being up.
 *
 * SETUP (if you're redeploying into your existing project):
 * 1. Open the Apps Script project attached to your Google Sheet
 *    (Extensions > Apps Script), or script.google.com if you went there
 *    directly.
 * 2. Replace ALL the existing code with this file's contents.
 * 3. Click Deploy > Manage deployments.
 * 4. Click the pencil/edit icon on your existing deployment.
 * 5. IMPORTANT: check "Who has access" is set to exactly "Anyone" (not
 *    "Anyone within [your organization]", not "Only myself") — if it's
 *    wrong, fix it here.
 * 6. In the "Version" dropdown, choose "New version".
 * 7. Click Deploy. The Web App URL (ending in /exec) normally stays the
 *    same as before — no need to change anything on the website unless
 *    Google gives you a different URL.
 *
 * If you're setting this up fresh instead, the same Deploy > New deployment
 * flow applies: type Web app, Execute as Me, Who has access Anyone.
 */
function doPost(e) {
  var TO_EMAIL = 'seasun.public@gmail.com';

  try {
    var data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill hidden fields humans never see. Accept silently,
    // don't send an email, don't tip the bot off that it was caught.
    if (data._honey) {
      return ContentService.createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var subject = 'New Metaspaces lead: ' + (data.name || 'Unknown');

    var rows = [
      ['Name', data.name],
      ['Phone', data.phone],
      ['Property type', data.property_type],
      ['Budget', data.budget],
      ['Timeline', data.timeline],
      ['GCLID', data.gclid],
      ['GBRAID', data.gbraid],
      ['WBRAID', data.wbraid],
      ['UTM Campaign', data.utm_campaign],
      ['UTM Term', data.utm_term],
      ['Landing URL', data.landing_url],
      ['Submitted at', data.submitted_at],
      ['Lead ID', data.lead_id]
    ];

    var textBody = rows.map(function (r) { return r[0] + ': ' + (r[1] || ''); }).join('\n');

    var htmlBody = '<h2 style="font-family:sans-serif;">New website lead — Metaspaces</h2>' +
      '<table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;">' +
      rows.map(function (r) {
        return '<tr><td style="padding:4px 12px 4px 0;color:#666;">' + r[0] + '</td>' +
          '<td style="padding:4px 0;font-weight:600;">' + (r[1] || '') + '</td></tr>';
      }).join('') +
      '</table>';

    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody
    });

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
