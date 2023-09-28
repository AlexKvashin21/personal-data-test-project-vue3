<template>
    <Layout>
        <PersonalForm/>

        <ChildrenForm/>

        <button class="btn" @click="save">
            Сохранить
        </button>

    </Layout>
</template>

<script setup lang="ts">
import Layout from "../components/Layout.vue";
import PersonalForm from "../components/PersonalForm.vue";
import ChildrenForm from "../components/ChildrenForm.vue";
import {useStore} from "vuex";
import {onMounted} from "vue";

const store = useStore()

if (localStorage.getItem('personal_data') && localStorage.getItem('children_data')) {
    store.dispatch('getPersonalData')
}

function save() {
    store.dispatch('save')
}

</script>

<style scoped>

.btn {
    margin-top: 30px;

    @media screen and (max-width: 400px) {
        margin: 15px auto 0 auto;
    }
}

</style>
