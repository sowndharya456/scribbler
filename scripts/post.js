var postcontent = document.getElementById('post-content');
var postheader = document.getElementById('post-header');
var count = 0;

function addComment() {
    var commenttext = document.getElementById('commenttext');
    if (commenttext.value !== "") {
        document.getElementById('addComment').innerHTML += "<p class='comments'>" + commenttext.value + "</p>";
        commenttext.value = "";
    }
}

function likecount() {
    var likestatus = document.getElementById('likestatus');
    count++;
    likestatus.innerHTML = "<p>" + count + " person likes this!</p>";
    document.getElementById('likedButton').style.display = "block";
    document.getElementById('likeButton').style.display = "none";
}

function editContent() {
    postheader.contentEditable = "true";
    postheader.style.setProperty('border', '1px solid red');
    postcontent.contentEditable = "true";
    postcontent.style.setProperty('border', '1px solid red');
    document.getElementById('editButton').style.display = "none";
    document.getElementById('saveButton').style.display = "block";
}

function saveContent() {
    document.getElementById('saveButton').style.display = "none";
    document.getElementById('editButton').style.display = "block";
    postheader.contentEditable = "false";
    postheader.style.removeProperty('border');
    postcontent.contentEditable = "false";
    postcontent.style.removeProperty('border');
}