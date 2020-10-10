/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { FooterConatiner } from '../components/footer/footer.container';
import HeaderContainer from '../components/header/header.container';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from "../context/firebase"
import Form from '../components/form/form.component';
import { SIGN_UP, BROWSE } from '../constants/routes';
import { useHistory } from "react-router-dom"


const SignInPage = () => {
    const history = useHistory()
    const { firebase_ } = useContext(FirebaseContext)
    const [email, setEmail] = useState("ghana@gmail.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");

    const isInvalid = password === "" || email === ""
    async function handleSignIn(e) {
        e.preventDefault()
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email) && password.length > 4) {
            try {
                const auth = await firebase_.auth()
                const userData = await auth.signInWithEmailAndPassword(email, password)
                history.push(BROWSE)
            } catch (error) {
                setEmail("")
                setPassword("")
                setError(error.message)
            }
        } else {
            setEmail("")
            setPassword("")
            setError("Come On type some real stuff")
        }
    }

    return (
        <>
            <HeaderContainer style={{ color: "white" }}>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn}>
                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            autoComplete="ghsrtjklgsrhgjksrehsrjk"
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            type="password"
                        />
                        <Form.Submit
                            type="submit"
                            disabled={isInvalid}
                        >Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={SIGN_UP}>Sign Up</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.Learn More
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterConatiner />
        </>
    );
}

export default SignInPage;
