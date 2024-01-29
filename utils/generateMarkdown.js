// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default: 
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT": 
      return "https://opensource.org/license/mit/";
      break;
    case "APACHE 2.0":
      return "https://opensource.org/license/apache-2-0/";
      break;
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      return "https://opensource.org/license/bsd-3-clause/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None" ? `## License
  
  This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details.` 
  : `## License
  
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)
  
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`properties
  ${data.installation}
  \`\`\`  
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`properties
  ${data.runTest}
  \`\`\`  
  
  ## Questions
  
  If you have any questios about the repo, open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
