import Header from '~/components/Header';
import Slider from '~/pages/Home/Slider';
import Services from '~/pages/Home/Services';
import About from '~/pages/Home/About';
import Professional from '~/pages/Home/Professional';
import Contact from '~/pages/Home/Contact';
import Footer from '~/components/Footer';
// import arrowUp from '../../assets/arrow-up.svg';
import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        // Lắng nghe sự kiện khi scroll
        window.onscroll = function () {
            scrollFunction();
        };
        // Xoá sự kiện khi component unmout
        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollFunction = () => {
        const btnScrollToTop = document.getElementById('btnScrollToTop');
        // Hiển thị nút khi scroll xuống 20px từ đầu trang
        if (btnScrollToTop) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnScrollToTop.style.display = 'flex';
            } else {
                btnScrollToTop.style.display = 'none';
            }
        }
    };

    // Xử lý sự kiện click vào nút scroll lên đầu trang
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return (
        <>
            <Header />
            <Slider />
            <Services />
            <About />
            <Professional />
            <Contact />
            <Footer />

            <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top">
                {/* <img src={arrowUp} alt="Arrow Up" /> */}
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </>
    );
}

export default HomePage;
