<template>
  <div class="app">
    <div class="container-fluid">
      <!-- Background animtion-->
      <div class="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/** 
* Стили обнуления
* Стили анимированного фона
* Стили для всех компонентов (классы везде повторно используются)
*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: 'Montserrat', sans-serif;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Josefin Sans', sans-serif;
  box-sizing: border-box;
}

li,
a {
  text-decoration: none;
  list-style: none;
}

img {
  display: block;
  margin: auto;
  margin-top: 50px;
  width: 400px;
  height: 90px;
}

.container-fluid {
  position: absolute;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #FFF;
  z-index: -1;
}

/* ============= Animation background ========= */
.background {
  background: linear-gradient(132deg, #FC415A, #591BC5, #212335);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #D7D4E4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}

.cube:nth-child(2n) {
  border-color: #FFF;
}

.cube:nth-child(2) {
  animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}

.cube:nth-child(3) {
  animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}

.cube:nth-child(4) {
  animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}

.cube:nth-child(5) {
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}

.cube:nth-child(6) {
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

/* ================= Header ============ */
header {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* navbar */
nav {
  color: #FFF;
  float: right;
  margin: 30px 90px;
}

nav ul {
  list-style: none;
}

nav ul li {
  float: left;
  transition: .3s;
}

nav ul li a {
  text-decoration: none;
  color: #EFEEF5;
  transition: .5;
  font-size: 15px;
  margin-left: 16px;
}

nav ul li:hover a {
  text-decoration: none;
  color: #591BC5;
  ;
}

nav ul li:hover {
  height: 45px;
  padding-top: 30px;
  margin-top: -30px;
  background: #EFEEF5;
  text-decoration: none;
  transform: skew(15deg);
}

/* Logo */
.logo {
  width: 35px;
  height: 35px;
  background: #EFEEF5;
  margin: 40px 63px;
  float: left;
  transform: rotate(-30deg);
}

.logo span {
  color: #591BC5;
  font-size: 2em;
  line-height: 1.4;
  padding-left: 5px;
  font-weight: bold;
}

/* Header content & title & button*/
.header-content {
  margin-top: 25%;
  text-align: center;
  color: #EFEEF5;
}

.header-content h1 {
  text-transform: uppercase;
  font-size: 3em;
  letter-spacing: 1px;
}

.header-content p {
  font-size: 20px;
  line-height: 1.5;
  margin: 20px auto;
}

.header-content button {
  width: 140px;
  margin: 20px 10px;
  color: #591BC5;
  font-size: 17px;
  border: 1px solid #EFEEF5;
  font-weight: 500;
  background: #EFEEF5;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: .3s;
}

.header-content button:hover {
  border-radius: 0;
}

/* Animate Background*/
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }

  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &__question {
    position: relative;
    margin: auto;
    width: 600px;
    height: 100px;
    background: rgb(35, 57, 223);
    background: linear-gradient(90deg, rgba(35, 57, 223, 1) 0%, rgba(155, 30, 182, 1) 100%);
    text-align: center;
  }
}

.qusteion-title,
.question {
  display: block;
  padding-top: 5px;
  color: white;
}

.qusteion-title {
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}

.question {
  font-size: 25px;
}

.answer {
  cursor: pointer;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 320px;
  min-height: 70px;
  margin: 0px 45px;
  background: rgb(35, 57, 223);
  transition: all 0.6s ease;
}

.answer:hover {
  background: blueviolet;
  transition: all 0.6s ease;

  .answer-left-triangle {
    border-right: 35px solid blueviolet;
    transition: all 0.6s ease;
  }

  .answer-right-triangle {
    border-left: 35px solid blueviolet;
    transition: all 0.6s ease;
  }
}

.correct {
  background: rgb(12, 202, 12) !important;
  transition: all 0.6s ease;
}

.correct-left-triangle {
  border-right: 35px solid rgb(12, 202, 12) !important;
  transition: all 0.6s ease;
}

.correct-right-triangle {
  border-left: 35px solid rgb(12, 202, 12) !important;
  transition: all 0.6s ease;
}

.wrong {
  background: red !important;
  transition: all 0.6s ease;
}

.wrong-left-triangle {
  border-right: 35px solid red !important;
  transition: all 0.6s ease;
}

.wrong-right-triangle {
  border-left: 35px solid red !important;
  transition: all 0.6s ease;
}

.top-answers,
.bottom-answers {
  display: flex;
  justify-content: center;
}

.top-answers {
  padding-top: 50px;
}

.bottom-answers {
  padding-top: 100px;
}

.triangle-left,
.triangle-right {
  position: absolute;
  top: 0;
  width: 0px;
  height: 0;
  border: 0 solid transparent;
}

.triangle-left {
  left: -50px;
  border-top-width: 50px;
  border-bottom-width: 50px;
  border-right: 50px solid rgb(35, 57, 223);
}

.triangle-right {
  right: -50px;
  border-bottom-width: 50px;
  border-top-width: 50px;
  border-left: 50px solid #9B1EB6;
}

.answer-left-triangle,
.answer-right-triangle {
  position: absolute;
  top: 0;
  width: 0px;
  height: 0;
  border: 0 solid transparent;
  transition: all 0.6s ease;
}

.answer-left-triangle {
  left: -35px;
  border-top-width: 35px;
  border-bottom-width: 35px;
  border-right: 35px solid rgb(35, 57, 223);
}

.answer-right-triangle {
  right: -35px;
  border-top-width: 35px;
  border-bottom-width: 35px;
  border-left: 35px solid rgb(35, 57, 223);
}

.empty-block {
  margin-top: 50px;
  height: 90px;
}

.timer {
  margin-bottom: 20px;
  text-align: center;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: white;
}
</style>
