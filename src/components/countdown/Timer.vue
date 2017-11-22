<template>
    <div class="timer-cont">
        <div class="timer-box-cont">
            <div class="timer-digit-box open-sans">
                <div class="box">
                    <p class="timer-text open-sans">{{days}}</p>
                    <p class="timer-description-text uppercase sans-serif">days</p>
                </div>
                <span class="colon">:</span>
                <div class="box">
                    <p class="timer-text open-sans">{{hours}}</p>
                    <p class="timer-description-text uppercase sans-serif">hours</p>
                </div>
                 <span class="colon">:</span>
                <div class="box">
                    <p class="timer-text open-sans">{{minutes}}</p>
                    <p class="timer-description-text uppercase sans-serif">minutes</p>
                </div>
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
    data() {
        return {
            date: Math.trunc((new Date(2017, 11,1)) / 1000),
            
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
        minutes() {
            var minutes = Math.trunc((this.date - this.now) / 60) % 60; 
            if (minutes.toString().length == 1){
                minutes = "0" + minutes.toString() 
            }
            return minutes.toString()
        },
        hours() {
            var hours = Math.trunc((this.date - this.now) / 60 / 60) % 24;
            if (hours.toString().length == 1){
                hours = "0" + hours.toString() 
            }
            return hours.toString()
        },
        days() {
             var days = Math.trunc((this.date - this.now) / 60 / 60 / 24);
            if (days.toString().length == 1){
                days = "0" + days.toString() 
            }
            return days.toString()
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
        margin-right: auto;
        margin-top: 0.8rem;
        margin-left: auto;
        .box{
            display: inline-block;

            .timer-text{
                display: inline-block;
                font-size: 3.6rem;
                font-weight: 300;
                letter-spacing: 1rem;
                }
        }
        .colon{
            position: relative;
            top: -3.3rem;
            font-size: 3.6rem;
            font-weight: 300;
            letter-spacing: 1rem;
        }
    }

}




</style>