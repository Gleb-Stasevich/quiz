
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
        checkAnswer(el) {
            const answers = document.querySelectorAll('.answer');
            const elem = el.target.closest('.answer');

            for (let answer of answers) {
                answer.style.pointerEvents = "none"
            }

            const leftTriange = elem.querySelector('.answer-left-triangle');
            const rightTriangle = elem.querySelector('.answer-right-triangle');

            if (elem.textContent.trim() === this.$store.state.quiz.questions[this.$store.state.quiz.now].correctAnswer) {
                this.$store.state.quiz.rightAnswers += 1;

                elem.classList.add('correct');
                leftTriange.classList.add('correct-left-triangle');
                rightTriangle.classList.add('correct-right-triangle');

                setTimeout(() => {
                    elem.classList.remove('correct');
                    leftTriange.classList.remove('correct-left-triangle');
                    rightTriangle.classList.remove('correct-right-triangle');
                }, 4000);
            } else {

                elem.classList.add('wrong');
                leftTriange.classList.add('wrong-left-triangle');
                rightTriangle.classList.add('wrong-right-triangle');

                setTimeout(() => {
                    elem.classList.remove('wrong');
                    leftTriange.classList.remove('wrong-left-triangle');
                    rightTriangle.classList.remove('wrong-right-triangle');
                }, 4000);

                for (let answer of answers) {
                    if (answer.textContent.trim() === this.$store.state.quiz.questions[this.$store.state.quiz.now].correctAnswer) {

                        const leftTriange = answer.querySelector('.answer-left-triangle');
                        const rightTriangle = answer.querySelector('.answer-right-triangle');

                        answer.classList.add('correct');
                        leftTriange.classList.add('correct-left-triangle');
                        rightTriangle.classList.add('correct-right-triangle');

                        setTimeout(() => {
                            answer.classList.remove('correct');
                            leftTriange.classList.remove('correct-left-triangle');
                            rightTriangle.classList.remove('correct-right-triangle');
                        }, 4000);
                    }
                }
            };
            setTimeout(() => {
                this.$store.state.quiz.now += 1;
                this.$store.state.quiz.totalAnswers += 1;
                for (let answer of answers) {
                    answer.style.pointerEvents = ""
                }
                if (document.querySelector('.timer').textContent !== '30') document.querySelector('.timer').textContent = '30';
                if (this.$store.state.quiz.totalAnswers === 15) {
                    this.$router.push('/results');
                } else {
                    this.checkTimer();
                }
            }, 4000);
        },
    },
    mounted() {
        this.checkTimer();
    }
};