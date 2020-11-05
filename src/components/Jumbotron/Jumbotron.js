import React, {useState} from 'react';
import {
    JumbotronContainer,
    JumbotronBg,
    VideoBg,
    JumbotronContent,
    JumbotronBtnWrapper,
    JumbotronH1,
    JumbotronP,
    ArrowForward,
    ArrowRight
} from './JumbotronStyles';
import { Button }from '../ButtonStyles'
import video from '../../videos/video.mp4'
import {NavLinks} from '../Navbar/NavbarStyles';

const Jumbotron = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <JumbotronContainer>
            <JumbotronBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </JumbotronBg>
            <JumbotronContent>
                <JumbotronH1>Virtual Banking Made Easy</JumbotronH1>
                <JumbotronP>Sign up for a new account today and receive $250
                    in credit towards your next payment</JumbotronP>
                <JumbotronBtnWrapper>
                    <Button primary='true'
                            dark='true'
                            to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}>
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </JumbotronBtnWrapper>
            </JumbotronContent>
        </JumbotronContainer>
    );
};

export default Jumbotron;