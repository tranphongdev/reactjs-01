import Header from '~/components/Header';
import Slider from './Slider';
import Services from './Services';
import About from './About';
import Professional from './Professional';
import Contact from './Contact';
import Footer from '~/components/Footer';
import { useEffect } from 'react';
import arrowUp from '~/assets/arrow-up.svg';

function Home() {
    useEffect(() => {
        // Lắng nghe sự kiện khi scroll
        window.onscroll = function () {
            scrollFunction();
        };

        return () => {
            // Xoá sự kiện khi component unmout
            window.onscroll = null;
        };
    }, []);

    const scrollFunction = () => {
        var btnScrollToTop = document.getElementById('btnScrollToTop');

        // Hiển thị nút khi scroll xuống 20px từ đầu trang
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = 'flex';
        } else {
            btnScrollToTop.style.display = 'none';
        }
    };

    // Xử lý sự kiện click vào nút scroll lên đầu trang
    function scrollToTop() {
        // document.body.scrollTop = 0;  Safari
        document.documentElement.scrollTop = 0;
    }

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
                <img src={arrowUp} alt="Arrow Up" />
            </button>
        </>
    );
}

export default Home;
