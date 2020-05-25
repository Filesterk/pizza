/*window.onload = function myTop() {
	//window.scrollTo(x,y)
	let scrolled;
	let timer;
	document.getElementById('top').onclick = function myTopMenu(){
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled>0){
			window.scrollTo(0,scrolled);
			scrolled = scrolled-100; //100-скорость прокрутки
			timer = setTimeout(scrollToTop,100);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}*/

