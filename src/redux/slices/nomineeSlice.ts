import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NomineeState {
    selectedNominees: { [categoryId: string]: string };
}

const initialState: NomineeState = {
    selectedNominees: {},
};

const nomineeSlice = createSlice({
    name: 'nominee',
    initialState,
    reducers: {
        selectNominee: (state, action: PayloadAction<{ categoryId: string; nomineeId: string }>) => {
            const { categoryId, nomineeId } = action.payload;
            state.selectedNominees = {
                ...state.selectedNominees,
                [categoryId]: nomineeId,
            };
        },
    },
});

export const { selectNominee } = nomineeSlice.actions;

export default nomineeSlice.reducer;
