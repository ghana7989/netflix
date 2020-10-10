/* eslint-disable no-unused-vars */
import React from 'react'
import { SelcetProfileContainer } from '../profile/profile.container'
import { FirebaseContext } from "../../context/firebase"
import { useState } from 'react'
import { Loading } from '../loading/loading.component'
import Header from '../header/header.component'



export function BrowserContainer({ slides }) {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = React.useState({})
    const { firebase_ } = React.useContext(FirebaseContext)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [profile])
    const user = firebase_.auth().currentUser || {};
    return !profile.displayName ? (
        <SelcetProfileContainer user={user} setProfile={setProfile} />
    ) : (
            <>
                {
                    loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />
                }
                <Header src="https://i.imgur.com/OswPfm1.jpg">
                    <p>SMILE</p>
                </Header>
            </>
        )
}