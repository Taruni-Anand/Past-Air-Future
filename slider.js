$(function() {
	$('#slider').slider()
})

var button1 = docuement.getElementById('button1')

var slider = document.getElementById('myRange')
var output = document.getElementById('demo')

output.innerHTML = slider.value
slider.oninput = function() {
	output.innerHTML = this.value
}

function clickHandler() {
	console.log('Hi')
}
