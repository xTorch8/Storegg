import React, {useState, useEffect, useContext} from "react";
import {TouchableOpacity, Image, Animated, Easing} from "react-native";

import TextTitle from "./TextTitle";

import { SubStyleContext } from "../context/style-context";

import { SubAppContext } from "../context/sub-app-context";

const EggFull = () : JSX.Element => {
    // subAppContext
    //  Use the context from SubAppContext and retrieve eggPressHandler
    const subAppContext = useContext(SubAppContext);
    const {eggPressHandler} = subAppContext;

    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve EggSyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {EggStyle} = subStyleContext;

    // isEggPressed
    //  Determine is the egg has been pressed or not.
    //  If the egg has been pressed, the value will be true.
    //  If the egg has not been pressed, the value will be false.
    const [isEggPressed, setIsEggPressed] = useState<boolean>(false);


    // Create rotate animation.
    const rotateValue = new Animated.Value(0);
    const runRotationAnimation = (toValue : number, duration : number) => {
        return Animated.timing(rotateValue, {
            toValue,
            duration,
            easing: Easing.linear,
            useNativeDriver: false,
        })
    }

    // useEffect
    //  If isEggPressed value is true, run shaking animation.
    //  After the animation, run the eggPressHandler function.
    useEffect(() => {
        if (isEggPressed) {
            runRotationAnimation(90, 300)
            .start(() => {
                runRotationAnimation(-90, 300)
                .start(() => {
                    runRotationAnimation(90, 300)
                    .start(() => {
                        runRotationAnimation(-90, 300)
                        .start(() => {
                            rotateValue.setValue(0);
                            eggPressHandler(true);                                    
                        });
                    });
                });
            });
        }
    }, [isEggPressed])


    return (
        <>
            <TextTitle 
                title       = "Click on the egg to get your prize!"
                fontWeight  = "400"
                textAlign   = "center"
            />

            <TouchableOpacity onPress = {() => setIsEggPressed(true)}>
                <Animated.Image
                    style = {[EggStyle.eggFullImage,
                        {
                            transform: [
                                {
                                    rotate: rotateValue.interpolate({ 
                                        inputRange: [0, 360], 
                                        outputRange: ["0deg", "90deg"],
                                        extrapolate: "clamp",
                                    })
                                }
                            ]
                        }
                    ]}
                    source = {require("../assets/img/egg-full.png")}
                />  
            </TouchableOpacity>        
        </>
    )
}

export default EggFull;