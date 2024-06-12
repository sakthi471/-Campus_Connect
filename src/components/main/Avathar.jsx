import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutBtn from './LogoutBtn'
import { logout } from '@/lib/actions'



const Avathar = ({ session }) => {
    console.log(session);
    return (

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback>{session?.user.username.slice(0, 1)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=' text-center' >{session?.user.username}</DropdownMenuItem>
                <DropdownMenuItem>
                    <form action={logout}>
                        <button className=' w-[100px] text-left ' type="submit"  >Logout </button>
                    </form>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>



    )
}

export default Avathar