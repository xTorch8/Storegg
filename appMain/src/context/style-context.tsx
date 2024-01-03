import React, {useState, createContext, ReactNode} from "react";
import { Appearance, StyleSheet } from "react-native";

const AppMainLight = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});

const AppMainDark = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4b5563",
    }
});


const HeaderLight = StyleSheet.create({
    container: {
        backgroundColor: "#8775a9",
        padding: 16,
        justifyContent: "center",
        alignItems: "center", 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    searchBar: {
        display: "flex", 
        flexDirection: "row", 
        backgroundColor: "white", 
        width: "100%",
    },
    myProduct: {
        backgroundColor: "white", 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        alignSelf: "flex-start", 
        padding: 8, 
        borderRadius: 8, 
        elevation: 5,
        marginTop: 12,
    }
});

const HeaderDark = StyleSheet.create({
    container: {
        backgroundColor: "#374151",
        padding: 16,
        justifyContent: "center",
        alignItems: "center", 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    searchBar: {
        display: "flex", 
        flexDirection: "row", 
        backgroundColor: "#6b7280", 
        width: "100%",
    },
    myProduct: {
        backgroundColor: "#6b7280", 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        alignSelf: "flex-start", 
        padding: 8, 
        borderRadius: 8, 
        elevation: 5,
        marginTop: 12,
    }
});


const MainLightAndDark = StyleSheet.create({
    container: {
        padding: 20,
    },
    icon: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
    }
});


const CoinDisplayLight = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        marginRight: 16, 
        marginTop: 28,
    },
    innerContainer: {
        backgroundColor: "white", 
        padding: 4, 
        width: "25%", 
        alignSelf: "flex-end", 
        position: "absolute", 
        borderRadius: 12,
        elevation: 5,        
    }, 
    title: {
        color: "purple", 
        textAlign: "right", 
        fontSize: 25, 
        fontWeight: "bold"
    },
    subTitle: {
        textAlign: "right",
        fontWeight: "600",
        color: "black",
    }
});

const CoinDisplayDark = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        marginRight: 16, 
        marginTop: 28,
    },
    innerContainer: {
        backgroundColor: "#6b7280", 
        padding: 4, 
        width: "25%", 
        alignSelf: "flex-end", 
        position: "absolute", 
        borderRadius: 12,
        elevation: 5,        
    }, 
    title: {
        color: "#f1f5f9", 
        textAlign: "right", 
        fontSize: 25, 
        fontWeight: "bold"
    },
    subTitle: {
        textAlign: "right",
        color: "#f1f5f9",
        fontWeight: "600",
    }
});


const EggIconLight = StyleSheet.create({
    container: {
        backgroundColor: "white", 
        borderRadius: 200, 
        padding: 8,
        elevation: 5,
    }
});

const EggIconDark = StyleSheet.create({
    container: {
        backgroundColor: "#6b7280",
        borderRadius: 200, 
        padding: 8,
    }
});


const ProductListLight = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    card: {
        backgroundColor: "white",
        marginTop: 8,
        padding: 8,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
    }, 
    leftInnerCard: {
        width: "30%",
    },
    rightInnerCard: {
        width: "70%",
        padding: 16,
    },
    image: {
        width: "50%",
        height: 120,
        marginLeft: "auto",
        marginRight: "auto",
    }                
});

const ProductListDark = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    card: {
        backgroundColor: "#6b7280",
        marginTop: 8,
        padding: 8,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
    }, 
    leftInnerCard: {
        width: "30%",
    },
    rightInnerCard: {
        width: "70%",
        padding: 16,
    },
    image: {
        width: "50%",
        height: 120,
        marginLeft: "auto",
        marginRight: "auto",
    }                
});

const ProductGridLight = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    card: {
        width: "49%",
        backgroundColor: "white",
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 8,
        borderRadius: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        elevation: 5,
    },
    topInnerCard: {
        width: "100%",
    },
    bottomInnerCard: {
        width: "100%",
    },
    image: {
        width: "50%",
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
    }
});

const ProductGridDark = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    card: {
        width: "49%",
        backgroundColor: "#6b7280",
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 8,
        borderRadius: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        elevation: 5,
    },
    topInnerCard: {
        width: "100%",
    },
    bottomInnerCard: {
        width: "100%",
    },
    image: {
        width: "50%",
        height: 100,
        marginLeft: "auto",
        marginRight: "auto",
    }
});


