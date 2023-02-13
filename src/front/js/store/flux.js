const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			toggleAlert:false,
			alertMessage:'',
			alertType:'',
			alertTimeout: 3000,
			isLogged:true,
			isAdmin:false
		
		},
		actions: {
			setAlert:(message,type)=>{
				console.log("soy del flux", message, type)
				setStore({
					toggleAlert:true,
					alertMessage:message,
					alertType:type,
				})
			},
			setAlertOff: ()=>{
				console.log("apagando alerta")
				setStore({
					toggleAlert:false,
					alertMessage:'',
					alertType:'',
				})
			},
			setIsLogged:()=>{
				if(sessionStorage.getItem('token')){
					setStore({
						isLogged:true
					})
				}else{
					setStore({
						isLogged:false
					})
				}
			},
			setIsAdmin:(value) =>{
				setStore({
					isAdmin:value
				})
			}
		}
	}
}

export default getState

