'use strict'

$(document).ready(function () {

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();

    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top-75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

    $('.message-button').on('click', function(){
        $('#black-bg').fadeIn(400);
        setTimeout(function(){
            $('#popup--summernote').stop( true, true ).fadeIn(400);
        }, 450);
    });

    $(document).click(function (event) {
        if ($(event.target).closest("#popup--summernote").length || $(event.target).closest(".message-button").length)
            return;
        $('#popup--summernote').fadeOut(400);

        setTimeout(function () {
            $('#black-bg').fadeOut(400);
        }, 450);
        event.stopPropagation();
    });

    //$("#phone").mask("+7 (999) 999-99-99", {placeholder: "+7 (000) 000-00-00"})

    if ($('#summernote').length > 0){
        $('#summernote').summernote();
    }
    
     if ($('#app-settings').length > 0){
        new Vue({
            el: "#app-settings",
            data: {
                array: [
                    {
                        name: 'Андрей',
                        phone: '8 (908) 441-19-10',
                        password: '●●●●●●●●'
                    }
                ]
            }
        });
    
    }
    
    $('.add-driver').on('click', function(){
        var top = $(window).scrollTop() + 100;
        $('.popup--assign-driver').stop(true, true).fadeOut(300);
        $('.popup--add-driver').css({'top': top});
        setTimeout(function () {
            $('.popup--add-driver').stop(true, true).fadeIn(300);
        }, 350);
    });

});