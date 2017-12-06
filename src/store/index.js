import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';

Vue.use(Vuex);

const state = {
	mobile: false,
	navItems: ['Home', 'Watches', 'Our Story', 'Lookbook'],
	// navItems: ['Contact Us'],
	contactModalActive: false,
}
const mutations = {
	[types.SET_MOBILE] (state, val) {
		state.mobile = val;
	},
	[types.SET_CONTACT_ACTIVE] (state, val) {
		state.contactModalActive = val;
	},
}


export default new Vuex.Store({
	state,
	mutations,
})
