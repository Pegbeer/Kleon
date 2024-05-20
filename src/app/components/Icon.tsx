import React, {FC, SVGProps} from 'react';

// Define the props interface
interface IconProps {
    Svg: FC<SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    fill?: string;
}

// Functional component
export default function Icon({ Svg, width = 24, height = 24, fill = "currentColor" }:IconProps){
    return (
        <Svg width={width} height={height} fill={fill} />
    );
}