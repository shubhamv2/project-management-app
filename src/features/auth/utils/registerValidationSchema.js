import z from 'zod'

export const registerValidationSchema = z.object({
    name:z.string().min(3,"Enter valid name"),
    phone:z.string().min(10,"Enter valid number"),
    email:z.email("Enter valid email"),
    password:z.string().min(6,"Password should contain at least 6 character")
})