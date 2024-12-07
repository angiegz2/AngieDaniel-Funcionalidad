import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {
  Bell,
  Home,
  LineChart,
  BookCopy,
  LibraryBig,
  Users,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { data: session } = useSession();
  const location = useRouter();

  return (
    <div className='w-64 h-screen bg-gray-900 text-white flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between px-6 py-4 border-b border-gray-700'>
        <Link href='/' className='flex items-center gap-2 text-lg font-bold'>
          <LibraryBig className='h-6 w-6 text-yellow-500' />
          <span>BiblioGest</span>
        </Link>
        <Button variant='ghost' size='icon'>
          <Bell className='h-5 w-5 text-gray-400' />
        </Button>
      </div>

      {/* Navigation Links */}
      <nav className='flex-1 mt-4'>
        <ul className='space-y-2'>
          <li>
            <Link
              href='/'
              className={`flex items-center gap-4 px-6 py-3 rounded-md ${
                location.pathname === '/'
                  ? 'bg-gray-800 text-yellow-500'
                  : 'hover:bg-gray-800 hover:text-yellow-400'
              }`}
            >
              <Home className='h-5 w-5' />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href='/orders'
              className={`flex items-center gap-4 px-6 py-3 rounded-md ${
                location.pathname === '/orders'
                  ? 'bg-gray-800 text-yellow-500'
                  : 'hover:bg-gray-800 hover:text-yellow-400'
              }`}
            >
              <BookCopy className='h-5 w-5' />
              <span>Requests</span>
            </Link>
          </li>
          <li>
            <Link
              href='/products'
              className={`flex items-center gap-4 px-6 py-3 rounded-md ${
                location.pathname === '/products'
                  ? 'bg-gray-800 text-yellow-500'
                  : 'hover:bg-gray-800 hover:text-yellow-400'
              }`}
            >
              <LibraryBig className='h-5 w-5' />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link
              href='/customers'
              className={`flex items-center gap-4 px-6 py-3 rounded-md ${
                location.pathname === '/customers'
                  ? 'bg-gray-800 text-yellow-500'
                  : 'hover:bg-gray-800 hover:text-yellow-400'
              }`}
            >
              <Users className='h-5 w-5' />
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link
              href='/users'
              className={`flex items-center gap-4 px-6 py-3 rounded-md ${
                location.pathname === '/users'
                  ? 'bg-gray-800 text-yellow-500'
                  : 'hover:bg-gray-800 hover:text-yellow-400'
              }`}
            >
              <LineChart className='h-5 w-5' />
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Info */}
      <div className='mt-auto p-6 border-t border-gray-700'>
        <Card className='bg-gray-800 text-white'>
          <CardHeader className='flex items-center gap-4'>
            <Avatar>
              <AvatarImage
                src={session?.user?.image ?? 'https://github.com/shadcn.png'}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className='text-lg font-semibold'>
                {session?.user?.name ?? 'Guest'}
              </CardTitle>
              <span className='text-sm text-gray-400'>Admin</span>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant='outline' className='w-full text-yellow-500'>
              Log Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
