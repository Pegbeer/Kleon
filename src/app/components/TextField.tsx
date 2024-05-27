import React, { HTMLInputTypeAttribute, SVGProps} from "react";
import Icon from "@/app/components/Icon";

export default function TextField({
                                      leadingIcon,
                                      leadingIconColor,
                                      placeholder,
                                      inputType,
                                      onTextChanged
                                  }:
                                      {
                                          leadingIcon?: React.FunctionComponent<SVGProps<SVGSVGElement>>,
                                          leadingIconColor?: string,
                                          placeholder: string,
                                          inputType: HTMLInputTypeAttribute,
                                          onTextChanged?: () => string
                                      }) {

    if(leadingIcon === undefined){
        return (
            <div
                className="w-full flex flex-row items-center gap-3 focus-within:border-solid focus:border-1 focus-within:border-primary px-8 py-4 bg-surface text-gray-400 rounded-2xl">
                <input className={` border-transparent p-0 bg-transparent flex-grow focus:border-none focus:ring-0`}
                       maxLength={32} 
                       placeholder={placeholder} 
                       type={inputType}/>
            </div>
        );
    }else{
        return (
            <div
                className="w-full flex flex-row items-center gap-3 focus-within:border-solid focus:border-1 focus-within:border-primary px-8 py-4 bg-surface text-gray-400 rounded-2xl">
                <Icon Svg={leadingIcon} fill={leadingIconColor}/>
                <input className="outline-0 p-0 bg-transparent flex-grow focus:border-none focus:ring-0"
                       maxLength={32} placeholder={placeholder} type={inputType}/>
            </div>
        );
    }
}