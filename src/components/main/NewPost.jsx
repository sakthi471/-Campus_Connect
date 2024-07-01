"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "../ui/use-toast"


const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 3 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
})

export function NewPost({ setOpen,session}) {

   
    const [loading, setLoading] = useState(false)
    console.log(session);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })


    const onSubmit = async (values) => {

        try {
            setLoading(true);
            const res = await fetch(`/api/suggestion`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: values.title,
                    content: values.description,
                    userID: session?.user?.id,
                }),
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
            setOpen(false)
            toast({
                title: "Suggestion created successfully.",
            })

        } catch (error) {
            console.log(error.message);
        }





    }

    return (
        <Form {...form}>
            <h2 className="text-2xl font-bold">New Suggestion</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tittle</FormLabel>
                            <FormControl>
                                <Input placeholder="Tittle about your suggestion / idea / problem." {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Description </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Describe about your suggestion / idea / problem."

                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={loading} className='w-full' type="submit">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Submit"}
                </Button>

            </form>
        </Form>
    )
}

export default NewPost