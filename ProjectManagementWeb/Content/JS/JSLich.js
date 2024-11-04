
const monthName = document.querySelector('.month-name');
const daysContainer = document.querySelector('.days');
let currentDate = new Date();
let currentView = 'month'; // Để lưu chế độ xem hiện tại

function renderCalendar() {
    daysContainer.innerHTML = ''; // Xóa hết các ngày hiện tại
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthName.textContent = `Tháng ${month + 1} ${year}`;

    if (currentView === 'month') {
        renderMonthView(month, year);
    } else if (currentView === 'week') {
        renderWeekView();
    }
}

function renderMonthView(month, year) {
    daysContainer.innerHTML = ''; // Xóa hết các ngày hiện tại

    const today = new Date(); // Lấy ngày hiện tại
    const firstDayOfMonth = new Date(year, month, 1);
    let startDay = firstDayOfMonth.getDay();

    // Điều chỉnh để bắt đầu từ Thứ 2 (chuyển Chủ Nhật thành vị trí 6)
    startDay = startDay === 0 ? 6 : startDay - 1;

    const lastDate = new Date(year, month + 1, 0).getDate();

    // Tạo các ô trống trước ngày đầu tiên của tháng
    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    // Tạo các ngày trong tháng
    for (let day = 1; day <= lastDate; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;

        // So sánh ngày hiện tại với ngày trong lịch
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            // Thêm lớp để đánh dấu ngày hôm nay
            dayDiv.classList.add('today');
        }

        daysContainer.appendChild(dayDiv);
    }
}


function renderWeekView() {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Bắt đầu từ thứ 2

    // Xóa nội dung cũ trong daysContainer
    daysContainer.innerHTML = '';

    // Lặp qua 7 ngày để tạo các ô
    for (let i = 0; i < 7; i++) {
        const dayDiv = document.createElement('div');
        const dayDate = new Date(startOfWeek);
        dayDate.setDate(startOfWeek.getDate() + i);
        dayDiv.textContent = dayDate.getDate();

        // Kiểm tra xem có phải là ngày hôm nay không
        const today = new Date();
        if (dayDate.toDateString() === today.toDateString()) {
            dayDiv.classList.add('today'); // Thêm class 'today' cho ngày hôm nay
            const dot = document.createElement('span'); // Tạo dấu chấm
            dot.classList.add('today-dot'); // Thêm class cho dấu chấm
            dayDiv.appendChild(dot); // Thêm dấu chấm vào ô ngày
        }

        // Kiểm tra xem ngày có nằm trong tháng hiện tại không
        if (dayDate.getMonth() === currentDate.getMonth()) {
            daysContainer.appendChild(dayDiv); // Chỉ thêm ngày nếu nằm trong tháng hiện tại
        }
    }
}



// Chuyển tháng
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentView === 'month') {
        currentDate.setMonth(currentDate.getMonth() - 1);
    } else if (currentView === 'week') {
        currentDate.setDate(currentDate.getDate() - 7);
    }
    renderCalendar();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentView === 'month') {
        currentDate.setMonth(currentDate.getMonth() + 1);
    } else if (currentView === 'week') {
        currentDate.setDate(currentDate.getDate() + 7);
    }
    renderCalendar();
});

// Chuyển giữa chế độ xem tuần/tháng
document.querySelector('.week-view-btn').addEventListener('click', () => {
    currentView = 'week';
    renderCalendar();
});

document.querySelector('.month-view-btn').addEventListener('click', () => {
    currentView = 'month';
    renderCalendar();
});

// Nút Hôm nay
document.querySelector('.today-btn').addEventListener('click', () => {
    currentDate = new Date(); // Trở về ngày hiện tại
    renderCalendar();
});

// Hiển thị lịch khi tải trang
renderCalendar();
