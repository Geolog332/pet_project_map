import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/Config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hookDispatch';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList,
    removeAfterUnmount?: boolean,
}


export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { 
        children, 
        reducers, 
        removeAfterUnmount 
    } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@@INIT ${name} reducer` })
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@@DESTROY ${name} reducer` })
                });
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store])
    
    return (
        <>
            {children}
        </>
    );
};