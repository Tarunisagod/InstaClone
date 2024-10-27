import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
    username: z.string().min(2, {message: "Username must be atleast 2 characters long"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be 8 characters or longer"}),

})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be 8 characters or longer"}),

})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file : z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
})