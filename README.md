# Bootstrap gallery

With this script and Bootstrap, you will easily create an images gallery. You just have to put your image thumbnails on the page, declare your gallery and the script will do the job. If you want, you can read this howto on my blog : https://ludovicscribe.fr/blog/galerie-images-bootstrap

## Prerequisites

To use this script you will need Bootstrap, a famous CSS framework, and jQuery. I developped the script with Bootstrap v3.3.7 and jQuery v1.12.4 but newest versions should work.

## Open the gallery with thumbnails

Firstly, include "bootstrap-gallery.css" and "bootstrap-gallery.js" files on your page :

```html
<!-- CSS -->
<link rel="stylesheet" href="boostrap-gallery.css" />

<!-- JS -->
<script type="text/javascript" src="bootstrap-gallery.js"></script>
```

Then, just use the default Bootstrap thumbnail component and set your thumbnail links href attribute to original images :

```html
<div class="container">   
	<div class="row">
        <div class="col-xs-3">
            <a href="images/image1.jpg" class="thumbnail">
                <img src="images/image1-thumb.jpg" alt="Image 1" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image2.jpg" class="thumbnail">
                <img src="images/image2-thumb.jpg" alt="Image 2" />
            </a>
        </div>

        <div class="col-xs-3">
            <a href="images/image3.jpg" class="thumbnail">
                <img src="images/image3-thumb.jpg" alt="Image 3" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image4.jpg" class="thumbnail">
                <img src="images/image4-thumb.jpg" alt="Image 4" />
            </a>
        </div>
    </div>
</div>
```

Finnaly, declare your gallery selector :

```html
<script type="text/javascript">
$(document).ready(function() {
	$('a.thumbnail').bootstrapGallery();
});
</script>
```

That's all ! You can now click on a thumbnails to open the gallery. The title displayed in gallery is the thumbnail alt attribute.

## Multiple galleries on the same page

The selector used to find the next and previous image is the same that was used to open the gallery. So, you can use different selectors to create multiple galleries :

```html
<div class="container">   
    <h2>Gallery 1</h2>
	
	<div class="row">
        <div class="col-xs-3">
            <a href="images/image1.jpg" class="thumbnail gallery1">
                <img src="images/image1-thumb.jpg" alt="Image 1" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image2.jpg" class="thumbnail gallery1">
                <img src="images/image2-thumb.jpg" alt="Image 2" />
            </a>
        </div>
    </div>
		
	<h2>Gallery 2</h2>
		
	<div class="row">
        <div class="col-xs-3">
            <a href="images/image3.jpg" class="thumbnail gallery2">
                <img src="images/image3-thumb.jpg" alt="Image 3" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image4.jpg" class="thumbnail gallery2">
                <img src="images/image4-thumb.jpg" alt="Image 4" />
            </a>
        </div>
    </div>
</div>

<script type="text/javascript">
$(document).ready(function() {
	$('a.thumbnail.gallery1').bootstrapGallery();
	$('a.thumbnail.gallery2').bootstrapGallery();
});
</script>
```

## Open the gallery with links

You can also open the gallery with a link :

```html
<a href="images/image1.jpg" class="show-gallery" title="My title">Link with title</a>
```

In this case, you have to declare your link selector :
<script type="text/javascript">
$(document).ready(function() {
	$('a.show-gallery').bootstrapGallery();
});
</script>
```

In this case, the title is defined in the title attribute of link.

The project archive contains examples for each use case. Images used in this examples are rights free, you can download them on Pixabay :
- Autumn : https://pixabay.com/fr/automne-rivi%C3%A8re-nature-972786/
- Landscape : https://pixabay.com/fr/paysage-montagnes-abendstimmung-640617/
- Sunrise : https://pixabay.com/fr/lever-du-soleil-paysage-marin-1239727/
- London : https://pixabay.com/fr/londres-parlement-angleterre-530055/
- Beach: https://pixabay.com/fr/plage-r%C3%A9publique-dominicaine-1236581/