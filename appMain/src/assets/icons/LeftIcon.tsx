import React, {useState} from "react";
import { Appearance } from "react-native";
import Svg, { Path } from "react-native-svg";

const LeftIcon = (props : any) : JSX.Element => {
    // stroke
    //  Determine which stroke color should used.
    const [stroke, setStroke] = 
        useState(
        Appearance.getColorScheme() === "light" 
            ? "black"
            : "white" 
        );  

    // When the theme is changed, set the new stroke value
    Appearance.addChangeListener(() => {
        setStroke(
        Appearance.getColorScheme() === "light" 
            ? "black"
            : "white" 
        );      
    });
    
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
                d="M15 18L9 12L15 6"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default LeftIcon