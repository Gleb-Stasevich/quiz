<template>
  <div class="block">
    <div class="block__content">
      <div class="timer">30</div>
      <div class="block__question">
        <span class="qusteion-title">Вопрос №{{ now + 1 }}</span>
        <br />
        <div class="triangle-left"></div>
        <span class="question">{{ questions[now].question }}</span>
        <div class="triangle-right"></div>
      </div>
      <img v-if="questions[now].img" :src="questions[now].img" alt="" />
      <div v-else class="empty-block"></div>
      <div class="answers">
        <div class="top-answers">
          <div @click="checkAnswer" class="answer">
            {{ questions[now].firstAnswer }}
            <div class="answer-left-triangle"></div>
            <div class="answer-right-triangle"></div>
          </div>
          <div @click="checkAnswer" class="answer">
            {{ questions[now].secondAnswer }}
            <div class="answer-left-triangle"></div>
            <div class="answer-right-triangle"></div>
          </div>
        </div>
        <div class="bottom-answers">
          <div @click="checkAnswer" class="answer">
            {{ questions[now].thirdAnswer }}
            <div class="answer-left-triangle"></div>
            <div class="answer-right-triangle"></div>
          </div>
          <div @click="checkAnswer" class="answer">
            {{ questions[now].fourthAnswer }}
            <div class="answer-left-triangle"></div>
            <div class="answer-right-triangle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState } from "vuex";
import QuestionMixin from "@/mixins/QuestionMixin.js";
export default {
  mixins: [QuestionMixin],
  computed: {
    ...mapState({
      now: (state) => state.quiz.now,
      questions: (state) => state.quiz.questions,
    }),
  },
};
</script>
  
<style lang="scss" scoped>
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
    background: linear-gradient(
      90deg,
      rgba(35, 57, 223, 1) 0%,
      rgba(155, 30, 182, 1) 100%
    );
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
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
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
  border-left: 50px solid #9b1eb6;
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
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
}

@media (max-width: 819px) {
  .top-answers,
  .bottom-answers {
    flex-direction: column;
    padding: 0;
  }

  .answer {
    margin: auto;
    margin-top: 15px;
  }
}

@media (max-width: 715px) {
  .block__question {
    width: 450px;
  }
}

@media (max-width: 400px) {
  .answer {
    width: 220px !important;
  }

  img {
    width: 320px;
  }
}
</style>