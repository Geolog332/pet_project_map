import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginUsername } from "../getLoginUsername/getLoginUsername";

 

describe('getLoginLoading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
        loginForm: {
            username: "123456789",
        },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("123456789")
  });
    test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("")
  })
})