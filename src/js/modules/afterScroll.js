export default function initAfterScroll(){
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 400) {
                $(".nav-container").addClass("afterScroll");
            } else {
               $(".nav-container").removeClass("afterScroll");
            }
        });
    });
}