/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { FooterConatiner } from '../components/footer/footer.container';
import HeaderContainer from '../components/header/header.container';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from "../context/firebase"
import Form from '../components/form/form.component';
import { BROWSE, SIGN_IN } from '../constants/routes';
import { useHistory } from "react-router-dom";


const SignUpPage = () => {
    const history = useHistory();
    const { firebase_ } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("@gmail.com");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");
    const [images, setImages] = useState(["https://i.imgur.com/NCp7cBW.png", "https://i.imgur.com/HzUFUcI.png", "https://i.imgur.com/Allq3JX.png", "https://i.imgur.com/vwgzzyv.png", "https://i.imgur.com/b25otQz.png"])
    const isInvalid = firstName === "" || password === "" || email === "" || password !== confirmPassword

    const handleSignUp = (e) => {
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * 5)
        const imageUrl = images[randomNum]
        // Firebase Stuff
        firebase_.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: images[Math.floor(Math.random() * 5)],
                    })
                    .then(() => {
                        history.push(BROWSE);
                    })
            )
            .catch(error => {
                setFirstName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer style={{ color: "white" }}>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp}>
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                            autoComplete="off"
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            autoComplete="jfcioerfhrhjeqrfhjeqrfhqrie"
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            type="password"
                        />
                        <Form.Input
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)}
                            type="password"
                        />
                        <Form.Submit
                            type="submit"
                            disabled={isInvalid}
                        >Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a Netflix user? <Form.Link to={SIGN_IN}>Sign In NOW!</Form.Link>
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

export default SignUpPage;
