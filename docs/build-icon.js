const path = require('path');
const fs = require('fs');

const svgFileDir = path.resolve(__dirname, '../packages/ui-view/src/assets/svg');
const distFile = path.resolve(__dirname, './components.md');

function readSvgDir() {
  return new Promise((resolve, reject) => {
    fs.readdir(svgFileDir, (error, svgFiles) => {
      if (error) {
        return reject(error);
      }
      resolve(svgFiles);
    });
  });
}

readSvgDir()
  .then(data => {
    const list = [];
    data.forEach(item => {
      list.push(`<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://raw.githubusercontent.com/guyue88/react-native-ui-view/master/packages/ui-view/src/assets/svg/${item}" width="36" />
  <div>
    ${item.split('.')[0]}
  </div>
</div>`);
    });
    const template = `<div style="width: 900px;display: grid;grid-template-columns: repeat(6, 16.67%);grid-auto-rows: 100px;border-left: 1px solid #ccc;border-top: 1px solid #ccc; ">
  ${list.join('\n')}
</div>`;
    const md = fs.readFileSync(distFile, { encoding: 'utf8' });
    const newMd = md.replace(
      /(<!-- icon template start -->)([\s\S]*)(<!-- icon template end -->)/,
      `$1\n${template}\n$3`,
    );
    fs.writeFileSync(distFile, newMd);
  })
  .catch(error => {
    throw new Error(error);
  });
