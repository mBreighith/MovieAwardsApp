import { configureStore } from '@reduxjs/toolkit';
import nomineeReducer from './slices/nomineeSlice';

const store = configureStore({
    reducer: {
        nominee: nomineeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
