window.onload = function() {
	
	var frame = 0;
	var count = 0;
	
	var setTimer = setInterval(function() {
	
		let dest = "Sorry, Japanese Only!";
		let str = '';
		
		let c = "abcdefghijklmnopqrstuvwxyz0123456789";
		if(count > 0){
			str += dest.substr(0, count);
		}
		for(let i = count; i < dest.length; ++i){
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
