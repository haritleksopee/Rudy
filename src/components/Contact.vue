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
        <button type="button" class="btn btn-secondary" @click="persist">submit</button>
      </div>

      
<!-- 
      <div v-for="name in cats">
          {{ name }}
      </div> -->

      <table class="table table-striped">
          <thead>
              <tr>
                  <th class="text-center">ชื่อ</th>
                  <th class="text-center">อีเมล</th>
                  <th class="text-center">รายละเอียด</th>
              </tr>
          </thead>
          <tbody>
              <tr >
                  <td class="text-center">{{ cats }}</td>
                  <td class="text-center">{{ eamils }}</td>
                  <td class="text-center">{{ details }}</td>
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
      email: '',
      detail: '',
      cats:'',
      eamils:'',
      details:''
    }
  },
  mounted() {
    
    // if(localStorage.name) this.name = localStorage.name;
    // if(localStorage.email) this.age = localStorage.email;
    // if(localStorage.detail) this.age = localStorage.detail;
  },
  methods: {
    persist() {
      console.log('5555+');
      let mail = JSON.stringify(this.email);
      let parsed = JSON.stringify(this.name);
      let dt = JSON.stringify(this.detail);
      localStorage.setItem('cats', parsed);
      localStorage.setItem('eamils', mail);
      localStorage.setItem('details', dt);





      if(localStorage.getItem('cats')) {
        try {
          this.cats = JSON.parse(localStorage.getItem('cats'));
        } catch(e) {
          localStorage.removeItem('cats');
        }
      }

      if(localStorage.getItem('eamils')) {
        try {
          this.eamils = JSON.parse(localStorage.getItem('eamils'));          
        } catch(e) {
          localStorage.removeItem('eamils');
        }
      }

      if(localStorage.getItem('details')) {
        try {
          this.details = JSON.parse(localStorage.getItem('details'));          
        } catch(e) {
          localStorage.removeItem('details');
        }
      }
    }
  },
}
</script>