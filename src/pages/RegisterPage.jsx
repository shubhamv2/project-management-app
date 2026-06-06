import AuthCard from "../features/auth/components/AuthCard";
import { useForm } from "react-hook-form";
import AuthInput from "../features/auth/components/AuthInput";
import AuthButton from "../features/auth/components/AuthButton";
import {ROUTES} from '../routes/routes';
import { Link } from "react-router-dom";
import { registerValidationSchema } from "../features/auth/utils/registerValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const RegisterPage = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm({resolver:zodResolver(registerValidationSchema)});
    const onSubmit = (data) =>{
        console.log(data)
    }
    return(
        <AuthCard title="Register">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <AuthInput name="name"
                placeholder="Name"
                label="Name"
                error={errors.name}
                register={(name)=>register(name)}/>
                
                <AuthInput type="email" name="email"
                placeholder="Email"
                label="Email"
                error={errors.email}
                register={(name)=>register(name)}/>

                <AuthInput  name="phone"
                placeholder="Phone"
                label="Phone"
                error={errors.phone}
                register={(name)=>register(name)}/>

                <AuthInput type="password" name="password"
                placeholder="Password"
                label="Password"
                error={errors.password}
                register={(name)=>register(name)}/>

                <AuthButton>Register</AuthButton>

                <p className="text-sm mb-2">Already have an account? <Link className="text-blue-500" to={ROUTES.LOGIN}>Login</Link></p>
            </form>
        </AuthCard>
    )
}
export default RegisterPage;