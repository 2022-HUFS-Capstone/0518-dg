<template>
  <v-container>
    <v-card flat max-height="80px" >
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-title>
            <div class="text-decoration-underline"> {{menu}} </div>
          </v-card-title>
        </v-col>
        <v-col cols="auto">
          <v-btn icon color="primary" x-large>
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card flat>
      <v-row>
        <v-col>
          <v-card-title > {{subMenu}}</v-card-title>
        </v-col>
      </v-row>
    </v-card>
    <hr>
    <!--<div id="app">
      <li v-for="(item,index) in tutorials" :key="index">{{ item.name_EN}} {{ item.value }}</li>
    </div> !-->
    <v-row>
      <v-col
        v-for="(item,index) in tutorials" 
        :key="index"
        cols="12"
        sm="6"
        class="mt-3"
      >
        <v-card color="#f5f5f5" max-width="500px" min-height="150px" class="ml-5 ">
          <v-container>
            <v-row justify="space-between" class="pt-3">
              <v-col cols="auto" >
                <div class="text-h6 pl-5">
                  {{ item.name_EN}}
                </div>
                <!--<v-data-table
                  :headers="headers"
                  :items="tutorials"
                  disable-pagination
                  :hide-default-footer="true"
                >
                </v-data-table>!-->
              </v-col>
              <v-col cols="auto">
                <v-btn icon class="mr-5">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pt-3">
              <v-col>
                <v-card flat color="#f5f5f5" class=" d-flex flex-row-reverse text-h5 pr-15" >
                  {{ item.value}}
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from "../axios";
  export default {
    name: 'Home',
    data() {
      return{
        menu: null,
        subMenu : null,
        name_EN: null,
        value: null,

        objects : [],
        tutorials: [],
        headers: [
         { text: "menu", align: "start", sortable: false, value: "menu" },
         { text: "submenu", value: "subMenu", sortable: false },
         { text: "itemname", value: "itemname", sortable: false },
         { text: "name_kr", value: "name_KR", sortable: false },
         { text: "name_en", value: "name_EN", sortable: false },
         { text: "value", value: "value", sortable: false },
         { text: "unit", value: "unit", sortable: false },
        ],
        juiceArray: [
          {name: '커피', price:1500},
          {name: '콜라', price:1000},
          {name: '사이다', price:1200},
          {name: '환타', price:1100}
        ]
      };
    },
    /*created : function(){
      const self = this;
      axios.get('https://localhost:3000/api/info').then(response =>{
        console.log(response.data, this);
      })
    },*/
    created() {
       this.fetchData(); 
    },
    methods: {
      fetchData: function() {
        const datum = this;
        http.get("/info"+ this.$route.query.id)
          .then(function(res) {
            //console.log(res.data);
            datum.menu = res.data[0].menu;
            datum.subMenu = res.data[0].subMenu;
            //datum.name_EN = res.data[0].name_EN;
            //datum.value = res.data[0].value;

            const datt= res.data;
            datum.tutorials = res.data.map(datum.getDisplayTutorial);
            Object.keys(datt).map(key =>{
              console.log(datt[key]);
              datum.objects = datum.objects + datt[key];
            })
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      getDisplayTutorial(tutorial) {
        return {
          //id: tutorial.id,
          menu: tutorial.menu,
          subMenu: tutorial.subMenu,
          itemname: tutorial.itemname,
          name_KR : tutorial.name_KR,
          name_EN : tutorial.name_EN,
          value : tutorial.value,
          unit : tutorial.unit,
        };
      },
      /*toDetail(contentId){
            this.$router.push({
                name: "boardDetail",
                query: {id : contentId}
            });
        },*/
    }
  }
  
</script>
