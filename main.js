const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({

        width: 360,
        height: 475,

        minWidth: 360,
        minHeight: 475,

        maxWidth: 360,
        maxHeight: 475,

        resizable: false,
        maximizable: false,
        minimizable: true,
        fullscreenable: false,

        frame: false,
        transparent: true,
        backgroundColor: "#00000000",

        alwaysOnTop: true,
        movable: true,

        autoHideMenuBar: true,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            devTools: true
        }

    });

    mainWindow.loadFile("index.html");

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

}

app.whenReady().then(() => {

    createWindow();

    app.on("activate", () => {

        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }

    });

});

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {
        app.quit();
    }

});

/* ==========================
   IPC EVENTS
========================== */

ipcMain.on("window-close", () => {

    if (mainWindow) {
        mainWindow.close();
    }

});

ipcMain.on("window-minimize", () => {

    if (mainWindow) {
        mainWindow.minimize();
    }

});

ipcMain.on("window-toggle-always-on-top", () => {

    if (!mainWindow) return;

    const state = mainWindow.isAlwaysOnTop();

    mainWindow.setAlwaysOnTop(!state);

});