const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('./package.json');
const devDependencies = require('./devDependencies.json');

const deleteFile = (fileName) => fs.unlinkSync(path.join(process.cwd(), fileName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

packageJson.scripts.start = `${packageJson.scripts.start} --config ../../../../rn-cli.config.js`;
packageJson.scripts.lint = 'tslint -c tslint.json "src/**/*.{ts,tsx}"';
writeFile('package.json', JSON.stringify(packageJson, null, 2));

execSync(`npm i ${devDependencies.join(' ')} --save-dev --save-exact`);
execSync(`npm uninstall babel-jest babel-preset-react-native --save`);

deleteFile('App.js');
deleteFile('__tests__/App.js');
deleteFile('.flowconfig');
deleteFile('.babelrc');
deleteFile('devDependencies.json');
deleteFile('README.md');
deleteFile('LICENSE');
deleteFile('setup.js');

console.log('✅ Setup completed! You can now start with: npm start');
