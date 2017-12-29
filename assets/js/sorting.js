var tagsArray = [];

function filter(tag) {
	if(tagsArray.indexOf(tag) <= -1)
    tagsArray.push(tag);
  setActiveTag(tag);
  showContainer();
}

function setActiveTag(tag) {
  //if not active, set tag to active, else remove active
  document.getElementById('chrono-date-item').classList.remove('active');
  var item = document.getElementById(tag + '-item');
  if(item) {
    if(item.classList.contains('active')) {
			item.classList.remove('active');
			var index = tagsArray.indexOf(tag);
			if (index > -1) {
    		tagsArray.splice(index, 1);
			}
    }
		else {
    	item.classList.add('active');
		}
  }
}

function showContainer() {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('post-list-item');
  for(var i=0; i < lists.length; i++) {
    lists[i].classList.add('hidden');
  }

  // remove the hidden class from all the tags selected on the table
	if(tagsArray.length > 0) {	
    var list = document.getElementsByClassName(tagsArray.join(" ").toString());
    for(i = 0; i < list.length; i++) {
      list[i].classList.remove('hidden');;
    }
	}
	else {
		order("chrono-date");
	}
}


//shows posts ordered by jekyll
function order(type) {
	//loops through all tags and removes the active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }
	
	//shows all posts in chronological order
  if(type === "chrono-date") {
    document.getElementById('chrono-date-item').classList.add('active');
  	var lists = document.getElementsByClassName('post-list-item');
    for(var i=0; i < lists.length; i++) {
      lists[i].classList.remove('hidden');
    }
  }

  tagsArray = [];
}

//removes the hash from the url
function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}



window.onload = function () {
  if(window.location.hash) {
    var tag = window.location.hash.split('#')[1];
    var sortTable = document.getElementsByClassName('sorting-table');
    sortTable[0].setAttribute('id', tag);
    filter(tag);
    document.location="#"+tag;
    removeHash();
  }
}
