import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword";
 

describe('getLoginLoading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            password: "123456789",
        },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual("123456789")
  });
    test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual("")
  })
})