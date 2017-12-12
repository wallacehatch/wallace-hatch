<template lang="html">
  <div class="experience-section-cont">
    <div class="quote-box">
      <p class="quote-text">“You can have anything you want in life if you dress for it.”</p>
      <p class="quote-source">– Edith Head</p>
    </div>
    <div class="section-heading-cont">
      <p class="header">Life Experiences</p>
      <p class="subtext">#WallaceHatch</p>
      <hr class="line">
    </div>
    <div class="instagram-feed-cont">
      <div v-for="(post, i) in instagramPosts">
        <a style="display:block" v-bind:href="'https://www.instagram.com/p/'+ post.code + '/'">
        <div class="instagram-image" v-if="i<4" :style="{ 'background-image': 'url(' + post.display_src + ')' }"></div>
        <div class="instagram-image hide-sm" v-if="i>=4" :style="{ 'background-image': 'url(' + post.display_src + ')' }"></div>
      </a>
      </div>
      <div class="insta-btn-wrapper">
        <a target="_blank" href="https://www.instagram.com/wallaceHatch/" class="view-insta-btn">View Our Instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
import fetchInstagramPosts from '@/instagram';
export default {
  data() {
    return {
      instagramPosts: null
    }
  },
  mounted(){
    fetchInstagramPosts((result)=>{
      this.instagramPosts = result.data.user.media.nodes
  });
  }
}
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';
  .experience-section-cont .section-heading-cont {
    padding-bottom: 0;
  }
  .instagram-feed-cont {
    margin: 4rem 2.3rem 0 2.3rem;
    padding-bottom: 0.9rem;
    box-sizing: border-box;
    overflow: auto;
    @include respond-to(lg) {margin: 0rem 1rem;}
    @include respond-to(md) {margin-top: 1.5rem;}
    @include respond-to(sm) {margin-top: 2.5rem;}

    .insta-btn-wrapper {
      clear: both;
      padding-top: 1.5rem;
      padding-bottom: 3.1rem;
      display: none;
      @include respond-to(sm) {display: block;}
    }
    .view-insta-btn {
      display: block;
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.7);
    	box-shadow: 0 7px 10px 2px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    	border: solid 3px #000000;
      text-transform: uppercase;
      @include intro-text;
      font-size: 1.2rem;
      padding: 1.2rem 0;
      font-weight: bold;
    }
    .instagram-image {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 16.66%;
      font-size: 30rem;
      height: calc(16.66vw - 0.766rem);
      float: left;
       text-indent: 100%;
       &:hover {
         transition: .2s;
          transform: translate(0px, -10px);
      }
      @include respond-to(lg) {height: calc(16.66vw - 0.333rem);}
      @include respond-to(sm) {
        height: calc(50vw - 1rem);

        width: 50%;
      }
    }
  }
  .experience-section-cont {
    text-align: center;
    .quote-box {
      display: inline-block;
      margin: 0 1rem;
      max-width: 58.8rem;
      border: solid 2.4px #f1f1f1;
      padding: 4rem 8rem;
      box-sizing: border-box;
      @include respond-to(sm) {padding: 2.4rem 3rem;}
    }
    .quote-text {
      @include text-quote;
      text-transform: uppercase;
      @include respond-to(lg) {
        font-size: 1.4rem;
        line-height: 1.43;
	      letter-spacing: 4px;
      }
    }
    .quote-source {
      @include intro-text;
      font-size: 1.2rem;
      margin-top: 1rem;
      letter-spacing: 4px;
      text-transform: uppercase;
    }
  }
</style>
