import React, {useContext, useEffect} from "react";
import { View } from "react-native";

import Input from "./Input";
import IconButton from "./IconButton";

import { AppContext } from "../context/app-context";
import { MainStyleContext } from "../context/style-context";

import SearchIcon from "../assets/icons/SearchIcon";
import RightIcon from "../assets/icons/RightIcon";

const Header = () : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve searchChangeHandler and showMyProductsHandler from the context.
    const appContext = useContext(AppContext);
    const {searchChangeHandler, showMyProductsHandler} = appContext;  

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve HeaderStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {HeaderStyle} = mainStyleContext; 
    
    return (
        <View style = {HeaderStyle.container}>
            <View style = {HeaderStyle.searchBar}>
                <SearchIcon/>
                <Input 
                    placeholder = "Search Product.."
                    change      = {searchChangeHandler}
                />                  
            </View>
              
            <View style = {HeaderStyle.myProduct}>
                <IconButton 
                    title = "My Products"
                    press = {showMyProductsHandler}
                />
                <RightIcon />                
            </View> 

        </View>
    )
}

export default Header;