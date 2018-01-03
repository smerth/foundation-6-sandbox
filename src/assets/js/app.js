$(document).foundation();

// ********************************
// Add active class to to any li containing an anchor href that matches the current page.
// ********************************
$(document).ready(function() {
    var links = $('.menu a'),
        current = window.location.pathname.split('/').slice(-1)[0];

    for (var i = 0; i < links.length; i++) {
        if (links[i].href.split('/').slice(-1)[0] == current) {
            var target = links[i];
            target.parentNode.className = "active";
        }
    }
});


// $(document).ready(function() {
//     (function() {

//         var nav = document.getElementById('main-menu'),
//             anchor = nav.getElementsByTagName('a'),
//             current = window.location.pathname.split('/').slice(-1)[0];

//         for (var i = 0; i < anchor.length; i++) {
//             // depends on fixed url structure
//             // http://stackoverflow.com/questions/16806464/get-the-second-last-parameter-in-a-url-usin  
//             if (anchor[i].href.split('/').slice(-1)[0] == current) {
//                 anchor[i].className = "active";
//             }
//         }
//     })();
// });

// ********************************
// Call Accordion Menu .down function on any ul in #main-menu containing a.active
// Causes the accordion sub-menu containing the current page to remain open after page refresh.
// ********************************
$(document).ready(function() {
    $('#main-menu a.active').closest('ul').addClass('is-active');
    var target = $('#main-menu li.active').closest('ul');
    $('#main-menu').foundation('down', target);
});


    // // Create a script element, populate with call to Github API, append the script to the page head
    // var script = document.createElement('script');
    // script.src = 'https://api.github.com/users/smerth/repos?callback=foo';
    // document.getElementsByTagName('head')[0].appendChild(script);
    // function foo(response) {
    //     // Github user repo data is an array of objects called data
    //     var an_array = response.data
    //     var source = document.getElementById("template").innerHTML;
    //     var template = Handlebars.compile(source);
    //     // 4. populate template with data
    //     var result = template(an_array);
    //     // 5. insert resulting html before page end
    //     $("#mydata").html(result);
    //     console.log(an_array);
    //     console.log(an_array[5]);
    //     console.log(an_array[5]["name"]);
    //     console.log(template(an_array));
    // }


// ********************************
// MAGNIFIC.JS - alternate lightbox plugin
// ********************************

// PROBLEM?

$(document).ready(function() {
    // initialize a magnifique popup gallery
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


});





// ********************************
// PHOTSWIPE.JS - alternate lightbox plugin made for swiping on mobile devices
// ********************************
$(document).ready(function() {
    // put all your jQuery goodness in here.
    $('#open-photoswipe').click(function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
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
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();


        return false;

    });
});


$(document).ready(function() {

    $('#open-photoswipe').click(function() {

        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
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
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();


        return false;

    });


});






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

$(document).ready(function() {

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

});







// ********************************
// jqueryflip.JS - flipping elements
// ********************************

$("#card").flip();

$(".card-grid").flip({
         trigger: 'click'
       });



$(".card-grid").flip({
    axis: 'y',
    trigger: 'click',
    forceWidth: false,
    forceHeight: false
}).find('.column, .card-grid').css({
'height': '50%'
});


$(".card-grid").flip({
    axis: 'y',
    trigger: 'click',
    forceWidth: false,
    forceHeight: false
}).css({
'height': '50%'
});

$(document).ready(function() {
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
// $(document).ready(function($) {

//     $('.flippant-open').click(function(e) {
//         var flip = flippant.flip

//             "use strict";
//         var front_content = e.target.parentNode;
//         var card = e.target.parentNode.parentNode;
//         var back_content = card.getElementsByTagName('div')[1].innerHTML;
//         var back = null;

//         if (e.target.classList.contains('card')) {
//             back = flip(front_content, back_content);
//         } else {
//             back = flip(front_content, back_content, 'modal');
//         }

//         back.addEventListener('click', function(e) {
//             if (e.target.classList.contains('flippant-close')) {
//                 back.close(back, 'close');
//             }
//         });

//         var flip = null;

//     });

// });

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



// ********************************
// JSON - github ajax
// data-103.html
// ********************************
$(document).ready(function() {

    // only run this script if element exists...
    var elementExists = document.getElementById("output-103");
    if (elementExists) {

        // Grab the element to print to
        var $results = $('#output-103');

        var url = 'https://api.github.com/users/smerth/repos?callback=?&per_page=100'

        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            // jsonpCallback: 'data',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(json) {

                // console.dir(json.Items);

                var outPut = '<ul>';

                $.each(json.data, function(i, item) {
                    outPut += '<li>' + i + '. ' + item.name;
                });

                outPut += '</ul>'
                $results.html(outPut);
            },
            error: function(e) {
                console.log(e.message);
            }
        });
    } // endif
});


