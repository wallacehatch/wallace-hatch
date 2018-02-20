<template>
  <div :class="{'load-mask': !product}">
    <div class="pdp-cont" v-if="product">
      <div class="pdp-upper-cont">
        <div class="pdp-ul">
          <div class="image-zoom-mask" @click="handleImageZoom" v-if="imageZoomed"></div>
          <div class="active-image-cont" id="active_image_cont" @click="handleImageZoom" :class="{zoomed: imageZoomed}">
            <img class="active-image lazy" id="active_image" v-lazy="product.images[activeImageIndex]" alt="">
            <div v-show="!imageZoomed" class="zoom-tab hide-sm" :class="{zoomed: imageZoomed}"><i class="fal fa-expand"></i></div>
            <div v-show="imageZoomed" class="zoom-tab" :class="{zoomed: imageZoomed}"><i class="fal fa-times"></i></div>
          </div>
          <div class="additional-images-cont">
            <div v-for="(image, i) in product.images" class="additional-image lazy"
              :class="{active: activeImageIndex === i}"
              @click="activeImageIndex = i"
              v-lazy:background-image="product.images[i]">
            </div>
          </div>
        </div>
        <div class="pdp-ur lazy" id="pdp_lazy_1" :class="{'sticky-space': stickyAddCart}">
          <p class="size">{{product.skus.data[currentSkuIndex].attributes.size}}MM</p>
          <hr class="line">
          <p class="title">{{product.name}}</p>
          <p class="price hide-sm">{{product.skus.data[currentSkuIndex].price / 100 | currency }}</p>
          <div class="color-bubble" :style="{backgroundImage: 'url(https://s3.us-east-2.amazonaws.com/wallace-hatch/color-bubble-' + product.skus.data[currentSkuIndex].id + '.jpg)'}" ></div>
          <p class="color-text">Color: {{product.metadata.dialColor}} / {{product.metadata.caseColor}}</p>
          <div class="add-cart-btn pdp" id="add_cart_btn_pdp" :class="{'stuck': stickyAddCart}" @click="handleAddCartClick">
            <span class="mobile-add" @click="handleAddCartClick">Add to bag</span>
            <span class="mobile-price">{{product.skus.data[currentSkuIndex].price / 100 | currency}}</span>
          </div>
        </div>
        <hr class="pdp-divider">
      </div>
      <div class="pdp-lower-cont clearfix">
        <div class="pdp-ll">
          <hr class="line">
          <p class="description">{{product.description}}</p>
          <hr class="line">
          <div class="how-to-wear-header">
            <p class="title">How to wear</p>
            <p class="hashtag"><i class="fab fa-instagram"></i> #{{product.metadata.hashtag}}</p>
          </div>
          <div class="how-to-wear-images-cont" v-if="product">
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[0]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[0] + '/media)'}"
              class="how-to-wear-image">
            </a>
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[1]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[1] + '/media)'}"
              class="how-to-wear-image">
            </a>
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[2]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[2] + '/media)'}"
              class="how-to-wear-image">
            </a>
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[3]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[3] + '/media)'}"
              class="how-to-wear-image">
            </a>
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[4]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[4] + '/media)'}"
              class="how-to-wear-image">
            </a>
            <a target="_blank"
              :href="'https://instagram.com/p/' + product.metadata.howToWear.split(',')[5]"
              :style="{backgroundImage: 'url(https://instagram.com/p/' + product.metadata.howToWear.split(',')[5] + '/media)'}"
              class="how-to-wear-image">
            </a>
          </div>
        </div>
        <div class="pdp-lr">
          <hr class="line">
          <product-info-table :sku="product.skus.data[currentSkuIndex]" :productInfo="product.metadata"></product-info-table>
        </div>
        <!-- <hr class="pdp-divider"> -->
      <!-- <band-section></band-section> -->
      </div>
    </div>
    <!-- {{JSON.parse(product.metadata.howToWear)}} -->
  </div>
</template>

