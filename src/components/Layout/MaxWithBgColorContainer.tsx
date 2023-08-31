import React from "react";

interface Props {
    children: any;
    bgColor?: string;
    extraStyle?: string;
}

const MaxWithBgColorContainer: React.FC<Props> = ({
    children,
    bgColor = "bg-transparent",
    extraStyle
}) => {
    return (
        <div className={`w-screen ${bgColor} ${extraStyle}`}>
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </div>
    );
};

export default MaxWithBgColorContainer;
