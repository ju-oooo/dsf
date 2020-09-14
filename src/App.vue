<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
@import url("assets/css/normalize.css");

* {
    margin: 0;
    padding: 0;
}

input {
    border: none;
}

#app {
    font-family: "PingFangSC-Medium", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: #FBFBFB;
}

body {
    background-color: #012541;
}

.br-fff {
    border-right: 1px solid #fff;
}
</style>