const ButtonLight = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 12,
        marginTop: 16,
        borderRadius: 8,
        width: "100%",     
        elevation: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
    }
});

const ButtonDark = StyleSheet.create({
    container: {
        backgroundColor: "#6b7280",
        padding: 12,
        marginTop: 16,
        borderRadius: 8,
        width: "100%",     
        elevation: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#f1f5f9",
    }
});


const IconButtonLight = StyleSheet.create({
    text : {
        fontSize: 15,
        fontWeight: "400",
        color: "black",
    }
});

const IconButtonDark = StyleSheet.create({
    text : {
        fontSize: 15,
        fontWeight: "400",
        color: "#f1f5f9",
    }
});


const TextLight = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "justify",
    },
    subTitle : {
        fontSize: 15,
        fontWeight: "600",
        color: "black",
        textAlign: "justify",
    },
});

const TextDark = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f1f5f9",
        textAlign: "justify",
    },
    subTitle : {
        fontSize: 15,
        fontWeight: "600",
        color: "#f1f5f9",
        textAlign: "justify",
    },
});


const InputLight = StyleSheet.create({
    input : {
        padding: 4,
        width: "100%",
        fontSize: 15,
        fontWeight: "600",
        color: "gray",
    }
});

const InputDark = StyleSheet.create({
    input: {
        padding: 4,
        width: "100%",
        fontSize: 15,
        fontWeight: "600",
        color: "#f1f5f9",        
    }
});


const DetailLight = StyleSheet.create({
    header: {
        borderColor: "black",
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        marginTop: 8,
    },
    subTitle: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",
        marginTop: 8,
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: 12,
        marginBottom: 12,
    },
    fullImage: {
        width: "100%",
        height: 600,
    },
    icon: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        alignSelf: "flex-start", 
        padding: 8,
    }
});

const DetailDark = StyleSheet.create({
    header: {
        borderColor: "#f1f5f9",
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 25,
        color: "#f1f5f9",
        fontWeight: "bold",
        marginTop: 8,
    },
    subTitle: {
        fontSize: 18,
        color: "#f1f5f9",
        fontWeight: "600",
        marginTop: 8,
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: 12,
        marginBottom: 12,
    },
    fullImage: {
        width: "100%",
        height: 600,
    },
    icon: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        alignSelf: "flex-start", 
        padding: 8,
    }
});


const ModalLight = StyleSheet.create({
    container: {
        backgroundColor: "white", 
        padding: 16, 
        elevation: 5,
        position: "absolute",
        zIndex: 2,
        top: "40%",
        width: "100%",
    },
    innerContainer: {
        marginTop: 8,
    },
    button: {
        alignSelf: "flex-end",
    }
});

const ModalDark = StyleSheet.create({
    container: {
        backgroundColor: "#6b7280", 
        padding: 16, 
        elevation: 5,
        position: "absolute",
        zIndex: 2,
        top: "40%",
        width: "100%",
    },
    innerContainer: {
        marginTop: 8,
    },
    button: {
        alignSelf: "flex-end",
    }
});


const MainStyleContext = createContext({
    AppMainStyle        : Appearance.getColorScheme() === "light" ? AppMainLight : AppMainDark, 
    HeaderStyle         : Appearance.getColorScheme() === "light" ? HeaderLight : HeaderDark,
    MainStyle           : MainLightAndDark,
    CoinDisplayStyle    : Appearance.getColorScheme() === "light" ? CoinDisplayLight : CoinDisplayDark,
    EggIconStyle        : Appearance.getColorScheme() === "light" ? EggIconLight : EggIconDark,
    ProductStyleList    : Appearance.getColorScheme() === "light" ? ProductListLight : ProductListDark,
    ProductStyleGrid    : Appearance.getColorScheme() === "light" ? ProductGridLight : ProductGridDark,
    ButtonStyle         : Appearance.getColorScheme() === "light" ? ButtonLight : ButtonDark,
    IconButtonStyle     : Appearance.getColorScheme() === "light" ? IconButtonLight : IconButtonDark,
    ModalStyle          : Appearance.getColorScheme() === "light" ? ModalLight : ModalDark,
    TextStyle           : Appearance.getColorScheme() === "light" ? TextLight : TextDark,
    InputStyle          : Appearance.getColorScheme() === "light" ? InputLight : InputDark,
    DetailStyle         : Appearance.getColorScheme() === "light" ? DetailLight : DetailDark,
});

