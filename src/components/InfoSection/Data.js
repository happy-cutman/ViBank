import svg6 from '../../images/svg-6.svg'
import svg4 from '../../images/svg-4.svg'
import svg5 from '../../images/svg-5.svg'

export const HomeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false,
    img: svg6
};

// imgStart если true то картинка слева

export const HomeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have no covered no matter where you are located. All you need as internet connection and a phone o computer',
    buttonLabel: 'Learn more',
    imgStart: true,
    alt: 'piggyBank',
    dark: false,
    primary: false,
    darkText: true,
    img: svg4
};


export const HomeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Join our team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start now',
    imgStart: false,
    alt: 'papers',
    dark: false,
    primary: false,
    darkText: true,
    img: svg5
};
