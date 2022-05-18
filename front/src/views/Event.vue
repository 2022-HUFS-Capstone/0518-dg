<template>
    <v-container>
		<v-row justify="space-between">
			<v-col cols="auto">
				<v-tabs
					v-model="tab"
					background-color="transparent"
					color="basil"
				>
					<v-tab
						v-for="item in items"
						:key="item"
					>
						{{ item }}
					</v-tab>
				</v-tabs>
				
			</v-col>
			<v-col cols="auto">
				<v-btn icon color="primary" x-large>
					<v-icon>mdi-refresh</v-icon>
				</v-btn>
			</v-col>
		</v-row>
		<v-tabs-items v-model="tab">
			<v-tab-item
				v-for="item in items"
				:key="item"
			>
				<v-card
				color="basil"
				flat
				>
				<!-- <v-card-text>{{ text }}</v-card-text> -->
					<v-container v-if="item === 'Fault Event'">
						<div> ### 여기 그래프 넣어야함 ###</div>
					</v-container> 
					<v-container class="mt-3">
						<v-data-table
							:headers="headers"
							:items="dates"
							:items-per-page="10"
							class="elevation-1"
						></v-data-table>
					</v-container>
				</v-card>
			</v-tab-item>
		</v-tabs-items>

		


		<!-- 아래 코드 동작 안함 -->
		<v-container fluid>
			<router-view></router-view>
		</v-container>

      <!-- <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Date</th>
              <th class="text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->
    </v-container>
    
</template>

<script>
import http from "../axios";

export default {
  name: 'Home',
  data() {
    return{
		tab: null,
		items: [
			'System Event', 'Fault Event'
		],
		year: null,
		month: null,
		day: null,
		hour: null,
		min: null,
		sec: null,

      objects : [],
      dates: [],
      headers: [
		{ text: "Name", align: "start",value: "name", sortable: false },
	   { text: "Date", value: "date", sortable: false },
	   { text: "Note", value: "note", sortable: false },
      ],
    };
  },
  created() {
     this.fetchData(); 
  },
  methods: {
    fetchData: function() {
      const datum = this;
      http.get("/event")
        .then(function(res) {
          //console.log(res.data);
		  const start = res.data[0].value;

          datum.dates = start.map(datum.getDate);
		  for(var i = 1;i <= Object.keys(datum.dates).length;i++){
			datum.dates[i-1].name = "System Event #" + i;
		}
		  console.log(datum.dates);
		  //console.log(typeof(datum.dates));
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getDate(time) {
		//const datum = this;
		var date1 = new Date(time.year, time.month,time.day,time.hour,time.min,time.sec);
		//console.log(date1);
		var date2 = this.$moment(date1).format("YY-MM-DD hh:mm:ss");
      return {
        name: time.name,
		year : time.year,
		month : time.month,
		day : time.day,
		hour : time.hour,
		min : time.min,
		sec : time.sec,
		date : date2,
		note : "N/A",
      };
    },
  }
}
</script>

<style>

</style>