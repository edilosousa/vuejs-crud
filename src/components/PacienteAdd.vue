<template>
  <div class="pl-4 pr-4 mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/add">Home</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link to="/pacientes">Pacientes</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">Cadastrar</li>
      </ol>
    </nav>
  </div>
  <div class="col-sm-12">
    <div class="card" style="width: 100%">
      <div class="card-header">
        <h5 class="card-title">Cadastrar Paciente</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="row">
            <div class="col-sm-12">
              <label for="exampleFormControlInput1">Nome</label>
              <input
                type="text"
                class="form-control"
                v-model="paciente.nome"
                id="nome"
              />
            </div>
            <div class="col-sm-6">
              <label for="exampleFormControlSelect1">Plano</label>
              <select class="form-control" v-model="paciente.plano">
                <option value="1">SAMEL</option>
              </select>
            </div>
            <div class="col-sm-6">
              <label for="exampleFormControlSelect1">Telefone</label>
              <input
                type="text"
                class="form-control"
                v-model="paciente.telefone"
                id="telefone"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" @click="savePacientes">Salvar</button>
        <div class="alert float-right" 
          v-bind:class="{ 
            'd-none': isActive,
            'alert-primary': isSuccess,
            'alert-danger': isDanger 
          }" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "pacientes-add",
  data() {
    return {
      paciente: {
        nome: "",
        telefone: "",
        plano: "",
      },
      message: "",
      isActive: true,
      isSuccess: false,
      isDanger: false
    };
  },
  methods: {
    savePacientes() {
      var dados = {
        nome: this.paciente.nome,
        plano: this.paciente.plano,
        telefone: this.paciente.telefone,
      };
      UserDataService.create(dados)
        .then((response) => {
          console.log(response.data.message);
          this.isActive = false,
          this.isSuccess = true,
          this.isDanger = false,
          this.message = "The paciente create successfully!";
          setTimeout(()=>{
            this.isActive = true
            this.isSuccess = false
          },2000)
        })
        .catch(() => {
          this.isActive = false,
          this.isDanger = true,
          this.isSuccess = false,
          this.message = "Campos obrigatórios a serem preenchidos!";
          setTimeout(()=>{
            this.isActive = true
            this.isDanger = false
          },2000)
        });
    },
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
