<template>
    <div class="main" >
        <div
        class="dropzone-container"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
        v-bind="$attrs"
        >
        <input
            type="file"
            multiple
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".pdf,.jpg,.jpeg,.png"
        />

        <label for="fileInput" class="file-label">
            <div v-if="isDragging">Release to drop files here.</div>
            <div v-else><p style="color:#FFA500;" >Upload a file</p><hr style="border:1px solid #FFA500;"  /><br>
               <div style="display:grid;grid-template-columns:25% 50% 25%"> <p>..........</p><p class="px-7">OR</p> <p>..........</p>
              </div>
                Drag and drop here.
           </div>
        </label>
        <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <p>
              {{ file.name }}
            </p>
          </div>
           <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>×</b>
            </button>
          </div>
        </div>
      </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'fileUpload',
  data() {
    return {
      isDragging: false,
      files:[],
    };
  },
  methods: {
    onChange() {
      this.files = [...this.$refs.file.files];
      this.$emit('getFiles',this.files);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    remove(i) {
    this.files.splice(i, 1);
    },
    uploadFiles() {
    const files = this.files;
    const formData = new FormData();
    files.forEach((file) => {
        formData.append("selectedFiles", file);
    });

    axios({
        method: "POST",
        url: "http://path/to/api/upload-files",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
},
  },
};
</script>
<style scoped>
.main {
    align-items: center;
    justify-content: center;
    text-align: center;
    background:#FEF3EC;
    border: 1px solid var(--bg, #e2e8f0);
    color:#828287;
    height: max-content;
}

.dropzone-container {
    padding: 4%;
    background:var(--bg,#FEF3EC);
    max-height: 100%;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size:100%;
    cursor: pointer;
    max-height:100%;
    display: block;
  }

.preview-container {
    display: flex;
    margin-top: 2rem;
    height:30px;
    overflow: auto;

}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
    max-height:100%;
    overflow: auto;

}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>