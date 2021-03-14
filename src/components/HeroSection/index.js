import React, {useState} from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

import { HeroContainer,
         HeroBg, 
         VideoBg, 
         HeroContent, 
         HeroBtnWrapper, 
         HeroH1,
          HeroP,
          ArrowForward,
           ArrowRight
        } from './HeroElemements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                 <VideoBg autoPlay loop muted src={video} type='video/mp4' />
             </HeroBg> 
             <HeroContent>
                     <HeroH1>Virtual Banking Made Easy</HeroH1>
                     <HeroP>
                         Sign Up for a new account Today and receive $250 in credit
                         towards your next payment.
                     </HeroP>
                     <HeroBtnWrapper> 
                         <Button to="signup" onMouseEnter={onHover}
                         onMouseLeave={onHover}
                         primary='true'
                         dark='true'
                         smooth={true} 
                        duration={500}
                         spy={true}
                          exact='true'
                        offset={-80}
                         >
                             Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                             </Button>
                     </HeroBtnWrapper>
                 </HeroContent>        
       </HeroContainer>
    );
};

export default HeroSection;
