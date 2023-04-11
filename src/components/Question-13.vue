<template>
    <div class="block">
        <div class="block__content">
            <div class="timer">30</div>
            <div class="block__question">
                <span class="qusteion-title">Вопрос №13</span>
                <br>
                <div class="triangle-left"></div>
                <span class="question">{{ $store.state.quiz.questions[12].question }}</span>
                <div class="triangle-right"></div>
            </div>
            <img src="@/../public/img/question-13.png" alt="">

            <div class="answers">
                <div class="top-answers">
                    <div @click="checkAnswer" class="answer">
                        {{ $store.state.quiz.questions[12].firstAnswer }}
                        <div class="answer-left-triangle"></div>
                        <div class="answer-right-triangle"></div>
                    </div>
                    <div @click="checkAnswer" class="answer">
                        {{ $store.state.quiz.questions[12].secondAnswer }}
                        <div class="answer-left-triangle"></div>
                        <div class="answer-right-triangle"></div>
                    </div>
                </div>
                <div class="bottom-answers">
                    <div @click="checkAnswer" class="answer">
                        {{ $store.state.quiz.questions[12].thirdAnswer }}
                        <div class="answer-left-triangle"></div>
                        <div class="answer-right-triangle"></div>
                    </div>
                    <div @click="checkAnswer" class="answer correct-answer">
                        {{ $store.state.quiz.questions[12].fourthAnswer }}
                        <div class="answer-left-triangle"></div>
                        <div class="answer-right-triangle"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        checkTimer() {
            const interval = setInterval(() => {
                for (let answer of document.querySelectorAll('.answer')) {
                    if (answer.classList.contains('correct')) {
                        clearInterval(interval);
                        return
                    }
                }
                const timer = document.querySelector('.timer');

                if (timer == null) {
                    clearInterval(interval);
                    return
                }

                timer.textContent = timer.textContent - 1;

                if (timer.textContent === '0') {
                    this.$router.push('/game-over');
                    clearInterval(interval);
                    return
                }
            }, 1000);
        },
        checkAnswer(elem) {
            const answers = document.querySelectorAll('.answer');

            for (let answer of answers) {
                answer.style.pointerEvents = "none"
            }

            const leftTriange = elem.target.querySelector('.answer-left-triangle');
            const rightTriangle = elem.target.querySelector('.answer-right-triangle');

            if (elem.target.classList.contains('correct-answer')) {

                this.$store.state.quiz.rightAnswers += 1;

                elem.target.classList.add('correct');
                leftTriange.classList.add('correct-left-triangle');
                rightTriangle.classList.add('correct-right-triangle');
            } else {

                elem.target.classList.add('wrong');
                leftTriange.classList.add('wrong-left-triangle');
                rightTriangle.classList.add('wrong-right-triangle');

                for (let answer of answers) {
                    if (answer.classList.contains('correct-answer')) {

                        const leftTriange = answer.querySelector('.answer-left-triangle');
                        const rightTriangle = answer.querySelector('.answer-right-triangle');

                        answer.classList.add('correct');
                        leftTriange.classList.add('correct-left-triangle');
                        rightTriangle.classList.add('correct-right-triangle');
                    }
                }
            };
            setTimeout(() => {
                this.$store.state.quiz.totalAnswers += 1;
                this.$router.push('/question-14');
            }, 4000);
        },
    },

    mounted() {
        this.checkTimer();
    },
}
</script>
  
<style lang="scss" scoped></style>