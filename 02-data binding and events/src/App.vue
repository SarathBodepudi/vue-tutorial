<script lang="ts">
import { defineComponent } from 'vue';
import Registration from './components/Registration.vue';

export default defineComponent({
  name: 'App',
  components: {
    Registration
  }
});
</script>


<template>
  <div class="content-container">
    <div>
        <h2 class="title"> User Registration</h2>
    </div>
  <div class="column">
    <registration />
  </div>
  </div>
  
</template>

<!--
<style>
  @import  '/design/index.scss';
</style>
-->

<style scoped lang="css">
@import "/design/index.scss";
</style>
