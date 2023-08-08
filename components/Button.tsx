import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface ButtonProps {
    title: string;
    type?: 'button' | 'submit';
    textColor?: string;
    bgColor?: string;
    submitting?: boolean;
    leftIcon?: string | null;
    rightIcon?: string | null;
    handleClick?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
    title,
    type,
    textColor,
    bgColor,
    submitting,
    leftIcon,
    rightIcon,
    handleClick,
}) => {
    return (
        <button
            type={type || 'button'}
            className={`flexCenter gap-3 px-4 py-3 rounded-2xl
            ${textColor ? textColor : 'text-white'}
            ${submitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'}`}
            onClick={handleClick}
        >
            {leftIcon && (
                <Image
                    src={leftIcon}
                    width={14}
                    height={14}
                    alt="left icon"
                />
            )}
            {title}
            {rightIcon && (
                <Image
                    src={rightIcon}
                    width={14}
                    height={14}
                    alt="right icon"
                />
            )}
        </button>
    );
};

export default Button;
