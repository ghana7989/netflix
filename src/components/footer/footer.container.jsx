import React from 'react'
import Footer from './footer.component'

export const FooterConatiner = () => {
    return (
        <Footer>
            <Footer.Title>Questions? Call 000-800-040-8143</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Links href="#">FAQ</Footer.Links>
                    <Footer.Links href="#">Investor Relations</Footer.Links>
                    <Footer.Links href="#">Privacy</Footer.Links>
                    <Footer.Links href="#">Speed Test</Footer.Links>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Links href="#">Help Center</Footer.Links>
                    <Footer.Links href="#">Jobs</Footer.Links>
                    <Footer.Links href="#">Cookie Preferences</Footer.Links>
                    <Footer.Links href="#">Legal Notic</Footer.Links>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Links href="#">Account</Footer.Links>
                    <Footer.Links href="#">Ways to Watch</Footer.Links>
                    <Footer.Links href="#">Corporate Information</Footer.Links>
                    <Footer.Links href="#">Netflix Originals</Footer.Links>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Links href="#">Media Center</Footer.Links>
                    <Footer.Links href="#">Terms Of Use</Footer.Links>
                    <Footer.Links href="#">Contact Us</Footer.Links>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
        <Footer.Title>Netflix India</Footer.Title>
        </Footer>
    )
};
