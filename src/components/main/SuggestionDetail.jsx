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
import { Heart, Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import LikeHeart from './LikeHeart'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from 'next/link'




const SuggestionDetail = ({ suggestion, session }) => {
    const { toast } = useToast()

    const [loading, setLoading] = useState(false)
    const [like, setLike] = useState(suggestion.likes)
    const checkVote = () => {
        if (suggestion.likedby.includes(session?.user.id)) {
            return false
        }
        return true;
    }
    const [isEligibleForVote, setIsEligibleForVote] = useState(checkVote())

    const handleVote = async () => {
        try {
            if(!session){
                toast({
                    // variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: " You need to login to vote for a suggestion.",
                    action: <ToastAction altText="Try again"> <Link href={'/login'} >Login</Link> </ToastAction>,
                  })
                return;
            }

            setLoading(true)
            const data = {
                suggestionID: suggestion._id,
                userID: session?.user.id
            }

            const res = await fetch('/api/suggestion/like', {
                method: 'POST',
                body: JSON.stringify(data),
            })

            const { message } = await res.json()
            setLoading(false)
            if (!res.ok) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: message,
                    
                })
                return
            }
            setIsEligibleForVote(!isEligibleForVote)

            setLike(like + 1)
            toast({

                title: message,
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle> {suggestion.title}</DialogTitle>
                <DialogDescription>
                    {suggestion.content}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className=" items-center" >
                <Button type='submit' disabled={!isEligibleForVote} size="sm" onClick={handleVote} >{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : isEligibleForVote ? 'Vote For This' : 'Already Voted'}</Button>
                <div className='flex  gap-2 items-center '>
                    <small>{like}</small>
                    <LikeHeart isEligibleForVote={isEligibleForVote} />
                </div>
            </DialogFooter>

        </>
    )
}

export default SuggestionDetail