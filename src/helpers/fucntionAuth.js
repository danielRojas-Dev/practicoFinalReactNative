import { url } from "./url";

export const auth = async (paramUser, paramPass) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({
        user: paramUser,
        password: paramPass,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();

    
      if (!result.hasOwnProperty("token")) {
        return result
      }

      return result
    

   
  } catch (error) {
    console.log(error);
  }

  // return result
};
