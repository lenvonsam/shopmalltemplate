<template lang="pug">
  q-layout(:page-style="{background: '#f8f8f8', position: 'relative'}",view="hHr LpR lFf")
    q-toolbar(slot="header", color="red-5")
      q-toolbar-title.text-center {{$route.name}}
    router-view
    q-tabs(slot="footer", color="red-12", inverted)
      q-route-tab(slot="title", label="首页", icon="home", to="/tab/main", replace)
      q-route-tab(slot="title", label="购物车", icon="local_grocery_store", to="/tab/cart",  replace)
      q-route-tab(slot="title", label="我的", icon="person", to="/tab/me", replace)
</template>

<script>
  export default {}
</script>

<style ></style>
