/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactNode, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppMain from './appMain/AppMain';
import AppSub from './appSub/AppSub';

import { AppContextProvider } from './appMain/src/context/app-context';
import { SubAppContextProvider } from './appSub/src/context/sub-app-context';

import { MainStyleContextProvider } from './appMain/src/context/style-context';
import { SubStyleContext, SubStyleContextProvider } from './appSub/src/context/style-context';


const queryClient = new QueryClient();

function App(): JSX.Element {
  // isShowApp
  //  Determine which app should be showed.
  //  If the value is true, AppMain.tsx will be showed.
  //  If the value is false, AppSub.tsx will be showed. 
  const [isShowMainApp, setIsShowMainApp] = useState<boolean>(true);

  // changeAppHandler
  //  Set the value of isShowMainApp
  //
  //  Parameter:
  //    condition : a value of true or false
  //  Return:
  //    void
  //  
  //  This function will run when the user try to navigate between apps
  const changeAppHandler = (condition : boolean) => {
    setIsShowMainApp(condition);
  }

  // content
  //  app that showed on the screen.
  let content : ReactNode = "";
  if (isShowMainApp) {
    content = 
    <AppContextProvider>
      <MainStyleContextProvider>
        <AppMain
          changeApp = {changeAppHandler}
        />        
      </MainStyleContextProvider>
    </AppContextProvider>;    
  }
  else {
    content =
    <SubAppContextProvider>
      <SubStyleContextProvider>
        <AppSub
          changeApp = {changeAppHandler}
        />             
      </SubStyleContextProvider>

    </SubAppContextProvider>;
  } 


  return (
    <QueryClientProvider client = {queryClient}>
      <SafeAreaView style = {{flex: 1}}>
        {content} 
      </SafeAreaView>      
    </QueryClientProvider>

  );
}


export default App;
