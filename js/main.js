function error(msg) {
	$(".notify-error").hide();
    $('<div/>').prependTo('body').addClass('notify-error').html(msg).slideDown();
}

function slideUpError(){
	$(".notify-error").slideUp();
}

function slideUpSuccess(){
	$(".notify-success").slideUp();
}

function success(msg) {
    $('<div/>').prependTo('body').addClass('notify-success').html(msg).slideDown();
    $(".notify-error").slideUp();

}