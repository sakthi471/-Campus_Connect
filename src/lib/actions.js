'use server'

import { signIn, signOut } from "./auth"


export const logout = async () => {

  await signOut()


}


export const login = async (previousState, formDate) => {
  try {
    const { username, password } = Object.fromEntries(formDate)
    const res = await signIn("credentials", { username, password })
    console.log(res);
    return { error: null }
  } catch (error) {
    if (error.message == 'CredentialsSignin') {
      return { error: "invalid usernme& password" }
    }
    throw error;
  }


}