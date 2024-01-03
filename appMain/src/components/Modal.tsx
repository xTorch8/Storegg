import React, {useContext} from "react";
import { TouchableOpacity, View } from "react-native";

import TextTitle from "./TextTitle";
import TextSubTitle from "./TextSubTitle";

import { MainStyleContext } from "../context/style-context";
import { AppContext } from "../context/app-context";


const Modal = () : JSX.Element => {
    // appContext
    //  Use the context from app-context.tsx
    //  Retrieve isTransactionSuccess, myCoins, isBuyProducts, 
    //  productPressed, and closeModalHandler
    const appContext = useContext(AppContext);
    const {isTransactionSuccess, myCoins, isBuyProduct, productPressed, closeModalHandler} = appContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve ButtonStyle.
    const mainStyleContext = useContext(MainStyleContext);
    const {ModalStyle} = mainStyleContext;     
    return (
        <View style = {ModalStyle.container}>
            <View>
                <TextTitle 
                    title = {isTransactionSuccess ? "Success" : "Failed"}
                />
            </View>

            <View style = {ModalStyle.innerContainer}>
                {isBuyProduct 
                    ? 
                        isTransactionSuccess
                        ?
                            <TextSubTitle
                                subTitle = {productPressed[0].title + " was bought successfully!"}
                            />
                        :
                            <TextSubTitle 
                                subTitle = {productPressed[0].title + " was failed to bought!"}
                            />
                    :
                        <TextSubTitle 
                            subTitle = {productPressed[0].title + " was sold successfully!"}
                        />
                }

                <TextSubTitle 
                    subTitle = {
                        isTransactionSuccess 
                            ? "Your current balance is " + myCoins 
                            : "You're short of balance."
                    }
                />
            </View>

            <View style = {ModalStyle.innerContainer}>
                <TouchableOpacity style = {ModalStyle.button} onPress = {closeModalHandler}>
                    <TextTitle 
                        title   = "OK"
                        color   = "#8775a9"
                    />
                </TouchableOpacity>
            </View>
        </View>            
    )
}

export default Modal;