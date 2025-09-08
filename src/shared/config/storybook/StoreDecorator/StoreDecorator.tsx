import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react-webpack5';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema> = {},
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => {

    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducer, ...(asyncReducers || {}) }}
        >
            <StoryComponent />
        </StoreProvider>
    );
};