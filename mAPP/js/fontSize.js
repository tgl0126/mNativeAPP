try{
	var titleSize="80";
	var docEl = document.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		if(clientWidth>=750){
			if(clientWidth>=768 && docEl.clientHeight<=1024){
				//ipad
				docEl.style.fontSize = '80px';
				titleSize="80"
			}else{
				docEl.style.fontSize = '100px';
				titleSize="100"
			}
		 }else if(docEl.clientWidth<=320){
			docEl.style.fontSize = '40px';
			titleSize="40"
		}else{
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			titleSize=100*(clientWidth / 750);
		}
    };
    recalc();
	if (document.addEventListener){
		window.addEventListener(resizeEvt, recalc, false);
		document.addEventListener('DOMContentLoaded', recalc, false);
	}
} catch (e) {}