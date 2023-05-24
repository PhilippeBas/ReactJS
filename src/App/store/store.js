 import {configureStore,combineReducers} from '@reduxjs/toolkit'
 import listesReducer from './memes'

 export const store=configureStore({
    reducer:combineReducers({listes:listesReducer}),
    devTools:true
 })