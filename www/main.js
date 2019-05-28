const electron = require("electron");

function createWindow(){
    win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreference: {nodeIntegration: true}
    });
    win.loadFile("./index.html");
//    win.loadFile("./www/src/index.html");
}

electron.app.on("ready", createWindow);