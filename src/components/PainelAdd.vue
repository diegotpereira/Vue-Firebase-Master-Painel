<template>
  <b-row>
    <b-col cols="12">
      <h2>Painel Adicionar
        <b-link href="#/">Painel Lista</b-link>
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
          <b-button type="submit" variant="primary">Salvar</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../firebase'
import router from '../router'

export default {
  name: 'PainelAdd',
  data() {
    return {
      ref: firebase.firestore().collection('boards'),
      board: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      
      this.ref.add(this.board).then(() => {
        this.board.title = ''
        this.board.description = ''
        this.board.author =''
        router.push({
          name: 'PainelLista'
        })
      })
      .catch((error) => {
        alert("Erro ao adicionar documento: ", error)
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