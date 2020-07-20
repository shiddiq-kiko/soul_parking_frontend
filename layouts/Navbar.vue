<template>
  <div>
    <!-- Navbar -->
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" disabled="">
            <b-card
              v-if="sidebarStatus"
              border-variant="transparent"
              bg-variant="transparent"
              style="width: 200px; height: 50px;"
            ></b-card
          ></b-nav-item>
          <b-nav-item
            v-if="!sidebarStatus || windowWidth < 1024"
            v-b-toggle.sidebar-1
            href="#"
            @click="setSidebarStatus"
            >Menu
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              style="color: #ffd633;"
          /></b-nav-item>
          <b-nav-item
            v-else-if="sidebarStatus"
            v-b-toggle.sidebar-1
            href="#"
            @click="setSidebarStatus"
          >
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              style="color: #ffd633;"
            />Sembunyikan Menu</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto navbar-form">
        <b-nav-item>
          <b-form class="b-form">
            <div>
              <b-input-group class="mt-3">
                <b-form-select
                  size="sm"
                  class="mr-sm-2"
                  placeholder="DKI Jakarta"
                  :options="['DKI Jakarta', 'Bandung', 'Surabaya']"
                  style="margin-right: 0; max-width: 100px;"
                />
                <b-input-group-append>
                  <b-button
                    size="sm"
                    class="my-2 my-sm-0 text-light"
                    variant="warning"
                    style="margin-left: 0;"
                    >+</b-button
                  >
                </b-input-group-append>
              </b-input-group>
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
                v-if="windowWidth >= 1024"
                class="text"
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
    <b-sidebar id="sidebar-1" no-header shadow width="200px">
      <b-sidebar-header>
        <img src="@/assets/soulparking.png" alt="soulparking" />
      </b-sidebar-header>
      <div>
        <nav class="mb-3">
          <b-nav class="text" vertical role="tablist">
            <b-nav-item>
              <table class="table acordion-table">
                <tbody>
                  <tr>
                    <nuxt-link to="/">
                      <td>
                        <font-awesome-icon
                          :icon="['fab', 'stripe-s']"
                          style="color: #141f1f; margin-right: 5px;"
                        />
                        <p>Dashboard</p>
                      </td>
                    </nuxt-link>
                  </tr>
                  <tr
                    id="accordion1"
                    class="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion1"
                    href="#collapseOne"
                  >
                    <td>
                      <font-awesome-icon
                        :icon="['fas', 'clipboard']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Pelaporan</p>
                    </td>
                  </tr>
                  <tr class="hide-table">
                    <td colspan="3">
                      <div id="collapseOne" class="collapse in p-2">
                        <div class="row">
                          <table>
                            <tr>
                              <td>
                                Laporan Trafik
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laporan Pendapatan
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Pengaduan
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laporan Member
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laporan Gaskir
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laporan Aplikasi
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr
                    id="accordion2"
                    class="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion2"
                    href="#collapseTwo"
                  >
                    <td>
                      <font-awesome-icon
                        :icon="['fas', 'cog']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Pengaturan Lokasi</p>
                    </td>
                  </tr>
                  <tr class="hide-table">
                    <td colspan="4">
                      <div id="collapseTwo" class="collapse in p-2">
                        <div class="row">
                          <table class="table">
                            <tr>
                              <td>
                                Info Lokir
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Tarif
                              </td>
                            </tr>
                            <tr>
                              <nuxt-link to="/gaskir">
                                <td>
                                  <p>Gaskir</p>
                                </td></nuxt-link
                              >
                            </tr>
                            <tr>
                              <td>
                                Shift
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Produk
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Pemutihan Kendaraan
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Aktivasi Member
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Pengaturan Pengguna
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr
                    id="accordion3"
                    class="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion3"
                    href="#collapseThree"
                  >
                    <td>
                      <font-awesome-icon
                        :icon="['fas', 'user']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Sistem Admin</p>
                    </td>
                  </tr>

                  <tr class="hide-table">
                    <td colspan="4">
                      <div id="collapseThree" class="collapse in p-2">
                        <div class="row">
                          <table>
                            <tr>
                              <td>
                                Lokir
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Pengguna
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Hardware
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <font-awesome-icon
                        :icon="['fas', 'user-circle']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Sistem Admin</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <font-awesome-icon
                        :icon="['fas', 'door-open']"
                        style="color: #141f1f; margin-right: 5px;"
                      />
                      <p>Keluar</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
      <template v-if="windowWidth < 1024" v-slot:footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <b-button size="sm" @click="hide">
            Close
          </b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth.windowWidth
    },
    sidebarStatus() {
      return this.$store.state.sidebar
    },
  },
  methods: {
    setSidebarStatus() {
      this.$store.commit('SET_SIDEBAR')
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

.text p {
  margin: 0 5px;
  text-align: left;
}
#sidebar-1 {
  z-index: 10;
}
.navbar-form {
  height: 100%;
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

tr td {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
}
tr.hide-table td {
  padding: 0;
}

.accordion-toggle .expand-button:after {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translate(0, -50%);
  content: '-';
}
.accordion-toggle.collapsed .expand-button:after {
  content: '+';
}
</style>
