
import React  from 'react'



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LikeHeart from './LikeHeart';


const SuggestionCard = ({ suggestion}) => {



  return (
    <Card className=" flex flex-row items-center justify-between hover:cursor-pointer" >
      <CardHeader>
        <CardTitle className=" text-xl text-start" >{suggestion.title}</CardTitle>
        <CardDescription>{suggestion.content.slice(0, 70)} ...</CardDescription>
      </CardHeader>
      <CardFooter className=" hover:cursor-pointer">
        <div className='flex  items-center '>
          <small>{suggestion.likes}</small>
          <LikeHeart isEligibleForVote={true} />
        </div>
      </CardFooter>
    </Card>

  )
}

export default SuggestionCard