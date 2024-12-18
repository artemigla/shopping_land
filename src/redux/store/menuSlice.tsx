import {createSlice} from '@reduxjs/toolkit';

type openState = {
    isOpen: boolean
}
const initialState : openState = {
    isOpen: false,
}

const burgerSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen
        },
        closeMenu: (state) => {
            state.isOpen = false;
        }
    }
})

export const {toggleMenu, closeMenu} = burgerSlice.actions;
export default burgerSlice.reducer;