const splash = 

$(document).ready(function(){
    var images=['images/001.jpg',
                'images/002.jpg',
                'images/003.jpg',
                'images/004.jpg',
                'images/005.jpg',];
    
    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';
    
    $('body').css({'background':bgImg, 'background-size':'cover', });
    
    });