import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isEqual } from "../../../helpers/equal";

interface productInterface {
    brand: string[],
    size: string[],
    color: string[]
}

const initialState: productInterface = {
    brand: [],
    size: [],
    color: []
}

const authSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        saveBrands: (state, action: PayloadAction<string[]>) => {
            const newBrands = action.payload
            const brands = [...new Set(newBrands)]

            if(!isEqual(state.brand, newBrands)) {
                state.brand = brands
            }
        },
        saveSizes: (state, action: PayloadAction<string[]>) => {
            const newSizes = action.payload
            const sizes = [...new Set(newSizes)]

            if(!isEqual(state.size, newSizes)) {
                state.size = sizes
            }
        },
        saveColors: (state, action: PayloadAction<string[]>) => {
            const newColors = action.payload
            const colors = [...new Set(newColors)]

            if(!isEqual(state.color, newColors)) {
                state.color = colors
            }
        }
    }
})

export const { saveBrands, saveSizes, saveColors } = authSlice.actions
export default authSlice.reducer