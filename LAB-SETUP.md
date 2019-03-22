# LAB SETUP CHECKLIST
#### INITIAL SETUP
- [x] Update the local version of the class repo
  * git pull upstream master
- [x] Setup the repo on git hub
- [x] git clone repo to computer
#### GET THE FILES TO THE RIGHT PLACE
- [x] Move generic lab setup files to lab repo
  * rsync -r ../lab-startup/ .
- [x] Move any lab starter code from the class repo
  * rsync -r ../seattle-javascript-401d29/curriculum/class-XX/lab .
    * change the class number in the command as appropriate
#### INITIALIZE ANY DEPENDENCIES
- [x] npm i jest eslint
- [x] other lab specific needs
#### TEST SETUP
- [x] create a "\__test__" folder
- [x] create a test.test.js file
- [x] copy and paste the following code
```
'use strict';

describe('sample test', () => {
  it('return true', () => {
    expect(true).toBe(true);
  });
});
```
- [x] npm run test to verify jest is working
#### TEST LINT
- [x] npm run lint
#### BRANCH THE REPO
- [x] git checkout -b submission
- [x] git checkout -b working
#### ACP
- [x] ACP
#### TEST JSDOC
- [x] liveserver from within docs folder (or heroku link)
#### README
- [x] Update the Travis LInk
- [ ] Update the Github pull request link
- [x] Update the backend link
- [x] Update the front end link
- [x] Add author name
- [x] Add name of lab

