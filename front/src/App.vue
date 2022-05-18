<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-5 font-weight-black">Load Model</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon class="px-2" large >mdi-upload</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon class="px-2" large>mdi-history</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            데이터 이름 표기
          </v-list-item-title>
          <!-- <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to = "item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer : false,
    items: [
      { title: 'INFO', icon: 'mdi-view-dashboard', to:'/'},
      { title: 'RELAY', icon: 'mdi-image', to:"/relay" },
      { title: 'ALARM', icon: 'mdi-help-box' },
      { title: 'SETTING', icon: 'mdi-help-box', to:'/test' },
      { title: 'EVENT', icon: 'mdi-help-box', to: 'event'},
      { title: 'MEASURE', icon: 'mdi-help-box', to: '/login'},
      { title: 'Main', icon: 'mdi-help-box', to :'/main'},
    ],
    template: '<input type="file">',
    methods: {
		choiceFile() {
      return this.template 
		}
	},
    right: null,
  }),
};
</script>
