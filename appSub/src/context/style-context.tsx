import React, {useState, createContext, ReactNode} from "react";
import { Appearance, StyleSheet } from "react-native";

// styling for AppMain
const AppSubLight = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

const AppSubDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4b5563",
    }
});

// styling for Main
const MainLightAndDark = StyleSheet.create({
    container: {
        padding: 20,
    },
    icon: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        alignSelf: "flex-start", 
        padding: 8,
    }
});

// styling for PrizeValue
const PrizeValueLight = StyleSheet.create({
    container: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 16,
    },
    innerContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", marginHorizontal: 8,        
    },
    image: {
        width: 40, 
        height: 40,
    },
    text: {
        fontWeight: "600",
    }
});

const PrizeValueDark = StyleSheet.create({
    container: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 16,
    },
    innerContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", marginHorizontal: 8,        
    },
    image: {
        width: 40, 
        height: 40,
    },
    text: {
        fontWeight: "600",
        color: "#f1f5f9",
    }
});

// styling for EggFull and EggBroken
const EggLightAndDark = StyleSheet.create({
    container: {
        width: "60%", 
        marginLeft: "auto", 
        marginRight: "auto", 
        marginTop: 52,
    },
    eggFullImage: {
        width: 150, 
        height: 200, 
        marginTop: 16, 
        marginLeft: "auto", 
        marginRight: "auto"
    },
    eggBrokenImage: {
        width: 150, 
        height: 200, 
        marginTop: 4, 
        marginBottom: 16,
        marginLeft: "auto", 
        marginRight: "auto"        
    },
    coinPrizeImage: {
        width: 40, 
        height: 40, 
        marginTop: 16, 
        marginLeft: "auto", 
        marginRight: "auto"       
    }
});

// styling for Text
const TextLight = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "justify",
    }
});

const TextDark = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f1f5f9",
        textAlign: "justify",
    }
});

const SubStyleContext = createContext({
    AppSubStyle     : Appearance.getColorScheme() === "light" ? AppSubLight : AppSubDark,
    MainStyle       : MainLightAndDark,
    PrizeValueStyle : Appearance.getColorScheme() === "light" ? PrizeValueLight : PrizeValueDark,
    EggStyle        : EggLightAndDark,
    TextStyle       : Appearance.getColorScheme() === "light" ? TextLight : TextDark,
});

const SubStyleContextProvider = ({children} : {children : ReactNode}) => {
    const [AppSubStyle, setAppSubStyle] 
        = useState(Appearance.getColorScheme() === "light" ? AppSubLight : AppSubDark);

    const [MainStyle, setMainStyle] = useState(MainLightAndDark);

    const [PrizeValueStyle, setPrizeValueStyle] = 
        useState(Appearance.getColorScheme() === "light" ? PrizeValueLight : PrizeValueDark);

    const [EggStyle, setEggStyle] = useState(EggLightAndDark);
    
    const [TextStyle, setTextStyle] = 
        useState(Appearance.getColorScheme() === "light" ? TextLight : TextDark);

    
    // Change all the style when the theme is changed.    
    Appearance.addChangeListener(() => {
        setAppSubStyle(Appearance.getColorScheme() === "light" ? AppSubLight : AppSubDark);

        setPrizeValueStyle(Appearance.getColorScheme() === "light" ? PrizeValueLight : PrizeValueDark);

        setTextStyle(Appearance.getColorScheme() === "light" ? TextLight : TextDark);       
    })

    return (
        <SubStyleContext.Provider value = {{
            AppSubStyle,
            MainStyle,
            PrizeValueStyle,
            EggStyle,
            TextStyle,
        }}>
            {children}
        </SubStyleContext.Provider>
    )
}

export {SubStyleContext, SubStyleContextProvider}

