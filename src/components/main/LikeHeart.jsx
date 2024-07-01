import React from 'react'
import { ArrowBigUpDash } from 'lucide-react';


const LikeHeart = ({ isEligibleForVote }) => {
    return (


        <ArrowBigUpDash size={30} className='' color='orange' fill={`${isEligibleForVote ? 'none' : 'orange'}`} strokeWidth={2} />

    )
}

export default LikeHeart