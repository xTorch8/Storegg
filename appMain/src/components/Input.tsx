import React, {useContext} from "react";
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from "react-native";

import { MainStyleContext } from "../context/style-context";

interface InputProps {
    placeholder : string,
    change      : (event: NativeSyntheticEvent<TextInputChangeEventData>) => void,
}

const Input = (props : InputProps) : JSX.Element => {
    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve InputStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {InputStyle} = mainStyleContext; 

    return (
        <TextInput 
            placeholder             = {props.placeholder}
            placeholderTextColor    = {InputStyle.input.color} 
            style                   = {InputStyle.input}
            onChange                = {props.change}
        />        
    )
}

export default Input;