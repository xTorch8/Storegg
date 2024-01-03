import React, { useContext } from "react";
import { Text } from "react-native";

import { MainStyleContext } from "../context/style-context";

interface TextSubTitleProps {
    subTitle : string,
}

const TextSubTitle = (props : TextSubTitleProps) : JSX.Element => {
    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve TextStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {TextStyle} = mainStyleContext;         
    
    return (
        <Text style = {TextStyle.subTitle}>
            {props.subTitle}
        </Text>
    )
}

export default TextSubTitle