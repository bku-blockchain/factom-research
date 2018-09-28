const fs = require('fs')
const path = require('path')

const utf2hex = s => Buffer.from(s, 'utf8').toString('hex');


const files = fs.readdirSync('./assets');

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')

files.forEach(filename => {

  const src = fs.readFileSync(path.join('./assets', filename), 'utf8');

  fs.writeFileSync(path.join('./dist', filename + '.hex'), utf2hex(src));

})
