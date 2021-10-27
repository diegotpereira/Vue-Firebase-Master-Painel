<template>
  <b-row>
    <b-col cols="12">
      <h2>Painel Editar
        <router-link :to="{ name: 'PainelExibir', params: { id: key }}">(Painel Exibir)</router-link>
      </h2>

      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="titleGroup" horizontal :label-cols="4" breakpoint="md" label="Digite o titulo">
            <b-form-input id="title" v-model.trim="board.title"></b-form-input>
          </b-form-group>

          <b-form-group id="descGroup" horizontal :label-cols="4" breakpoint="md" label="Digite uma descrição">
            <b-form-textarea id="description" v-model="board.description" placeholder="Digite algo" :rows="2" :max-rows="6">{{board.description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="authorGroup" horizontal :label-cols="4" breakpoint="md" label="Digite o autor">
            <b-form-input id="author" v-model.trim="board.author"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Atualizar</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../firebase'
import router from '../router'

export default {
  name: 'PainelEditar',
  data() {
    return {
      key: this.$route.params.id,
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.board = doc.data();
      } else {
        alert("Esse documento não existe!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      
      const updateRef = firebase.firestore().collection('boards').doc(this.$route.params.id);
      
      updateRef.set(this.board).then(() => {
        this.key = ''
        this.board.title = ''
        this.board.description = ''
        this.board.author =''
        router.push({
          name: 'PainelExibir', params: {id: this.$route.params.id}
        })
      })
      .catch((error) => {
        alert("Erro ao editar documento: ", error)
      })
    }
  }
}
</script>

<style>

  .jumbotron {
    padding: 2rem;
  }

</style>