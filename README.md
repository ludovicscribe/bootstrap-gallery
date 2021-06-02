# Bootstrap gallery

With this script and Bootstrap 4, you can easily create an images gallery. You just have to put your image thumbnails on the page, declare your gallery and the script will do the job. If you want, you can read this howto on my blog : https://ludovicscribe.fr/blog/galerie-images-bootstrap

## Prerequisites

To use this script you will need Bootstrap, a famous CSS framework, and jQuery (tested with Bootstrap v4.1.3 and jQuery v3.3.1).

If you are targetting Bootstrap 3, you must use the v1.0 (tested with Bootstrap v4.1.3 and jQuery v3.3.1).

## Open the gallery with thumbnails

Firstly, include "bootstrap-gallery.css" and "bootstrap-gallery.js" files on your page :

```html
<!-- CSS -->
<link rel="stylesheet" href="boostrap-gallery.css" />

<!-- JS -->
<script type="text/javascript" src="bootstrap-gallery.js"></script>
```

Then, just set your thumbnail links as follow :
- add the `thumbnail` class
- set `href` attribute to original images

Note that `img-thumbnail` class (default Bootstrap 4 thumbnail component) will be automatically added to the class of the pictures.

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

That's all ! You can now click on a thumbnails to open the gallery. The title displayed in gallery is the thumbnail alt attribute.

## Multiple galleries on the same page

You can create multiple galleries on the same page using the `data-gallery` attribute to specify the gallery id :

```html
<div class="container">   
    <h2>Gallery 1</h2>
	
	<div class="row">
        <div class="col-xs-3">
            <a href="images/image1.jpg" class="thumbnail" data-gallery="gallery1">
                <img src="images/image1-thumb.jpg" alt="Image 1" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image2.jpg" class="thumbnail" data-gallery="gallery1">
                <img src="images/image2-thumb.jpg" alt="Image 2" />
            </a>
        </div>
    </div>
		
	<h2>Gallery 2</h2>
		
	<div class="row">
        <div class="col-xs-3">
            <a href="images/image3.jpg" class="thumbnail" data-gallery="gallery2">
                <img src="images/image3-thumb.jpg" alt="Image 3" />
            </a>
        </div>
        
        <div class="col-xs-3">
            <a href="images/image4.jpg" class="thumbnail"  data-gallery="gallery2">
                <img src="images/image4-thumb.jpg" alt="Image 4" />
            </a>
        </div>
    </div>
</div>
```

## Open the gallery with links

You can also open the gallery with a link :

```html
<a href="images/image1.jpg" class="show-gallery" title="My title">Link with title</a>
```

In this case, the title is defined in the `title` attribute of link. If there is no `title` attribute on link, the script search the title in `alt` attribute of thumbnail whose link target is set to the same image :

```html
<div class="container">   
    <div class="row">
        <div class="col-xs-4 col-xs-offset-4">
            <a href="images/image1.jpg" class="thumbnail">
                <img src="images/image1-thumb.jpg" alt="Image 1" />
            </a>
        </div>
    </div>

    <p><a href="images/image1.jpg" class="show-gallery">Link without title, but target image has it's thumbnail on page</a></p>
</div>
```

If there are no thumbnail whose link target is set to the same image, the title is `alt` attribute of the full size image, if it is displayed on page :

```html
<img src="images/image1.jpg" alt="Image 1" />
<a href="images/image1.jpg" class="show-gallery">Link without title, but target image is displayed on page</a>
```

## Custom selectors

The default CSS selectors used to open the gallery are `a.thumbnail` and `a.show-gallery` but if you want use your owns selectors, you can declare them :

```html
<a href="images/image1.jpg" class="custom-selector" title="Link with custom selector">Link with custom selector</a>

<script type="text/javascript">
$(document).ready(function() {
	bootstrapGallery('a.custom-selector');
});
</script>
``` 

The project archive contains examples for each use case. Images used in this examples are rights free, you can download them on Pixabay :
- Autumn : https://pixabay.com/fr/automne-rivi%C3%A8re-nature-972786/
- Landscape : https://pixabay.com/fr/paysage-montagnes-abendstimmung-640617/
- Sunrise : https://pixabay.com/fr/lever-du-soleil-paysage-marin-1239727/
- London : https://pixabay.com/fr/londres-parlement-angleterre-530055/
- Beach: https://pixabay.com/fr/plage-r%C3%A9publique-dominicaine-1236581/