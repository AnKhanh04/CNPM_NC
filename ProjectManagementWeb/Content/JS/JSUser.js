document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('avatar-btn').addEventListener('click', function () {
        var menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Ẩn menu khi nhấn ra ngoài
    window.onclick = function (event) {
        if (!event.target.matches('#avatar-btn')) {
            var dropdowns = document.getElementsByClassName('menu');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    };
});