import React from 'react';
import { FAQContainer } from '../components/faq/faq.container';
import Feature from '../components/feature/feature.component';
import { FooterConatiner } from '../components/footer/footer.container';
import HeaderContainer from '../components/header/header.container';
import JumbotronContainers from '../components/jumbotron/jumbotron-containers';
import OptForm from '../components/opt-form/optForm.component';

const HomePage = () => {
    return (
        <>
            <HeaderContainer buttonLinkText="Sign In">
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email Address..." />
                        <OptForm.Button>GET STARTED</OptForm.Button>
                    </OptForm>
                </Feature>

            </HeaderContainer>
            <JumbotronContainers />
            <FAQContainer />
            <FooterConatiner />

        </>
    );
}

export default HomePage;
