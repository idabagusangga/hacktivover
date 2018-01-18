<template lang="html">
  <div class="ansBox">
    <div class="card mb-3" style="max-width: 20rem;" id='divID'>
      <div class="card-header">{{ans.username}}</div>
      <div class="card-body">
        <h4 class="card-title">{{ans.answer}}</h4>
        <p class="card-text">{{ans}}</p>
        <p class="text-success" >Points: 0</p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['ans']
}
</script>

<style lang="css">
</style>
