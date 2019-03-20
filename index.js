var electron = require('electron');
var window = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', function(){
	var primary;
	primary = new window({show: false});
	primary.loadURL('file://' + __dirname + '/info.html');
	primary.show();
});