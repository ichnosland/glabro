(function(jQuery) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

    jQuery.fn.visible = function(partial) {

      var $t            = jQuery(this),
          $w            = jQuery(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);


function visible(){
  
  var el;
  var win = jQuery(window);
  var allMods = jQuery(".animated");
  var allVideo = jQuery("video");
  
  allMods.each(function(i, el) {
      el = jQuery(el);
  
      if (el.visible(true)) {
          el.addClass(el.attr("data-animation"));
          el.prop('autoplay', true);
          el.prop('loop', true);
      }else{
        el.removeClass(el.attr("data-animation"));
      } 
  });
  
  allVideo.each(function(i, el) {
   
    el = jQuery(el);
    
    if (el.visible(true)) {
      el[0].play();
    }else{
      el[0].pause();
    }
  });



  if(jQuery('body').width() > 768){

     allVideo.each(function(i, el) {       
        el = jQuery(el);
        el[0].play();
      });

    win.scroll(function(event) {

        allMods.each(function(i, el) {

          el = jQuery(el);
          
          if (el.visible(true)) {    
            el.addClass(el.attr("data-animation"));
          }

        });
        
        allVideo.each(function(i, el) {
          
          el = jQuery(el);
        
          if (el.visible(true)) {
            el[0].play();
          }else{
            el[0].pause();
          }
        });
    });
  }else{
      
      allMods.each(function(i, el) {
        el = jQuery(el);
        el.addClass(el.attr("data-animation"));
        el.css({'opacity':1});
      });

      allVideo.each(function(i, el) {
       
        el = jQuery(el);
       
        if (el.visible(true)) {
          el[0].play();
        }else{
          el[0].pause();
        }
      
      });
  }
     
}