//Getting the necessary URL's 
jQuery(document).ready(function(jQuery) {
    
    //This gets the current page from the url and finds the link on the page that has the url, highlights it. (on reload)
    var currentlySelectedPageTitle = jQuery( 'a[href*="'+window.location.pathname+'"]' );
    if(currentlySelectedPageTitle[0]){
        jQuery(currentlySelectedPageTitle[0]).addClass('currently-selected-page');
    }

    var mainContent = jQuery("#primary");
    var siteUrl = top.location.protocol+"//" + top.location.host.toString();
    var url = ''; 

    //If we are on mobile    
    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //Don't do the link thing.
    } else{
        //Making sure that we don't bind the ajax call to any not-needed links (admin links)
        jQuery(document).delegate("a[href^='"+siteUrl+"']:not([href*='/wp-admin/']):not([href*='/wp-login.php']):not([href$='/feed/']):not([href*='/wp-content/']):not([href*='/job']):not([href*='/contact/']):not([href*='/about'])", "click", function() {
            location.hash = this.pathname;
            return false;
        });
    }    

    //Binding code to link clicks.
    jQuery(window).bind('hashchange', function(){
        var nextState = { additionalInformation: 'Updated the URL with JS' };
        url = window.location.hash.substring(1); 
        
        if (!url) {
            return;
        } 

        // Setting doc title manually on click.
        var documentTitle = jQuery( 'a[href*="'+url+'"]' )[0].innerHTML;
        if(documentTitle.includes("<img")){
            documentTitle = "Next-Gen Dreams 3D";
        }
        document.title = documentTitle;

        //Replacing state for history
        window.history.replaceState(nextState, 'Title', url);

        //This is what's highlighting the currently selected page on the side. 
        currentlySelectedPageTitle = jQuery( 'a[href*="'+url+'"]' );
        if(currentlySelectedPageTitle[0]){
            jQuery(".currently-selected-page").removeClass('currently-selected-page');
            jQuery(currentlySelectedPageTitle[0]).addClass('currently-selected-page');
        }

        url = url + " #main"; 
        
        mainContent.css({ 'opacity' : 0 });
        window.scrollTo(0, 0);

        // This is what's actually loading the new content in on click. Can add some sort of transition in here if needed.
        mainContent.load(url, function() {
            mainContent.animate({opacity: "1"});
        });
    });

    jQuery(window).trigger('hashchange');

    //This detects when the history changes (navigation back or forward.)
    window.onpopstate = function(event){
        //If we have a state
        if(event.state){
            //If we are pressing back button
            if(event.state.additionalInformation){
                location.reload();
            }
            //If we are in lightbox state
            else if(event.state.viewer){

            }
            else{
                //Do nothing.
                console.log('Found a different state.')
                console.log(event.state);
            }
        }
        //Else, we're navigating site as usual.
    }

});

