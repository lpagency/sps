/* DROPDOWN PLUGIN */
/* =============== */
(function($){

    var plugin_name = 'dropdown';
    $.fn[plugin_name] = function(options)
    {
        var settings = $.extend({}, $.fn[plugin_name].default, options);
        var self = this;
        var current_value = '';

        if ($(self).length > 0)
        {
            $(self).click(function ()
            {
                $(self).find(".dropdown__list").fadeToggle("fast");
            });

            $(self).find(".dropdown__list-item").click(function(){
                var new_value = $(this).attr('dropdown-val');

                if (current_value === new_value)
                {
                    return;
                }

                $(self).trigger('change', new_value);
                current_value = new_value;
            });

            return $(self);
        }
    }

    $.fn[plugin_name].default = {}
})(jQuery);
/* / DROPDOWN PLUGIN */
/* ================= */


$(document).ready(function(){

    var $window = $(window);
    var $menuItem = $(".menu__list-item");

    $menuItem.click(function () {
        if ($window.width() < 768) {
            var $this = $(this);
            var $menuInner = $this.find(".menu-inner");
            $menuInner.slideToggle("fast");
        }
    });

    $menuItem.hover(function (e) {
        e.stopPropagation();
        if ($window.width() > 768) {
            var $this = $(this);
            var $menuInner = $this.find(".menu-inner");
            $menuInner.stop().fadeIn("fast");
        }
    }, function (e) {
        e.stopPropagation();
        if ($window.width() > 768) {
            var $this = $(this);
            var $menuInner = $this.find(".menu-inner");
            $menuInner.stop().fadeOut("fast");
        }
    });

    var $btnSearch = $(".menu__searchbar-trigger");
    var $menuSearchbar = $(".menu__searchbar");

    $btnSearch.click(function () {
        $menuSearchbar.fadeToggle("fast");
    });

    var $btnMenu = $(".menu__btn");
    var $menuNav = $(".menu__nav");

    $btnMenu.click(function () {
        $menuNav.toggleClass("menu__nav--active");
    });

    var $openPopup = $(".open-popup");
    var $closePopup = $(".close-popup");
    var $popup = $(".popup");
    var $popupContent = $(".popup__content");
    var stop_close_popup = false;  // block popup from closing

    $openPopup.click(function (e) {
        e.preventDefault();
        var target = $(this).attr("data-popup");
        $(".popup[data-popup='" + target + "']").addClass("popup--active");
    });

    $closePopup.click(function (e) {
        if (stop_close_popup)
        {
            stop_close_popup = false;
            return;
        }
        e.preventDefault();
        var target = $(this).attr("data-popup");
        $(".popup[data-popup='" + target + "']").removeClass("popup--active");
    });

    $popupContent.click(function (e) {
        stop_close_popup = true;
        // e.stopPropagation();
    });

    if ($(".product").length > 0) {
        var $productImg = $(".product__img");
        var $productMediaItem = $(".product__media-list__item");
        $productMediaItem.click(function () {
            var $this = $(this);
            $productMediaItem.removeClass("product__media-list__item--active");
            $this.addClass("product__media-list__item--active");
            var targetSrc = $this.find("img").attr("src");
            $productImg.attr("src", targetSrc);
        });
        var $productSizeItem = $(".product__size-list__item");
        $productSizeItem.click(function () {
            $productSizeItem.removeClass("product__size-list__item--active");
            $(this).addClass("product__size-list__item--active");
        });
    }
});
