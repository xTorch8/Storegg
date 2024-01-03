import React, { useContext } from "react";

import { Text } from "react-native";

import { SubStyleContext } from "../context/style-context";

interface TextTitleProps {
    title       : string,
    color?      : string,   
    fontWeight? : "400" | "600",
    textAlign?  : "center" | "left"
}

const TextTitle = (props : TextTitleProps) : JSX.Element => {
    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve TextStyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {TextStyle} = subStyleContext;
        
    const TextStyling = {...TextStyle.title, color : props.color || TextStyle.title.color, fontWeight: props.fontWeight || TextStyle.title.fontWeight, textAlign: props.textAlign || TextStyle.title.textAlign}

    return (
        <Text style = {TextStyling}>
            {props.title}
        </Text>
    )
}

export default TextTitle;