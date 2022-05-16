for (i = 624; i <= 752; i++) {
	var src = 'DSC00' + i + '.JPG';
	if (imageExists(src)) {
		var image = $('<img>').attr('src', src);
		var link = $('<a target="_blank">').attr('href', src);
		var thumbnail = link.append(image);
		thumbnail.appendTo('body');
	}
}	


function imageExists(src){

    var http = new XMLHttpRequest();

    http.open('HEAD', src, false);
    http.send();

    return http.status != 404;

}