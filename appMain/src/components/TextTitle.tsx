import React, { useContext } from "react";

import { Text } from "react-native";

import { MainStyleContext } from "../context/style-context";

interface TextTitleProps {
    title   : string,
    color?  : string,   
}

const TextTitle = (props : TextTitleProps) : JSX.Element => {
    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve TextStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {TextStyle} = mainStyleContext;     

    const TextStyling = {...TextStyle.title, color : props.color || TextStyle.title.color}

    return (
        <Text style = {TextStyling}>
            {props.title}
        </Text>
    )
}

export default TextTitle;