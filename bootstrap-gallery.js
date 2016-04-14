/*
 * Bootstrap gallery
 * https://github.com/ludovicscribe/bootstrap-gallery
 * http://ludovicscribe.fr/blog/galerie-bootstrap
 *
 * Copyright 2016, Scribe Ludovic
 * http://ludovicscribe.fr/
 */

$(document).ready(function() {
	// Install click event on links
	$('a.thumbnail, a.show-gallery').click(function() {
		ExpandImage(this);
		return false;
	});
	
	// Install events for left / right keys navigation
	$(document).keydown(function(e) {
		if ($('#bootstrap-gallery').length != 0 && $('#bootstrap-gallery').is(':visible')) {
			if (e.which == 37 && $('#bootstrap-gallery-prev').is(':visible')) ExpandImage($('a#bootstrap-gallery-prev'));
			else if (e.which == 39 && $('#bootstrap-gallery-next').is(':visible')) ExpandImage($('a#bootstrap-gallery-next'));
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
	
	// Link is not a thumbnail
	if ($(link).hasClass('show-gallery')) {
		// Title is the "title" attribute of link
		title = $(link).attr('title');
		
		// If not found, title is the "alt" attribute of image in existing thumbnail link
		if (!title) title = $('a[href="' + $(link).attr('href') + '"].thumbnail img').attr('alt');
		
		// If not found, title is the "alt" attribute of existing image in page
		if (!title) title = $('img[src="' + $(link).attr('href') + '"]').attr('alt');
		
		// If link is not a thumbnail we can't define previous and next links
		$('a#bootstrap-gallery-prev').hide();
		$('a#bootstrap-gallery-next').hide();
	} else {
		// Getting link, we can't use $(link) because of next and previous links...
		var link = $('a.thumbnail[href="' + $(link).attr('href') + '"]');
		
		// Title is "alt" attribute of thumbnail
		title = link.find('img').attr('alt');
		
		// Getting position of current link
		var thumbnails = $('a.thumbnail');
		var pos = thumbnails.index(link);	
		
		// If there are a previous thumbnail, we display the link
		if (pos > 0) {
			var prev = thumbnails.get(pos - 1);
			
			$('a#bootstrap-gallery-prev').show();
			$('a#bootstrap-gallery-prev').attr('href', $(prev).attr('href'));
		} else {
			$('a#bootstrap-gallery-prev').hide();
		}
		
		// If there are a next thumbnail, we display the link
		if (pos < thumbnails.length - 1) {
			var next = thumbnails.get(pos + 1);
			
			$('a#bootstrap-gallery-next').show();
			$('a#bootstrap-gallery-next').attr('href', $(next).attr('href'));
		} else {
			$('a#bootstrap-gallery-next').hide();
		}
	}
		
	// Setting values
	$('#bootstrap-gallery .modal-body img').attr('src', url);
	
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
		   "<a id='bootstrap-gallery-prev' class='carousel-control left' href='#modal-carousel' data-slide='prev' onclick='ExpandImage(this); return false;'><i class='glyphicon glyphicon-chevron-left'></i></a>" +
		   "<a id='bootstrap-gallery-next' class='carousel-control right' href='#modal-carousel' data-slide='next'  onclick='ExpandImage(this); return false;'><i class='glyphicon glyphicon-chevron-right'></i></a>" +
		   "</div>" +
		   "</div>" +
		   "</div>" +
		   "</div>";
}