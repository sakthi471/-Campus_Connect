"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"
const { uniqueNamesGenerator, adjectives, names } = require('unique-names-generator');

const generateUsername = () => {
    const randomName = uniqueNamesGenerator({
        dictionaries: [adjectives, names],
        separator: '_',
        length: 2,
    });
    return randomName;
}

const formSchema = z.object({
    username: z.string().min(3, {
        message: "username must be at least 3 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})

export function RegisterPage() {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const handleGenerateUsername = () => {
        const newUsername = generateUsername()
        form.setValue('username', newUsername)
    }

    const onSubmit = async (values) => {
        setLoading(true)
        const res = await fetch(`/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        const { success, message } = await res.json()
        setLoading(false)
        if (!success) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: message,
            })
            return
        }

        toast({
            variant: "success",
            title: "Account created successfully.",
        })

        // Redirect to login page
        router.push('/login')
    }

    return (
        <div className="w-[40%] p-10">
            <Form {...form}>
                <h2 className="text-2xl font-bold my-3">Create an Account</h2>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <div className="flex items-center">
                                        <Input readOnly={true}   placeholder="Username" {...field} />
                                        <Button type="button" onClick={handleGenerateUsername} className="ml-2">Generate</Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <div>
                        <p className=" text-sm" >Already  have an account click <Link className=" text-blue-600 underline" href={'/register'} >Here</Link> to login</p>
                    </div>
                    <Button disabled={loading} className='w-full' type="submit">
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign Up"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default RegisterPage
