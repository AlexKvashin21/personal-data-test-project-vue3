<template>
    <Layout>
        <PersonalForm
            :age="personalData.age"
            :name="personalData.name"
            @update:age="personalData.age = $event"
            @update:name="personalData.name = $event"
        />

        <ChildrenForm
            :children="children"
            @update:children="children = $event"
            @add-child="addChild"
            @remove-child="removeChild"
        />

        <button class="btn" style="margin-top: 30px" @click="save">
            Сохранить
        </button>

    </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import PersonalForm from "../components/PersonalForm.vue";
import {ref} from "vue";
import ChildrenForm from "../components/ChildrenForm.vue";

const personalData = ref({name: '', age: ''})

const children = ref([
    {name: '', age: ''},
])

if (localStorage.getItem('personal_data') && localStorage.getItem('children_data')) {
    personalData.value = JSON.parse(localStorage.getItem('personal_data'))
    children.value = JSON.parse(localStorage.getItem('children_data'))
}

function addChild() {
    children.value.push({name: '', age: ''})
}
function removeChild() {
    children.value.pop()
}

function save() {
    if (validation()) {
        localStorage.setItem('personal_data', JSON.stringify(personalData.value))
        localStorage.setItem('children_data', JSON.stringify(children.value))

        window.alert('Данные успешно сохранены!')
    }
    else {
        window.alert('Данные не сохранены, проверьте ваши персональные данные')
    }
}

function validation() {
    if (parseInt(personalData.value.age) != personalData.value.age || !personalData.value.age.length || personalData.value.age.length > 2 || !personalData.value.name.length) {
        return false
    }
    for (let child of children.value) {
        if (!child.name.length || !child.age.length || child.age.length > 2 || parseInt(child.age) != child.age) {
            return false
        }
    }
    return true
}


</script>

<style scoped>

.btn {
    @media screen and (max-width: 400px) {
        margin: 0 auto;
    }
}

</style>
