<template>
  <div style="text-align: right;">
    <!-- navigation  drawer for mobile -->
    <v-navigation-drawer class="white darken-1" temporary v-model="drawer" light overflow>
      <v-list class="pa-0">

        <v-list-tile avatar v-show="isAuthenticated">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{user.fullname}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="drawer = !drawer">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action v-show="isAuthenticated">
            <v-btn error class="white--text" @click.stop="logout()">
              Logout
            </v-btn>
          </v-list-tile-action>

          <v-spacer></v-spacer>
          <v-list-tile-action v-show="!isAuthenticated">
            <v-btn primary class="white--text" to="login">
              Login
            </v-btn>
          </v-list-tile-action>

          <v-spacer></v-spacer>

          <v-list-tile-action v-show="!isAuthenticated">
            <v-btn error class="white--text" to="register">
              Register
            </v-btn>
          </v-list-tile-action>
          <v-spacer></v-spacer>
        </v-list-tile>

      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile class="white--text" v-for="(item, i) in navs" :key="i" :to="item.to">
          <v-list-tile-content>
            <v-list-tile-title v-show="!item.isAuth">{{ item.name }}</v-list-tile-title>
            <v-list-tile-title v-show="item.isAuth === isAuthenticated">{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar :fixed="fixed" toolbar class="indigo darken-3">

      <v-toolbar-side-icon class="hidden-md-and-up" style="color: white;" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down  indigo darken-3" style="width: 100%">
        <v-btn class="white-text" style="color: white;" flat exact to="/">Home</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/services">Services</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/our-company">About</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/news">News</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/contact">contact</v-btn>

        <v-spacer></v-spacer>
        <v-btn class="white-text" style="color: white;" flat to="/register" v-show="!isAuthenticated">Register</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/login" v-show="!isAuthenticated">Login</v-btn>
        <v-btn class="white-text" style="color: white;" flat to="/investment" v-show="isAuthenticated">Investment: {{user.username}}</v-btn>
        <v-btn class="white-text" style="color: white;" flat @click.stop="logout()" v-show="isAuthenticated">Logout</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <a href="https://www.facebook.com">
        <i class="fa fa-facebook-square white--text fa-2x margin-left" aria-hidden="true"></i>
      </a>
      <a href="https://plus.google.com">
        <i class="fa fa-google-plus-square white--text fa-2x margin-left" aria-hidden="true"></i>
      </a>
      <a href="https://www.instagram.com">
        <i class="fa fa-instagram white--text fa-2x margin-left" aria-hidden="true"></i>
      </a>
      <a href="https://www.twitter.com">
        <i class="fa fa-twitter-square white--text fa-2x margin-left" aria-hidden="true"></i>
      </a>
    </v-toolbar>
    <v-btn primary to="/admin" v-show="user.isAdmin === 2" style="margin:0; margin-right: 10px; margin-top: 5px;">Goto Admin</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavigationDrawer from './NavigationDrawer'

export default {
  name: 'navigation',
  components: {
    NavigationDrawer
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      navs: [
        { name: 'Home', to: '/' },
        { name: 'Services', to: '/services' },
        { name: 'About', to: '/our-company' },
        { name: 'News', to: '/news' },
        { name: 'Contact', to: '/contact' },
        { name: 'Invesment', to: '/investment', isAuth: true },

      ]
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      user: 'user',
    }),
  },
  methods: {
    ...mapActions(['logout']),

    handleScroll() {
      if (window.scrollY < 164) {
        this.fixed = false
      } else
        this.fixed = true
    }

  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>

<style scoped>
.fix-nav {
  position: fixed;
  z-index: 100;
}

.nav {
  overflow: hidden;
  background-color: #00468C;
  transition: all 0.5s;
}

.menu-drawer {
  background-color: white;
}

.white-text {
  color: white;
}

.link {
  text-decoration: none;
}

.margin-left {
  margin-left: 5px;
}
</style>