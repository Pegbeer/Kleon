import React, {SVGProps} from "react";
import Icon from "@/app/components/Icon";

export default function FilledButton({ text, backgroundColor, foregroundColor, icon, iconColor}:
{
    text: string,
    backgroundColor: string,
    foregroundColor: string,
    icon?: React.FunctionComponent<SVGProps<SVGSVGElement>>,
    iconColor?:string
}) {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: foregroundColor,
    };

    if(icon === undefined) {
        return (
            <button style={buttonStyle} className="px-6 py-4 rounded-xl">
                {text}
            </button>
        );
    }

    return (
        <button style={buttonStyle} className="rounded-xl flex flex-row justify-center px-6 py-4 gap-2">
            <Icon Svg={icon} fill={iconColor} width={24} height={24}/>
            <p style={buttonStyle}>{text}</p>
        </button>
    );
}