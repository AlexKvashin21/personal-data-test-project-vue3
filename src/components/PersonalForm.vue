<template>
    <div class="personal-form">
        <div class="personal-form__title">
            Персональные данные
        </div>
        <div class="personal-form__inputs">
            <Input :value="personalData.name" @update:value="updateName" name="Имя"/>
            <Input :value="personalData.age" @update:value="updateAge" name="Возраст" type="number"/>
        </div>
    </div>
</template>

<script setup>
import Input from "./UI/Input.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const personalData = computed(() => store.state.personalData)

function updateName(name) {
    store.commit('changePersonalName', name)
}

function updateAge(age) {
    store.commit('changePersonalAge', age)
}

</script>

<style scoped lang="scss">

.personal-form {
  margin-top: 30px;

    &__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    &__inputs {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 10px;
    }
}


</style>
