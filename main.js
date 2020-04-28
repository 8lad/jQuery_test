$(function() {
    // var newHihght = $('.newp').width();
    // $('.item').width(newHihght).height(400);
    // alert(newHihght);

    // function widthAndHeight(element) {
    //     var className = '.' + element;
    //     var w = $(className).width();
    //     var h = $(className).height();
    //     $('.newp').text('width ' + w + '; Height: ' + h);
    // };
    // widthAndHeight('item');
    // $('div').html('<p>cheking fot changes</p>');
    // $('.newp').fadeOut(3000).fadeIn(3000);

    // function elementOut(element, time) {
    //     var e = '.' + element;
    //     e.fadeOut(time);
    // }
    // function elementOut(element, time) {
    //     if (time > 5000 || time < 1000 || isNaN(time)) {
    //         return false;
    //     } else {
    //         var className = "." + element;
    //         $(className).fadeOut(time);
    //     }
    // }

    // elementOut('newp', 5000);
    $('.img').on('click', function() {
        $(this).fadeTo(3000, 0.3);
    });
    $('.tokio').slideUp(4000).slideDown(1000);
    var src = $('.img').attr('src', 'images/2018FordMustang003.jpg');
    alert(src);
    $('.img').attr('title', 'new text');
    $('.img').removeAttr('title');

    function changeAttr(element, newAttr, newValue) {
        var className = "." + element;
        $(className).attr(newAttr, newValue);
    };
    changeAttr('img', 'title', 'some new text');
    $('.img').addClass('border');
    $('.img').removeClass('border');
    $('.tokio').css({
        'color': 'yellow',
        'font-size': '50px',
        'background-color': 'rgb(0, 0, 233)'
    });
    $('.mikki').animate({
        'font-size': '50px',
    }, 4000, function() {
        alert('succssesful function');
    });
});