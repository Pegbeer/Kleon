import React from "react";
import TextField from "@/app/components/TextField";
import UserIcon from "/public/assets/vectors/person.svg";
import LockIcon from "/public/assets/vectors/lock.svg"

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
                        <input type="checkbox" className="size-6 text-primary"/>
                        <span className="text-lg text-gray-400">Opción</span>
                    </label>
                </div>
            </div>
        </div>
    );
}