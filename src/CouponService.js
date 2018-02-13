
import store from './store';
const svc = {}

svc.handleCouponActivation = handleCouponActivation;
svc.triggerCoupon = triggerCoupon;
const couponKey  = "couponOpenTime"
const pageKey = "pageOpenTime"

function handleCouponActivation() {
  setPageOpenTime();
  var interval = setInterval(() => {
    var nowDate = new Date();
    var time = getPageOpenTime()
    // open coupon modal if page have been open for a minute and user has not seen coupon previously
    if ((nowDate.getTime() - time > 60000) && (getCouponOpenTime() == null)) {
      triggerCoupon();
    }
  }, 10000)
}


function resetCouponOpenTime() {
  localStorage.setItem('couponOpenTime', null);
}

function getCouponOpenTime() {
    return JSON.parse(localStorage.getItem(couponKey));
}


function getPageOpenTime() {
  return JSON.parse(localStorage.getItem(pageKey));

}
function setPageOpenTime() {
  let time = new Date();
  localStorage.setItem(pageKey, JSON.stringify(time.getTime()));
}


function setCouponOpenTime() {
  let time = new Date();
  localStorage.setItem(couponKey, JSON.stringify(time.getTime()));
}


function triggerCoupon() {
  store.commit('SET_COUPON_MODAL_ACTIVE', true);
  setCouponOpenTime();
}


export default svc
