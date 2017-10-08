import React from 'react';
import {
    FooterContainer,
    FooterWrapper
} from './Footer.styles';
import PageTitle from '../PageTitle/PageTitle';

const Footer = () =>
    <FooterContainer>
        <FooterWrapper>
            <PageTitle/>
        </FooterWrapper>
    </FooterContainer>;

export default Footer;