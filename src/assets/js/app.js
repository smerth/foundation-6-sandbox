$(document).foundation(

);

// ********************************
// MAGNIFIC.JS - alternate lightbox plugin
// ********************************

// Magnific Popup Demo
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});



$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
        // other options
});


$('#single-object').magnificPopup({
    items: {
        src: 'http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg'
    },
    type: 'image' // this is default type
});

$('#multiple-objects').magnificPopup({
    items: [{
        src: 'http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg'
    }, {
        src: 'http://vimeo.com/161890877',
        type: 'iframe' // this overrides default type
    }, {
        src: $('<div>Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
    }, {
        src: '<div>HTML string</div>',
        type: 'inline'
    }, {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
    }],
    gallery: {
        enabled: true
    },


    type: 'image' // this is default type
});


// ********************************
// PHOTSWIPE.JS - alternate lightbox plugin made for swiping on mobile devices
// ********************************
$(document).ready(function() {
  // put all your jQuery goodness in here.
  $('#open-photoswipe').click( function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();


    return false;

} );
});




$('#open-photoswipe').click( function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();


    return false;

} );









// ********************************
// HIGHLIGHT.JS - code highlighting
// ********************************

// Initialize Highlight Code Highlighting
$(document).ready(function() {
    hljs.initHighlightingOnLoad();
});


// ********************************
// ISOTOPE.JS - element layout, sorting and filtering
// ********************************

// Example 1
$('.isotope-example-1').isotope({
    // options
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
    }
});

// Example 2
$('.isotope-example-2').isotope({
    // options
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
    }
});



// Isotope Margins
// external js: isotope.pkgd.js


// init Isotope
var $container = $('.isotope-example-3').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

var $container = $('.isotope-example-4').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});







// ******* FLUID SIZING PAGE
// external js: isotope.pkgd.js
$('.grid-masonry-fluild-sizing').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});



// ********************************
// jqueryflip.JS - flipping elements
// ********************************

// $("#card").flip();

// $(".card-grid").flip({
//          trigger: 'click'
//        });



// $(".card-grid").flip({
//     axis: 'y',
//     trigger: 'click',
//     forceWidth: false,
//     forceHeight: false
// }).find('.column, .card-grid').css({
// 'height': '50%'
// });


// $(".card-grid").flip({
//     axis: 'y',
//     trigger: 'click',
//     forceWidth: false,
//     forceHeight: false
// }).css({
// 'height': '50%'
// });




$(".jquery-flip-card-1").flip({
    axis: 'x',
    trigger: 'click',
    forceWidth: false,
    forceHeight: true
});

$(".jquery-flip-card-2").flip({
    axis: 'x',
    trigger: 'click',
    forceWidth: false,
    forceHeight: true
});
   

 
$(".jquery-flip-chinese-card").flip({
    axis: 'y',
    trigger: 'click',
    forceWidth: false,
    forceHeight: false
});




// ********************************
// FLIPPANT-JS - for flipping elements
// ********************************

// Example one from the flippant webiste

var flip = flippant.flip


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btnflip')) {
    e.preventDefault()
    var flipper = e.target.parentNode.parentNode
    var back
    var input = '<p><input type="text" value="' + flipper.querySelector('h2').innerText + '"></p>'
    var textarea = '<textarea style="width:100%; max-width:32em; height:12em;">' + flipper.querySelector('p').innerText + '</textarea><br><button type="button" class="btn button">Update</button>'

    if (e.target.classList.contains('card')) {
      back = flip(flipper, "<p>It's a card!</p>" + input + textarea)
    } else {
      back = flip(flipper, "<p>It's a modal!</p>" + input + textarea, 'modal')
    }

    back.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn')) {
        flipper.querySelector('h2').innerText = back.querySelector('input').value
        flipper.querySelector('p').innerText = back.querySelector('textarea').value
        back.close(back, 'close')
      }
    })

  }
})

// THIS ONE WORKS ON FIREFOX
$(document).ready(function($) {

    $('.flippant-open').click(function (e) {
        var flip = flippant.flip

        "use strict";
        var front_content = e.target.parentNode;
        var card = e.target.parentNode.parentNode;
        var back_content = card.getElementsByTagName('div')[1].innerHTML;
        var back = null;

        if (e.target.classList.contains('card')) {
            back = flip(front_content, back_content);
        } else {
            back = flip(front_content, back_content, 'modal');
        }

        back.addEventListener('click', function (e) {
            if (e.target.classList.contains('flippant-close')) {
                back.close(back, 'close');
            }
        });

        var flip = null;

    });

});

$(document).ready(function($) {
    // "use strict";
    // var flip = flippant.flip;
    // var back = null;

// $(".flippant-open").on("click", function(evt) {
    // var card = $(this).parentsUntil(article).html();
    // var card = $(this).parent().parent().html();
    // var front_content = $(this).parent().html();
    // var card = $(this).parentsUntil("article").html(); // Can't figure out how to ues this
    
    // alert(card);

// });


});



