import React from "react";
import TextField from "@/app/components/TextField";
import UserIcon from "/public/assets/vectors/person.svg";
import LockIcon from "/public/assets/vectors/lock.svg"
import GitHubIcon from "/public/assets/vectors/github-mark.svg"
import GoogleIcon from "/public/assets/vectors/google.svg"
import FilledButton from "../components/FilledButton";

export default function LoginScreen() {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center px-8">
            <h1 className="dark:text-white text-5xl font-bold">Welcome</h1>
            <h5 className="text-gray-400">Welcom back! Please enter your details</h5>

            <div className="flex flex-col w-full h-max mt-4 gap-4">
                <TextField
                    inputType={"text"}
                    placeholder={"Username"}
                    leadingIcon={UserIcon}
                    leadingIconColor={"#6418C3"}/>

                <TextField
                    leadingIcon={LockIcon}
                    leadingIconColor={"#6418C3"}
                    placeholder={"Passwords"}
                    inputType={"password"}/>

                <div className="flex flex-row justify-between">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="size-6 text-primary checked:accent-primary"/>
                        <span className="text-lg text-gray-400">Remember me</span>
                    </label>

                    <a href="/public" className="text-gray-400">Forget password</a>
                </div>

                <FilledButton text="Login" backgroundColor="green" foregroundColor="white"/>

                <div className="flex flex-row w-full items-center gap-4">
                    <div className="border-t-2 border-gray-400 my-8 w-full"></div>
                    <span className="text-gray-400">Or</span>
                    <div className="border-t-2 border-gray-400 my-8 w-full"></div>
                </div>
                
                <FilledButton text={"Login with GitHub"} backgroundColor={"white"} foregroundColor={"black"} icon={GitHubIcon} iconColor="accent"/>
                <FilledButton text={"Login with Google"} backgroundColor={"white"} foregroundColor={"black"} icon={GoogleIcon} iconColor="accent"/>
            </div>
        </div>
    );
}