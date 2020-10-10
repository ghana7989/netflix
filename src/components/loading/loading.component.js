import React from 'react'
import { Spinner, LockBody, ReleaseBody, Picture} from "./loading.styles"

export const Loading = ({ src, ...otherProps }) => {

    return (
        <Spinner {...otherProps}>
            <LockBody />
            <Picture src={src} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}