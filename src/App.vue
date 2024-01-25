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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

/** 
* Стили обнуления
* Стили анимированного фона
* Стили для некоторых компонентов (здесь, т.к. классы повторно используются)
*/

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Josefin Sans", sans-serif;
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
  background: #fff;
  z-index: -1;
}

/* ============= Animation background ========= */
.background {
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
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
  border: solid 1px #d7d4e4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}

.cube:nth-child(2n) {
  border-color: #fff;
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

.start-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: auto;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
}

.start {
  &__block {
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
    width: 700px;
    background-color: yellow;
    border-radius: 20px;
    z-index: 2;
  }

  &__block-title {
    font-size: 50px;
    font-weight: bold;
  }

  &__block-sub-title {
    font-size: 50px;
  }

  &__block-js {
    font-size: 70px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  &__block-questions,
  &__block-answers,
  &__block-timer {
    font-size: 25px;
  }

  &__block-btn {
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 320px;
    height: 50px;
    margin: auto;
    background-color: blue;
    border-radius: 10px;
    transition: all 0.4s ease;
  }

  &__block-btn:hover {
    background-color: red;
    transition: all 0.4s ease;
  }
}

@media (max-width: 570px) {
  .block__question {
    width: 220px;
  }

  .question {
    font-size: 18px;
  }
}

@media (max-width: 431px) {
  .block__sub-title {
    font-size: 35px;
    text-align: center;
  }

  .block__js,
  .block__title {
    font-size: 50px;
  }

  .block__questions,
  .block__answers,
  .block__timer {
    font-size: 24px;
  }
}
</style>