/*document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

$(document).keydown(function(){
		if(event.keyCode == 123) {
			event.returnValue=false;
		}
		if(event.ctrlKey){
			if(event.ctrlKey && event.keyCode==83) event.returnValue=false;
			
		}
})*/