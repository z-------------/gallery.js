var galleryJS = {
    init: function(selector,images,speed) {
        
        var container = document.querySelector(selector);
        container.innerHTML = "";
        container.classList.add("gjs_container");
        
        var tSpeed = 0.5;
        
        if (speed != undefined && speed != null && typeof speed == "number") {
            tSpeed = speed;
        }
        
        var _style = document.createElement("style");
        _style.innerHTML = ".gjs_image {\
            height:100%;\
            width:100%;\
            position:absolute;\
            top:0;\
            left:0;\
            transition:opacity " + tSpeed + "s;\
            opacity:0;\
            }\
            .gjs_container {\
            overflow:hidden;\
            position:relative;\
            }\
            .gjs_image.current {\
            opacity:1;\
            }\
            ";
        document.body.appendChild(_style);
        
        for (i=0;i<images.length;i++) {
            var _image = document.createElement("img");
            _image.src = images[i];
            _image.classList.add("gjs_image");
            if (i == 0) {
                _image.classList.add("current");
            }
            container.appendChild(_image);
        }
    },
    
    changeSlide: function(index) {
        var allSlides = document.querySelectorAll(".gjs_image");
        
        while (index > allSlides.length-1) {
            index = index - allSlides.length;
        }
        
        while (index < 0) {
            index = allSlides.length + index;
        }
        
        for (i=0;i<allSlides.length;i++) {
            if (i == index) {
                allSlides[i].classList.add("current");
            } else {
                allSlides[i].classList.remove("current");
            }
        }
        
        galleryJS.currentSlide = index;
    },
    
    currentSlide: 0,
    
    next: function() {
        galleryJS.changeSlide(galleryJS.currentSlide+1);
    },
    
    prev: function() {
        galleryJS.changeSlide(galleryJS.currentSlide-1);
    }
}