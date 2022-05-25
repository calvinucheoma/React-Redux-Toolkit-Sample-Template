import {createSlice}  from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes-- //we do not have to explicitly return the new state and we can directly mutate the state in redux toolkit because it uses 'immer' under the hood
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
});

export default cakeSlice.reducer  //exporting as default
export const {ordered, restocked} = cakeSlice.actions //named exports