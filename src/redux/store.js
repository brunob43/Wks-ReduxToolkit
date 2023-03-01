import { configureStore } from "@reduxjs/toolkit";
import characters from "./characterSlice";

export default configureStore({
    reducer: {

        character: characters,
       // episodes: episodes

    }
})
 
//---npm install @reduxjs/toolkit---//