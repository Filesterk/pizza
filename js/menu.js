/*window.onload = function myMenu() {
	let menuStyle = getComputedStyle(menu);
	openMenu.onclick = function myMenuGo() {
		if(menuStyle.display == "none"){
			menu.classList.add("active");
			this.innerHTML = "Close";
		}
		else{
			menu.classList.remove("active");
			this.innerHTML = "Open";
		}
	}
}*/
window.onload = function () {
	let menuStyle = getComputedStyle(menu);
	openMenu.onclick = function () {
		if(menuStyle.display == "none"){
			menu.classList.add("active");
			this.innerHTML = "Close";
		}
		else{
			menu.classList.remove("active");
			this.innerHTML = "Open";
		}
	}


let scrolled;
	let timer;
	document.getElementById('top').onclick = function myTopMenu(){
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	};
	function scrollToTop(){
		if (scrolled > 0){
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100; //100-скорость прокрутки
			timer = setTimeout(scrollToTop, 100);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}