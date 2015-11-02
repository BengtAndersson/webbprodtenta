//Overall formatters


//function to generate a url alias from "normal" string
function generateMachineName(urlText) {
  //use a tiny bit of regexp to replace non-alphanumeric 
  //characters with a space
  urlText = urlText.replace(/\W/g, ' ');

  //remove any empy spaces at beginning and/or end of string
  urlText = urlText.trim();

  //replace all spaces with -
  while (urlText.indexOf(' ') >= 0) {
    urlText = urlText.replace(" ", "-");
  }

  //replace all -- with -
  while (urlText.indexOf('--') >= 0) {
    urlText = urlText.replace("--", "-");
  }

  return urlText.toLowerCase();
}