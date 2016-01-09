	function keyDown(e) {
        var scrollBottom = $(document).height();
	    var keycode = e.which;
	    // var realkey = String.fromCharCode(e.which);
	    // alert("按键码: " + keycode + " 字符: " + realkey);
	    if(keycode==17){
	        $('body,html').animate({
				scrollTop: 0
			},1500);
	    }
        if(keycode==220){
            $('body,html').animate({
    			scrollTop: scrollBottom
    		},1500);
        }
	}
	document.onkeydown = keyDown;