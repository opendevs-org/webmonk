const { readFile, writeFile } = require('fs').promises;
const { resolve } = require('path');

//NOTE: code to read data from file then convert the data from buffer to string using toString()
// then we parse it into JSON object by using JSON.parse(any-string)
exports.readFile = async (path) => { //NOTE: Exporting as separate functions using export.[function name] syntax
    try {
        return JSON.parse(await (await readFile(resolve(path))).toString());
    } catch (error) {
        throw error;
    }
}

//NOTE: code to write data into a file by first converting the data into a string as objects are not supported
// JSON.stringify(data, {}, 2) with last 2 as parameter beautifies a string saved into a file using 2 indentations
exports.writeFile = async (path, data) => { //NOTE: Exporting as separate functions using export.[function name] syntax
    try {
        await writeFile(resolve(path), JSON.stringify(data, {}, 2), "utf-8");
        return;
    } catch (error) {
        throw error;
    }
}
