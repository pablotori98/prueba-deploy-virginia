const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      language: "spanish",
      signup: "",
      login: "",
      blogpost: [],
      singlepost: [],
      access_token: sessionStorage.getItem("access_token"),
      createcontactmessage: "",
      is_admin: "",
      user:[],
      user_id: sessionStorage.getItem("user_id")
    },
    actions: {
      // Change language function
      changeLanguage: (language) => {
        setStore({
          language: language,
        });
      },

      // SignUp Function
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
              return (
                response.json(),
                setStore({
                  signup: "Correcto",
                })
              );
            } else if (response.status == 400) {
              setStore({
                signup: "Registro incorrecto, pruebe de nuevo",
              });
            }
          }
        );
      },

      // Login Function
      login: async (email, password) => {
        let result = undefined;
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
                sessionStorage.setItem("access_token", result.access_token);
                sessionStorage.setItem("current_user", result.username);
                sessionStorage.setItem("user_id", result.user_id);

                setStore({
                  user: result,
                  login: "Correcto",
                  access_token: result.access_token,
                  is_admin: result.is_admin,
                  user_id: result.user_id
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

      //logout
      logout: async () => {
        sessionStorage.clear();
        window.location.href = "/";
        setStore({
          token_local: null,
          logged: false,
        });
      },

      //Conseguir todos los post
      getallpost: async() =>{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost`, options)
        .then(response => response.json())
        .then(result=>setStore({blogpost : result}))
      },

      //Fetch all users
      fetchallusers: async(id) =>{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, options)
        .then(response => response.json())
        .then(result=>setStore({user : result}))
      },
      
      singleblogpost: async(id) =>{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${id}`, options)
        .then(response => response.json())
        .then(result=>setStore({singlepost : result}))
      },

      // Creacion de post
      handlepost: async (
        title_post,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        language
      ) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title_post: title_post,
            paragraph1: paragraph1,
            paragraph2: paragraph2,
            paragraph3: paragraph3,
            paragraph4: paragraph4,
            paragraph5: paragraph5,
            language: language
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createpost: "Correcto",
                })
              );
            } else if (response.status == 400) {
              setStore({
                createpost: "Creación post incorrecto, pruebe de nuevo",
              });
            }
          }
        );
      },

      // Modificación blog

      modpost: async (
        title_post,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        language,
        id
      ) => {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title_post: title_post,
            paragraph1: paragraph1,
            paragraph2: paragraph2,
            paragraph3: paragraph3,
            paragraph4: paragraph4,
            paragraph5: paragraph5,
            language: language,
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${id}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createpost: "Correcto",
                })
              );
            } else if (response.status == 400) {
              setStore({
                createpost: "Creación post incorrecto, pruebe de nuevo",
              });
            }
          }
        );
      },


      //Contact message
      contacthome: async (
        first_name,
        last_name,
        phone_number,
        email,
        problem_description
      ) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            problem_description: problem_description
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/contactmessage`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createcontactmessage: "Correcto",
                })
              );
            } else if (response.status == 400) {
              setStore({
                createcontactmessage: "Error en la creación de mensaje, pruebe de nuevo",
              });
            }
          }
        );
      },


    },
  };
};



export default getState;
