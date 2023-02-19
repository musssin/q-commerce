import { ref } from "vue";
import { defineStore } from "pinia";
import Parse from 'parse/dist/parse.min.js';
export const useAuthStore = defineStore("auth", () => {
  const showDialog = ref(false);
  const user = ref(Parse.User);
  async function getCurrentUser(): Promise<Parse.User | null> {
    const currentUser: (Parse.User | null) = await Parse.User.current();
    // Update state variable holding current user
    user.value = await Parse.User.current();
    return currentUser;
  }

  async function login(username: string, password: string) {
    try {
      const loggedInUser: Parse.User = await Parse.User.logIn(username, password);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get('username')} has successfully signed in!`,
      );
      // To verify that this is in fact the current user, `current` can be used
      // user.value = await Parse.User.current();
      // user = 
      // console.log(loggedInUser === user.value);
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error: any) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
}
async function register(username: string,email: string,password: string) {
  let user = new Parse.User();
  user.set("email", email);
  user.set("password", password);
  user.set("username", username);
  try {
    // Since the signUp method returns a Promise, we need to call it using await
    const createdUser = await Parse.User.signUp(username, password);
    alert(
      `Success! User ${createdUser.getUsername()} was successfully created!`
    );
    return true;
  } catch (error) {
    // signUp can fail if any parameter is blank or failed an uniqueness check on the server
    alert(`Error! ${error}`);
    return false;
  }
}

  return { user, login, register, showDialog };
});
