import Header from '~/components/Header';
import Slider from './Slider';
import Services from './Services';
import About from './About';
import Professional from './Professional';
import Contact from './Contact';
import Footer from '~/components/Footer';
import { useEffect } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Home() {
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
                <ArrowUpwardIcon />
            </button>
        </>
    );
}

export default Home;
