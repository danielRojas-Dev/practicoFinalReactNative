import { url } from "./url";

const first = async (paramUser, paramPass) => {
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
    
    return result
};
