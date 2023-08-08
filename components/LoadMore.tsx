'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

interface loadMoreProps {
    startCursor: string;
    endCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

const LoadMore: React.FC<loadMoreProps> = ({
    startCursor,
    endCursor,
    hasNextPage,
    hasPreviousPage,
}) => {
    const router = useRouter();

    const handleNavigation = (type: string) => {
        const currentParams = new URLSearchParams(window.location.search);

        if (type === 'prev' && hasPreviousPage) {
            currentParams.delete('endcursor');
            currentParams.set('startcursor', startCursor);
        } else if (type === 'next' && hasNextPage) {
            currentParams.delete('startcursor');
            currentParams.set('endcursor', endCursor);
        }

        const newSearchParams = currentParams.toString();
        const newPathname = `${window.location.pathname}?${newSearchParams}`;

        router.push(newPathname);
    };
    return (
        <div className="flexCenter w-full flex-wrap gap-5 mt-10">
            {hasPreviousPage && (
                <Button
                    title="Back"
                    handleClick={() => handleNavigation('prev')}
                ></Button>
            )}
            {hasNextPage && (
                <Button
                    title="Next"
                    handleClick={() => handleNavigation('next')}
                ></Button>
            )}
        </div>
    );
};

export default LoadMore;
