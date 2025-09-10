import axios from 'axios'
import { loginByUsername } from '../loginByUsername';

import { StateSchema } from 'app/providers/StoreProvider'; 
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios,);
describe('loginByUsername', () => {

    test('should log success result', async () => {
    const userValue = {username: 'test', id: '1'}
    mockedAxios.post.mockResolvedValue(Promise.resolve({data: userValue}))

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({username: 'test', password: 'test'})

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

    test('should log error 403', async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({status: 403}))

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({username: 'test', password: 'test'})

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный логин или пароль');
  })
})