$( document ).ready(function() { 
    $('.btn-color').on('click', function () {
        var boxColor =  $(this).data('color');
        $('.box-change').attr('style', 'background-color:' + boxColor);
    });
    $('.btn-reset').on('click', function () {
        $('.box-change').removeAttr('style');
    });
});