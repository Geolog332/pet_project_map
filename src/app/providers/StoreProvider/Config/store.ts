import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reduserManager'
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {

    const rootReducer: ReducersMapObject<StateSchema> ={
        ...asyncReducers,        
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: {},
        preloadedState: initialState
    });
    const typedStore = store as ReduxStoreWithManager;
    typedStore.reducerManager = reducerManager;

    return typedStore;
}

export type AppDispatch = ThunkDispatch<StateSchema, unknown, AnyAction>