const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    icon: "./assets/icon.png",
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",

    webPreferences: {
      nodeIntegration: true,
      devTools: true,
    },
  });

  var splash = new BrowserWindow({
    title: "",
    icon: "",
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    width: 500,
    height: 300,
  });

  win.once("ready-to-show", () => {
    setTimeout(function () {
      splash.close();
      win.show();
    }, 2000);
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
