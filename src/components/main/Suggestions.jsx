import React from 'react'
import SuggestionCard from './SuggestionCard'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import SuggestionDetail from './SuggestionDetail'
import { auth } from '@/lib/auth'
import { rootURL } from '@/utils/rootURL'




const getSuggestions = async () => {
    try {
        const res = await fetch(`${process.env.ROOT_URL}/api/suggestion`, { cache: 'no-store' })
        const suggestions = await res.json()
        return suggestions
    } catch (error) {
        console.log(error.message);
    }
}

const Suggestions = async () => {

    const suggestions = await getSuggestions()
    const session = await auth();


    return (
       
            <div className='flex flex-col gap-4 '>


                {
                    suggestions?.map(suggestion => {
                        return (
                            <Dialog key={suggestion._id} >
                                <DialogTrigger   >
                                    <SuggestionCard key={suggestion._id} suggestion={suggestion} />
                                </DialogTrigger>
                                <DialogContent className='max-w-[60%]' >
                                    <SuggestionDetail session={session} suggestion={suggestion} />
                                </DialogContent>
                            </Dialog>
                        )
                    })
                }





            </div>
        
    )
}

export default Suggestions