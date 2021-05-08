<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="menuToggleMobile"
      >
        <b-icon :icon="menuToggleMobileIcon" />
      </a>
      <div class="navbar-item has-control no-left-space-touch">
        <div class="control">
          <input
            @keyup="search(word)"
            @keyup.delete="search(word)"
            v-model="word"
            class="input"
            placeholder="Busca un pokemon..."
          />
        </div>
      </div>
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuNavBarToggle"
      >
        <b-icon :icon="menuNavBarToggleIcon" custom-size="default" />
      </a>
    </div>
    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuNavBarActive }"
    >
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "NavBar",
  components: {
  
  },
  data() {
    return {
      isMenuNavBarActive: false,
      word: "",
    };
  },
  computed: {
    menuNavBarToggleIcon() {
      return this.isMenuNavBarActive ? "close" : "dots-vertical";
    },
    menuToggleMobileIcon() {
      return this.isAsideMobileExpanded ? "backburger" : "forwardburger";
    },
    ...mapState(["isNavBarVisible", "isAsideMobileExpanded", "userName"]),
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isMenuNavBarActive = false;
    });
  },
  methods: {
    menuToggleMobile() {
      this.$store.commit("asideMobileStateToggle");
    },
    menuNavBarToggle() {
      this.isMenuNavBarActive = !this.isMenuNavBarActive;
    },
    logout() {
      this.$buefy.snackbar.open({
        message: "Log out clicked",
        queue: false,
      });
    },
    search(word) {
      if (this.$route.params.id) {
        this.$router.push({ name: "home" });
      }
      if (word.length > 0) {
        this.$store.commit("setHasUserSearched", true);
        this.$store.commit("setPokemonSearched", word);
      } else {
        this.$store.commit("setHasUserSearched", false);
        this.$store.commit("setPokemonSearched", "");
      }
    },
  },
};
</script>
