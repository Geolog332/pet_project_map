import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";


describe('getLoginState', () => {
  test('should return loginForm state', () => {
    const mockState: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123456789',
        password: '123456789',
        isLoading: false,
        error: null
      }
    };

    expect(getLoginState(mockState as StateSchema)).toEqual({
      username: '123456789',
      password: '123456789',
      isLoading: false,
      error: null
    });
  });

  test('should return undefined if loginForm is not present', () => {
    const mockState: DeepPartial<StateSchema> = {};

    expect(getLoginState(mockState as StateSchema)).toBeUndefined();
  });

  test('should return undefined with null state', () => {
    expect(getLoginState(null as unknown as StateSchema)).toBeUndefined();
  });
});