const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      language: "spanish",
    },
    actions: {
      changeLanguage: (language) => {
        setStore({
          language: language,
        });
      },
	  signup: async (first_name, last_name, username, email, password, phone_number)=>{
		const options ={
			method: "POST",
			body: `{
				"first_name":"${first_name}",
				"last_name":"${last_name}",
				"username":"${username}",
				"email":"${email}",
				"password":"${password},
				"phone_number":"${phone_number}"
			}`,
		};
		await fetch(`${process.env.BACKEND_URL}/api/signup`, options)
		.then((response) =>{
			if(response.status==201){
				return response.json();
			}
			// else if(response.status==400){
			// 	sessionStorage.setItem("alert_signup", "Usuario Registrado")
			// }
		})
	  }

    },
  };
};

export default getState;
