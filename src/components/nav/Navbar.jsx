import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogOut, Plus } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewPost from '../main/NewPost';
import LogoutBtn from '../main/LogoutBtn';
import { auth } from '@/lib/auth';
import Avathar from '../main/Avathar';
import NewPostDialog from '../main/NewPostDialog';
import { ThemeSwitch } from '../main/ThemeSwitch';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = async () => {
  const session = await auth();
 
  return (
    <nav className=" w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  sticky   top-0 z-10   shadow-md  flex justify-between items-center py-3 px-20   ">
      <div className="flex items-center gap-3">
       
        <Link href={'/'}><h1 className="text-xl font-bold ">Campus <span className='text-primary'>Connect</span> </h1></Link>
      </div>
      {/* <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-sm hover:font-semibold text-slate-500 hover:text-slate-800" href={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul> */}

      <div className=' flex gap-6 items-center '>
        <ThemeSwitch/>
        {session?.user ? <> <NewPostDialog session={session}/> <Avathar session={session} />  </> : <Link href="/login"> <Button size='sm'>Login</Button> </Link>}

      </div>
    </nav>
  );
};

export default Navbar;
