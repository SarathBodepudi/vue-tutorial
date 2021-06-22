<template>
  <div>
    <div>
      <h1 class="title">User Information</h1>
    </div>

    <div class="color-line">
      <div class="section columns">
        <label for="firstName">first name</label>
        <input id="firstName" />
      </div>

      <div class="field">
        <label for="lastName">last name</label>
        <input id="lastName" />
      </div>
      
    </div>

    <div>
      <button>
        <i></i>
        <span>Cancel</span>
      </button>
      <button>
        <i></i>
        <span>Save</span>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Registration",
};
</script>



<!--<style scoped src="../design/index.scss"></style> -->


<style scoped lang="css">
@import "/design/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
