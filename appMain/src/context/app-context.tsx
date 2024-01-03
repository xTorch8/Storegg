import React, {ReactNode, useState, useEffect, createContext} from "react";
import {Alert, BackHandler, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";

import { useQuery } from '@tanstack/react-query';

import ProductsAPI from "../data/api/ProductsAPI";
import { setMyCoinsData, getMyCoinsData, setMyProductsData, getMyProductsData } from "../data/storage/storage";

type ProductsAPIType = {
    id          : number,
    title       : string,
    price       : number,
    description : string,
    category    : string,
    image       : string,
    rating: {
        rate    : number,
        count   : number,
    };
}[]

type ProductsType = {
    title       : string,
    price       : string,
    description : string,
    image       : string,
}

interface AppContextType {
    products                        : ProductsAPIType,    
    filteredProducts                : ProductsAPIType,
    productPressed                  : ProductsType[],    
    productPressHandler             : (product : ProductsType[]) => void,
    isShowList                      : boolean,
    changeView                      : () => void,
    isShowMyProducts                  : boolean,
    showMyProductsHandler           : (condition : boolean) => void,
    myProducts                      : ProductsType[],
    myCoins                         : number,
    isBuyProduct                    : boolean,
    changeConditionHandler          : (condition : boolean) => void,
    isTransactionSuccess            : boolean | null,
    changeTransactionStatusHandler  : (condition : boolean | null) => void,
    buyProductHandler               : (product: ProductsType[], coins: number) => void,
    sellProductHandler              : (product: ProductsType[], coins: number) => void,
    closeModalHandler               : () => void,
    searched                        : string | undefined,
    searchChangeHandler             : (event: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    exitHandler                     : () => boolean,
}

const AppContext = createContext<AppContextType>({
    products                        : [],
    filteredProducts                : [],
    productPressed                  : [],
    productPressHandler             : () => {},
    isShowList                      : true,
    changeView                      : () => {},
    isShowMyProducts                  : false,
    showMyProductsHandler           : () => {},
    myProducts                      : [],
    myCoins                         : 0,    
    isBuyProduct                    : true,
    changeConditionHandler          : () => {},
    isTransactionSuccess            : null,
    changeTransactionStatusHandler  : () => {},
    buyProductHandler               : () => {},
    sellProductHandler              : () => {},
    closeModalHandler               : () => {},    
    searched                        : "",
    searchChangeHandler             : () => {},
    exitHandler                     : () => {return true},
});

const AppContextProvider = ({children} : {children : ReactNode}) => {
    // products
    //  List of products from the API.
    const [products, setProducts] = useState<ProductsAPIType>([]);

    // filteredProducts
    //  List of products that have been filtered by searched bar.
    const [filteredProducts, setFilteredProducts] = useState<ProductsAPIType>([]);

    //  Fetch the products from the API and update products value.
    const {data} = useQuery<ProductsAPIType>({
        queryKey    : ["products"],
        queryFn     : ProductsAPI, 
    });

    useEffect(() => {
        if (data != undefined) {
            setProducts(data);
            setFilteredProducts(data);    
        }        
    }, [data]);


    // productPressed
    //  A product that is pressed by the user.
    //  If there isn't any product pressed by the user, the value will be [].
    //  If there is a product that pressed by the user, the value will be 
    //  an array with only one object element that contain the pressed product
    //  and its property.
    const [productPressed, setProductPressed] = useState<ProductsType[]>([]);

    // productPressHandler 
    //  Set the value of productPressed.
    //
    //  Parameter:
    //      product: product that is pressed by the user and it's property
    //  Return:
    //      void
    //
    //  This function will run when the user press a product in the Home.tsx or
    //  go back from Detail.tsx
    const productPressHandler = (product : ProductsType[]) : void => {
        setProductPressed(product);
    }

    // isShowList
    //  Determine which type of view the products should be displayed.
    //  If the value is true, the products will be displayed in list view.
    //  If the value is false, the products will be displayed in grid view.
    const [isShowList, setIsShowList] = useState<boolean>(true);

    // changeView
    //  Set the value of isShowList.
    //
    //  Parameter:
    //      -
    //  Return:
    //      void
    //
    //  This function will run whenever the user press on the list view or grid view icon.
    const changeView = () : void => {
        if (isShowList) {
            setIsShowList(false);
        }
        else {
            setIsShowList(true);
        }
    }      
    
    // isShowMyProducts
    //  Determine should MyProducts.tsx is showed or not.
    //  If true, MyProducts.tsx will be showed.
    //  If false, MyProducts.tsx will not be showed.
    const [isShowMyProducts, setIsShowMyProducts] = useState<boolean>(false);

    // showMyProductsHandler
    //  Set the value of isShowMyProducts
    //  
    //  Parameter:
    //      condition: a true or false value
    //  Return:
    //      void
    //  
    //  This function will run when the user press the "My Products" button is the Home.tsx
    //  or the user go back from MyProducts.tsx
    const showMyProductsHandler = (condition : boolean) : void => {
        setIsShowMyProducts(condition);
    }    

    // myProducts
    //  A list of products that the user have bought.
    const [myProducts, setMyProducts] = useState<ProductsType[]>([]);

    // useEffect
    //  Retrieve myProducts from the AsyncStorage and update myProducts value.
    useEffect(() => {
        const retrieveMyProducts = async () => {
            try {
                const myProductsData = await getMyProductsData();
                setMyProducts(myProductsData);     
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        }
        retrieveMyProducts();  
    }, []);


    // myCoins
    //  Coins that the user have for transaction.
    const [myCoins, setMyCoins] = useState<number>(0);

    // useEffect
    //    Retrieve myCoins in the AsyncStorage and update the value of myCoins.
    useEffect(() => {
        const retrieveMyCoins = async () => {
            try {
                const myCoinsData : number = await getMyCoinsData();
                setMyCoins(myCoinsData);        
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        }
        retrieveMyCoins();
    }, []);


    // isBuyProduct
    //  Determine whether the user is in buy or sell condition.
    //  If the user is in Home.tsx, the value will be true.
    //  If the user is in MyProducts.tsx, the value will be false.
    const [isBuyProduct, setIsBuyProduct] = useState<boolean>(true);

    // changeConditionHandler
    //  Set the value of isBuyProduct.
    //
    //  Parameter:
    //      condition: a true or false value
    //  Return:
    //      void
    //  
    //  This function will run whenever Home.tsx or MyProducts.tsx is loaded.
    const changeConditionHandler = (condition : boolean) => {
        setIsBuyProduct(condition);
    }

    // isTransactionSuccess
    //  Determine whether the transaction (buy or sell) is success or not
    //  If the user not in transaction mode, the value will be null.
    //  If the transaction is success, the value will be true.
    //  If the transaction is failed, the value will be false.
    const [isTransactionSuccess, setIsTransactionSuccess] = useState<boolean | null>(null);

    // changeTransactionStatusHandler
    //  Change the value of isTransactionSuccess.
    //
    //  Parameter:
    //      condition: a value of null or true or false
    //  Return:
    //      void
    const changeTransactionStatusHandler = (condition : boolean | null) => {
        setIsTransactionSuccess(condition);
    }

    // buyProductHandler
    //  The logic for buying product.
    //  The user can buy a product if the coins is enough.
    //  The bought product will be automaticaly updated in myProductsData and AsyncStorage.
    //
    //  Parameters:
    //      product : a product that the user want to buy
    //      coins   : coins that the user have
    //  Return:
    //      void
    //
    //  This function will run when the user want to buy a product.
    const buyProductHandler = async (product : ProductsType[], coins : number) => {
        try {
            if (coins >= Number(product[0].price)) {
                const newCoins : number = +(coins - Number(product[0].price)).toFixed(2);
                await setMyCoinsData(newCoins);

                const existedMyProducts = await getMyProductsData();
                await setMyProductsData([...existedMyProducts, product[0]]); 

                setMyCoins(newCoins);
                setMyProducts([...existedMyProducts, product[0]]);
                setIsTransactionSuccess(true);
            }
            else {
                setIsTransactionSuccess(false);
            }            
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    // sellProductHandler
    //  The sold product will be automaticaly updated in myProductsData and AsyncStorage.
    //
    //  Parameters:
    //      product : a product that the user want to sell
    //      coins   : coins that the user have
    //  Return:
    //      void
    //
    //  This function will run when the user want to sell a product.
    const sellProductHandler = async (product : ProductsType[], coins : number) => {
        try {
            const newCoins : number = +(coins + Number(product[0].price)).toFixed(2);
            await setMyCoinsData(newCoins);

            const existedMyProducts = await getMyProductsData();

            const soldProductIndex  = existedMyProducts.findIndex((myProduct : ProductsType) => {
                return JSON.stringify(myProduct) === JSON.stringify(product[0]);
            });

            const newMyProducts = existedMyProducts.filter((myProduct: ProductsType, index: number) => {
                return index != soldProductIndex;
            });
            
            await setMyProductsData(newMyProducts); 

            setMyCoins(newCoins);
            setMyProducts(newMyProducts);
            setIsTransactionSuccess(true);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }        

    // closeModalHandler
    //  Close the modal in the app and update the value of productPressed 
    //  and isTransactionSuccess.
    //
    //  Parameter:
    //      -
    //  Return:
    //      void
    //
    //  This function will run when the user close the modal after the transaction
    const closeModalHandler = () => {
        setProductPressed([]);
        setIsTransactionSuccess(null);
    }

    // searched
    //  The inputed value from search bar.
    const [searched, setSearched] = useState<string>("");

    // searchChangeHandler
    //  Set the value of searched.
    //
    //  Parameter:
    //      event
    //  Return:
    //      void
    //  
    //  This function will run whenever the text in the search bar is changed.
    const searchChangeHandler = (event : NativeSyntheticEvent<TextInputChangeEventData>) : void => {
        setSearched(event.nativeEvent.text);
    }

    // useEffect
    //  Filter the products based on searched value.
    useEffect(() => {
        if (searched.length === 0) {
            setFilteredProducts(products);
        }
        else {
            setFilteredProducts(products.filter((product) => {
                return (product.title.toLowerCase().includes(searched.toLowerCase()));
            }));                    
        }
    }, [searched]);

    // exitHandler
    //  Alert the user when want to exit the app
    //  If the user, press "Yes", exit the app. 
    //  If the user, press "No", stay in app.
    //
    //  Parameter:
    //      -
    //  Return:
    //      void
    //
    //  This function will run When the user press back button 
    //  in their device while at Home.tsx
    const exitHandler = () => {
        Alert.alert(
            "Storegg",
            "Are you sure want to exit the app?",
            [
              {
                text: "No",
                style: "cancel",
              },
              {
                text: "Yes",
                onPress: () => {
                    BackHandler.exitApp();
                },
              },                    
            ],
            { cancelable: false }
        );
          
        return true;    
    }    
    return (
        <AppContext.Provider value = {{
            products,
            filteredProducts,
            productPressed,
            productPressHandler,
            isShowList,
            changeView,
            isShowMyProducts,
            showMyProductsHandler,
            myProducts,
            myCoins,            
            isBuyProduct,
            changeConditionHandler,
            isTransactionSuccess,
            changeTransactionStatusHandler,
            buyProductHandler,
            sellProductHandler,
            closeModalHandler,
            searched,
            searchChangeHandler,  
            exitHandler,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider}