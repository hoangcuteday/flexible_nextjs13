import NextAuth from 'next-auth/next';

import { authOptions } from '@/lib/session';

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
