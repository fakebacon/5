jQuery(document).ready(function(){
    jQuery('.main-navigation-toggle').attr('href', '#masthead');
    function bellowPop(){ jQuery('body').addClass('freeze'); jQuery('.bellows, #primary, #secondary').addClass('fly'); 
    }
    function bellowDown(){ jQuery('body').removeClass('freeze'); jQuery('.bellows, #primary, #secondary, .main-navigation-toggle').removeClass('fly').removeClass('active'); window.history.pushState("", null, "./");
    }
    jQuery('.main-navigation-toggle').on('click',function(){
        jQuery(this).toggleClass('fly');
            if(jQuery(this).is('.fly')){ bellowPop();
                if (window.history && window.history.pushState) { window.history.pushState('TRAVEL', null, './#TRAVEL'); jQuery(window).on('popstate', function() { bellowDown(); });
    			}
    			jQuery('.bellows-main').not('.bellows-nav').on('click', function(){bellowDown();
    			});
            } if(jQuery(this).is(':not(.fly)')){
                bellowDown();
            }}); });
