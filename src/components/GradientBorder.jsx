import React from 'react';

const GradientBorder = ({
    children,
    className = "",
    borderWidth = "2px",
    borderRadius = "0.5rem",
    gradientColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"],
    animationDuration = "3s",
    ...props
}) => {
    const gradientString = gradientColors.join(', ');

    return (
        <div
            className={`gradient-border-container ${className}`}
            style={{
                '--border-width': borderWidth,
                '--border-radius': borderRadius,
                '--gradient-colors': gradientString,
                '--animation-duration': animationDuration,
            }}
            {...props}
        >
            <div className="gradient-border-content">
                {children}
            </div>
        </div>
    );
};

export default GradientBorder; 