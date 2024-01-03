import React, {useState, createContext, ReactNode} from "react";
import { getMyCoinsData, setMyCoinsData } from "../data/storage";

type Prize = {
    coinType: string,
    coinValue: number,
}

interface SubAppContextType {
    isEggPressed        : boolean,
    eggPressHandler     : (condition : boolean) => void,
    prizes              : Prize[],
    userPrize           : Prize | null,
    generatePrize       : () => void,
}

const SubAppContext = createContext<SubAppContextType>({
    isEggPressed        : false,
    eggPressHandler     : () => {},
    prizes              : [
        {
            coinType    : "gold",
            coinValue   : 100,
        },
        {
            coinType    : "silver",
            coinValue   : 50,
        },
        {
            coinType    : "bronze",
            coinValue   : 20,
        },        
    ],
    userPrize           : null,
    generatePrize       : () => {},

});

const SubAppContextProvider = ({children} : {children : ReactNode}) => {
    // isEggPressed
    //  Determine whether the user have pressed the EggFull.tsx or not.
    //  If the user have clicked, the value will be true.
    //  If not, the value will be false.
    //  
    //  If the value is true, show EggBroken.tsx
    //  If the value is false, show EggFull.tsx
    const [isEggPressed, setIsEggPressed] = useState<boolean>(false);

    // eggPressHandler
    //  Set the value of isEggPressed.
    //
    //  Parameter:
    //      condition : a true or false
    //  Return:
    //      void
    //
    //  This function will run when MiniGame.tsx is loaded
    //  and when the user press the EggFull.tsx
    const eggPressHandler = (condition : boolean) => {
        setIsEggPressed(condition);
    }
    
    // prizes
    //  List of all prize possibility in the mini game.
    const prizes : Prize[] = [
        {
            coinType    : "gold",
            coinValue   : 100,
        },
        {
            coinType    : "silver",
            coinValue   : 50,
        },
        {
            coinType    : "bronze",
            coinValue   : 20,
        },        
    ];
   
    // userPrize
    //  The prize that the user got from playing the minigame.
    //  The value of userPrize will be randomed.
    const [userPrize, setUserPrize] = useState<Prize | null>(null);
    
    // generatePrize
    //  Generate random prize for the user and
    //  add myCoins in the AsyncStorage.
    //
    //  Parameter:
    //      -
    //  Return:
    //      -
    //
    //  This function will run when the user have played the minigame.
    const generatePrize = async () => {
        try {
            // Temporary only
            const prize = prizes[Math.floor(Math.random() * 3)];
            setUserPrize(prize);

            const currentCoins  : number = await getMyCoinsData();
            const newCoins      : number = currentCoins + prize.coinValue;
            await setMyCoinsData(newCoins);            
        }
        catch (error) {
            console.error(error);
            throw error;
        }

    }
    
    return (
        <SubAppContext.Provider value = {{
            isEggPressed,
            eggPressHandler,
            prizes,
            userPrize,
            generatePrize,
        }}>
            {children}
        </SubAppContext.Provider>
    )
}

export {SubAppContext, SubAppContextProvider}