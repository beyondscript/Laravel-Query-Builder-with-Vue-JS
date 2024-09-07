import {createStore} from 'vuex';

const store = createStore({
	state:{
		appName: import.meta.env.VITE_APP_NAME,
		appDebug: import.meta.env.VITE_APP_DEBUG,
		imageError: null,
		progress: null,
		datas: [],
		data: {},
		firstTables: [],
		editName: null,
		serverError: false,
		appDebugData: {}
	},
	mutations:{
		updateImageError(state, payload){
			state.imageError = payload
		},
		updateProgress(state, payload){
			state.progress = payload
		},
		updateDatas(state, payload){
			state.datas = payload
		},
		updateData(state, payload){
			state.data = payload
		},
		updateFirstTables(state, payload){
			state.firstTables = payload
		},
		updateEditName(state, payload){
			state.editName = payload
		},
		updateServerError(state, payload){
			state.serverError = payload
		},
		updateAppDebugData(state, payload){
			state.appDebugData = payload
		}
	},
	actions:{
		setImageError(context, payload){
			context.commit('updateImageError', payload)
		},
		removeImageError(context){
			context.commit('updateImageError', null)
		},
		setProgress(context, payload){
			context.commit('updateProgress', payload)
		},
		removeProgress(context){
			context.commit('updateProgress', null)
		},
		setDatas(context, payload){
			context.commit('updateDatas', payload)
		},
		removeDatas(context){
			context.commit('updateDatas', [])
		},
		setData(context, payload){
			context.commit('updateData', payload)
		},
		removeData(context){
			context.commit('updateData', {})
		},
		setFirstTables(context, payload){
			context.commit('updateFirstTables', payload)
		},
		removeFirstTables(context, payload){
			context.commit('updateFirstTables', [])
		},
		setEditName(context, payload){
			context.commit('updateEditName', payload)
		},
		removeEditName(context){
			context.commit('updateEditName', null)
		},
		setServerError(context){
			context.commit('updateServerError', true)
		},
		removeServerError(context){
			context.commit('updateServerError', false)
		},
		setAppDebugData(context, payload){
			context.commit('updateAppDebugData', payload)
		},
		removeAppDebugData(context){
			context.commit('updateAppDebugData', {})
		}
	},
	getters:{
		getAppName: function(state){
			return state.appName
		},
		getAppDebug: function(state){
			return state.appDebug
		},
		getImageError: function(state){
			return state.imageError
		},
		getProgress: function(state){
			return state.progress
		},
		getDatas: function(state){
			return state.datas
		},
		getData: function(state){
			return state.data
		},
		getFirstTables: function(state){
			return state.firstTables
		},
		getEditName: function(state){
			return state.editName
		},
		getServerError: function(state){
			return state.serverError
		},
		getAppDebugData: function(state){
			return state.appDebugData
		}
	}
})

export default store