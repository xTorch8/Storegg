import React, {useContext, useEffect} from "react";
import { BackHandler } from 'react-native';

import { SafeAreaView } from "react-native";
import MiniGame from "./src/pages/MiniGame";

import { SubAppContext } from "./src/context/sub-app-context";
import { SubStyleContext } from "./src/context/style-context";

interface AppSubProps {
    changeApp   : (condition : boolean) => void,
}

const AppSub = (props : AppSubProps) : JSX.Element => {
    // subAppContext
    //  Use context from sub-app-context.tsx
    //  Retrieve eggPressHandler from the context.
    const subAppContext = useContext(SubAppContext);
    const {eggPressHandler} = subAppContext;

    // subAppContext
    //  Use context from style-context.tsx
    //  Retrieve AppSubStyle from the context.
    const subStyleContext = useContext(SubStyleContext);
    const {AppSubStyle} = subStyleContext;

    // useEffect
    //  Set the value of isEggPress to false. 
    useEffect(() => {
        eggPressHandler(false);
    }, []);

    // useEffect
    //  If the user press the BackPress on device, go back to AppMain.tsx
    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            props.changeApp(true);
            return true;
        });

        return () => backHandler.remove();
    });

    return (
        <SafeAreaView style = {AppSubStyle.container}>
            <MiniGame 
                changeApp = {props.changeApp}
            />
        </SafeAreaView>
    )
}

export default AppSub;