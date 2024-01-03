import React, { useContext } from "react";
import {View } from "react-native";

import Product from "./Product";

import { MainStyleContext } from "../context/style-context";

type ProductsType = {
    id          : number;
    title       : string;
    price       : number;
    description : string;
    category    : string;
    image       : string;
    rating: {
        rate    : number;
        count   : number;
    };
}

interface GridViewProps {
    data        : ProductsType[],
    isShowList  : boolean
}

const GridView = (props : GridViewProps) : JSX.Element => {
    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve ProductStyleGrid.
    const mainStyleContext = useContext(MainStyleContext);
    const {ProductStyleGrid} = mainStyleContext; 
    
    return (
        <View style = {props.isShowList ? {display: "none"} : ProductStyleGrid.container}>
            {props.data.map((product, index) => {
                return (
                    <Product 
                        name        = {product.title}
                        price       = {String(product.price)}
                        image       = {product.image}
                        description = {product.description}
                        isShowList  = {props.isShowList}
                        key         = {index}
                    />
                )
            })}
        </View>
    )
}

export default GridView;