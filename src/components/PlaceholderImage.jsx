import React from 'react'

const PlaceholderImage = ({ initials = 'AB', size = 300, className = '' }) => {
    return (
        <div
            className={`bg-blue-primary text-white flex items-center justify-center font-bold rounded-lg font-inter ${className}`}
            style={{
                width: size,
                height: size,
                fontSize: `${size * 0.4}px`
            }}
        >
            {initials}
        </div>
    )
}

export default PlaceholderImage