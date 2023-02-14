const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			language:"spanish"
		},
		actions: {
			changeLanguage : (language) =>{
				setStore({
					language: language,
				  });
							}
		}
	};
}

export default getState

