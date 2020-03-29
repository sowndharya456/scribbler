var trashModal = document.getElementById("trash-modal");
var overlay = document.getElementById("overlay");

function closeTrashWindow() {
    trashModal.style.display = "none";
}

function deletePostWindow(postid) {
    trashModal.style.display = "block";
    // document.getElementById("overlay").style.display = "block";
    window.onclick = function (event) {
        if (event.target == trashModal) {
            trashModal.style.display = "none";
        }
    };
    const deletePostConfirm = document.getElementById('deletePostButton');
    deletePostConfirm.onclick = function () {
        postid.style.display = "none";
        trashModal.style.display = "none";
//        document.getElementById("overlay").style.display = "none";
    };
}