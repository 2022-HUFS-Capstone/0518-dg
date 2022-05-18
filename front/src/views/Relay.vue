<template>
  <v-container>
    <v-card flat max-height="80px" >
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-title>
            <div class="text-decoration-underline">RELAY</div>
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
          <v-card-title >Long time Protection</v-card-title>
        </v-col>
      </v-row>
    </v-card>

    <v-row >
      <v-col
        v-for="count in 2" 
        :key="count"
        cols="12"
        sm="6"
        class="mt-3"
      >
        <v-card color="#f5f5f5" max-width="500px" min-height="150px" class="ml-5 ">
          <v-conatiner>
            <v-row justify="space-between" class="pt-3">
              <v-col cols="auto" >
                <div class="text-h6 pl-5">Product Name</div>
              </v-col>
              <v-col cols="auto">
                <v-btn icon class="mr-5">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pt-3">
              <v-col>
                <v-card color="#f5f5f5" flat  class=" d-flex flex-row-reverse text-h5 pr-15" >
                  MCCB
                </v-card>
              </v-col>
            </v-row>
          </v-conatiner>
        </v-card>
      </v-col>
    </v-row>


    <v-card flat class="mt-2">
      <v-row>
        <v-col>
          <v-card-title >Short time Protection</v-card-title>
        </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col
        v-for="count in 3" 
        :key="count"
        cols="12"
        sm="6"
        class="mt-3"
      >
        <v-card color="#f5f5f5" max-width="500px" min-height="150px" class="ml-5 ">
          <v-conatiner>
            <v-row justify="space-between" class="pt-3">
              <v-col cols="auto" >
                <div class="text-h6 pl-5">Product Name</div>
              </v-col>
              <v-col cols="auto">
                <v-btn icon class="mr-5">
                  <v-icon >mdi-dots-vertical</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row class="pt-3">
              <v-col>
                <v-card flat color="#f5f5f5" class=" d-flex flex-row-reverse text-h5 pr-15" >
                  MCCB
                </v-card>
              </v-col>
            </v-row>
          </v-conatiner>
        </v-card>
      </v-col>
    </v-row>

    <v-card flat class="mt-2">
      <v-row>
        <v-col>
          <v-card-title >Short time Protection</v-card-title>
        </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col
        v-for="count in 3" 
        :key="count"
        cols="12"
        sm="6"
        class="mt-3"
      >
        <v-card color="#f5f5f5" max-width="500px" min-height="150px" class="ml-5 ">
          <v-conatiner>
            <v-row justify="space-between" class="pt-3">
              <v-col cols="auto" >
                <div class="text-h6 pl-5">Product Name</div>
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
                  MCCB
                </v-card>
              </v-col>
            </v-row>
          </v-conatiner>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data: ()=>({
    })
  }
</script>
