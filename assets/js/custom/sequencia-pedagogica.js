jQuery(function () {
    $('#viewsave').click(function (e) {
        e.preventDefault();
        $('#salvarExibicao').addClass("active");
        $('#salvarExibicao #nome').focus();
    });

    $('#viewsaveas').click(function (e) {
        e.preventDefault();
        $('#salvarExibicao').addClass("active");
        $('#salvarExibicao #nome').focus();
    });

    $('#salvarExibicao #nome').keyup(function (e) {
        if ($(this).val().length == 0)
            $('#salvarExibicao #salvar').attr("disabled", "disabled");
        else
            $('#salvarExibicao #salvar').removeAttr("disabled");
    });

    $('#salvarExibicao #cancelar').click(function () {
        $('#salvarExibicao #nome').val("");
        $('#salvarExibicao #salvar').attr("disabled", "disabled");
        $('#salvarExibicao').removeClass("active");
    });

    $('.sp-conteudo-lista dd').hide();

    $('.sp-conteudo-lista .flag').click(function (e) {
        e.preventDefault();
        var dd = $(this).parent().parent().parent().next();
        if (dd.is(':hidden')) {
            $(this).addClass("rotate");
            dd.show();
        }
        else {
            $(this).removeClass("rotate");
            dd.hide();
        }
    });

    $('.sp-cover').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');

        $('.sp-cover').removeClass("selected");

        $('.sp-cover[data-id="' + id + '"]').addClass("selected");
    });

    $('.secao-title').click(function (e) {
        e.preventDefault();

        var dd = $(this).parent().next();

        if (dd.is(":visible")) {
            $(this).find("i").removeClass("fa-minus-square");
            $(this).find("i").addClass("fa-plus-square");
        }
        else {
            $(this).find("i").removeClass("fa-plus-square");
            $(this).find("i").addClass("fa-minus-square");
        }

        dd.slideToggle();
    });
});