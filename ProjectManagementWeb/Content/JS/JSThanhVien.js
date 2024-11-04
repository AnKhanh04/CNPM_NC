document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện click trên các thẻ a
    document.querySelectorAll('.sec').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

            const contentType = this.getAttribute('data-content');
            const mainContent = document.querySelector('.main-content');

            if (contentType === 'thanh-vien') {
                mainContent.innerHTML = `
            <div class="section-title">
                Thành viên không gian làm việc (1)
            </div>
            <div class="section-content">
                <p>
                    Các thành viên trong Không gian làm việc có thể xem và tham gia tất cả các bảng Không gian làm việc hiện thị và tạo ra các bảng mới trong Không gian làm việc.
                </p>
            </div>
            <div class="section-title">
                Mời các thành viên tham gia cùng bạn
            </div>
            <div class="section-content-right">
                <div>
                    <p id="label">
                        Bất kỳ ai có liên kết mời đều có thể tham gia Không gian làm việc miễn phí này. Bạn cũng có thể tắt và tạo liên kết mời cho Không gian làm việc này bất cứ lúc nào. Số lời mời đang chờ xử lý được tính vào giới hạn 10 người cộng tác.
                    </p>
                </div>
                <button id="btn-link">
                    Mời bằng liên kết
                </button>
            </div>
            <div class="invite-section">
                <input placeholder="Lọc theo tên" type="text" />
            </div>
            <div class="member-list">
                <img alt="Member avatar" height="40" src="https://storage.googleapis.com/a1aa/image/ThV8teaZXeiWzUlj9oQD3WsQpfdC3HN4tgrScE5UMv48lTLnA.jpg" width="40" />
                <div class="member-info">
                    <p class="name">
                        Nguyễn An
                    </p>
                    <p class="activity">
                        annguyengia1995 - Lần hoạt động gần nhất October 2024
                    </p>
                </div>
                <div class="member-actions">
                    <button>
                        Xem bảng thông tin (1)
                    </button>
                    <button>
                        Quản trị viên
                    </button>
                    <button>
                        Rời khỏi...
                    </button>
                </div>
                `;
            } else if (contentType === 'khach') {
                mainContent.innerHTML = `
                 <div class="section-title-khach">
            Khách (0)
        </div>
        <div class="section-content-khach">
            <p>
                Khách chỉ có thể xem và chỉnh sửa bảng mà họ được thêm vào.
            </p>
        </div>
        <hr />
        <div class="section-content-right-khach">
            <div>
                <p id="label-khach">
                    Không có khách nào trong Không gian làm việc này.
                </p>
            </div>
        </div>
        <hr />
                `;
            } else if (contentType === 'yeu-cau') {
                mainContent.innerHTML = `
                <div class="section-title-yctg">
            Yêu cầu tham gia (0)
        </div>
        <div class="section-content-yctg">
            <p>
                Những người này đã yêu cầu tham gia Không gian làm việc này. Việc thêm thành viên Không gian làm việc mới sẽ tự động cập nhật thanh toán của bạn. Khách của Không gian làm việc đã được tính vào giới hạn người cộng tác trong Không gian làm việc miễn phí.
            </p>
        </div>
        <hr />
        <div class="section-content-right-yctg">
            <div>
                <p id="label-yctg">
                    Không có yêu cầu tham gia nào.
                </p>
            </div>
            <div class="filter-container-yctg">
                <input type="text" placeholder="Lọc theo tên">
                <div id="check-box-yctg">
                    <input type="checkbox" id="select-all-yctg">
                    <label for="select-all-yctg">Chọn tất cả (0)</label>
                    <div class="buttons">
                        <button id="them-yctg">Thêm mục đã chọn vào Không gian làm việc</button>
                        <button id="xoa-yctg">Xóa yêu cầu đã chọn</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
                `;
            }
        });
    });
});
