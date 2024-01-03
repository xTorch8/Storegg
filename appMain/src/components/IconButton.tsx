import React, { useContext } from "react";

import { Text, TouchableOpacity } from "react-native";

import { MainStyleContext } from "../context/style-context";

interface IconButtonProps {
    title               : string,
    backgroundColor?    : string,
    color?              : string,
    width?              : string,
    press               : (condition : boolean) => void,
}

const IconButton = (props : IconButtonProps) : JSX.Element => {
    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve IconButtonStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {IconButtonStyle} = mainStyleContext; 
        
    return (
        <TouchableOpacity onPress = {() => props.press(true)}>
            <Text style = {IconButtonStyle.text}> {props.title} </Text>
        </TouchableOpacity>     
    )
} 

export default IconButton; 