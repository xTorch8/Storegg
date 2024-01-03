/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Storegg - Final Project
//
// Created by: Evan Santosa - 2702227731 (AM Candidate)
// Contact: evan.santosa001@binus.ac.id
//
//
// Project depencencies:
//  react                                       (18.2.0)
//  react-native                                (0.72.7)
//  react-native-svg                            (^14.0.0)
//  react-native-async-storage/async-storage    (^1.19.8)
//  tanstack/react-query                        (^5.8.4)
//  java                                        (11.0.21)  
//
//
// Project structures:
// storegg
// > android
// > appMain        -- main application
//   > src
//     > assets     -- main application's assets (icons and images) 
//     > components -- main application's reusable components
//     > context    -- context for main application
//     > data       -- handling API and AsyncStorage in the main application
//     > pages      -- main application's pages/screen
//   > AppMain.tsx
// > appSub         -- sub application
//   > src
//     > assets     -- sub application's assets (icons and images)
//     > components -- sub application's reusable components
//     > context    -- context for sub application
//     > data       -- handling AsyncStorage in the sub application
//     > pages      -- sub application's pages/screen
//   > AppSub.tsx
// > ios
// > App.tsx
// > index.js
//
// Note:
// - This project support dark mode.
// - This project have an exit modal.

const root = () => {
    return (
        <App />
    )
}

AppRegistry.registerComponent(appName, () =>  root);
