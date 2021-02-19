let badge;
let licenseLink;
// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        badge = "https://img.shields.io/badge/license-MIT-yellowgreen";
        break;
      case "ISC":
        badge = "https://img.shields.io/badge/license-ISC-yellowgreen";
        break;  
      case "Apache":
        badge = "https://img.shields.io/badge/license-Apache-yellowgreen";
        break; 
      case "GPL2":
        badge = "https://img.shields.io/badge/license-GNU%20GPLv2-yellowgreen";
        break;  
      default:
        break;
        
      }
    return badge;
  
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) { switch (license) {
  case "MIT":
    licenseLink = "https://choosealicense.com/licenses/mit/";
    break;
  case "ISC":
    licenseLink = "https://choosealicense.com/licenses/isc/";
    break;  
  case "Apache":
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
    break; 
  case "GPL2":
    licenseLink = "https://choosealicense.com/licenses/gpl-2.0/";
    break;  
  default:
    break;
  }
return licenseLink;}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `# ${data.title}     ![](${badge})
  ## Table of Content
   1. [Description](#Description)
   2. [Installation](#Installation)
   3. [Usage](#Usage)
   4. [License](#License)
   5. [Contributing](#Contributing)
   6. [Tests](#Tests)
   7. [Questions](#Questions)  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This app follow ${data.license} rules. Please check below link for more details.
  ${licenseLink}

  ## Contributing
  ${data.contributing}

  ## Tests

  ## Questions
  Please connnect with me at ${data.email} <br>
  ![](./utils/GitHub-Mark/PNG/GitHub-Mark-32px.png) [${data.yourname}](https://github.com/${data.gituserid})

`;
}

module.exports = generateMarkdown;
