import React, { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

// Definimos las variantes permitidas
type ButtonVariant = 'principal' | 'secundary';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string; // Permitimos extender clases desde fuera
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = 'principal',
    className = '',
    ...props
}) => {
    const buttonClasses = `${styles.button} ${styles[variant]} ${className}`.trim();

    return (
        <button className={buttonClasses} {...props} onClick={props.onClick}>
            {children}
        </button>
    );
};

export default CustomButton;