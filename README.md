# Assessment-NewHomeSource-Search
Note: I tried to run my tests on local, tests we failing because the website has the bot (Captcha) Protection.

#QA Assessment for NewHomeSource Search Feature





\# NewHomeSource Search Automation Tests



\## Prerequisites

\- Node.js (v16 or higher)

\- npm



\## Installation



1\. Clone the repository:

git clone https://github.com/guguloth9333/Assessment-NewHomeSource-Search.git

cd Assessment-NewHomeSource-Search





2\. Install dependencies:

npm install

npm install -D @playwright/test

npx playwright install



3\. To open the browser and the inspector to find locators

npx playwright codegen https://www.newhomesource.com





4\.Running Tests

npx playwright test - This command will run all tests

Below are commands to Run specific tests:

npx playwright test smoke.spec.ts

npx playwright test filters.spec.ts





5\. Specific Browser and Headed command to see the tests running in browser with page opening in GUI:

npx playwright test --project=chromium --headed





6\. to view the test report

npx playwright show-report

