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
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { login } from "@/lib/actions"
import { useFormState } from "react-dom";
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"






const formSchema = z.object({
    username: z.string().min(3, {
        message: "username must be at least 3 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})

export function Loginpage() {

    const [state, formAction] = useFormState(login, undefined);

    console.log(state);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })





    return (
        <div className="w-[40%] p-10">
            <Form {...form}>
                <h2 className="text-2xl font-bold my-3">Login into your Account</h2>
                <form action={formAction}
                    className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <div className="flex items-center">
                                        <Input placeholder="Username" {...field} />
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
                        <p className=" text-sm" >Don&apos;t have an account click <Link className=" text-blue-600 underline" href={'/register'} >here</Link> to register</p>
                    </div>
                    <Button className='w-full' type="submit">
                        Login Up
                    </Button>
                        <p className=" text-sm text-center" >{state?.error}</p>
                </form>
            </Form>
        </div>
    )
}

export default Loginpage
