import React from 'react'
import signature from '../assets/signature.jpg'

const Favicon = () => {
    return (
        <img
            src={signature}
            alt="Signature Favicon"
            width={32}
            height={32}
            className="rounded-lg"
        />
    )
}

export default Favicon 