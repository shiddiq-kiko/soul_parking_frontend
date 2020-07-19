<template>
  <div class="container">
    <h1>Tambah Petugas Parkir</h1>
    <div class="card-group">
      <Gaskir />
      <FormUpload />
    </div>
  </div>
</template>

<script>
import Gaskir from '@/components/Gaskir/Gaskir.vue'
import FormUpload from '@/components/Gaskir/FormUpload.vue'
export default {
  name: 'gaskir',
  layout: 'default',
  components: {
    Gaskir,
    FormUpload,
  },
  head() {
    return {
      title: 'Gaskir',
    }
  },
}
</script>

<style>
h1 {
  max-height: 100px;
  margin-top: 10px;
}
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flexbox;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  flex-wrap: wrap;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.card-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-evenly;
}
</style>
