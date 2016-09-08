/*
 * Bootstrap gallery v1.1
 * https://github.com/ludovicscribe/bootstrap-gallery
 * https://ludovicscribe.fr/blog/galerie-images-bootstrap
 *
 * Copyright 2016, Scribe Ludovic
 * https://ludovicscribe.fr/
 */

var gallerySelector = '';
 
 $.fn.bootstrapGallery = function() {
	// Install click event on links
	if (gallerySelector != '') gallerySelector += ', ';
	gallerySelector += this.selector;
	
	this.click(function() {
		ExpandImage(this);
		return false;
	});
};

$(document).ready(function() {	
	// Install events for left / right keys navigation
	$(document).keydown(function(e) {
		if ($('#bootstrap-gallery').length != 0 && $('#bootstrap-gallery').is(':visible')) {
			if (e.which == 37 && $('#bootstrap-gallery-prev').is(':visible')) $('#bootstrap-gallery-prev').trigger('click');
			else if (e.which == 39 && $('#bootstrap-gallery-next').is(':visible')) $('#bootstrap-gallery-next').trigger('click');
			else return;
			
			e.preventDefault();
		}
	});
});

function ExpandImage(link) {
	// Add modal gallery HTML if not present in DOM
	if ($('#bootstrap-gallery').length == 0) {
		$(GetGalleryHTML()).appendTo(document.body);
		
		// Delete modal gallery HTML when gallery is closed
		$('#bootstrap-gallery').on('hidden.bs.modal', function () {
			$(this).remove();
		});
	}
	
	var url = $(link).attr('href');
	var title;
	
	// This is a simply link, just open the gallery
	if ($(link).find('img').length == 0) {
		// Title is the "title" attribute of link
		title = $(link).attr('title');
		
		// If not found, title is the "alt" attribute of image in existing thumbnail link
		if (!title) title = $('a[href="' + url + '"]').filter(gallerySelector).has('img').find('img').attr('alt');
		
		// If not found, title is the "alt" attribute of existing image in page
		if (!title) title = $('img[src="' + url + '"]').attr('alt');
		
		// If link is a simply link, we can't define previous and next links
		$('a#bootstrap-gallery-prev').hide();
		$('a#bootstrap-gallery-next').hide();
	} else {
		// Title is "alt" attribute of thumbnail
		title = $(link).find('img').attr('alt');

		// Get all thubnails links with same data-gallery attribute
		var thumbnails = $(gallerySelector);
		var gallery = $(link).attr('data-gallery');
		if (gallery) thumbnails = thumbnails.filter('[data-gallery="' + gallery + '"]')
		else thumbnails = thumbnails.filter(':not([data-gallery])');
		
		// Remove elements which don't contain image
		thumbnails = $.grep(thumbnails, function(elem) {
			return $(elem).has('img').length != 0;
		});
		
		thumbnails = $(thumbnails);
		
		// Getting position of current link
		var pos = thumbnails.index(link);	
		
		// If there are a previous thumbnail, we display the link
		if (pos > 0) {
			var prev = thumbnails.get(pos - 1);
			
			$('a#bootstrap-gallery-prev').show();
			$('a#bootstrap-gallery-prev').off('click').click(function() { ExpandImage(prev); return false; });
		} else {
			$('a#bootstrap-gallery-prev').hide();
		}
		
		// If there are a next thumbnail, we display the link
		if (pos < thumbnails.length - 1) {
			var next = thumbnails.get(pos + 1);
			
			$('a#bootstrap-gallery-next').show();
			$('a#bootstrap-gallery-next').off('click').click(function() { ExpandImage(next); return false; });
		} else {
			$('a#bootstrap-gallery-next').hide();
		}
	}
		
	// Setting values
	$('#bootstrap-gallery .modal-body img').attr('src', url).off('load').load(function() {
		// Get real image width
		var image = new Image();
		image.src = url;
		var real_width = image.width;
		
		// Set max-width of container to image width
		$('#bootstrap-gallery .modal-dialog').css('max-width', real_width);
    });
	
	if (typeof title === typeof undefined || title === false) title = '';
	$('#bootstrap-gallery .modal-header .modal-title').text(title);	
	
	$('#bootstrap-gallery a#bootstrap-gallery-extend').attr('href', url);
	$('#bootstrap-gallery').modal('show');	
}

// Getting modal gallery HTML
function GetGalleryHTML() {
	return "<div class='modal fade' id='bootstrap-gallery' tabindex='-1' role='dialog' aria-hidden='true'>" +
		   "<div class='modal-dialog modal-lg'>" +
		   "<div class='modal-content'>" +
		   "<div class='modal-header'>" +
		   "<a href='' class='modal-button glyphicon glyphicon-remove' data-dismiss='modal'></a>" +
		   "<a href='' id='bootstrap-gallery-extend' class='modal-button glyphicon glyphicon-resize-full' target='_blank'></a>" + 
		   "<h4 class='modal-title'></h4>" +
		   "</div>" +
		   "<div class='modal-body'>" +
		   "<img src='' />" +
		   "<a id='bootstrap-gallery-prev' class='carousel-control left' href='#modal-carousel' data-slide='prev'><i class='glyphicon glyphicon-chevron-left'></i></a>" +
		   "<a id='bootstrap-gallery-next' class='carousel-control right' href='#modal-carousel' data-slide='next'><i class='glyphicon glyphicon-chevron-right'></i></a>" +
		   "</div>" +
		   "</div>" +
		   "</div>" +
		   "</div>";
}

// Init
$(document).ready(function() {
	$('a.thumbnail, a.show-gallery').bootstrapGallery();
});