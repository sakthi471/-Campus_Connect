import React from 'react'
import { ThumbsUp } from 'lucide-react';
import { Heart } from 'lucide-react';


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const SuggestionCard = () => {
  return (
    <Card className=" flex flex-row items-center hover:cursor-pointer" >
    <CardHeader>
      <CardTitle className=" text-xl text-start" >Lorem Title</CardTitle>
      <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ex?</CardDescription>
    </CardHeader>
    <CardFooter className=" hover:cursor-pointer">
        <div className='flex flex-col items-center'>
        <Heart size={21}  className=' text-red-500' strokeWidth={2}  />
        <small>10</small>
        </div>
    </CardFooter>
  </Card>
  
  )
}

export default SuggestionCard