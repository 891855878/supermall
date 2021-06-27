<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 #tab-bar
  {
    display: flex; background-color: #f5f5f5; position: fixed; bottom: 0; left: 0px; right: 0px;
    box-shadow: 0 5px 10px black
  }
</style>
