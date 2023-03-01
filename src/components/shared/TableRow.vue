<template>
  <v-card
    v-if="item.length !== 0"
    :height="laptop ? '75px' : '105px'"
    width="100%"
    flat
    class="card"
    :class="{ tutor: type === 'tutor', student: type === 'student' }"
  >
    <div class="main-content d-flex align-center">
      <v-avatar :size="laptop ? '40px' : '60px'">
        <!--    <v-img :src="require(`@/assets/${item.profile}.png`)"></v-img>-->
        <avatarVue :char="item.user?.name[0]" />
      </v-avatar>
      <div class="meta d-flex flex-column justify-center">
        <h4 class="id">
          {{
            item.id < 9
              ? "00" + item.id
              : item.id < 99
              ? "0" + item.id
              : item.id
          }}
        </h4>
        <h4 class="name">{{ item.user?.name }}</h4>
      </div>
    </div>

    <div class="date">
      <p class="column-text" v-if="type === 'student'">{{ item.created_at }}</p>
      <p class="column-text" v-if="type === 'tutor'">{{ item.created_at }}</p>
    </div>

    <div class="grade" v-show="type === 'student'">
      <p v-if="type === 'student'" class="column-text">
        {{ item.grade[0]?.name }}
      </p>
    </div>

    <div class="subject">
      <p v-if="type === 'tutor'" class="column-text">{{ item.subject?.name }}</p>
      <p v-if="type === 'student'" class="column-text">
        {{ item.subject[0]?.name }}
      </p>
    </div>

    <div class="actions">
      <div
        v-if="type == 'student' && userType == 1"
        class="link link-icon"
        @click="shift(item.id, item?.status, class_id)"
      >
        <svg
          v-if="
            (!Ssession && item?.status == 'blocked') ||
            (Ssession && itemStatus == 0)
          "
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 10C16 8.897 15.103 8 14 8H13V5C13 2.243 10.757 0 8 0C5.243 0 3 2.243 3 5V8H2C0.897 8 0 8.897 0 10V18C0 19.103 0.897 20 2 20H14C15.103 20 16 19.103 16 18V10ZM5 5C5 3.346 6.346 2 8 2C9.654 2 11 3.346 11 5V8H5V5Z"
            fill="black"
          />
        </svg>
        <svg
          v-else-if="
            (!Ssession && item?.status == 'active') ||
            (Ssession && itemStatus == 1)
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"
          />
        </svg>
      </div>
      <div class="link d-flex" v-if="Ssession" @click="showProfile(item)">
        <span>View Details</span>
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z"
            fill="#FE3F49"
          />
        </svg>
      </div>

      <div class="link d-flex" v-if="!Ssession" @click="showProfile(item)">
        <span>View Details</span>
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.5L5 7.5L0 2.5L1 0.5L8 7.5L1 14.5L0 12.5Z"
            fill="#FE3F49"
          />
        </svg>
      </div>

      <div
        class="link link-icon"
        v-if="userType == 1 && !Ssession"
        @click="showForm(item, type)"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.474 3.40783L15.592 5.52483M14.836 1.54283L9.109 7.26983C8.81309 7.56533 8.61128 7.94181 8.529 8.35183L8 10.9998L10.648 10.4698C11.058 10.3878 11.434 10.1868 11.73 9.89083L17.457 4.16383C17.6291 3.99173 17.7656 3.78742 17.8588 3.56256C17.9519 3.33771 17.9998 3.09671 17.9998 2.85333C17.9998 2.60994 17.9519 2.36895 17.8588 2.14409C17.7656 1.91923 17.6291 1.71492 17.457 1.54283C17.2849 1.37073 17.0806 1.23421 16.8557 1.14108C16.6309 1.04794 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04794 15.4373 1.14108C15.2124 1.23421 15.0081 1.37073 14.836 1.54283V1.54283Z"
            stroke="#492801"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 13V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H6"
            stroke="#492801"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- <div
        v-if="userType == 1 && !Ssession"
        class="link delete-icon"
        @click="$emit('delete', item.user.name, item.id)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </div> -->
    </div>
  </v-card>
</template>

<script>
import avatarVue from "./avatar.vue";
import axios from "axios";
export default {
  name: "tablerow-vue",

  props: ["item", "type", "Ssession"],

  components: {
    avatarVue,
  },
  data() {
    return {
      laptop: null,
      userType: sessionStorage.getItem("role"),
      class_id: sessionStorage.getItem("class_id"),
      itemStatus: null,
      user: this.userType == 1 ? "admin" : "tutor",
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.getStatus();
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < 1400) {
        this.laptop = true;
        return;
      } else {
        this.laptop = false;
      }
    },
    shift(id, status, classs) {
      if (this.Ssession) {
        this.$emit("shift", id, status, classs);
        this.getStatus();
      } else {
        this.$emit("shift", id, status);
      }
    },

    showProfile(item) {
      this.$emit("show-profile", item);
    },
    showForm(item, type) {
      this.$emit("show-form", item, true, type);
    },
    async getStatus() {
      this.userType == 1 ? (this.user = "admin") : (this.user = "tutor");
      if(this.class_id) 
       {
        const { data } = await axios.get(
        this.$hostname +
          "/api/" +
          this.user +
          "/sessionStatus/" +
          this.class_id +
          "/" +
          this.item.id
      );
      this.itemStatus = data.data?.status

       }
      
    },
  },
};
</script>

<style scoped>
.card {
  padding-top: 13px;
  padding-left: 5px;
  display: grid;
}

.student {
  grid-template-columns: 3fr 2fr 1.2fr 1.5fr 2fr;
}

.tutor {
  grid-template-columns: 3fr 2fr 1.5fr 4fr;
}

.main-content {
  height: 100%;
  gap: 22px;
}

.id {
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}

.name {
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
}

.date,
.grade,
.subject {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
}

.column-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
}

.link > span {
  color: #fe3f49;
  font-size: 16px;
  font-weight: bold;
}

.link > svg {
  height: 16px;
  width: 16px;
  margin-bottom: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 40px;
}

@media (max-width: 1400px) {
  .card {
    padding: 16px 20px;
  }

  .main-content {
    height: 100%;
    gap: 12px;
  }

  .id {
    font-size: 12px;
    line-height: 16px;
  }

  .name {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }

  .date,
  .grade,
  .subject {
    padding: 5px;
  }

  .column-text {
    font-size: 12px;
    line-height: 16px;
  }

  .actions {
    padding: 10px;
  }

  .link > span {
    font-size: 12px;
  }

  .link > svg {
    height: 12px;
    width: 12px;
  }

  .actions {
    gap: 20px;
  }
}
</style>
