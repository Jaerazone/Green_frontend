<template>
<!-- https://www.youtube.com/watch?v=Q_fLx2KcoYA&t=816 -->
    <div>
        <section class=""></section>
        <section class="한줄">
            <div class="days">
                {{displayDays-31}}
                <div class="daylabel">days</div>
            </div>
            <span class="span">:</span>

            <div class="hours">
                {{displayHours}}
                <div class="hourslabel">hours</div>
            </div>
            <span class="span">:</span>

            <div class="minutes">
                {{displayMinutes}}
                <div class="minuteslabel">minutes</div>
            </div>
            <span class="span">:</span>

            <div class="seconds">
                {{displaySeconds}}
                <div class="secondslabel">seconds</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
     name : 'DeadlinePage',
     data : () => ({
         displayDays : 0,
         displayHours : 0,
         displayMinutes: 0,
         displaySeconds : 0
     }),
     computed : {
         _seconds: () => 1000,
         _minutes() {
             return this._seconds * 60;
         },
         _hours() {
             return this._minutes *60;
         },
         _days() {
             return this._hours *24;
         }
     },
     mounted() {
         this.showRemaining()
     },
     methods : {
         showRemaining() {
             const timer = setInterval(() => {
                 const now = new Date();
                 const end = new Date(2022, 4, 14, 24, 0, 0);
                 const distance = end.getTime() - now.getTime();

                if(distance < 0) {
                    clearInterval(timer);
                    return
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;
             }, 1000);
         }
     }
};
</script>

<style scoped>
.한줄 {
    display: flex;
    justify-content: center;
    margin: auto;
    text-align: center;
}
.days, .hours, .minutes, .seconds {
    margin-right: 0.5rem; /* 8px */
    position: relative;
}
.seconds{
    max-width: 60px;
}

.daylabel, .hourslabel {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    position: absolute;
    bottom: 0;
}

.minuteslabel, .secondslabel {
    font-size: 11px;
    line-height: 1.00rem;
    position: absolute;
    bottom: 0;
}

.span {
    margin-right: 0.5rem; /* 8px */
    position: relative;
    margin-bottom: 0.4rem;
}


</style>