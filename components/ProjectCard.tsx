'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProjectCardProps {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, name, avatarUrl, userId }) => {
    const [randomLikes, setRandomLikes] = useState<number>(0);
    const [randomViews, setRandomViews] = useState<string>('');


    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 100000));
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1)) + 'k');
    }, []);

    return (
        <div className="flexCenter flex-col rounded-2xl drop-shadow">
            <Link
                href={`/project/${id}`}
                className="flexCenter group relative w-full h-full"
            >
                <Image
                    src={image}
                    width={414}
                    height={314}
                    className="object-cover rounded-2xl w-full h-full"
                    alt="Project Image"
                />

                <div className="hidden group-hover:flex profile_card-title">
                    <p className="w-full">{title}</p>
                </div>
            </Link>
            <div className="flexBetween w-full font-semibold text-sm mt-3">
                <Link href={`/profile/${userId}`}>
                    <div className="flexCenter gap-2">
                        <Image
                            src={avatarUrl}
                            width={24}
                            height={24}
                            alt="Profile Image"
                            className="rounded-full"
                        />
                        <p>{name}</p>
                    </div>
                </Link>
                <div className="flexCenter gap-3">
                    <div className="flexCenter gap-2">
                        <Image
                            src={'/hearth.svg'}
                            width={16}
                            height={14}
                            alt="heart"
                        />
                        <p>{randomLikes}</p>
                    </div>
                    <div className="flexCenter gap-2">
                        <Image
                            src={'/eye.svg'}
                            width={16}
                            height={14}
                            alt="eye"
                        />
                        <p>{randomViews}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
