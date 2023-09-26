<template>
    <div class="personal-form">
        <div class="personal-form__title">
            Персональные данные
        </div>
        <div class="personal-form__inputs">
            <Input :value="name" @update:value="updateName($event)" name="Имя"/>
            <Input :value="age" @update:value="updateAge($event)" name="Возраст"/>
        </div>
    </div>
</template>

<script setup>
import Input from "./UI/Input.vue";

const props = defineProps({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    }
})

const emit = defineEmits(['update:name', 'update:age']);

const updateName = (event) => {
    emit('update:name', event);
}

const updateAge = (event) => {
    emit('update:age', event);
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
