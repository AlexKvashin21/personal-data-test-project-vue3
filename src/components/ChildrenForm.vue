<template>
    <div class="children-form">
        <div class="children-form__top">
            <div class="children-form__title">
                Дети (Макс 5)
            </div>
            <button class="btn-reverse" v-if="children.length < 5" @click="emit('add-child')">
                <span>&plus;</span>  Добавить ребенка
            </button>
        </div>
        <div class="children-form__inputs">
            <div v-for="(child) in localChildren" class="children-form__input-row">
                <Input :value="child.name" @update:value="child.name = $event" name="Имя" style="width: 100%"/>
                <Input :value="child.age" @update:value="child.age = $event" name="Возраст" style="width: 100%"/>
                <span class="children-form__input-delete" @click="emit('remove-child')">Удалить</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Input from "./UI/Input.vue";
import {ref, watch} from "vue";

const props = defineProps({
    children: {
        required: true,
        type: Array
    },
})

const emit = defineEmits(['update:children', 'add-child', 'remove-child']);

const localChildren = ref(props.children)

const updateChildren = (event) => {
    emit('update:children', event);
}

watch(localChildren.value, (newValue) => {
    updateChildren(newValue)
});

</script>

<style scoped lang="scss">

.children-form {
  margin-top: 30px;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        @media screen and (max-width: 400px) {
            flex-direction: column-reverse;
        }
    }

    &__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    &__inputs {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    &__input-row {
        display: flex;
        gap: 18px;
        align-items: center;

        @media screen and (max-width: 400px) {
            flex-direction: column;
            padding: 0 20px;
        }
    }

    &__input-delete {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        color: var(--primary-color);
        cursor: pointer;
    }
}


</style>
