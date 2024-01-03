import React, { useEffect, useContext } from "react";
import {TouchableOpacity, Image, ImageSourcePropType} from "react-native";

import TextTitle from "./TextTitle";

import { SubStyleContext } from "../context/style-context";

import { SubAppContext } from "../context/sub-app-context";

const EggBroken = () : JSX.Element => {
    // subAppContext
    //  Use the context from SubAppContext and retrieve generatePrize and userPrize
    const subAppContext = useContext(SubAppContext);
    const {generatePrize, userPrize} = subAppContext;

    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve EggStyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {EggStyle} = subStyleContext;

    // useEffect
    //  generate prize for the user
    useEffect(() => {
        generatePrize();
    }, []);

    // imageSource
    //  Determine which image should displayed based on the prize
    let imageSource : ImageSourcePropType = require("../assets/img/gold-coin.png");
    if (userPrize?.coinType === "gold") {
        imageSource = require("../assets/img/gold-coin.png");
    }
    else if (userPrize?.coinType === "silver") {
        imageSource = require("../assets/img/silver-coin.png");
    }
    else {
        imageSource = require("../assets/img/bronze-coin.png");
    }

    return (
        <>
            <TextTitle 
                title       = "Congratulations!"
                textAlign   = "center"
            />

            <TextTitle 
                title       = {"You got a " + userPrize?.coinType + " coin!"}
                fontWeight  = "400"
                textAlign   = "center"
            />

            <TouchableOpacity>
                <Image
                    style = {EggStyle.coinPrizeImage}
                    source = {imageSource}
                />                     
                <Image
                    style = {EggStyle.eggBrokenImage}
                    source = {require("../assets/img/egg-broken.png")}
                />                     
            </TouchableOpacity>

            <TextTitle 
                title       = {String(userPrize?.coinValue) +  " coins have been added to your balance"}
                textAlign   = "center"
            />                    
        </>
    )
}

export default EggBroken;