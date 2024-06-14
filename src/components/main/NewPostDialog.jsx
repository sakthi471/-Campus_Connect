'use client'
import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import NewPost from './NewPost';

const NewPostDialog = ({session}) => {
    const [open, setOpen] = useState(undefined) 

  return (
    <Dialog open={open} >
    <DialogTrigger asChild>
      <Button size='sm'>
        New <Plus size={19} className="ml-2" />
      </Button>
    </DialogTrigger>
    <DialogContent className='p-10 max-w-xl'>
      <NewPost session={session} setOpen={setOpen} />
    </DialogContent>
  </Dialog>
  )
}

export default NewPostDialog