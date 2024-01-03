import React, { useEffect, useContext, useState } from "react";

import { Appearance, View, ScrollView, Text, Image, TouchableOpacity, BackHandler } from "react-native";

import TextTitle from "../components/TextTitle";
import TextSubTitle from "../components/TextSubTitle";
import Buttons from "../components/Buttons";
import Modal from "../components/Modal";

import { AppContext } from "../context/app-context";

import { MainStyleContext } from "../context/style-context";
import LeftIcon from "../assets/icons/LeftIcon";

// Detail Page
//
// In the detail page, there are:
// 1. Products Information
//    There is products information such as:
//    name, image, description, and price
//
// 2. Action
//    Here, user can buy/sell the products.
//    The buy/sell condition depends on the situation.
//
//    When the user go to the Detail Page from Home Page,
//    then it's a buy condition.
//
//    When in buy condition, the user can buy the product if the coin
//    balance is enough. After the product is bought, the coin balance
//    is deducted and the product is added to My Products Page.
//
//    When the user to to the Detail Page from My Products Page,
//    then it's a sell condition.
//
//    When in sell condition, if the user sell the product, add the coin balance
//    and remove the product from My Products Page.
//
// 3. Back Button


const Detail = () : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve productPressed, productPressHandler, buyProductHandler, isBuyProduct,
    //  sellProductHandler, and isTransactionSuccess from the context
    const appContext = useContext(AppContext);
    const {
        productPressed, 
        productPressHandler, 
        buyProductHandler, 
        isBuyProduct, 
        sellProductHandler,
        isTransactionSuccess,
    } = appContext;

    // isShowFullScreen
    //  Determine whether the product's image is show on full screen or not.
    const [isShowFullScreen, setIsShowFullScreen] = useState<boolean>(false);

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve MainStyle and DetailStyle
    const mainStyleContext = useContext(MainStyleContext);
    const {MainStyle, DetailStyle} = mainStyleContext; 

    // useEffect
    //  If the user press the BackPress on device, go back to Home.tsx
    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            productPressHandler([]);
            return true;
        });

        return () => backHandler.remove();
    });    

    // backgroundColor
    //  Determine which backgroundColor should used.
    const [backgroundColor, setBackgroundColor] = 
        useState(                        
            isBuyProduct 
            ? Appearance.getColorScheme() === "light" 
                ? "#9480bc" 
                : "#6b7280" 
            : Appearance.getColorScheme() === "light" 
                ? "white"
                : "#6b7280"
        );
    
    // color
    //  Determine which color should used.
    const [color, setColor] = 
        useState(
            isBuyProduct 
                ? "white" 
                : Appearance.getColorScheme() === "light"
                    ? "#9480bc"
                    : "white"            
        );


    // When the theme is changed, set the new backgroundColor and color value.
    Appearance.addChangeListener(() => {
        setBackgroundColor(                        
            isBuyProduct 
            ? Appearance.getColorScheme() === "light" 
                ? "#9480bc" 
                : "#6b7280" 
            : Appearance.getColorScheme() === "light" 
                ? "white"
                : "#6b7280"
        );

        setColor(
            isBuyProduct 
                ? "white" 
                : Appearance.getColorScheme() === "light"
                    ? "#9480bc"
                    : "white"            
        );
    });

    return (
        <ScrollView style = {MainStyle.container}>
            {isTransactionSuccess !== null 
                ? 
                    <Modal />
                : <></>
            }

            <View style = {isTransactionSuccess ? {opacity: 0.2} : {opacity: 1}}>
                <View style = {DetailStyle.header}>
                    <View style = {DetailStyle.icon}>
                        <TouchableOpacity onPress = {() => productPressHandler([])}>
                            <LeftIcon />                    
                        </TouchableOpacity>

                        <Text style = {DetailStyle.title}>
                            {productPressed[0].title}
                        </Text>                    
                    </View>

                    <TouchableOpacity onPress = {() => setIsShowFullScreen(!isShowFullScreen)}>
                        <Image 
                            style       = {isShowFullScreen ? DetailStyle.fullImage : DetailStyle.image}
                            source      = {{uri: productPressed[0].image}}
                            resizeMode  = "contain"
                        />                        
                    </TouchableOpacity>

                </View>

                <TextTitle 
                    title = {productPressed[0].title}
                />

                <Text style = {DetailStyle.subTitle}>
                    Price
                </Text>

                <TextSubTitle
                    subTitle = {productPressed[0].price + " Coins"}
                /> 

                <Text style = {DetailStyle.subTitle}>
                    Desciption
                </Text>

                <TextSubTitle
                    subTitle = {productPressed[0].description}
                />

                <Buttons 
                    title           = {isBuyProduct ? "Buy" : "Sell"}
                    backgroundColor = {backgroundColor}
                    color           = {color}
                    products        = {productPressed}
                    press           = {isBuyProduct ? buyProductHandler : sellProductHandler}
                />                   
            </View>

                           
        </ScrollView>
    )
}

export default Detail;