// ********************************
// JSON - github ajax
// data-104.html
// ********************************
$(document).ready(function() {
    // only run this script if element exists...
    var elementExists = document.getElementById("ouput-104");
    if (elementExists) {

        var $results = $('#output-104');
        var url = 'https://dl.dropboxusercontent.com/u/8903707/hsk-data.json';
        
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            jsonpCallback: 'dataHandler',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(json) {

                console.dir(json.Items);

                var output = '<dl>';

                $.each(json.Items, function(i, item) {
                    output += '<dt>' + '<h4>' + item.title + '<small>' + item.pron + '</small>' + '</h4>' + '</dt>'
                    output += '<dd>' + item.def + '</dd>'
                });

                output += '</dl>'

                $results.html(output);
            },
            error: function(e) {
                console.log(e.message);
            }
        });
    } // endif
});


// ********************************
// Handlebars - Simple
// data-105.html
// ********************************
$(document).ready(function() {
    // only run this script if element exists...
    var elementExists = document.getElementById("itemTemplate");
    if (elementExists) {
        var template = $("#itemTemplate").html();
        // Handlebars compiles the template into a callable function
        var renderer = Handlebars.compile(template);
        // call the compiled function with the template data
        var result = renderer({
            "item": "Whisper 4000 in-home heater and dog walker",
            "description": "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
            "price": 895.99,
            "inStock": true,
            "quantity": 100
        });
        $("#container").html(result);
    } // endif
});

// ********************************
// Data: Handlebars - Github AJAX
// data-106.html
// ********************************
$(document).ready(function() {
    // only run this script if element exists...
    var elementExists = document.getElementById("template-106");
    if (elementExists) {
		// var url = 'http://www.hsk-endpoint-d7.com//hsk-words-level-1?callback=?';
		var url = 'https://api.github.com/users/smerth/repos?callback=?&per_page=100'

		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: 'smerth',
			contentType: "application/json",
			dataType: 'jsonp',
			success: function smerth (json) {

				// Github user repo data is an array of objects called data
				var data = json.data

				// Check you have the json in the console
				console.log(json);
				console.log(data);
				// console.log(data[5]);
				// console.log(data[5]["name"]);
				
				var source   = $("#template-106").html();
				// var source = document.getElementById("template").innerHTML;
				var renderer = Handlebars.compile(source);
				// 4. populate template with data
				var result = renderer(data);
				// Check result in console
				console.log('result of renderer:' + result);
				// 5. insert resulting html before page end
				$("#target-element").html(result);
			},
			error: function (e) {
				console.log(e.message);
			}
		});

    } // endif
});


// ********************************
// Handlebars - Handlebars Github jQuery
// data-107.html
// ********************************

// // 1. Create a script element, populate with call to Github API
// var script = document.createElement('script');
// // 2. Name the callback function you'll define to handle the response
// script.src = 'https://api.github.com/users/smerth/repos?callback=foo';
// // 3. Append the script to the page head
// document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    // // 4. Handle callback to Github
    // function foo(response) {

    //     // 5. Github user repo data is an array of objects called data
    //     var an_array = response.data
    //     var source   = document.getElementById("template-107").innerHTML;
    //     var template = Handlebars.compile(source);

    //     // 4. populate template with data
    //     var result = template(an_array);
    //     // 5. insert resulting html before page end
    //     $("#result").html(result);

    //     console.log(an_array);
    //     console.log(an_array[5]);
    //     console.log(an_array[5]["name"]);
    //     console.log(template(an_array));
    // }
});