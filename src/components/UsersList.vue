<template>
  <div class="list row">
    <div class="col-sm-12">
      <h4>Users List</h4>
      <table class="table table-hover">
        <thead>
          <th>NOME</th>
          <th>TELEFONE</th>
          <th>DATA CADASTRO</th>
        </thead>
        <tbody :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveTutorial(user, index)">
            <tr>
              <td>{{ user.PAC_NOME }}</td>
              <td>{{ user.PAC_TELEFONE }}</td>
              <td>{{ user.PAC_DATA_CAD }}</td>
            </tr>
        </tbody>
      </table>  
    </div>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>