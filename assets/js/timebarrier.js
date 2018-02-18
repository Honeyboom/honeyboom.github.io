function timeBarrier() {
	var now = new Date();
	document.getElementsByClassName('all-posts')[0].style.display = 'none';
	document.querySelectorAll('[data-posttime]').forEach(function(e) {
		var post_time = new Date(e.getAttribute('data-posttime'));
		
		if(post_time > now) {
			if(e.type === 'article') {
				window.location.href = '/404.html';
			} else {
				e.style.display = 'none';
			}
		}
	});
	document.getElementsByClassName('all-posts')[0].style.display = 'block';
}
