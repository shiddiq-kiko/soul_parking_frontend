<template>
  <div class="gaskir">
    <b-card class="list" title="List Petugas Parkir">
      <div v-for="gaskir in Gaskir" :key="gaskir.name" class="card-group">
        <div class="card gaskir-list" style="border-radius: 10px;">
          <div class="img">
            <img
              src="~/assets/img-person-placeholder.jpg"
              alt=""
              style="border-radius: 50%; height: 50px; width: 50px;"
            />
          </div>

          <div class="text">
            <p style="font-weight: bold;">{{ gaskir.name }}</p>
            <p>
              <font-awesome-icon
                :icon="['fas', 'mobile-alt']"
                style="color: #ffd633;"
              />
              {{ gaskir.notelp }}
            </p>
            <p v-if="gaskir.status === true">
              <font-awesome-icon
                :icon="['fas', 'check-circle']"
                style="color: green;"
              />
              Aktif
            </p>
            <p v-else-if="gaskir.status === false" style="color: gray;">
              <font-awesome-icon :icon="['fas', 'check-circle']" />
              Tidak Aktif
            </p>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import gaskir from '@/assets/gaskir.js'
export default {
  computed: {
    Gaskir() {
      return gaskir
    },
    randomPic() {
      return this.fetchRandomPic()
    },
  },
  methods: {
    fetchRandomPic() {
      axios
        .get('https://randomuser.me/api/')
        .then(({ results }) => {
          if (!results) {
            return '~/assets/img-person-placeholder.jpg'
          }
          const result = JSON.parse(results)
          return result.picture.thumbnail
        })
        .catch(() => {
          return '@/assets/img-person-placeholder.jpg'
        })
    },
  },
}
</script>

<style scoped>
.list {
  width: 20vw;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.gaskir {
  margin-bottom: 30px;
}
.gaskir-list {
  height: 110px;
  max-height: 110px;
  width: 250px;
  max-width: 250px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 10px;
}
.text {
  width: auto;
  margin-top: 10px;
}
</style>
