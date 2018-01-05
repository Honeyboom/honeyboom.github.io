if(sessionStorage.getItem("tagsArray") === null) {
	var tagsArray = [];
	sessionStorage.setItem("tagsArray", JSON.stringify(tagsArray));
}
else {
	var tagsArray = JSON.parse(sessionStorage.getItem("tagsArray"));
}



function filter(tag) {
	if(tagsArray.indexOf(tag) <= -1)
    tagsArray.push(tag);
  setActiveTag(tag);
  showContainer();
	sessionStorage.setItem("tagsArray", JSON.stringify(tagsArray));
}





function setActiveTag(tag) {
  //if not active, set tag to active, else remove active
	document.getElementById('all-posts').classList.remove('active');
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
	
 	//displays a message on sorting table of tags being used
  if(tagsArray.length === 1){
		var text = "Showing posts containing the tag <b>" + tagsArray[0] + "</b>.";
  }
	else {
		var text = "Showing posts containing the tags ";
		for(i=0; i < tagsArray.length; i++){
			if(i + 1 === tagsArray.length) {
				text += " and <b>" + tagsArray[i] + "</b>.";			
			}
			else if(i === 0){
				text += "<b>" + tagsArray[i] + "</b>";			
			}
			else {
				text += ", <b>" + tagsArray[i] + "</b>";
			}	
		}
	}
	var elem = document.getElementsByClassName('selected-tags-text');
  elem[0].innerHTML = text;
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





function order(type) {
	//loops through all tags and removes the active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }
	//update sorting info
  var tag = document.getElementsByClassName('selected-tags-text');
  tag[0].innerHTML = "Showing <b>all</b> posts ordered by date.";
	
	//shows all posts in chronological order
  if(type === "chrono-date") {
		document.getElementById('all-posts').classList.add('active');
		var lists = document.getElementsByClassName('post-list-item');
		for(var i=0; i < lists.length; i++) {
      lists[i].classList.remove('hidden');
    }
  }
		
	tagsArray = [];
	sessionStorage.setItem("tagsArray", JSON.stringify(tagsArray));	
}






function updateTags() {
	document.getElementById('all-posts').classList.remove('active');
	for(i=0; i < tagsArray.length; i++) {
		var tag = tagsArray[i];
		var item = document.getElementById(tag + '-item');
		item.classList.add('active');
	}
	
	//displays a message on sorting table of tags being used
  if(tagsArray.length === 1){
		var text = "Showing posts containing the tag <b>" + tagsArray[0] + "</b>.";
  }
	else {
		var text = "Showing posts containing the tags ";
		for(i=0; i < tagsArray.length; i++){
			if(i + 1 === tagsArray.length) {
				text += " and <b>" + tagsArray[i] + "</b>.";			
			}
			else if(i === 0){
				text += "<b>" + tagsArray[i] + "</b>";			
			}
			else {
				text += ", <b>" + tagsArray[i] + "</b>";
			}	
		}
	}
	var elem = document.getElementsByClassName('selected-tags-text');
  elem[0].innerHTML = text;
  
  //hides all and displays only posts with selected tags
  showContainer();
}






//removes the hash from the url
function removeHash () { 
	history.pushState("", document.title, window.location.pathname + window.location.search);
}




window.onload = function () {
  if(window.location.hash) {
  	tagsArray = [];
		sessionStorage.setItem("tagsArray", JSON.stringify(tagsArray));	
    var tag = window.location.hash.split('#')[1];
    var sortTable = document.getElementsByClassName('selected-tags-text');
    sortTable[0].setAttribute('id', tag);
    filter(tag);
    document.location="#"+tag;
    removeHash();
  }
  else {
  //to show pags previously selected and stored
    updateTags();
  }
}
