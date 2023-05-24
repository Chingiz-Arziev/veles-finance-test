<template>
  <div class="stop_loss">
    <div class="title_block">
      <h1>API ключа</h1>
      <span>A</span>
    </div>

    <div class="select">
      <label for="">API ключа</label>
      <select name="" id="">
        <option value="">Binance</option>
      </select>
    </div>

    <hr>
  </div>
</template>

<script setup>
</script>

<style scoped>

.stop_loss {
  color: #fff;
  margin: 2rem 0 0 0;
}

.title_block {
  display: flex;
  flex-direction: row;
}

.select {
  display: flex;
  flex-direction: column;
}

.select select {
  height: 40px;
  padding: 5px 10px;
}
</style>
