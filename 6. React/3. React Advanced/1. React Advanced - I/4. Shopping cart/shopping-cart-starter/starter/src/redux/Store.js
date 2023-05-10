import  {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./Slices/CounterSlice"

// ek store multiple slices se bnta hai
//aur hmare pas ek hi slice hai = CounterSlice
export const store = configureStore({
    reducer: {
        counter: CounterSlice
    }
})