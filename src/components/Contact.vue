<template>
    <div class="col-md-6 col-sm-10 mx-auto mb-5">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="ชื่อ" v-model="name">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="อีเมล" v-model="email">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="รายละเอียด" v-model="detail" rows="5"></textarea>
      </div>
      <div class="form-group text-center">    
        <button type="button" class="btn btn-secondary" @click="persist">Secondary</button>
      </div>



      <table class="table table-striped">
          <thead>
              <tr>
                  <th class="text-center">ชื่อ</th>
                  <th class="text-center">อีเมล</th>
                  <th class="text-center">รายละเอียด</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(cat,n) in 1">
                  <td class="text-center">{{ cats }}</td>
                  <td class="text-center">{{ email }}</td>
                  <td class="text-center">john@example.com</td>
              </tr>
          </tbody>
      </table>

    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      name:'',
      email: [],
      detail: '',
      cats:[]
    }
  },
  mounted() {
    
    // if(localStorage.name) this.name = localStorage.name;
    // if(localStorage.email) this.age = localStorage.email;
    // if(localStorage.detail) this.age = localStorage.detail;
  },
  methods: {
    persist() {
      localStorage.name = this.name;
      // localStorage.email = this.email;
      localStorage.detail = this.detail;
      console.log('5555+');
      let parsed = JSON.stringify(this.name);
      localStorage.setItem('cats', parsed);

      if(localStorage.getItem('cats')) {
        try {
          this.cats = JSON.parse(localStorage.getItem('cats'));
        } catch(e) {
          localStorage.removeItem('cats');
        }
      }

      if(localStorage.getItem('email')) {
        try {
          this.email = JSON.parse(localStorage.getItem('email'));          
        } catch(e) {
          localStorage.removeItem('email');
        }
      }


      
    }
  },
}
</script>