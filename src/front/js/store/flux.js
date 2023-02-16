const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      language: "spanish",
	    signup: "",
      login: ""
    },
    actions: {
      changeLanguage: (language) => {
        setStore({
          language: language,
        });
      },
      signup: async (
        first_name,
        last_name,
        username,
        email,
        password,
        phone_number
      ) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
            phone_number: phone_number,
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/signup`, options).then(
          (response) => {
            if (response.status == 201) {
              return response.json(), 
			  setStore({
                signup: "Correcto",
              });
            } else if (response.status == 400) {
              setStore({
                signup: "Registro incorrecto, pruebe de nuevo",
              });
            }
          }
        );
      },

      login: async (email, password) => {
        let result = undefined;
        console.log("email:", email, "password:", password);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/login`, options).then(
          (response) => {
            if (response.status == 200) {
              return response.json().then((data) => {
                result = data;
                sessionStorage.setItem("access_token", result.access_token)
                console.log("result:", result);
                setStore({
                  user: result,
                  login: "Correcto",
                });
              });
            } else if (response.status == 400) {
              setStore({
                login: "Login incorrecto, pruebe de nuevo",
              });
            }
          }
   );
},

    },
  };
};

export default getState;
