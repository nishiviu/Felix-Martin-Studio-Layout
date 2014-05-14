$(document).ready(function(){
 
	$('.navButton').click(function () {
        var leftMargin = ($('#navBox').css('margin-left') === '0px') ? '-22vh' : '0px';
        $('#navBox').animate({ 'margin-left' : leftMargin }, 500);
    });
});