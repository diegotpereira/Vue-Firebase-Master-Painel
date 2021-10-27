<template>
  <b-row>
    <b-col cols="12">
      <h2>Painel Editar
        <b-link href="#/">(Painel Lista)</b-link>
      </h2>
      <b-jumbotron>
        <template v-slot:header>
          {{board.title}}
        </template>
        <template v-slot:lead>
          Título: {{board.title}}<br>
          Descrição: {{board.description}}<br>
          Autor: {{board.author}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Editar</b-btn>
        <b-btn variant="danger" @click.stop="deleteboard(key)">Deletar</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../firebase'
import router from '../router'

export default {
  name: 'PainelExibir',
  data() {
    return {
      key: '',
      board: {}
    }
  },

  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("Esse documento não existe!");
      }
    });
  },
  methods: {
    editboard(id) {
      router.push({
        name: 'PainelEditar',
        params: { id:id }
      })
    },

    deleteboard(id) {
      firebase.firestore().collection('boards').doc(id).delete().then(() => {
        router.push({
          name: 'PainelLista'
        })
      })
      .catch((error) => {
        alert("Erro ao remover documento:", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>