const MainStyleContextProvider = ({children} : {children : ReactNode}) => {
    const [AppMainStyle, setAppMainStyle] = 
        useState(Appearance.getColorScheme() === "light" ? AppMainLight : AppMainDark);

    const [HeaderStyle, setHeaderStyle] =
        useState(Appearance.getColorScheme() === "light" ? HeaderLight : HeaderDark);

    const [MainStyle, setMainStyle] = useState(MainLightAndDark);

    const [CoinDisplayStyle, setCoinDisplayStyle] = 
        useState(Appearance.getColorScheme() === "light" ? CoinDisplayLight : CoinDisplayDark);

    const [EggIconStyle, setEggIconStyle] = 
        useState(Appearance.getColorScheme() === "light" ? EggIconLight : EggIconDark);

    const [ProductStyleList, setProductStyleList] = 
        useState(Appearance.getColorScheme() === "light" ? ProductListLight : ProductListDark);

    const [ProductStyleGrid, setProductStyleGrid] = 
        useState(Appearance.getColorScheme() === "light" ? ProductGridLight : ProductGridDark);

    const [ButtonStyle, setButtonStyle] = 
        useState(Appearance.getColorScheme() === "light" ? ButtonLight : ButtonDark);

    const [IconButtonStyle, setIconButtonStyle] = 
        useState(Appearance.getColorScheme() === "light" ? IconButtonLight : IconButtonDark);

    const [ModalStyle, setModalStyle] = 
        useState(Appearance.getColorScheme() === "light" ? ModalLight : ModalDark); 

    const [TextStyle, setTextStyle] = 
        useState(Appearance.getColorScheme() === "light" ? TextLight : TextDark);
        
    const [InputStyle, setInputStyle] = 
        useState(Appearance.getColorScheme() === "light" ? InputLight : InputDark);

    const [DetailStyle, setDetailStyle] = 
        useState(Appearance.getColorScheme() === "light" ? DetailLight : DetailDark);

    
    // Change all the style when the theme is changed.
    Appearance.addChangeListener(() => {
        setAppMainStyle(Appearance.getColorScheme() === "light" ? AppMainLight : AppMainDark);

        setHeaderStyle(Appearance.getColorScheme() === "light" ? HeaderLight : HeaderDark);

        setCoinDisplayStyle(Appearance.getColorScheme() === "light" ? CoinDisplayLight : CoinDisplayDark);

        setEggIconStyle(Appearance.getColorScheme() === "light" ? EggIconLight : EggIconDark);

        setProductStyleList(Appearance.getColorScheme() === "light" ? ProductListLight : ProductListDark);

        setProductStyleGrid(Appearance.getColorScheme() === "light" ? ProductGridLight : ProductGridDark);

        setButtonStyle(Appearance.getColorScheme() === "light" ? ButtonLight : ButtonDark);

        setIconButtonStyle(Appearance.getColorScheme() === "light" ? IconButtonLight : IconButtonDark);

        setModalStyle(Appearance.getColorScheme() === "light" ? ModalLight : ModalDark);

        setTextStyle(Appearance.getColorScheme() === "light" ? TextLight : TextDark);

        setInputStyle(Appearance.getColorScheme() === "light" ? InputLight : InputDark);

        setDetailStyle(Appearance.getColorScheme() === "light" ? DetailLight : DetailDark);
    });


    return (
        <MainStyleContext.Provider value = {{
            AppMainStyle, 
            HeaderStyle,
            MainStyle,
            CoinDisplayStyle,
            EggIconStyle,
            ProductStyleList,
            ProductStyleGrid,
            ButtonStyle,
            IconButtonStyle,
            ModalStyle,
            TextStyle,
            InputStyle,
            DetailStyle,  
        }}>
            {children}
        </MainStyleContext.Provider>
    )
}

export {MainStyleContext, MainStyleContextProvider}