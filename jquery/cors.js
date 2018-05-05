/* 
    I don't know why this is so difficult to google, but
    this single function will handle most cors issues with
    Jquery.  It's total magic... and I'm tired of spending
    an hour searching for it.
*/

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});