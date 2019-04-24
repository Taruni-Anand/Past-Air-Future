var electron = require('electron')
var window = electron.BrowserWindow
var app = electron.app
var ipc = electron.ipcMain

app.on('ready', function() {
	var primary
	var loading
	primary = new window({ show: false })
	loading = new window({ width: 400, height: 300, frame: false, transparent: true })
	//Set up loading window
	loading.show()
	loading.center()
	loading.loadURL('file://' + __dirname + '/infoLoading.html')
	//Set up window
	primary.loadURL('file://' + __dirname + '/infoPrimary.html')

	primary.once('ready-to-show', function() {
		setTimeout(function() {
			loading.close()
			primary.show()
			primary.maximize()
		}, 1500) //Load for 1.5 seconds
	})
})

function initialize() {
	var options = { atmosphere: true, center: [ 0, 0 ], zoom: 0 }
	var earth = new WE.map('earth_div', options)
	WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
		minZoom: 0,
		maxZoom: 5,
		attribution: 'NASA'
	}).addTo(earth)
}
