<template lang="html">
  <div class="">
    <h5></h5>
    <div class="form-group">
      <label for="exampleTextarea">Add Questions</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <button type="button" name="button" @click="post">POST</button>
    <div class="row">
      <QuestionCard id='qcard' v-for="question in questions.data.data" :key="question._id" :que="question"/>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuestionCard from '@/components/QuestionCard'
export default {
  data () {
    return {
      newQuestion: ''
    }
  },
  components: {
    QuestionCard: QuestionCard
  },
  methods: {
    ...mapActions([
      'getAllQuestions',
      'getAllAnswers',
      'postQuestion'
    ]),
    upvote () {
      let answerBox = document.getElementById('divID')
      answerBox.className += ' bg-success'
    },
    post () {
      this.postQuestion(this.newQuestion)
      this.getAllQuestions()
    }
  },
  computed: {
    ...mapState([
      'questions',
      'answers'
    ])
  },
  created () {
    this.getAllQuestions()
    this.getAllAnswers()
  }
}
</script>

<style scoped lang="css">
.card{
}
#qcard{
}
.row{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
