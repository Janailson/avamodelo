jQuery(function () {
    $('.sp-cover').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');

        $('.sp-cover').removeClass("selected");

        $('.sp-cover[data-id="' + id + '"]').addClass("selected");
    });

    /** Form */
    $('#form1').submit(function (e) {
        e.preventDefault();

        $('[data-ava-name="capitulos-remover"]').each(function () {
            var id = $(this).data('id');
            console.log("Capítulo: " + id);
        });
    });

    $(".sortable").sortable({
        start: function (event, ui) {
            ui.item.addClass("picked");
        },
        stop: function (event, ui) {
            ui.item.removeClass("picked");
        }
    });

    $('#uplMaterial').change(function () {
        var html = '';
        for (i = 0; i < $(this)[0].files.length; i++) {
            var name = $(this)[0].files[i].name;
            name = name.substr(0, name.lastIndexOf("."));

            html += '<tr>\n';
            html += '<td><input type="text" name="material" class="form-control" value="' + name + '" maxlength="60" /></td>\n';
            html += '<td><input type="number" name="material" class="form-control" min="1" value="' + (i + 1) + '" /></td>\n';
            html += '<td class="text-center"><input type="checkbox" name="material" /></td>\n';
            html += '</tr>\n';
        }

        $('#modalMateriais').modal("show");
        $('#modalMateriais table tbody').html(html);
    });

    $('[data-ava-name="capitulos"]').click(function (e) {
        e.preventDefault();
        $('#modalCapitulo').modal("show");
    });

    $('[data-ava-name="capitulos-remover"]').click(function (e) {
        e.preventDefault();
        Swal.fire({
            title: '',
            text: "Deseja remover o capítulo?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        });
    });

    $('#ddlRede').select2();
});