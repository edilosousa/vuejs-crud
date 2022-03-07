<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">MEDICINE</router-link>
      <img src="../public/favicon.png"/>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Médicos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pacientes" class="nav-link">Pacientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agendas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Consultas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Planos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Especialidades</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Salas</router-link>
        </li>
      </div>
    </nav>
        <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

