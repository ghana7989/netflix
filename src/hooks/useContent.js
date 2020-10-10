/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseContent(target) {
    const [content, setContent] = useState([])
    const { firebase_ } = useContext(FirebaseContext)
    const firebase = { ...firebase_ }
    useEffect(() => {
        firebase.firestore().collection(target).get().then(snapshot => {
            const allContent = snapshot.docs.map(contentObj => ({
                ...contentObj.data(),
                docId: contentObj.id
            }))
            setContent(allContent)
        }).catch(err => {
            alert(err.message)
            console.error(err);
        })
    }, [])

    return {
        [target]: content
    }
}