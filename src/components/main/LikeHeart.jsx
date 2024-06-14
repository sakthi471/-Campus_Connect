import { Heart } from 'lucide-react'
import React from 'react'
import { ThumbsUp } from 'lucide-react';
import { ArrowBigUpDash } from 'lucide-react';


const LikeHeart = ({ isEligibleForVote }) => {
    return (


        <ArrowBigUpDash size={30} className='hover:cursor-pointer' color='green' fill={`${isEligibleForVote ? 'none' : 'green'}`} strokeWidth={2} />

    )
}

export default LikeHeart