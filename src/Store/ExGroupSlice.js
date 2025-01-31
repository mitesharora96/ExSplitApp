import { createSlice } from "@reduxjs/toolkit";
import groupData from "../groupData";

const groupSlice = createSlice({
    name:'ExGroupSlice',
    initialState:[],
    reducers:{
        createExGroup:(state,action)=>{
           let gData = [...state,action.payload]
           return gData
        },
        addExpense:(state,action)=>{

        },
        settleExpense:(state,action)=>{

        }
    }
})
export const {createExGroup,addExpense,settleExpense} = groupSlice.actions
export default groupSlice