<template>
  <div class="formupload">
    <b-card-group class="group">
      <b-card>
        <Upload />
        <Form />
        <div class="button">
          <b-button variant="outline-danger" style="margin: 10px;">
            Batal
          </b-button>
          <b-button variant="warning" class="text-light" style="margin: 10px;">
            Simpan
          </b-button>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Upload from './Upload/Upload.vue'
import Form from './Form/Form.vue'
export default {
  components: {
    Upload,
    Form,
  },
}
</script>

<style scoped>
.formupload {
  margin-bottom: 30px;
}

.group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.button {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  text-align: right;
}
</style>
