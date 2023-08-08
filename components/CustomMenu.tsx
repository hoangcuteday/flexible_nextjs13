import { IconButton } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

interface CustomMenuProps {
    title: string;
    state: string;
    filters: Array<string>;
    setState: (value: string) => void;
}

const CustomMenu: React.FC<CustomMenuProps> = ({ title, state, filters, setState }) => {
    const toggle = useRef<HTMLDivElement>(null);

    return (
        <div className="flexStart flex-col w-full gap-7 relative">
            <label
                htmlFor="title"
                className="w-full text-gray-100"
            >
                {title}
            </label>
            <div className="relative self-start">
                <div
                    className="flexCenter custom_menu-btn cursor-pointer"
                    onClick={() => {
                        toggle.current?.classList.toggle('custom_menu-items-open');
                    }}
                >
                    {state || 'Select a category'}{' '}
                    <Image
                        src="/arrow-down.svg"
                        width={10}
                        height={5}
                        alt="Arrow down"
                    />
                </div>
                <div
                    ref={toggle}
                    className="flex justify-start custom_menu-items"
                >
                    {filters.map((tag) => {
                        return (
                            <div key={tag}>
                                <button
                                    value={tag}
                                    type="button"
                                    className="custom_menu-item"
                                    onClick={(e) => {
                                        toggle.current?.classList.toggle('custom_menu-items-open');
                                        setState(e.currentTarget.value);
                                    }}
                                >
                                    {tag}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CustomMenu;
