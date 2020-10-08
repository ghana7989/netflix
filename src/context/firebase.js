/* eslint-disable no-unused-vars */
import React from 'react';
import { createContext } from "react";
import { firebase } from "../lib/firebase.prod"

export const FirebaseContext = createContext()
const FirebaseContextProvider = (props) => {
    return (
        <FirebaseContext.Provider value={firebase}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContextProvider;