<template>
  <div class="gaskir">
    <b-card class="list" title="List Petugas Parkir">
      <!-- if window width >= 1024 -->
      <div v-if="windowWidth >= 1024">
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
      </div>

      <!-- if window width < 1024 -->
      <div v-else-if="windowWidth < 1024" class="pagination">
        <ul>
          <li v-for="gaskir in paginate" :key="gaskir.name" class="card-group">
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
          </li>
        </ul>

        <ul>
          <li>
            <a href="#" @click="previousPage">
              <font-awesome-icon
                v-if="currentPage - 1 != 0"
                :icon="['fas', 'chevron-left']"
                style="color: #ffd633;"
              />
            </a>
          </li>
          <li v-for="pageNumber in totalPages" :key="pageNumber">
            <a
              href="#"
              :class="{
                current: currentPage === pageNumber,
                last:
                  pageNumber == totalPages &&
                  Math.abs(pageNumber - currentPage) > 3,
                first:
                  pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
              }"
              @click="setPage(pageNumber)"
            >
              {{ pageNumber }}</a
            >
          </li>
          <li>
            <a href="#" @click="nextPage">
              <font-awesome-icon
                v-if="currentPage + 1 <= totalPages"
                :icon="['fas', 'chevron-right']"
                style="color: #ffd633;"
              />
            </a>
          </li>
        </ul>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import gaskir from '@/assets/gaskir.js'
export default {
  data() {
    return {
      list: [],
      currentPage: 1,
      itemsPerPage: 3,
      resultCount: 0,
    }
  },
  computed: {
    Gaskir() {
      return this.list
    },
    randomPic() {
      return this.fetchRandomPic()
    },
    windowWidth() {
      return this.$store.state.windowWidth.windowWidth
    },
    row() {
      return this.list.length
    },
    totalPages() {
      return Math.ceil(this.list.length / this.itemsPerPage)
    },
    paginate() {
      const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.list.slice(index, index + this.itemsPerPage)
    },
  },
  mounted() {
    this.gaskirToList()
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
    gaskirToList() {
      this.list = gaskir
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber
    },
    nextPage() {
      this.currentPage = this.currentPage + 1
    },
    previousPage() {
      this.currentPage = this.currentPage - 1
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
}

.text p {
  margin: 0;
}
a {
  color: #999;
}
.current {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
