import React, { useEffect, useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, BackHandler, Alert } from "react-native";

import Header from "../components/Header";
import TextTitle from "../components/TextTitle";
import Product from "../components/Product";
import GridView from "../components/GridView";

import { AppContext } from "../context/app-context";
import { MainStyleContext } from "../context/style-context";

import ListViewIcon from "../assets/icons/ListViewIcon";
import GridViewIcon from "../assets/icons/GridViewIcon";

// Home Page
//
// In the home page, there are:
// 1. Search Bar
//    Filter available products based on name.
//
// 2. My Products's Button
//    Go to the My Products Page when clicked.
//
// 3. My Coins
//    Display coins that the user have.
//    By default, the user have 500 coins.
//    The coins are saved in AsyncStorage. 
//
//    For more details:
//    appMain/src/data/storage/storage.tsx
//
// 4. Available products
//    Display available products.
//    Products can displayed in list or grid view.
//
//    When the product is pressed, go to the Detail Page.
//    There, the user can buy the products.
//
//    Products are fetched from https://fakestoreapi.com/products
//    This project use TanstackQuery for fetching the products.
//
//    For more details:
//    appMain/src/data/api/ProductsAPI.tsx
//    appMain/src/context/app-context.tsx
//
// 5. Egg Icon
//    Go to the sub application 


interface HomeProps {
    changeApp   : (condition : boolean) => void,
}

const Home = (props : HomeProps) : JSX.Element => {
    // homeContext
    //  Use the context from app-context.tsx
    //  Retrieve products, filteredProducts, isShowList, changeView, myCoins, 
    //  changeConditionHandler, and exitHandler from the context
    const appContext = useContext(AppContext);
    const {products, filteredProducts, isShowList, changeView, myCoins, changeConditionHandler, searched, exitHandler} = appContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve CoinDisplayStyle, MainStyle, and EggIconStyle
    const mainStyleContext = useContext(MainStyleContext);
    const {CoinDisplayStyle, MainStyle, EggIconStyle} = mainStyleContext; 

    // useEffect
    //  Set the value of isBuyCondition in the context into true (buy condition). 
    useEffect(() => {
        changeConditionHandler(true);        
    }, []);

    // useEffect
    //  If the user press the BackPress on device, show alert message.
    //  If the user agree to exit, quit the app.
    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", exitHandler);
        return () => backHandler.remove();
    });     

    let filteredProduct = filteredProducts.length === 0 ? products : filteredProducts;
    return (
        <>
            <Header />

            {/* Display My Coins */}
            <View style = {CoinDisplayStyle.container}>
                <View style = {CoinDisplayStyle.innerContainer}>
                    <ScrollView horizontal = {true}>
                        <Text style = {CoinDisplayStyle.title}> {myCoins} </Text>    
                    </ScrollView>
                       
                    <Text style = {CoinDisplayStyle.subTitle}> My Coins </Text>
                </View>                           
            </View>
         
            {/* Display Available Products */}
            <View style = {MainStyle.container}>
                <View style = {MainStyle.icon}>
                    <TextTitle title = "Available Products"/> 
                    {isShowList 
                        ? 
                            <TouchableOpacity onPress = {changeView}> 
                                <ListViewIcon /> 
                            </TouchableOpacity>
                        : 
                            <TouchableOpacity onPress = {changeView}> 
                                <GridViewIcon /> 
                            </TouchableOpacity>
                    }
                </View>
                
                <ScrollView style = {{height: 350}}>
                    {isShowList 
                        ?
                            filteredProduct.map((product, index) => {
                                return (
                                    <Product 
                                        name        = {product.title}
                                        price       = {String(product.price)}
                                        image       = {product.image}
                                        description = {product.description}
                                        isShowList  = {isShowList}
                                        key         = {index}
                                    />
                                )
                            }) 
                        :
                            <GridView
                                data        = {filteredProduct}
                                isShowList  = {isShowList}
                            />
                    }                                   
                </ScrollView>                     
            </View>

            {/* Egg Icon */}
            <View style = {CoinDisplayStyle.container}>
                <View style = {EggIconStyle.container}>
                    <TouchableOpacity onPress = {() => props.changeApp(false)}>
                        <Image 
                            source  = {require("../assets/img/egg.png")}
                            style   = {{width: 40, height: 40}}
                        />                        
                    </TouchableOpacity>

                </View>                
            </View>

        </>
    )
}

export default Home;