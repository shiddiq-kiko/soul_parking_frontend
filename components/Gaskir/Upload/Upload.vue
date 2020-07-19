<template>
  <div class="upload">
    <b-card
      title="Upload Dokumen Data Diri"
      style="width: auto; max-width: 550px; text-align: left;"
      border-variant="white"
    >
      <div class="card-upload">
        <b-card
          footer="Extensi file yang diperbolehkan: .JPEG, .JPG, .PNG"
          footer-bg-variant="white"
          footer-border-variant="transparent"
          footer-tag="small"
          class="card"
        >
          <b-card-img class="img">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fselular.id%2F2015%2F09%2Friset-banyak-perusahaan-belum-menyadari-manfaat-cloud%2Fcloud-logo%2F&psig=AOvVaw20A_pcAobPslpJdLHaCV4Q&ust=1595216152043000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC12e2x2OoCFQAAAAAdAAAAABAQ"
              alt=""
            />
          </b-card-img>
          <b-card-text>
            <b-button
              class="text-light"
              variant="warning"
              style="border-radius: 10px; margin-top: 10px;"
            >
              Upload KTP
            </b-button>
          </b-card-text>
        </b-card>
        <b-card
          footer="Extensi file yang diperbolehkan: .JPEG, .JPG, .PNG"
          footer-bg-variant="white"
          footer-border-variant="transparent"
          footer-tag="small"
          class="card"
        >
          <b-card-img class="img">
            <img
              src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/Fotolia_128673803_Subscription_Monthly_M.jpg"
              alt=""
            />
          </b-card-img>
          <b-card-text>
            <b-button
              class="text-light"
              variant="warning"
              style="border-radius: 10px; margin-top: 10px;"
            >
              Upload Foto Diri
            </b-button>
          </b-card-text>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-upload {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  width: 220px;
  max-width: 220px;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
}

img {
  height: 180px;
  width: 180px;
  max-height: 200px;
  max-width: 200px;
  box-shadow: 2px 2px gray;
}
</style>
