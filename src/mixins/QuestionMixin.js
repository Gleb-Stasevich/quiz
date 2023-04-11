    /** Если был выбран ответ - удаляем интервал;
* Если пользователь переходит на другой вопрос - удаляем интервал;
* Если пользователь пытается жульничать (переключать страницы, меняя свой вариант ответа ==> интервалы попадают в стек),
* ничего тут не меняем, в конце делаем проверку на количество ответов
* делаем проверку на количество ответов
* Если время закончилось - удаляем интервал;
*/


// export default {
//     methods: {
//         checkTimer() {
//             const interval = setInterval(() => {
//                 for (let answer of document.querySelectorAll('.answer')) {
//                     if (answer.classList.contains('correct')) {
//                         clearInterval(interval);
//                         return
//                     }
//                 }
//                 const timer = document.querySelector('.timer');

//                 if (timer == null) {
//                     clearInterval(interval);
//                     return
//                 }

//                 timer.textContent = timer.textContent - 1;

//                 if (timer.textContent === '0') {
//                     this.$router.push('/game-over');
//                     clearInterval(interval);
//                     return
//                 }
//             }, 1000);
//         },
//         checkAnswer(elem) {
//             console.log(elem);
//             const answers = document.querySelectorAll('.answer');

//             for (let answer of answers) {
//                 answer.style.pointerEvents = "none"
//             }

//             const leftTriange = elem.target.querySelector('.answer-left-triangle');
//             const rightTriangle = elem.target.querySelector('.answer-right-triangle');

//             if (elem.target.classList.contains('correct-answer')) {

//                 elem.target.classList.add('correct');
//                 leftTriange.classList.add('correct-left-triangle');
//                 rightTriangle.classList.add('correct-right-triangle');
//             } else {

//                 elem.target.classList.add('wrong');
//                 leftTriange.classList.add('wrong-left-triangle');
//                 rightTriangle.classList.add('wrong-right-triangle');

//                 for (let answer of answers) {
//                     if (answer.classList.contains('correct-answer')) {

//                         const leftTriange = answer.querySelector('.answer-left-triangle');
//                         const rightTriangle = answer.querySelector('.answer-right-triangle');

//                         answer.classList.add('correct');
//                         leftTriange.classList.add('correct-left-triangle');
//                         rightTriangle.classList.add('correct-right-triangle');
//                     }
//                 }
//             };
//         },
//     },
//     mounted() {
//         this.checkTimer();
//     }
// };