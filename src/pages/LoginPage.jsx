import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthButton from "../features/auth/components/AuthButton";
import AuthCard from "../features/auth/components/AuthCard";
import AuthInput from "../features/auth/components/AuthInput";
import { loginValidationSchema } from "../features/auth/utils/loginValidationSchema";

const LoginPage = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(loginValidationSchema)});
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <AuthCard title="Login">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <AuthInput label="Email" name="email" type="Email" placeholder="Email" register={(name)=>register(name)} error={errors.email}/>
                <AuthInput label="Password" name="password" type="password" placeholder="Password" register={(name)=>register(name)} error={errors.password}/>
                <AuthButton>Login</AuthButton>
                <p className="text-sm mb-3">Don't have an account? <Link className="text-blue-500" to={ROUTES.REGISTER}>Register</Link></p>
            </form>
        </AuthCard>
    )
}
export default LoginPage;