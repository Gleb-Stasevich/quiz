import { createStore } from 'vuex'
import { quiz } from '@/store/quiz.js';

export default createStore({

    modules: {
        quiz: quiz,
    }

});