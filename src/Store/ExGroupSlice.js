import { createSlice } from "@reduxjs/toolkit";
import groupData from "../groupData";

const groupSlice = createSlice({
    name:'ExGroupSlice',
    initialState:[],
    reducers:{
        createExGroup:(state,action)=>{
            let ob =  localStorage.getItem('CurrentUser')
            ob = JSON.parse(ob)
            action.payload.groupMembers = [...action.payload.groupMembers,ob]
           let gData = [...state,action.payload]
           console.log(gData)
           return gData
        },
        addExpenseInGroup:(state,action)=>{
            state.forEach((item,index)=>{
                if(item.groupID ===action.payload.groupID){
                    state[index].expenses=[]
                    state[index].expenses = [...state[index].expenses,action.payload]
                    
                }
            })
            console.log(state)
            
        },
        settleExpense:(state,action)=>{

        }
    }
})
export const {createExGroup,addExpenseInGroup,settleExpense} = groupSlice.actions
export default groupSlice