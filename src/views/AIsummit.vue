<template>
  <div>
    <nav-bar></nav-bar>
    <div>
      <section class="event-banner">
        <div class="event-banner-container container">
            <div class="event-bn-text">
                <h1> Annual Africa AI Summit!</h1>
                <div id="countdown">
                  <div class="card">
                      <div class="number" id="days">00</div>
                      <div class="unit">Days</div>
                  </div>
                  <div class="colon">:</div>
                  <div class="card">
                      <div class="number" id="hours">00</div>
                      <div class="unit">Hours</div>
                  </div>
                  <div class="colon">:</div>
                  <div class="card">
                      <div class="number" id="minutes">00</div>
                      <div class="unit">Mins</div>
                  </div>
                  <div class="colon">:</div>
                  <div class="card">
                      <div class="number" id="seconds">00</div>
                      <div class="unit">Secs</div>
                  </div>
              </div>
            </div>
            <div class="event-bn-image flex flex-center">
                <div class="image-border">
                   <img src="\images\event banner image.png" alt="Intelliverseai">
                </div>
            </div>
        </div>
    </section>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '@/components/utils/FooterComponent.vue'
import NavBar from '@/components/utils/NavBar.vue'
export default {
  components: { FooterComponent, NavBar },

}

    // Set the date we're counting down to
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 3); // 3 days from now

    // Update the countdown every second
    const countdown = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const difference = eventDate - currentDate;

        if (difference <= 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Event has started!';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').innerHTML = formatNumber(days);
            document.getElementById('hours').innerHTML = formatNumber(hours);
            document.getElementById('minutes').innerHTML = formatNumber(minutes);
            document.getElementById('seconds').innerHTML = formatNumber(seconds);
        }
    }

    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }
</script>

<style>
.flex{
    display: flex;
}
.flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
}
section.event-banner{
    width: 100%;
    height: fit-content;
    margin: 20px 0px 40px;
}
.event-banner-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.event-bn-text, .event-bn-image{
    width: 100%;
    max-width: 580px;
    min-width: 280px;
}
.event-bn-text h1{
    width: 100%;
    max-width: 550px;
    color: #000000;
    font-size: 72px;
    font-style: normal;
    font-weight: 800;
    line-height: 85px;
}
.event-bn-text #countdown{
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 50px 0px 0px;
}
.event-bn-text #countdown .colon{
  margin: 0px 6px;
}
.event-bn-text #countdown .card {
            display: inline-block;
            margin: 0 10px;
            text-align: center;
            width: 70px;
        }

        .event-bn-text #countdown .number {
            font-weight: bold;
            color: #333;
            text-align: center;
            font-size: 40px;
        }

        .event-bn-text #countdown .unit {
          font-size: 24px;
            color: #777;
            text-align: center;
        }
.event-bn-image{
    padding: 20px;
}
.image-border{
    border: 4px solid var(--orange);
    position: relative;
    height: 673px;
    width: 574px;
}
.image-border img{
    position: absolute;
    top: 40px;
    left: 40px;
    height: 673px;
    width: 574px;
}
</style>