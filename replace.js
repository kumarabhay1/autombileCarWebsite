const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/bg-\[\#050507\]/g, 'bg-background')
      .replace(/border-white\/5(?!\d)/g, 'border-border')
      .replace(/border-white\/10/g, 'border-border')
      .replace(/border-white\/20/g, 'border-border')
      .replace(/dark:border-white\/10/g, 'dark:border-border')
      .replace(/border-black\/10/g, 'border-border');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated ' + filePath);
    }
  }
});
