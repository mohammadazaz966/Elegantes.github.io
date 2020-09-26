/*News Ticker */
$('.news-ticker-2').newsTicker({
    row_height: $('.news-ticker-2').height,
    margin_bottom: -19,
    max_rows: 1,
    speed: 600,
    direction: 'up',
    duration: 4000,
    autostart: 1,
    pauseOnHover: 0,
    prevButton: $('.btn-left'),
    nextButton: $('.btn-right'),
    stopButton: $('.btn-pause'),
    startButton: $('.btn-play')
});

/*Slider */
new Splide('.splide.splide-hor', {
    perPage: 1,
    height: '34rem',
    width: '46.6rem',
    type: 'loop',
    direction: 'rtl',
    focus: 'center',
    perMove: 1,
    pagination: false,
}).mount();

new Splide('.splide.splide-ver', {
    direction: 'ttb',
    height: '33rem',
    type: 'loop',
    perPage: 3,
    focus: 'center',
    perMove: 1,
    pagination: false,
}).mount();

//Second Pagination 
var items = $(".list-wrapper .row.list-item");
var numItems = items.length;
var perPage = 3;
items.slice(perPage).hide();
$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").classList.toggle('active');
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove('active');
}

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});