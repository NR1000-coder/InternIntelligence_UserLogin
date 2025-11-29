"use strict";
$(document).ready(function () {
    const Container = document.querySelector('.main-')
    const signupLink = document.querySelector('.signup-link')
    const loginLink = document.querySelector('.login-link') 

    signupLink.onclick = () => {
        Container.classList.add('.active')
    }
    loginLink.onclick = () => {
       Container.classList.remove('.active') 
    }
});