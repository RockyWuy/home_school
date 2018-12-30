import * as Server from '../services/mainPage';

export default {
	namespace : 'mainPage',

	state : {
		//sider
        ss : 1,
        list : []
	},

	subscriptions : {
		setup({ dispatch, history }){
			history.listen(({ pathname, query }) => {
				if ( pathname === '/') {
                    dispatch({
                        type : 'getList',
                        payload : { sss : 1 }
                    })
				}
			});
		}
	},

	effects : {
        *getList({payload},{call,put,select}){
            let params = payload;
            let state = yield select( state => state.mainPage );
            let ret = yield call(Server.GetDataSource, params);
            if( !!ret && ret.errorCode === 0 ){
                yield put({ type : 'updateState', payload : { list : ret.data }})
            }
        },
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
