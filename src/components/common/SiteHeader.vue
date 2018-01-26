<template>
    <div class="header-cont">
        <div v-if="$store.state.navLayout === 0">
          <div @click="mobileNav.active = true" class="mobile-header-left sm-only">MENU</div>
          <div class="header-left">
              <router-link style="display:block" to="/">
                  <div class="header-logo"></div>
                  <p class="text-mark uppercase hide-md">wallace hatch</p>
              </router-link>
          </div>
          <div class="header-right">
              <nav-bar @linkClick="handleLinkClick" class="wh-site-nav hide-sm" :items="nav.items" :active="nav.active" navKey="siteNav">
              </nav-bar>
              <a @click="handleBagClick">
              <div class="shopping-cart-icon fal fa-shopping-bag" aria-hidden="true"></div>
              <span class="badge open-sans"  v-if="cartModal.badgeNumber > 0">{{cartModal.badgeNumber}}</span>
          </a>
          </div>
        </div>
        <div v-if="$store.state.navLayout === 1">
          <div class="header-logo checkout"></div>
        </div>
        <cart-modal @close="$store.commit('SET_CART_ACTIVE', false)" :active="$store.state.cartModalActive"></cart-modal>
        <contact-modal @close="$store.commit('SET_CONTACT_ACTIVE', false)" :active="$store.state.contactModalActive"></contact-modal>
        <mobile-nav @close="mobileNav.active = false" :activeItem="nav.active" :active="mobileNav.active"></mobile-nav>
    </div>
</template>


<script>
import NavBar from './navBar/NavBar';
import ContactModal from './contactModal/Modal';
import CartModal from './cartModal/Modal';
import ShopifySvc from '@/ShopifyService.js';
import MobileNav from './navBar/MobileNav';
export default {
  name: 'siteHeader',
  data () {
    return {
			nav: {
				items: this.$store.state.navItems,
				active: 0,
			},
			mobileNav: {
				active: false,
			},
			cartModal: {
				active: false,
        badgeNumber: 0,
			},
    }
  },
	methods: {
		handleLinkClick(i, dir) {

		},
		handleBagClick(){
      		this.$router.replace('/bag/')
		},
	},
	components: {
		NavBar,
		ContactModal,
		CartModal,
    MobileNav,
	},
	 watch: {
	 	'$store.state.badgeNumber' (newVal) {
      console.log('badge changing');
      this.cartModal.badgeNumber = newVal;
    }
  },
	mounted() {
    this.cartModal.badgeNumber = this.$store.state.badgeNumber;
  }
}
</script>

<style lang="scss">
@import '../../styles/_variables.scss';

.header-logo {
  float: left;
  width: 3.8rem;
  height: 3.2rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/wh-mark.svg');
  &.checkout {
    float: none;
    width: 4.7rem;
    height: 4rem;
    margin: 1.7rem auto;
    @include respond-to(sm) {width: 2.9rem; height: 2.5rem;}
  }
  @include respond-to(sm) {
    width: 2.9rem;
    height: 2.5rem;
    float: none;
    margin: auto;
  }
}
.header-cont{
		overflow: visible;
    position: fixed;
		z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
		padding: 0 2rem;
		@include respond-to(sm) {padding: 0 1rem;}
		.mobile-menu-left {
			@include intro-text;
			font-size: 1.2rem;
			font-weight: bold;
			letter-spacing: 1px;
			text-align: center;
			padding: 0 1rem;
			height: 5.5rem;
			// display: inline-block;
			float: left;
		}
		.header-right {
			float: right;
			@include respond-to(sm) {
				float: right;
				// &.countdown {
				// 	float: right;
				// 	padding: 1.3rem 0.9rem 1.7rem 1.9rem;
				// 	border-left: 1px solid #ececec;
				// }
			}
			.wh-site-nav {
				display: inline-block;
				margin-right: 3rem;
				// &.countdown {
				// 	margin-right: 0rem;
				// }
			}
			.shopping-cart-icon {
				font-size: 3.2rem;
				margin-bottom: -0.75rem;
				cursor: pointer;
				display: inline-block;
				@include respond-to(sm) {
					font-size: 2.56rem;
					margin: 0;
					padding: 1.3rem 0.9rem 1.7rem 1.9rem;
					border-left: 1px solid #ececec;
				}

			}
			.badge{
			    position: absolute;
			    top:20px;
			    right: 13px;
			    background: #33a383;
			    font-size: 10px;
			    color: white;
			    text-decoration: none;
			    width: 17px;
  				height: 17px;
 				border-radius: 50%;
  				line-height: 17px;
  				text-align: center;
  				@include respond-to(sm) {
  					top:12px;
			    	right: 12px;
  				}
				}
			.envelope-icon {
				font-size: 32px;
				font-weight: 300;
				display: inline-block;
				@include respond-to(sm) {
					font-size: 2.56rem;
				}
			}
		}
		.mobile-header-left {
			@include intro-text;
			font-size: 1.2rem;
			font-weight: bold;
			letter-spacing: 1px;
			padding: 1.9rem 1rem 2.1rem 0rem;
			border-right: 1px solid #ececec;
			float: left;
		}
	.header-left{
		float: left;
		overflow: auto;
		padding: 1.9rem 0;
		@include respond-to(sm) {
			padding: 1.4rem 0 1.6rem 0;
			width: calc(100% - 10.74rem);
		}
		.text-mark {
			float: left;
			@include h6;
			font-size: 1.4rem;
			letter-spacing: 4px;
			line-height: 3.2rem;
			padding-left: 1.6rem;
		}
	}
}
</style>
