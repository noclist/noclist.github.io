for (i = 624; i <= 752; i++) {
	var src = 'DSC00' + i + '.JPG'
	var image = $('<img>').attr('src', src);
	var link = $('<a target="_blank">').attr('href', src);
	var thumbnail = link.append(image);
	thumbnail.appendTo('body');
	}