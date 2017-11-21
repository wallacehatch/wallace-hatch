<template>
    <div class="timer-cont">
        <div class="timer-box-cont">
            <div class="timer-digit-box open-sans">
                <p class="timer-text open-sans">12</p>
                <p class="timer-text open-sans">:</p>
                <p class="timer-text open-sans">33</p>
                <p class="timer-text open-sans">:</p>
                <p class="timer-text open-sans">19</p>
            </div>
            <div class="timer-description-box">
                <p class="timer-description-text uppercase">days</p>
                <p class="timer-description-text uppercase">hours</p>
                <p class="timer-description-text uppercase">minutes</p>
            </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Timer',
    ready() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },
    props : {
        date : {
            type: Number,
            coerce: str => Math.trunc(Date.parse(str) / 1000)
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24);
        }
    }
}
</script>
<style lang="scss">
.timer-box-cont {
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
    height: 10rem;
    background-color: #ffffff;
    border: solid 3px #000000;

    .timer-digit-box{
        .timer-text{
        display: inline-block;
        font-size: 3.6rem;
        font-weight: 300;
        letter-spacing: 1rem;
        // line-height: 0px;
        }
    }
    .timer-description-text{
        display: inline-block;
    }

}




</style>