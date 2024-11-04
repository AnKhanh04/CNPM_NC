    $(document).ready(function () {
        $('td').hover(
            function () {
                $(this).css('background-color', '#3a3b3c');
                $(this).find('select').css('background-color', '#3a3b3c');
            },
            function () {
                $(this).css('background-color', '');
                $(this).find('select').css('background-color', '#1c1e21');
            }
        );

        $('.edit-icon i').click(function () {
            alert('Biểu tượng bút chì đã được nhấn!');
        });
    });