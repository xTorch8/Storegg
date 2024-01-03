import React, { useContext } from "react";

import {View, Image, ImageSourcePropType, Text} from "react-native";

import { SubStyleContext } from "../context/style-context";

interface PrizeValue {
    imageSource : ImageSourcePropType,
    prize       : string,
}

const PrizeValue = (props : PrizeValue) : JSX.Element => {
    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve PrizeValueStyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {PrizeValueStyle} = subStyleContext;
        
    return (
        <View style = {PrizeValueStyle.innerContainer}>
            <Image
                style = {PrizeValueStyle.image}
                source = {props.imageSource}
            />
            <Text style = {PrizeValueStyle.text}> {props.prize} </Text>
        </View>
    )
}

export default PrizeValue;