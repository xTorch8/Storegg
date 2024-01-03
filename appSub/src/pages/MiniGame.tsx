import React, {useContext, ReactNode} from "react";

import { View, TouchableOpacity } from "react-native";

import TextTitle from "../components/TextTitle";
import PrizeValue from "../components/PrizeValue";
import EggFull from "../components/EggFull";

import LeftIcon from "../assets/icons/LeftIcon";
import { SubStyleContext } from "../context/style-context";
import EggBroken from "../components/EggBroken";

import { SubAppContext } from "../context/sub-app-context";

// Mini Game
//
// In this mini game, there are:
// 1. Prize Display
//    
// 2. Egg
//    If the egg is clicked, the egg will shaking and cracking.
//    After that, the user will get coins based on the coins inside
//    the egg.
//
// 3. Back Button
//    Go back to the main application.


interface MiniGameProps {
    changeApp   : (condition : boolean) => void,
}

const MiniGame = (props : MiniGameProps) : JSX.Element => {
    // subAppContext
    //  Use the context from SubAppContext and retrieve prizes and isEggPressed
    const subAppContext = useContext(SubAppContext);
    const {prizes, isEggPressed} = subAppContext;

    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve MainStyle, PrizeValueStyle, and EggStyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {MainStyle, PrizeValueStyle, EggStyle} = subStyleContext;

    // content
    //  Determine which content should displayed on the screen.
    //  It can be EggBroken or EggFull.
    let content : ReactNode = <></>;
    if (isEggPressed) {
        content = <EggBroken />
    }
    else {
        content = <EggFull />;
    }
    
    return (
        <View style = {MainStyle.container}>
            <View style = {MainStyle.icon}>
                <TouchableOpacity onPress={() => props.changeApp(true)}>
                    <LeftIcon />
                </TouchableOpacity>

                <TextTitle 
                    title = "Minigame"
                />                    
            </View>

            <View style = {PrizeValueStyle.container}>
                <PrizeValue 
                    imageSource = {require("../assets/img/gold-coin.png")}
                    prize       = {String(prizes[0].coinValue)}
                />

                <PrizeValue 
                    imageSource = {require("../assets/img/silver-coin.png")}
                    prize       = {String(prizes[1].coinValue)}
                />

                <PrizeValue
                    imageSource = {require("../assets/img/bronze-coin.png")}
                    prize       = {String(prizes[2].coinValue)}                
                />
            </View>

            <View style = {EggStyle.container}>
                {content}
            </View>
        </View>
    )
}

export default MiniGame;