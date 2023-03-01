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
      contactmessage:[],
      createreview:"",
      reviews:[],
      contactonlyonemessage:[],
      is_admin: "",
      user: [],
      users:[],
      userinfo:[],
      user_id: sessionStorage.getItem("user_id"),
      appointments: [],
      initialSample: [
        {
          title: "All-day event",
          start: "2023-02-14",
        },
        {
          title: "Timed event",
          start: "2023-02-28",
        },
      ],
      createpost:"",
      price: "",
      sessions: "",
      creado:""


    },
    actions: {
      //testing events
      newCita: (start, title) => {
        const store = getStore();

        const newCita = {
          title: title,
          start: start,
        };
        setStore({
          initialSample: [...store.initialSample, newCita],
        });
      },
      // Change language function
      changeLanguage: (language) => {
        setStore({
          language: language,
        });
      },
      setPrice: (price)=>{
        setStore({
          price: price
        })
      },
      setCreado: (creado)=>{
        setStore({
          creado: creado
        })
      },
      setSessions: (sessions)=>{
        setStore({
          sessions: sessions
        })
      },
      removeresults: ()=>{
        setStore({
          createpost: "",
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
                  user_id: result.user_id,
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
      getallpost: async () => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost`, options)
          .then((response) => response.json())
          .then((result) => setStore({ blogpost: result }));
      },

      //Fetch all users
      fetchallusers: async () => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/users`, options)
          .then((response) => response.json())
          .then((result) => setStore({ users: result }));
      },

      fetchuser: async (id) => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, options)
          .then((response) => response.json())
          .then((result) => setStore({ user: result }));
      },

      fetchuserinfo: async (id) => {
        if(id==null){}else{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, options)
          .then((response) => response.json())
          .then((result) => setStore({ userinfo: result }));
      }},

      singleblogpost: async (id) => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${id}`, options)
          .then((response) => response.json())
          .then((result) => setStore({ singlepost: result }));
      },

      // Modificar sesiones
      paidSessions: async (
        sessions,
        id,
        username
      ) => {
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paid_sessions: sessions,

          }),
        };

        await fetch(`${process.env.BACKEND_URL}/api/users/${id}/${username}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json()
              );
            } else if(response.status == 401){
              return(

                sessionStorage.setItem("Creación post incorrecto, pruebe de nuevo") 
              )
            }
          }
        );
      },


      // Creacion de post
      handlepost: async (
        title_post,
        paragraph1,
        paragraph2,
        paragraph3,
        paragraph4,
        paragraph5,
        language,
        image_post,
        current_user
        
      ) => {
        const options = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
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
            image_post: image_post
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${current_user}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createpost: "Post creado correctamente",
                })
              );
            } else if (response.status == 401) {
              return(
              setStore({
                createpost: "Creación post incorrecto, pruebe de nuevo",
              })
              )
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
        image_post,
        id,
        username
      ) => {
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
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
            image_post: image_post
          }),
        };

        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${id}/${username}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createpost: "Correcto",
                })
              );
            } else if(response.status == 401){
              return(
              setStore({
                createpost: "Creación post incorrecto, pruebe de nuevo",
              })
              )
            }
          }
        );
      },

      //Delete post
      deletepost: async(
        id
      )=>{
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }
        await fetch(`${process.env.BACKEND_URL}/api/blogpost/${id}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  deletepost: "Post borrado",
                })
              );
            } else if(response.status == 401){
              return(
              setStore({
                deletepost: "No se pudo borrar el post",
              })
              )
            }
          }
        );

      },

      createAppointment: async (id, title, start, end, allday, patient) => {
        console.log("fluc function", id, title, start, end, allday);
        const store = getStore();
        setStore({
          appointments: [
            ...store.appointments,
            {
              id: id,
              title: title,
              start: start,
              end: end,
              allDay: allday,
              patient: patient,
            },
          ],
        });
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
                  createcontactmessage: "correcto",
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

      fetchallcontactmessages: async() =>{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/contactmessage`, options)
        .then(response => response.json())
        .then(result=>setStore({contactmessage : result}))
      },

      fetchonlyonemessage: async(id) =>{
        if(id==null){}else{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/contactmessage/${id}`, options)
        .then(response => response.json())
        .then(result=>setStore({contactonlyonemessage : result}))
      }},
      

      // Crear review
      createreview: async (
        person_review,
        first_name,
        last_name,
        language,
        username
      ) => {
        const options = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            person_review: person_review,
            first_name: first_name,
            last_name: last_name,
            language: language
          }),
        };
        await fetch(`${process.env.BACKEND_URL}/api/reviews/${username}`, options).then(
          (response) => {
            if (response.status == 201) {
              return (
                response.json(),
                setStore({
                  createreview: "correcto",
                })
              );
            } else if (response.status == 400) {
              setStore({
                createreview: "Error en la creación de mensaje, pruebe de nuevo",
              });
            }
          }
        );
      },

      displayreviews: async() =>{
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/reviews`, options)
        .then(response => response.json())
        .then(result=>setStore({reviews : result}))
      },

      // Delete review
      deletereview: async(
        id
      )=>{
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }
        await fetch(`${process.env.BACKEND_URL}/api/reviews/${id}`, options).then(
          (response) => {
            if (response.status == 200) {
              return (
                response.json(),
                setStore({
                  deletereview: "Post borrado",
                })
              );
            } else if(response.status == 401){
              return(
              setStore({
                deletereview: "No se pudo borrar el post",
              })
              )
            }
          }
        );

      },

    },
  };
};

export default getState;
