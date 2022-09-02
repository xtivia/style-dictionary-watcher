const { exec } = require("child_process");
const chokidar = require('chokidar');

const runStyleDictionary = (event, path) => {
    // get directory of file changed
    const dir = `./${path.split("/").slice(0, -1).join("/")}`; 
    // Run style dictionary on that directory's config.json
    exec(`cd ${dir} && style-dictionary build`, (error, stdout, stderr) => { 
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

chokidar.watch('./projects').on('all', (event, path) => {
    if(["add","change"].includes(event) && path.includes("tokens.json")) {
        runStyleDictionary(event,path);
    }
});
