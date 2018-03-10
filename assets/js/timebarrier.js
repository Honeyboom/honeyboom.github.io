function timeBarrier() {
	var now = new Date();
	$(".all-posts").hide();
	document.querySelectorAll('[data-posttime]').forEach(function(e) {
		var post_time = new Date(e.dataset.posttime);

		if(post_time > now) {
			if(e.type === 'article') {
				window.location.href = '/404.html';
			} else {
				e.style.display = 'none';
			}
		}
	});
	$(".loading-icon").hide();
	$(".all-posts").show();
}

$(document).ready(function(){

	$(".back-to-top").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	});

});
