<template lang="html">
  <div class="">
    <div class="form-group">
      <textarea class="form-control" id="exampleTextarea" rows="3" v-model="answerBaru"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['qids'],
  data () {
    return {
      queId: this.qids,
      answerBaru: ''
    }
  }
}
</script>

<style lang="css">
</style>
