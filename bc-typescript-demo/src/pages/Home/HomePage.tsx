import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import About from './About';
import Contact from './Contact';
import Professional from './Professional';
import Services from './Services';
import Slider from './Slider';
import arrowUp from '../../assets/arrow-up.svg';

const HomePage = () => {
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
        <div className="grid">
            <Header />

            <main>
                <Slider />
                <Services />
                <About />
                <Professional />
                <Contact />
            </main>

            <Footer />

            <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top">
                <img src={arrowUp} alt="Arrow Up" />
            </button>
        </div>
    );
};

export default HomePage;
