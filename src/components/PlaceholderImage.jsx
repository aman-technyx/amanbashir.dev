import React from 'react'

const PlaceholderImage = ({ initials = 'AB', size = 300, className = '' }) => {
    const style = {
        width: size,
        height: size,
        backgroundColor: '#2563eb',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${size * 0.4}px`,
        fontWeight: 'bold',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif'
    }

    return (
        <div style={style} className={className}>
            {initials}
        </div>
    )
}

export default PlaceholderImage