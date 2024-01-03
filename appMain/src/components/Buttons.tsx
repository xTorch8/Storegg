import React, { useContext } from "react";

import { Text, TouchableHighlight } from "react-native";

import { MainStyleContext } from "../context/style-context";

import { AppContext } from "../context/app-context";

type Products = {
    title: string;
    price: string;
    description: string;
    image: string;
}[]

// ButtonsProps
//  list of props that can be pass to the Buttons
//  title is mandatory, the others is optional
interface ButtonsProps {
    title               : string,
    color?              : string,
    backgroundColor?    : string,
    width?              : string | number,
    products?           : Products,
    press?              : any,
}

const Buttons = (props : ButtonsProps) : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve myCoins from the context.
    const appContext = useContext(AppContext);
    const {myCoins} = appContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve ButtonStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {ButtonStyle} = mainStyleContext; 
    
    // ButtonContainerStyling
    //  Set the custom styling of the Buttons based on props
    const ButtonContainerStyling = {
        ...ButtonStyle.container, 
        backgroundColor : props.backgroundColor || ButtonStyle.container.backgroundColor
    }

    // ButtonTextStyling
    //  Set the custom styling of the Buttons based on props
    const ButtonTextStyling = {
        ...ButtonStyle.text,
        color : props.color || ButtonStyle.text.color
    }

    return (
        <TouchableHighlight 
            style = {ButtonContainerStyling} 
            onPress = {() => props.press && props.press(props.products, myCoins)}
        >
            <Text style = {ButtonTextStyling}>{props.title} </Text>
        </TouchableHighlight>
    )
}

export default Buttons;