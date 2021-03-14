import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter,FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                      <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>
                      </FooterLinkItems>
                        <FooterLinkItems>
                         <FooterLinkTitle> Contact  Us </FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destinations</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                                <FooterLink to="/">Membership</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                             <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                            <WebsiteRights>dolla © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                               <FaFacebook />
                           </SocialIconLink>
                           <SocialIconLink href='//www.instagram.com/patrick_cage' target="_blank" aria-label="Instagram">
                               <FaInstagram />
                           </SocialIconLink>
                           <SocialIconLink href='/' target="_blank" aria-label="YouTube">
                               <FaYoutube />
                           </SocialIconLink>
                           <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                               <FaTwitter />
                           </SocialIconLink>
                           <SocialIconLink href='https://www.linkedin.com/in/patrick-ngure/' target="_blank" aria-label="Linkedin">
                               <FaLinkedin />
                           </SocialIconLink>
                       </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
