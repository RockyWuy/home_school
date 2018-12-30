
export default {
	namespace : 'global',

	state : {
        lightVisible : false,
        ss : 1,
        aa : 3,
	},

	subscriptions : {
		setup({ dispatch, history }){
			history.listen(({ pathname, query }) => {
				if ( pathname === '/') {
				}
			});
		}
	},

	effects : {
	},

	reducers : {
		updateState( state, action){
			return {
				...state,
				...action.payload
			}
		}
	}
}
