<template>
  <div class="form">
    <b-card
      title="Informasi Lokasi Parkir"
      style="width: auto; max-width: 550px; text-align: left;"
      border-variant="white"
    >
      <b-form class="dummy-form">
        <div>
          <b-form-group
            id="input-group-1"
            label="Nama Petugas Parkir"
            label-for="input-1"
          >
            <b-form-input id="input-1" placeholder="Enter Name"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Username" label-for="input-2">
            <b-form-input
              id="input-2"
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>
        </div>
        <div>
          <b-form-group id="input-group-3" label="NIK" label-for="input-3">
            <b-form-input id="input-3" placeholder="Enter NIK"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="No Telepon"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              placeholder="Enter No Telepon"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="finalform">
          <b-form-group id="input-group-5" label="Password" label-for="input-5">
            <b-form-input
              id="input-5"
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-6"
            label="Aktif"
            label-for="input-group-6"
          >
            <b-form-checkbox-group id="checkboxes-6">
              <b-form-checkbox value="me"></b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dummy-form {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

#input-1 {
  max-width: 220px;
  margin: 10px;
}
#input-2 {
  max-width: 220px;
  margin: 10px;
}
#input-3 {
  max-width: 220px;
  margin: 10px;
}
#input-4 {
  max-width: 220px;
  margin: 10px;
}
#input-group-5 {
  width: 250px;
  max-width: 250px;
  margin: 10px;
}
#input-5 {
  max-width: 220px;
  margin: 5px;
}
#checkboxes-6 {
  width: 200px;
  max-width: 200px;
  margin: 10px;
}
.finalform {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
