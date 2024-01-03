import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


// DEFAULT_COINS
//      by default, every user started with 500 coins
const DEFAULT_COINS : number = 500;

// getMyCoinsData
//      get the value of myCoins in the AsyncStorage
//      if the value is null (user use the application for the first time),
//      user will get 500 coins
//      if the value is not null, return the amount of coin before
const getMyCoinsData = async () : Promise<number | any> => {
    try {
        const myCoins : string | null = await AsyncStorage.getItem("myCoins");
        if (myCoins !== null || !Number.isNaN(myCoins)) {
            return Number(Number(myCoins).toFixed(2));
        }
        else {
            return DEFAULT_COINS;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

// setMyCoinsData
//      set the value of myCoins to the AsyncStorage
const setMyCoinsData = async (myCoins : number) : Promise<void> => {
    try {
        await AsyncStorage.setItem("myCoins", JSON.stringify(myCoins));
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export {getMyCoinsData, setMyCoinsData}