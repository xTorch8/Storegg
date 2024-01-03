import React, {useContext} from "react";
import { View, Image, TouchableOpacity } from "react-native";

import TextTitle from "./TextTitle";
import TextSubTitle from "./TextSubTitle";

import { MainStyleContext } from "../context/style-context";
import { AppContext } from "../context/app-context";

interface ProductProps {
    isShowList  : boolean,
    name        : string,
    image       : string,
    price       : string,
    description : string,
}

const Product = (props : ProductProps) : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve productPressHandler
    const homeContext = useContext(AppContext);
    const {productPressHandler} = homeContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve ProductStyleGrid and ProductStyleList.
    const mainStyleContext = useContext(MainStyleContext);
    const {ProductStyleGrid, ProductStyleList} = mainStyleContext;     

    return (
        <TouchableOpacity 
            style   = {props.isShowList ? {} : ProductStyleGrid.card} 
            onPress = {() => productPressHandler([{title: props.name, price: props.price, description: props.description, image: props.image}])}
        >
            <View style = {props.isShowList ? ProductStyleList.card : {}}>
                <View 
                    style = {props.isShowList ? ProductStyleList.leftInnerCard : ProductStyleGrid.topInnerCard}
                >
                    <Image 
                        style = {props.isShowList ? ProductStyleList.image : ProductStyleGrid.image} 
                        source = {{uri: props.image}}
                        resizeMode = "contain"
                    />    
                </View>

                <View 
                    style = {props.isShowList ? ProductStyleList.rightInnerCard : ProductStyleGrid.bottomInnerCard}
                >
                    <TextTitle 
                        title = {props.name}
                    />

                    <TextSubTitle
                        subTitle = {props.price}
                    />

                </View>               
            </View>
        </TouchableOpacity>
    )
}

export default Product;