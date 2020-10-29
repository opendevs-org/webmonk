const path = require('path');
const fs = require('fs').promises;

console.log(path.isAbsolute(`./demo`));

console.log(path.join('E:/Teaching', 'Webmonks/Course Day 6/demo'));

console.log(path.resolve('./index.js'));

(async () => {
    try {
        const data = await fs.readFile(`./dummy.text`);
        console.log(data.toString());
        
        await fs.writeFile('./dummy.text', `${data}\n It's awesome!`, 'utf8');

        const data1 = await fs.readFile(`./dummy.text`);
        console.log(data1.toString());

        setTimeout(async () => {
            await fs.unlink('./dummy.text');
        }, 10 * 1000);
    } catch (error) {
        console.error(error);
    }
})();