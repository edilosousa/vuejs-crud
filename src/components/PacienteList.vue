<template>
  <div class="pl-4 pr-4 mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/add">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Pacientes
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link to="/pacientes-add"> Cadastrar </router-link>
        </li>
      </ol>
    </nav>
    <h4>Pacientes</h4>
    <table class="table table-hover">
      <thead>
        <th>NOME</th>
        <th>TELEFONE</th>
        <th>DATA CADASTRO</th>
      </thead>
      <tbody
        :class="{ active: index == currentIndex }"
        v-for="(user, index) in users"
        :key="index"
        @click="setActiveTutorial(user, index)"
      >
        <tr>
          <td>{{ user.PAC_NOME }}</td>
          <td>{{ user.PAC_TELEFONE }}</td>
          <td>{{ user.PAC_DATA_CAD }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "pacientes-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
