import twitter from '~/assets/twitter.svg';
import facebook from '~/assets/facebook-f.svg';
import instagram from '~/assets/instagram.svg';
import avt1 from '~/assets/avt1.svg';
import avt2 from '~/assets/avt2.svg';
import avt3 from '~/assets//avt3.svg';
import iconFB from '~/assets/facebook-bottom.svg';
import twitterB from '~/assets/twitter-b.svg';
import linkedinIn from '~/assets/linkedin-in.svg';
import youtube from '~/assets/youtube.svg';
import instagramB from '~/assets/instagram-b.svg';
import ServiceBg from '~/assets/service1.svg';
import ServiceBg3 from '~/assets/service3.svg';
import ServiceBg2 from '~/assets/service2.svg';

const menuMobile = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Service' },
    { id: 4, name: 'Gallery' },
    { id: 5, name: 'Blog' },
];

const infoMenu = [
    { id: 1, name: 'Terms & conditions' },
    { id: 2, name: 'Privacy policy' },
    { id: 3, name: 'Blog' },
    { id: 4, name: 'Contact' },
];

const iconSocial = [
    { id: 1, icon: twitter },
    { id: 2, icon: facebook },
    { id: 3, icon: instagram },
];

const dataUser = [
    {
        id: 1,
        title: 'Surgeon',
        name: 'Briyan Nevalli',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        avatar: avt1,
    },
    {
        id: 2,
        title: 'Dermatologist',
        name: 'Bella sebastian',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        avatar: avt2,
    },
    {
        id: 3,
        title: 'Stylist expert',
        name: 'Lilly Adams',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
        avatar: avt3,
    },
];

const iconSocialFooter = [
    { id: 1, icon: iconFB },
    { id: 2, icon: twitterB },
    { id: 3, icon: linkedinIn },
    { id: 4, icon: youtube },
    { id: 5, icon: instagramB },
];

const dataServices = [
    {
        id: 1,
        title: 'Beauty consultation',
        description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
        avatar: ServiceBg2,
    },
    {
        id: 2,
        title: 'Skin treatments',
        description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
        avatar: ServiceBg,
    },
    {
        id: 3,
        title: 'Beauty product',
        description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
        avatar: ServiceBg3,
    },
];

export { menuMobile, iconSocial, dataUser, iconSocialFooter, infoMenu, dataServices };
