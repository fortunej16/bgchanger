let TheArray = []
let Thebody = document.getElementById("body")
let btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
// 	bgg()

// })

function bg() {
	let UserInputs = document.querySelector(".input").value
	document.body.style.backgroundColor = UserInputs
}

function bgg(){

	let color = document.getElementById("colors").value
	document.body.style.backgroundColor = color
}
