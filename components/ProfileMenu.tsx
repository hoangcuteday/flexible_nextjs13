'use client';

import { SessionInterface } from '@/common.types';
import { Tooltip, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        size="small"
                        sx={{ ml: 2 }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)}
                    >
                        {session?.user?.image && (
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                alt="user profile image"
                                className="rounded-full"
                            />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={() => setAnchorEl(null)}
                onClick={() => setAnchorEl(null)}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        minWidth: 250,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <div className="flexCenter flex-col gap-3 mx-auto">
                        {session?.user?.image && (
                            <Image
                                src={session.user.image}
                                width={40}
                                height={40}
                                alt="user profile image"
                                className="rounded-full"
                            />
                        )}
                        <p className="font-normal">{session?.user?.name}</p>
                    </div>
                </MenuItem>
                <div className="mt-6 flex flex-col gap-2">
                    <MenuItem>
                        <Link
                            href={`/profile/${session?.user?.id}`}
                            className="text-base w-full"
                        >
                            Work Preferences
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/profile/${session?.user?.id}`}
                            className="text-base w-full"
                        >
                            Settings
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href={`/profile/${session?.user?.id}`}
                            className="text-base w-full"
                        >
                            Profile
                        </Link>
                    </MenuItem>
                </div>
                <div className='border-t border-nav-border mt-4 py-3'>
                    <MenuItem>
                    <button type='button' className='text-base' onClick={() => signOut()}>
                        Sign out
                    </button>
                    </MenuItem>
                </div>
            </Menu>
        </div>
    );
};

export default ProfileMenu;
