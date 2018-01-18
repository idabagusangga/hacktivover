<template lang="html">
  <div class="">
    <div class="card mb-3" style="max-width: 20rem;">
    <div class="card-header text-white bg-primary">{{que.ownersId[0].email}}</div>
    <div class="card-body">
      <h4 class="card-title">{{que.question}}</h4>
      <p class="card-text">{{que.ownersId[0].username}}</p>
        <answers v-for="a in que.answerId" :key="a._id" :ans="a"/>
        <answerTextbox v-model="answerBaru" :qids="que._id"/>
        <button type="button" name="button" @click="postAnswer">POST</button>
      </div>
    </div>
    <p>Question Score: {{que.points.length}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AnswerCard from '@/components/AnswerCard'
import answerTextbox from '@/components/AnswerTextBox'
export default {
  props: ['que'],
  data () {
    return {
      qid: this.que._id
    }
  },
  components: {
    answers: AnswerCard,
    answerTextbox: answerTextbox
  },
  computed: {
    ...mapState([
      'answers',
      'userDetail'
    ])
  },
  methods: {
    postAnswer () {
      console.log(this.qid)
      console.log(this.userDetail)
    }
  }
}
</script>

<style lang="css">
</style>
