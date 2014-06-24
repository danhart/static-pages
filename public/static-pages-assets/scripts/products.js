define(['http://www.notonthehighstreet.com/javascripts/js-built/noths.price_refresher.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/modules/product_details_tab_module.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/noths.tracking_api/noths.tracking_api.events.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/noths.product/noths.product.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/lib/jquery.noths.carousel.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/lib/jquery.noths.carousel.zoom.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/tabs_carousel_memory.js',
        'http://www.notonthehighstreet.com/javascripts/js-built/noths.form_field_notification.js'], function(priceRefresher, ProductDetailsTabModule) {

    NOTHS.product.init();
    NOTHS.product.initialiseAddToList();
    NOTHS.product.initialiseTabs();

    var productDetailsTabModule = new ProductDetailsTabModule($('#product_details_tab'));
    productDetailsTabModule.init();

    if (NOTHS.MediaQueryDetection !== undefined  && NOTHS.MediaQueryDetection.usingMedia("desktop")) {
        var productCarousel = $.nothsCarousel($('.browsable'), {
            borderSize: 2,
            carouselScope: 'carousel',
            carouselWrapHeight: '350px',
            direction: 'vertical',
            dispItems: 4,
            mainImageContainer: 'product_main_image_container',
            prevBtnInsert: 'prependTo',
            showControlOnMainImage: true,
            userAddress: true,
            verticalMargin: 0
        });

        $.nothsCarouselZoom(productCarousel, {});

        $('div#more_from_seller_row div.carousel').nothsCarousel({
            carouselScope: 'more_from_seller_row',
            showButtons: true,
            userAddress: true,
            adressIdentifier: 'carousel',
            direction: 'horizontal',
            verticalMargin: 0,
            dispItems: 3,
            autoSlide: false,
            loop: false,
            pagination: true
        })
        .find('.product_link')
        .nothsAutoTrackClick('more-items-from-seller');

        $('div#our_related_products div.carousel').nothsCarousel({
            carouselScope: 'our_related_products',
            showButtons: true,
            userAddress: true,
            adressIdentifier: 'carousel',
            direction: 'horizontal',
            verticalMargin: 0,
            dispItems: 3,
            autoSlide: false,
            loop: false,
            pagination: true
        })
        .find('.product_link')
        .nothsAutoTrackClick('related-products');


        $('#partner_returns_info_link').fancybox({
            titleShow: false,
            autoDimensions: false,
            width: 600,
            height: 400
        });

        $('#noths_returns_info_link').fancybox({
            href: "/about/returns.js",
            ajax: {
            dataType: 'html'
        },
            autoSize : false,
            width: 600,
            height: 400
        });

    } else if (NOTHS.MediaQueryDetection !== undefined  && NOTHS.MediaQueryDetection.usingMedia("mobile"))  {
        $.nothsCarousel($('.browsable'), {
            borderSize: 2,
            carouselScope: 'carousel',
            carouselWrapHeight: 'auto',
            direction: 'responsiveHorizontal',
            dispItems: 4,
            mainImageContainer: 'product_main_image_container',
            prevBtnInsert: 'prependTo',
            showControlOnMainImage: true,
            verticalMargin: 0,
            horizontalMargin: 8
        });
    }

    $("#product_tabs").tabs();
    $(".has_form_field_notification").nothsFormFieldNotification();

    priceRefresher.init($("#product_purchase select"));

    // starts the 'you may also like' carousel as demonstrated below [1]
    $(document).bind('peerius_products_loaded', function(){
      if (NOTHS.MediaQueryDetection !== undefined  && NOTHS.MediaQueryDetection.usingMedia("desktop")) {
        $('div#related_products div.carousel').nothsCarousel({
            carouselScope: 'related_products',
            showButtons: true,
            userAddress: true,
            adressIdentifier: 'carousel',
            direction: 'horizontal',
            verticalMargin: 0,
            dispItems: 3,
            autoSlide: false,
            loop: false,
            pagination: true
        })
        .find('.product_link')
        .nothsAutoTrackClick('related-products');
      }
    });
    // [1] the following line exemplifies how peerius should be called whenever necessary (once per page load).
    //$(document).trigger('peerius_products_loaded');
});