<script>
import BagService from '@/BagService';
import StripeService from '@/StripeService';
import ProductInfoTable from './ProductInfoTable';
import BandSection from '@/components/bands/BandSection';
export default {
   name: 'ProductPage',
   components: {
     ProductInfoTable,
     BandSection
   },
   data () {
    return {
      product: null,
      imageZoomed: false,
      currentSkuIndex: null,
      productInfo: null,
      stickyAddCart: false,
      addCartOffset: null,
      activeImageIndex: 0,
      currentHandleZoomPan: null,
    }
  },
  mounted() {
    this.$Lazyload.$once('loaded', (e) => {
      document.getElementById('pdp_lazy_1').setAttribute('lazy', 'loaded')
    })
  },
  beforeMount() {
    StripeService.getProduct(this.$route.params.handle).then((result) => {
      this.currentSkuIndex = BagService.indexForSku(result.data, this.$route.params.sku);
      this.product = result.data;
      this.stickyAddCart = false;
      this.setButtonOffset();
    }, (err) => {
      debugger;
    })
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    panImage(e) {
      debugger;
    },
    snapImage(e) {

    },
    handleZoomPan(e) {
      const elCont = document.getElementById('active_image_cont');
      const el = document.getElementById('active_image');
      var lastPageY = e.clientY;
      var lastPageX = e.clientX;
      return (e) => {
        const width  = el.getBoundingClientRect().width;
        const xDiff = el.getBoundingClientRect().width - elCont.getBoundingClientRect().width
        const yDiff = el.getBoundingClientRect().height - elCont.getBoundingClientRect().height
        const newPageX = lastPageX - e.clientX + Number(el.style.left.slice(0,-2));
        const newPageY = lastPageY - e.clientY + Number(el.style.top.slice(0,-2));
        const adjustedPageX = Math.max(Math.min(width/2, newPageX), width/2 - xDiff);
        const adjustedPageY = Math.max(Math.min(newPageY, 0), yDiff * -1);
        el.style.left = String(adjustedPageX) + 'px';
        el.style.top = String(adjustedPageY) + 'px';
        lastPageX = e.clientX;
        lastPageY = e.clientY;
      }
    },
    handleImageZoom(e) {
      const el = document.getElementById('active_image');
      const width  = el.getBoundingClientRect().width;
      const height = el.getBoundingClientRect().height;
      if (!this.imageZoomed) {
        el.style.top = String(-1 * (e.layerY - (height/4))) + 'px';
        el.style.left = String(-1.4 * (e.layerX - (width/2))) + 'px';
        el.style.transform = 'translateX(-50%)';
        this.currentHandleZoomPan = this.handleZoomPan(e);
        document.addEventListener('mousemove', this.currentHandleZoomPan);
        this.imageZoomed = true;
      }
      else {
        el.style.left = '50%';
        el.style.top = 0;
        el.style.transform = 'translateX(-50%)';
        document.removeEventListener('mousemove', this.currentHandleZoomPan);
        this.imageZoomed = false;
      }
    },
    setButtonOffset() {
      setTimeout(() => {
        this.addCartOffset = window.scrollY + document.getElementById('add_cart_btn_pdp').getBoundingClientRect().top - window.innerHeight + 62;
        // console.log(window.scrollY);
        // console.log(document.getElementById('add_cart_btn_pdp').getBoundingClientRect().top);
        // console.log(window.innerHeight);
        // console.log('the offset is...' + this.addCartOffset);
        this.handleScroll();
      })

    },
    handleScroll() {
      if (window.innerWidth >= 767) return;
      this.stickyAddCart = (window.scrollY <= this.addCartOffset);
    },
    handleAddCartClick() {
      BagService.addItem(this.product, this.$route.params.sku, 1);
      this.$store.commit('INC_BADGE_NUMBER');
      this.$store.commit('SET_CART_ACTIVE', true);
    }
  },

}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .how-to-wear-images-cont {
    margin: -0.3rem;
    margin-top: 1.7rem;
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
      @include respond-to(sm) {padding-bottom: 66.66%;}
    }
  }
  .how-to-wear-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://instagram.com/p/Bbdd0u3FdB6/media/');
    margin: 0.3rem;
    width: calc(33.33% - 6px);
    transition: .2s all cubic-bezier(.55,.15,.41,.84);
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    float: left;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), 0 12px 24px 0 rgba(95,95,95,0.70);
      transform: translateY(-8px);
      z-index: 0;
    }
    &:nth-of-type(n + 4):hover {
      transform: translateY(8px);
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), 0 -12px 24px 0 rgba(95,95,95,0.70);
    }
    &:first-of-type:hover {
      transform: translate(-8px, -8px);
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), 12px 12px 24px 0 rgba(95,95,95,0.70);
    }
    &:last-of-type:hover {
      transform: translate(8px, 8px);
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), -12px -12px 24px 0 rgba(95,95,95,0.70);
    }
    &:nth-of-type(3):hover {
      transform: translate(8px, -8px);
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), -12px 12px 24px 0 rgba(95,95,95,0.70);
    }
    &:nth-of-type(4):hover {
      transform: translate(-8px, 8px);
      box-shadow: 0 2px 6px 0 rgba(149,149,149,0.30), 12px -12px 24px 0 rgba(95,95,95,0.70);
    }
  }
  .pdp-lower-cont {
    overflow: hidden;
    padding: 11rem 1.3rem;
    @include respond-to(lg) {padding: 8rem 0 0 0;}
    @include respond-to(md) {padding: 6.2rem 4.4rem;}
    @include respond-to(sm) {padding: 4rem 0;}
    .how-to-wear-header {
      overflow: auto;
      .title {
        @include intro-text;
        font-size: 1.4rem;
        text-transform: uppercase;
        float: left;
      }
      .hashtag {
        @include text-small;
        float: right;
        text-transform: uppercase;
      }
    }
    .line {
      border: none;
      border-bottom: 4px solid $wh-black;
      width: 4rem;
      margin-bottom: 3rem;
      @include respond-to(sm) {
        margin-bottom: 2rem;
      }
    }
    .pdp-ll {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding: 0 5.75rem 0 1.3rem;
      @include respond-to(sm) {
        width: 100%;
        padding: 0 1rem;
        margin-bottom: 4rem;
      }
      .description {
        @include text-body;
        margin-bottom: 4rem;
      }
    }
    .pdp-lr {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding: 0 1.3rem 0 5.75rem;
      .line { margin-left: 1.6rem;}
      @include respond-to(sm) {
        width: 100%;
        padding: 0 1rem;
      }
    }
  }
  .pdp-divider {
    clear: both;
    border: none;
    margin: auto;
    border-bottom: 1px solid #d8d8d8;
    @include respond-to(lg) {margin: 0 -2rem;}
    @include respond-to(md) {margin: 0 1.5rem;}
  }
  .add-cart-btn.pdp {
    background-color: $wh-black;
    box-shadow: 0 12px 24px 0 rgba(95, 95, 95, 0.5), 0 2px 6px 0 rgba(149, 149, 149, 0.2);
    @include intro-text;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    width: 28.2rem;
    margin: auto;
    margin-top: 3rem;
    color: $wh-white;
    font-weight: bold;
    padding: 2.2rem 0;
    margin-top: 3rem;
    transition: 0.2s background-color linear;
    transition-property: background-color, box-shadow;
    @include respond-to(md) {width: 18rem;}
    @include respond-to(sm) {
      margin: 2rem 1rem 4rem 1rem;
      padding: 2.2rem;
      display: block;
      width: initial;
      overflow: auto;
    }
    &:hover {
      cursor: pointer;
      background-color: #262626;
    }
    .mobile-add {
      @include respond-to(sm) {float: left;}
    }
    .mobile-price {
      display: none;
      float: right;
      font-weight: 300;
      @include respond-to(sm) {display: initial;}
    }
    &.stuck {
      margin: 0;
      position: fixed;
      bottom: 0rem;
      left: 0;
      right: 0;
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0 -9px 24px 0 rgba(95, 95, 95, 0.5), 0 -4px 6px 0 rgba(149, 149, 149, 0.2);
    }
  }
  .pdp-cont {
    padding: 7.5rem 10.2rem 0 10.2rem;
    max-width: 114rem;
    margin: auto;
    @include respond-to(lg) {padding: 7.5rem 4rem 0 4rem; }
    @include respond-to(md) {padding: 7.5rem 0rem 0 0rem; }
    @include respond-to(sm) {padding: 7.5rem 0rem 0 0rem; }
  }
  .pdp-upper-cont {
    .pdp-ul {
      float: left;
      max-width: 50rem;
      width: 52.5%;
      padding-top: 5rem;
      @include respond-to(sm) {
        padding-top: 2rem;
        width: 100%;
        max-width: 100%;
      }
      .image-zoom-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
      }
      .active-image-cont {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        height: 51.5rem;
        overflow: hidden;
        .active-image {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          transition: 0.2s all ease;
        }
        .zoom-tab {
          position: absolute;
          top: 0;
          right: 0;
          width: 4.4rem;
          height: 4.4rem;
          background-color: #e9eaed;
          opacity: 0;
          transition: 0.2s all linear;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          border-color: #ccc;
          svg {
            font-size: 2.8rem;
            color: $wh-black;
          }
          &:hover {
            box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.2);
	          border: solid 1px #cccccc;
            cursor: pointer;
          }
          &.zoomed {
            background-color: #000000;
	          box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.1);
            svg {font-size: 3.2rem; color: $wh-white;}
          }
        }
        &:hover {
          cursor: zoom-in;
          .zoom-tab { opacity: 1; }
        }
        &.zoomed {
          &:hover {cursor: zoom-out;}
          .zoom-tab {opacity: 1;}
          .active-image {
            height: 200%;
          }
        }
        @include respond-to(md) {height: 41.2rem}
        @include respond-to(sm) {height: 28.8rem}
      }
      .additional-images-cont {
        padding: 6rem 0 8.3rem 0;
        overflow: auto;
        text-align: center;
        @include respond-to(md) {
          padding: 6rem 0 5rem 0;
        }
        @include respond-to(sm) {
          padding: 2rem 0;
        }
      }
      .additional-image {
        box-sizing: border-box;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: $wh-white;
        width: 6rem;
        height: 6rem;
        margin-left: 2rem;
        display: inline-block;
        box-shadow: 0 2px 6px 0 rgba(149, 149, 149, 0.2);
        border: solid 2px #d8d8d8;
        transition: 0.2s all linear;
        &:first-of-type { margin-left: 0;}
        &:hover {
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
        }
        &.active {
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
          border: solid 2px #000000;
        }
        @include respond-to(md) {
          width: 4rem;
          height: 4rem;
          margin-left: 1.34rem;
        }
        @include respond-to(sm) {
          margin-left: 1rem;
        }
      }
    }
    .pdp-ur {
      float: left;
      text-align: center;
      width: 47.5%;
      min-width: calc(100% - 50rem);
      padding-top: 11rem;
      @include respond-to(md) {
        padding-top: 8.1rem;
      }
      @include respond-to(sm) {
        width: 100%;
        padding-top: 0;
      }
      &.sticky-space {
        padding-bottom: 10.2rem;
      }
      .size {
        @include intro-text;
        font-size: 1.4rem;
        @include respond-to(sm) {font-size: 1.2rem;}
      }
      .line {
        border: none;
        border-bottom: 4px solid $wh-black;
        width: 4rem;
        margin: 2rem auto;
        @include respond-to(sm) {
          margin: 1rem auto 1.6rem auto;
        }
      }
      .title {
        @include intro-text;
        font-size: 3.2rem;
        letter-spacing: 8px;
        text-transform: uppercase;
        margin-bottom: 3rem;
        @include respond-to(sm) {
          font-size: 2.4rem;
          letter-spacing: 6px;
          margin-bottom: 2rem;
        }
      }
      .price {
        @include intro-text;
        font-size: 2.4rem;
        font-weight: 300;
        margin-bottom: 4.5rem;
      }
      .color-bubble {
        height: 6rem;
        width: 6rem;
        margin: auto;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        // background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected.jpg');
        // @include respond-to(2x) {
        //   background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected%402x.jpg');
        // }
        // @include respond-to(3x) {
        //   background-image: url('https://s3.us-east-2.amazonaws.com/wallace-hatch/color-selected%403x.jpg');
        // }
      }
      .color-text {
        @include intro-text;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-top: 4.5rem;
        @include respond-to(sm) {
          margin-top: 0;
        }
      }
    }
  }
</style>
