// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			var textContent = '';
			var htmlContent = '';
			$ele.html('');
			
			var lastUpdateTime = 0;
			var typingSpeed = 50; // Reduced from 75ms for smoother animation
			
			function updateTypewriter(currentTime) {
				if (currentTime - lastUpdateTime < typingSpeed) {
					requestAnimationFrame(updateTypewriter);
					return;
				}
				
				lastUpdateTime = currentTime;
				
				var current = str.substr(progress, 1);
				if (current == '<') {
					var endTag = str.indexOf('>', progress);
					htmlContent += str.substring(progress, endTag + 1);
					progress = endTag + 1;
				} else {
					htmlContent += current;
					progress++;
				}
				
				// Only update DOM when content actually changes
				$ele.html(htmlContent);
				
				if (progress < str.length) {
					requestAnimationFrame(updateTypewriter);
				}
			}
			
			requestAnimationFrame(updateTypewriter);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
