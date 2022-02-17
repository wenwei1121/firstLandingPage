window.onscroll = function() {IPadFunction()};

// var x = window.matchMedia("(min-width: 768px)")
// IPadFunction(x) // Call listener function at run time
// x.addListener(IPadFunction) // Attach listener function on state changes

function IPadFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("wrap-navbar").style.padding = "12px 7%";
    } 
    else {
      document.getElementById("wrap-navbar").style.padding = "20px 7%";
    }
}

// go-top
mybutton = document.getElementById("go-top");

function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// mall-slidetoggle
$(document).ready(function(){
  $(".sidebar-show-list").click(function(){
    $(".sidebar-list").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".sidebar-show-list-japan").click(function(){
    $(".sidebar-list-japan").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".sidebar-show-list-korea").click(function(){
    $(".sidebar-list-korea").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".sidebar-show-list-west").click(function(){
    $(".sidebar-list-west").slideToggle("slow");
  });
});

//change caret-down icon
function ChangeCaretDown(x){
  x.classList.toggle("change");
}

function OpenSidebar() {
    document.getElementById("mySidebar").style.width = "350px";
}

function CloseSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

// responsive navbar toggle
function OpenNavbar__RWD() {
  if (document.getElementById("navbar").className === "navbar-list") {
    document.getElementById("navbar").className += "shownav";
  }
  else {
    document.getElementById("navbar").className = "navbar-list";
  }
}