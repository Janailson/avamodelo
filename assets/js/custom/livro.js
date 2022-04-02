jQuery(function () {
    $('.sp-cover').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');

        $('.sp-cover').removeClass("selected");

        $('.sp-cover[data-id="' + id + '"]').addClass("selected");
    });
});