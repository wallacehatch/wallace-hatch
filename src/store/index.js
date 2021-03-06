import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes';

Vue.use(Vuex);


const state = {
	mobile: false,
	navItems: ['Home', 'Kallio', 'Soho', 'Palermo', 'Our Story'],
	navLayout: 0, // 0 is default, 1 is checkout, 2 is Auxilary Pages
	contactModalActive: false,
	couponModalActive: false,
	cartModalActive: false,
	orderSuccessModal: {
		active: false,
		orderId: '00000000000123',
		customerName: 'Ian Hansborough',
	},
	badgeNumber: 0,
	coupons: [],
}
const mutations = {
	[types.SET_ORDER_SUCCESS_MODAL_ACTIVE] (state, val) {
		state.orderSuccessModal.active = val.active ? val.active : false;
		state.orderSuccessModal.orderId = val.orderId ? val.orderId : state.orderSuccessModal.orderId;
		state.orderSuccessModal.customerName = val.customerName ? val.customerName : state.orderSuccessModal.customerName;
	},
	[types.SET_COUPON_MODAL_ACTIVE] (state, val) {
		state.couponModalActive = val;
	},
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
