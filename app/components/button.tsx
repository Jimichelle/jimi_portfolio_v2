import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className=" text-white px-2 py-1 rounded-xl border-2 border-white">
            {children}
        </button>
    )
}

export default Button