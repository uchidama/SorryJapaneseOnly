window.onload = function() {
	
	var frame = 0;
	var count = 0;
	
	var setTimer = setInterval(function() {
	
		var dest = "Sorry, Japanese Only!";
		var str = '';
		
		var c = "abcdefghijklmnopqrstuvwxyz0123456789";
		if(count > 0){
			str += dest.substr(0, count);
		}
		for(var i = count; i < dest.length; ++i){
			str += c[Math.floor(Math.random()*c.length)];
		}
		if(count > dest.length){
			str += "🇯🇵";
		}
	
		$('.SorryJapaneseOnly').text(str);
	
		if(count > dest.length){
			clearInterval(setTimer);
		}
	
		++frame;
		if(frame%8==0){
			++count;
		}
	
	}, 33);
	
};
