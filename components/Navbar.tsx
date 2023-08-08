import { NavLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/session';
import ProfileMenu from './ProfileMenu';

const Navbar = async () => {
    const session = await getCurrentUser();


    return (
        <nav className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={115}
                        height={43}
                        alt="Flexible"
                    />
                </Link>
                <ul className="xl:flex hidden gap-7 text-small">
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.key}
                                href={link.href}
                            >
                                {link.text}
                            </Link>
                        );
                    })}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session?.user ? (
                    <>
                        <ProfileMenu session={session}/>
                        <Link href={'/create-project'}>ShareWork</Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
