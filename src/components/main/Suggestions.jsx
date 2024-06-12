import React from 'react'
import SuggestionCard from './SuggestionCard'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import SuggestionDetail from './SuggestionDetail'


const Suggestions = () => {
    return (
        <div className='flex flex-col gap-4 '>
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />
            <SuggestionCard />

            <Dialog >
                <DialogTrigger   >
                    <SuggestionCard />
                </DialogTrigger>
                <DialogContent >
                    <SuggestionDetail />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Suggestions