const url_json_encoder = potential_url => {
  return potential_url
    .replace(/ /g, "%20")
    .replace(/"/g, "%22")
    .replace(/'/g, "%E2%80%99")
    .replace(/{/g, "%7B")
    .replace(/}/g, "%7D")
    .replace(/\[/g, "%5B")
    .replace(/\]/g, "%5D")
    .replace(/:/g, "%3A")
    .replace(/,/g, "%2C")
    .replace(/\\/g, "%5C")
    .replace(/\\n/g, "");
};
module.exports = {url_json_encoder};
