var signUpModal = document.getElementById('sign-up-modal');
var signInModal = document.getElementById('sign-in-modal');
var createPostModal = document.getElementById('create-post-modal');

/*Function is called when sign up button is clicked in header*/
function signUpButtonAction() {
    signUpModal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == signUpModal) {
            signUpModal.style.display = "none";
        }
    };
}


function signUpSpanClick() {
    signUpModal.style.display = "none";
}


/*Function is called when sign in button is clicked in header*/
function signInButtonAction() {
    signInModal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == signInModal) {
            signInModal.style.display = "none";
        }
    };
}

function signInSpanClick() {
    signInModal.style.display = "none";
}


/*Function is called when sign up link is clicked on sign in page*/
function callSignUp(event) {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
    event.stopPropagation();
}

function createPostButton() {
    createPostModal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == createPostModal) {
            createPostModal.style.display = "none";
        }
    }
}

function createPostSpanClick() {
    createPostModal.style.display = "none";
}