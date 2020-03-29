define([
    "jquery"
  ], 
  function($) {
    "use strict"; 
    
    $(document).ready(function() {
        var maxHeight = 0;
        setTimeout(function(){ 
            $(".products-grid .product-item").each(function(){
                if ($(this).height() > maxHeight) { 
                    maxHeight = $(this).height(); 
                }
            });

            $(".products-grid .product-item").height(maxHeight);
        }, 3000);
        
    });
    
    $(window).resize(function() {
        $(".products-grid .product-item").height("");
        var maxHeight = 0;
        setTimeout(function(){ 
            $(".products-grid .product-item").each(function(){
                if ($(this).height() > maxHeight) { 
                    maxHeight = $(this).height(); 
                }
            });

            $(".products-grid .product-item").height(maxHeight);
        }, 500);
    });
    
  });