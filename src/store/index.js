import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';

Vue.use(Vuex);


const state = {
	mobile: false,
	navItems: ['Home', 'Our Story', 'Lookbook'],
	navLayout: 0, // 0 is default, 1 is checkout
	contactModalActive: false,
	cartModalActive: false,
	badgeNumber: 0,
	coupons: [],

}
const mutations = {
	[types.SET_NAV_LAYOUT] (state, val) {
		state.navLayout = val;
	},
	[types.SET_MOBILE] (state, val) {
		state.mobile = val;
	},
	[types.SET_CONTACT_ACTIVE] (state, val) {
		state.contactModalActive = val;
	},
	[types.SET_CART_ACTIVE] (state, val) {
		state.cartModalActive = val;
	},
	[types.SET_BADGE_NUMBER] (state, val) {
		state.badgeNumber = val;
	},
	[types.INC_BADGE_NUMBER] (state) {
		state.badgeNumber += 1;
	},
	[types.DEC_BADGE_NUMBER] (state) {
		state.badgeNumber -= 1;
	},
	[types.ADD_COUPON] (state, coupon) {
		state.coupons = [coupon];
	},
	[types.REMOVE_COUPON] (state, coupon) {
		state.coupons = state.coupons.filter((item) => {
			return item.id !== coupon.id
		});
	},
}


export default new Vuex.Store({
	state,
	mutations,
})
