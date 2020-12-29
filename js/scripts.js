let animate1 = true;
let animate2 = true;
let animate3 = true;
let animate4 = true;
let animate5 = true;
let animate6 = true;
let animate7 = true;
let animate8 = true;
let animate9 = true;
let animate10 = true;
let animate11 = true;
let animate12 = true;
let animate13 = true;
let animate14 = true;
let animate15 = true;
let animate16 = true;

setTimeout(function(){
	document.querySelector("header > h1").classList.add("opacity-animate");
}, 80);

setTimeout(function(){
	document.querySelector("header > p").classList.add("opacity-animate");
}, 110);

setTimeout(function(){
	document.querySelector("header > div").classList.add("opacity-animate");
}, 140);


window.onscroll = function () {
	let scroll = document.documentElement.scrollTop;

	//console.log(scroll)

	if (animate1 && scroll > 150) {
		let elements = document.querySelectorAll(".animate-1");
		let index = 0;
		elements.forEach((element) => {
			setTimeout(function(){
				element.classList.add("opacity-animate");
			}, 100*index);
			index++;
		})
		animate1 = false;
	} 

	if (animate2 && scroll > 550) {
		let elements = document.querySelectorAll(".animate-2");
		let index = 0;
		elements.forEach((element) => {
			setTimeout(function(){
				element.classList.add("opacity-animate");
			}, 100*index);
			index++;
		})
		animate2 = false;
	} 

	if (animate3 && scroll > 900) {
		let elements = document.querySelectorAll(".animate-3");
		let index = 0;
		elements.forEach((element) => {
			setTimeout(function(){
				element.classList.add("opacity-animate");
			}, 100*index);
			index++;
		})
		animate3 = false;
	} 




	if (animate4 && scroll > 1300) {
		let element = document.querySelector("#demo > h2");
		element.classList.add("margin-left-animate");
		animate4 = false;
	} 

	if (animate5 && scroll > 1400) {
		let element = document.querySelector("#demo > h3");
		element.classList.add("opacity-animate");
		animate5 = false;
	} 

	if (animate6 && scroll > 1500) {
		let element = document.querySelector("#demo > a");
		element.classList.add("margin-top-animate");
		animate6 = false;
	} 



	if (animate7 && scroll > 1650) {
		let element = document.querySelector("#utilidad h2");
		element.classList.add("margin-right-animate");
		animate7 = false;
	} 

	if (animate8 && scroll > 1750) {
		let elements = document.querySelectorAll("#utilidad p");
		elements.forEach((element) => {
			element.classList.add("opacity-animate");
		})
		animate8 = false;
	} 

	if (animate9 && scroll > 1800) {
		let element = document.querySelector("#utilidad > article > img");
		element.classList.add("margin-left-animate");
		animate9 = false;
	} 

	if (animate10 && scroll > 1850) {
		let elements = document.querySelectorAll("#utilidad ul > li");
		elements.forEach((element) => {
			element.classList.add("margin-top-animate");
		})
		animate10 = false;
	} 



	if (animate11 && scroll > 2100) {
		let element = document.querySelector("#interesado > h2");
		element.classList.add("margin-top-animate");
		animate11 = false;
	} 

	if (animate12 && scroll > 2200) {
		let element = document.querySelector("#interesado > p");
		element.classList.add("opacity-animate");
		animate12 = false;
	} 

	if (animate13 && scroll > 2300) {
		let element = document.querySelector("#interesado > form");
		element.classList.add("opacity-animate");
		animate13 = false;
	} 



	if (animate14 && scroll > 2500) {
		let elements = document.querySelectorAll(".item-fundamentos > img");
		elements.forEach((element) => {
			element.classList.add("width-200px-animate");
		})
		animate14 = false;
	} 

	if (animate15 && scroll > 2600) {
		let elements = document.querySelectorAll(".item-fundamentos > h3");
		elements.forEach((element) => {
			element.classList.add("margin-top-animate");
		})
		animate15 = false;
	}

	if (animate16 && scroll > 2700) {
		let elements = document.querySelectorAll(".item-fundamentos > p");
		elements.forEach((element) => {
			element.classList.add("opacity-animate");
		})

		setTimeout(function() {
			let elements = document.querySelectorAll(".item-fundamentos > hr");
			elements.forEach((element) => {
				element.classList.add("width-100-animate");
			})
		}, 1000);
		animate16 = false;
	} 


}