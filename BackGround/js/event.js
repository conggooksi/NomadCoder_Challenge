const title = document.querySelector(".challenge h1");

const superEventHandler = {
    handleMouseEnter: function() {
        title.innerText = "that's right!! and Mouse is here!!";    
    },
    handleMouseLeave: function() {
        title.innerText = "Mouse is gone!!";
    },
    handleWindowSize: function() {
        title.innerText = "Size of window is changed!!"
        document.body.style.backgroundColor = "blue";
    },
    handleMouseRight: function() {
        title.innerText = "Wow, Really?";
    }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowSize);
window.addEventListener("auxclick", superEventHandler.handleMouseRight);