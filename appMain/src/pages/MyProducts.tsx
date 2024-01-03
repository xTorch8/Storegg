import React, {useEffect, useContext} from "react";
import {View, ScrollView, TouchableOpacity, BackHandler} from "react-native";

import TextTitle from "../components/TextTitle";
import Product from "../components/Product";

import { AppContext } from "../context/app-context";
import { MainStyleContext } from "../context/style-context";

import LeftIcon from "../assets/icons/LeftIcon";

// My Products Page
//
// In the my products page, there are:
// 1. List Products
//    There are list products that the user have bought.
//    If the product is clicked, go to Detail Page.
//
//    The bought products are saved in AsyncStorage.
//    For more details:
//    appMain/src/data/storage/storage.tsx
//
// 2. Back Button


const MyProducts = () : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve myProducts, showMyProductsHandler, and changeConditionHandler from the context
    const appContext = useContext(AppContext);
    const {myProducts, showMyProductsHandler, changeConditionHandler} = appContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve MainStyle and DetailStyle
    const mainStyleContext = useContext(MainStyleContext);
    const {MainStyle, DetailStyle} = mainStyleContext;     

    // useEffect
    //  Set the value of isBuyCondition in the context into false (sell condition)   
    useEffect(() => {
        changeConditionHandler(false);        
    }, []);

    // useEffect
    //  If the user press the BackPress on device, go back to Home.tsx
    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            showMyProductsHandler(false);
            return true;
        });

        return () => backHandler.remove();
    });

    return (
        <View style = {MainStyle.container}>
            <View style = {DetailStyle.icon}>
                <TouchableOpacity onPress = {() => showMyProductsHandler(false)}>
                    <LeftIcon />    
                </TouchableOpacity>
                
                <TextTitle
                    title = "My Products"
                />
            </View>

            <ScrollView style = {{height: 550}}>
                {
                    myProducts.length === 0 
                    ?
                        <TextTitle
                            title = "You don't have any products"
                        />
                    :
                        myProducts.map((product, index) => {
                            return (
                                <Product 
                                    isShowList      = {true}
                                    name            = {product.title}      
                                    image           = {product.image}
                                    price           = {product.price}      
                                    description     = {product.description}
                                    key             = {index}
                                />
                            )
                        })
                }
            </ScrollView>
        </View>
    )
} 

export default MyProducts;