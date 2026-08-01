const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    closeWindow: () => {
        ipcRenderer.send("window-close");
    },

    minimizeWindow: () => {
        ipcRenderer.send("window-minimize");
    },

    toggleAlwaysOnTop: () => {
        ipcRenderer.send("window-toggle-always-on-top");
    }

});