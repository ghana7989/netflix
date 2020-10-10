import { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from "../context/firebase";

export default function UseAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    const { firebase_ } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase_.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem("authUser")
                setUser(null);
            }
        })
        return () => listener();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { user };
}

