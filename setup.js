const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('./package.json');
const devDependencies = require('./devDependencies.json');

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

packageJson.scripts.rn = packageJson.scripts.start;
packageJson.scripts.ts = 'node_modules/.bin/tsc -w';
packageJson.scripts.start = 'npm-run-all -p -r rn ts';
packageJson.scripts.lint = 'tslint -c tslint.json "src/**/*.{ts,tsx}"';
writeFile('package.json', JSON.stringify(packageJson, null, 2));

execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`);

deleteFile('App.js');
deleteFile('.flowconfig');
deleteFile('devDependencies.json');
deleteFile('setup.js');

console.log('✅ Setup completed! You can now start with: npm start');
