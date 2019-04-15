var electron = require('electron');
var window = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', function(){
	var primary;
	var loading;
	primary = new window({show: false});
	loading = new window({width: 400, height: 300, frame: false, transparent: true,});
	//Set up loading window
	loading.show();
	loading.center();
	loading.loadURL('file://' + __dirname + '/infoLoading.html');
	//Set up window
	primary.loadURL('file://' + __dirname + '/infoPrimary.html');

	primary.once('ready-to-show', function(){
		setTimeout(function() {
				loading.close();
				primary.show();
			}, 1000); //Load for 5 seconds
	})
});