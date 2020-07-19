<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <!-- <b-navbar-brand href="#">
        <img
          src="@/assets/soulparking.png"
          alt="soulparking"
          style="max-height: 50px;"
      /></b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" disabled="">
            <b-card
              border-variant="transparent"
              bg-variant="transparent"
              style="width: 230px; height: 50px;"
            ></b-card
          ></b-nav-item>
          <b-nav-item v-b-toggle.sidebar-1 href="#">Menu</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto navbar-form">
        <b-nav-item>
          <b-form class="b-form">
            <div>
              <b-form-select
                size="sm"
                class="mr-sm-2"
                placeholder="DKI Jakarta"
                :options="['DKI Jakarta', 'Bandung', 'Surabaya']"
                style="margin-right: 0; max-width: 100px;"
              />
              <b-button
                size="sm"
                class="my-2 my-sm-0 text-light"
                variant="warning"
                style="margin-left: 0;"
                >+</b-button
              >
            </div>
          </b-form>
        </b-nav-item>

        <b-nav-item>
          <b-card
            class="user"
            border-variant="transparent"
            bg-variant="transparent"
            style="max-height: 30px; padding: 0;"
          >
            <div class="card gaskir-list">
              <div class="img">
                <img
                  src="~/assets/img-person-placeholder.jpg"
                  alt=""
                  style="border-radius: 50%; height: 22px; width: 22px;"
                />
              </div>

              <div
                class="text"
                v-if="windowWidth >= 1024"
                style="max-height: 30px;"
              >
                <p class="text-light" style="font-weight: bold;">
                  Husein Damar
                </p>
                <p style="font-size: 10px;">Super Admin</p>
              </div>
            </div>
          </b-card>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Sidebar -->
    <b-sidebar id="sidebar-1" no-header shadow width="250px">
      <b-sidebar-header>
        <img src="@/assets/soulparking.png" alt="soulparking" />
      </b-sidebar-header>
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav class="text" vertical role="tablist">
            <b-nav-item class="accordion">
              <!-- Accordion -->
              <accordion>
                <nuxt-link to="/"
                  ><accordion-item>
                    <template slot="accordion-trigger">
                      <font-awesome-icon
                        :icon="['fab', 'stripe-s']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Dashboard</p>
                    </template>
                    <template slot="accordion-content">
                    </template> </accordion-item
                ></nuxt-link>

                <accordion-item>
                  <template slot="accordion-trigger">
                    <font-awesome-icon
                      :icon="['fas', 'clipboard']"
                      style="color: #141f1f; margin-right: 5px;"
                    />
                    <p>Pelaporan</p>
                  </template>
                  <template slot="accordion-content">
                    <p>Laporan Trafik</p>
                    <p>Laporan Pendapatan</p>
                    <p>Pengaduan</p>
                    <p>Laporan Member</p>
                    <p>Laporan Gaskir</p>
                    <p>Laporan Aplikasi</p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template slot="accordion-trigger">
                    <font-awesome-icon
                      :icon="['fas', 'cog']"
                      style="color: #141f1f; margin-right: 5px;"
                    />
                    <p>Pengaturan Lokasi</p>
                  </template>
                  <template slot="accordion-content">
                    <p>Info Lokir</p>
                    <p>Tarif</p>
                    <nuxt-link to="/gaskir"><p>Gaskir</p></nuxt-link>
                    <p>Shift</p>
                    <p>Produk</p>
                    <p>Pemutihan Kendaraan</p>
                    <p>Aktivasi Member</p>
                    <p>Pengaturan Pengguna</p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template slot="accordion-trigger">
                    <font-awesome-icon
                      :icon="['fas', 'user']"
                      style="color: #141f1f; margin-right: 5px;"
                    />
                    <p>Sistem Admin</p>
                  </template>
                  <template slot="accordion-content">
                    <p>Lokir</p>
                    <p>Pengguna</p>
                    <p>Hardware</p>
                  </template>
                </accordion-item>
              </accordion>
            </b-nav-item>
            <b-nav-item>
              <div class="nav">
                <font-awesome-icon
                  :icon="['fas', 'user-circle']"
                  style="color: #141f1f; margin-right: 5px;"
                />
                <p>Sistem Admin</p>
              </div>
            </b-nav-item>
            <b-nav-item>
              <div class="nav">
                <font-awesome-icon
                  :icon="['fas', 'door-open']"
                  style="color: #141f1f; margin-right: 5px;"
                />
                <p>Keluar</p>
              </div>
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Accordion from './accordion'
import AccordionItem from './accordion-item'

export default {
  name: 'Navbar',
  components: {
    Accordion,
    AccordionItem,
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth.windowWidth
    },
  },
}
</script>

<style scoped>
.user {
  height: auto;
  width: 100px;
  max-height: 30px;
  /* max-width: 100px; */
}
.card {
  height: 30px;
  width: auto;
  max-height: 30px;
  background: transparent;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 5px;
  flex-wrap: nowrap;
}

p {
  margin-bottom: 0;
  text-align: left;
}
/* .text {
  display: flex;
  text-align: left;
  flex-direction: column;
  font-size: small;
  margin: 0;
} */

/* .accordion {
  width: auto;
  display: flex;
  justify-content: flex-start;
  text-align: left;
} */

.nav-form {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
}

.b-form {
  margin: 0;
  width: 150px;
}

template p {
  font-size: 5px;
}
</style>
