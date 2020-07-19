<template>
  <div class="footer">
    <b-card
      border-variant="white"
      bg-variant="transparent"
      style="width: 200px; height: 50px;"
    ></b-card>
    <img src="@/assets/soulparking.png" alt="soulparking" />
    <p>Copyright 2020</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  height: auto;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

img {
  max-height: 125px;
  max-width: 150px;
}

p {
  font-size: 12px;
}
</style>
