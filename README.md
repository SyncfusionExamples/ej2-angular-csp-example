# Syncfusion Angular CSP Sample

This repository provides a minimal Angular sample that integrates the Syncfusion Grid while following CSP constraints. It illustrates the configuration and runtime patterns needed to avoid inline scripts/styles and to register Syncfusion modules in a CSP-friendly way. The README links to official CSP guidance for details.

## Features

- Example of using Syncfusion Angular Grid with CSP-conscious application setup
- Links to Syncfusion CSP documentation for troubleshooting and guidance
- Minimal sample structure intended for local experimentation and testing
- Clear developer workflow for installing, running and validating CSP behavior

## Prerequisites

- Node.js (LTS) installed on the development machine
- Angular CLI (recommended) for local development workflows
- A Syncfusion license or trial configured if required by the components

Refer to the Syncfusion React/Angular docs for licensing and component configuration: https://ej2.syncfusion.com/angular/documentation/common/troubleshooting/content-security-policy

## Installation and Run

1. Clone the repository and change into the project folder:

   ```bash
   git clone https://github.com/SyncfusionExamples/ej2-angular-csp-example.git
   cd ej2-angular-csp-example
   ```

2. Install dependencies using your package manager o

   ```bash
   npm install
   ```

3. Start the development server 

   - With Angular CLI:
    ```bash
     ng serve
     ```
     
 then open http://localhost:4200/
