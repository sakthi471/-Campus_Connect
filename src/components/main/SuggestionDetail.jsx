'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'


const SuggestionDetail = () => {
    console.log();
    const [like,setLike]=useState(false)
    const handleLike=()=>{
        console.log("clicked");
        setLike((like)=>!like);

    }
    
    return (
        <>
            <DialogHeader>
                <DialogTitle> Limited Career Counseling Services</DialogTitle>
                <DialogDescription>
                    The career counseling services provided by the college are insufficient. There are not enough advisors to meet the demand, and the guidance on internships and job placements needs to be more comprehensive. Expanding the career services department and organizing more career fairs could greatly help students in their job search.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className=" items-center" >
                    <Button size="sm" >Vote For This</Button>
                    <div onClick={handleLike} className='flex  gap-2 '>
                        <small>11</small>
                    <Heart size={22} className='hover:cursor-pointer' color='red' fill={`${like ? 'red':'none' }`}  strokeWidth={2} />
                        </div>                
            </DialogFooter>

        </>
    )
}

export default SuggestionDetail