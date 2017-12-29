function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
  var posts = document.getElementsByClassName('all-posts');
  posts[0].setAttribute('class', 'all-posts hidden');
  document.getElementById('chrono-date-item').removeAttribute('class');
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }
  
  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}

//shows posts ordered by jekyll
function order(type) {
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }  

  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  if(type === "chrono-date") {
    var posts = document.getElementsByClassName('all-posts');
    posts[0].setAttribute('class', 'all-posts');
    document.getElementById('chrono-date-item').setAttribute('class', 'active');
  }
}

//removes the hash from the url
function removeHash () { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
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
