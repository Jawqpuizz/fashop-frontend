/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/** code by webdevtrick ( https://webdevtrick.com ) **/
(function($) { 
  $(function() { 
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
      $('#list').css('display','block');
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery);

//


function myFunction(x) {
  if (x.matches) { // If media query matches
    $("#list").hide();
  } else {
    $("#list").addClass("flex");
    $("#list").css('display', 'flex')
    $('#nav-toggle').removeClass('active');
  }
}




var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) 


function Fashonista1() {
  var x = document.getElementById("TrustStatement");
  
    x.innerHTML ="Girls do not dress for boys. They dress for themselves, and of course, each other. If girls dressed for boys, they’d justwalk around naked at all times.” —Betsey Johnson";
 
  
  document.getElementById('TrustBlock').src = 'Img/Faimages/fashop_bg5.jpg';
}

function Fashonista2() {
  var x = document.getElementById("TrustStatement");
  
    x.innerHTML =" 'Luxury is the ease of a T-shirt in a very expensive dress. ―Karl Lagerfeld'";
 
  
  document.getElementById('TrustBlock').src = 'Img/Faimages/picture5.jpeg';
}

function Fashonista3() {
  var x = document.getElementById("TrustStatement");
  
    x.innerHTML ="High and low isn't such a novelty thing, it's how young people interpret the life we've been given. It's how we look at luxury brands, it's how we look at heritage brands. —Virgil Abloh'";
 
  
  document.getElementById('TrustBlock').src = 'Img/Faimages/title-image1.jpeg';
}


function Fashonista4() {
  var x = document.getElementById("TrustStatement");
  
    x.innerHTML ="Girls do not dress for boys. They dress for themselves, and of course, each other. If girls dressed for boys, they’d justwalk around naked at all times.” —Betsey Johnson";
 
  
  document.getElementById('TrustBlock').src = 'Img/Faimages/picture4.jpeg';
  
  
}

function Fashonista5() {
  var x = document.getElementById("TrustStatement");
  
    x.innerHTML ="Style is the only thing you can’t buy. It’s not in a shopping bag, a label, or a price tag. It’s something reflected from our soul to the outside world—an emotion.'—Alber Elbaz";
  
  document.getElementById('TrustBlock').src = 'Img/Faimages/picture2.jpeg';
}










var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


function RegisterSuccess2()  {
alert("You are now registered with Fashop");
register.style.display = "block";

    

};

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}