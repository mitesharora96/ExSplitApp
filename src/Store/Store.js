import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./ExGroupSlice";

const ExSplitStore = configureStore(
    {
        reducer:{
            ExGroup:groupSlice.reducer
        }
    }
)

export default ExSplitStore