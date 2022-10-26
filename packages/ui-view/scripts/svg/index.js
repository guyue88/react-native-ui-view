const path = require('path');
const fs = require('fs');

const svgFileDir = path.resolve(__dirname, '../../src/assets/svg');

function readSvgFile(svgFileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgFileDir, svgFileName), 'utf8', (error, svgFile) => {
      let svgPath = svgFile.replace(/<\?xml.*?\?>|<!--.*?-->|<!DOCTYPE.*?>/g, '');
      svgPath = svgPath.replace(/[\r\n]*/g, '');
      if (error) {
        return reject(error);
      }
      if (svgFileName.indexOf('.svg') === -1) {
        return resolve({});
      }
      resolve({
        [svgFileName.slice(0, svgFileName.lastIndexOf('.'))]: svgPath,
      });
    });
  });
}

function readSvgDir() {
  return new Promise((resolve, reject) => {
    fs.readdir(svgFileDir, (error, svgFiles) => {
      if (error) {
        return reject(error);
      }
      Promise.all(
        svgFiles.filter(item => !!item && item.indexOf('.svg') !== -1).map(svgFileName => readSvgFile(svgFileName)),
      )
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  });
}

readSvgDir()
  .then(data => {
    const svgFile = `export type IconName = ${data.map(item => `'${Object.keys(item)[0]}'`).join(' | ')}; 
      const svg: Record<IconName, string> = {
  ${data.map(item => `'${Object.keys(item)[0]}': \`${Object.values(item)[0]}\``).join(',')}
};
export default svg;\n`;

    fs.writeFile(path.resolve(svgFileDir, 'index.ts'), svgFile, err => {
      if (err) {
        throw new Error(err);
      }
    });
  })
  .catch(error => {
    throw new Error(error);
  });
