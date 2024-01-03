import React, {ReactNode, useContext} from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import MyProducts from './src/pages/MyProducts';

import { AppContext } from './src/context/app-context';
import { MainStyleContext } from './src/context/style-context';

interface AppMainProps {
    changeApp   : (condition : boolean) => void,
}

const AppMain = (props : AppMainProps): JSX.Element => {
    // appContext
    //  Use the AppContext.
    //  Retrieve productPressed and isShowMyProducts.
    const appContext = useContext(AppContext);
    const {productPressed, isShowMyProducts} = appContext;

    // mainStyleContext
    //  Use the context from style-context.tsx
    //  Retrieve AppMainStyle
    const mainStyleContext = useContext(MainStyleContext);
    const {AppMainStyle} = mainStyleContext; 
    
    // content
    //  Set the content that will showed in the screen.
    let content : ReactNode = <></>;
    if (productPressed.length === 0) {
        if (isShowMyProducts) {
        content =
            <MyProducts />          
        } 
        else {
        content = 
            <Home 
                changeApp = {props.changeApp}
            />  
        }
    }
    else {
        content =
        <ScrollView>
            <Detail />        
        </ScrollView>
    }

    return (
        <SafeAreaView style = {AppMainStyle.container}>
            {content}  
        </SafeAreaView>
    );
}


export default AppMain;
