import React from "react";
import TextField from "@/app/components/TextField";
import UserIcon from "/public/assets/vectors/person.svg";
import LockIcon from "/public/assets/vectors/lock.svg"
import GitHubIcon from "/public/assets/vectors/github-mark.svg"
import GoogleIcon from "/public/assets/vectors/google.svg"
import FilledButton from "../components/FilledButton";

export default function LoginScreen() {
    return (
        <div className="flex flex-col lg:flex-row w-full h-screen items-center justify-center lg:justify-between lg:pl-0">


            <div className="hidden md:flex md:h-[50%] lg:h-full md:p-8 lg:flex flex-col w-full h-full bg-gray-800 items-start lg:p-48 justify-between">

                <div>
                    <img src="/assets/vectors/kleon-branding.svg" className="h-2/5 w-auto"/>

                    <h3 className="text-gray-100 font-light lg:text-6xl md:text-4xl leading-tight">Beautiful, Innovative & <br/> <span
                        className="font-semibold">Effective Websites</span></h3>
                </div>
                <FilledButton text={`Request a call \u260E`} backgroundColor={"#6418C3"} foregroundColor={"white"}/>

            </div>

            <div className="flex flex-col w-full p-8 lg:w-[80%] xl:w-[60%] h-full mt-4 lg:justify-center lg:m-0 gap-4 md:gap-2 lg:px-8 xl:px-24 md:w-3/5 md:pt-8">
                <img src="/assets/vectors/kleon-logo.svg" className="h-[20%] w-1/4 self-center hidden xsm:inline-flex"/>

                <h1 className="dark:text-white text-5xl font-bold self-center">Welcome</h1>
                <h5 className="text-gray-400 text-center">Welcome back! Please enter your details</h5>

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
                        <span className="text-sm text-gray-400">Remember me</span>
                    </label>

                    <a href="/public" className="text-sm text-gray-400">Forget password</a>
                </div>

                <FilledButton
                    text="Login"
                    backgroundColor="green"
                    foregroundColor="white"/>

                <div className="flex flex-row w-full items-center gap-4">
                    <div className="border-t-2 border-gray-400 my-8 w-full"></div>
                    <span className="text-gray-400">Or</span>
                    <div className="border-t-2 border-gray-400 my-8 w-full"></div>
                </div>

                <FilledButton
                    text={"Login with GitHub"}
                    backgroundColor={"white"}
                    foregroundColor={"black"}
                    icon={GitHubIcon}
                    iconColor="accent"/>
                <FilledButton
                    text={"Login with Google"}
                    backgroundColor={"white"}
                    foregroundColor={"black"}
                    icon={GoogleIcon}
                    iconColor="accent"/>

                <div>

                </div>
            </div>
        </div>
    );
}