import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Hàm đơn giản để bật/tắt menu trên thiết bị di động
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.toggle('hidden');
    };

    return (
        <header className="flex justify-between items-center px-4 py-4 lg:px-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
                HUAN
            </h1>

            {/* Điều hướng trên máy tính */}
            <nav className="hidden md:flex items-center gap-10">
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    CÔNG TY
                </a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    MÓN ĂN
                </a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    ĐỒ UỐNG
                </a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                    LIÊN HỆ
                </a>
            </nav>

            <button
                className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
            >
                ĐĂNG NHẬP
            </button>

            {/* Nút Menu Di Động - Chỉ hiển thị trên thiết bị di động */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className="bx bx-menu"></i>
            </button>

            {/* Menu Di Động */}
            <div
                id="mobileMenu"
                className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
            >
                <nav className="flex flex-col gap-6 items-center">
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        CÔNG TY
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        MÓN ĂN
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        ĐỒ UỐNG
                    </a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
                        LIÊN HỆ
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;