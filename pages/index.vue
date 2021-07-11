<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$router.push("/main/home");
  }
};
</script>
