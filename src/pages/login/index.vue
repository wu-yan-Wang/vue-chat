<template>
  <div @click="toChat()">登录</div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    toChat: function() {
      this.$router.push("chat");
    }
  }
};
</script>