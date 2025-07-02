import React from 'react'

const TestimonialCard = ({ name = 'John Doe', feedback = 'Great work!', role = 'Client' }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-feedback">"{feedback}"</p>
            <div className="testimonial-info">
                <span className="testimonial-name">{name}</span>
                <span className="testimonial-role">{role}</span>
            </div>
        </div>
    )
}

export default TestimonialCard

