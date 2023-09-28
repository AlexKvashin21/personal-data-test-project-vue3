<template>
    <div class="children-form">
        <div class="children-form__top">
            <div class="children-form__title" v-if="children.length">
                Дети (Макс 5)
            </div>
            <button class="btn-reverse" v-if="children.length < 5" @click="addChild">
                <span>&plus;</span>  Добавить ребенка
            </button>
        </div>
        <div class="children-form__inputs" v-if="children.length">
            <div v-for="(child, index) in children" :key="child.id" class="children-form__input-row">
                <Input :value="child.name" @update:value="updateName($event, index)" name="Имя" style="width: 100%"/>
                <Input :value="child.age" @update:value="updateAge($event, index)" name="Возраст" type="number" style="width: 100%"/>
                <span class="children-form__input-delete" @click="deleteChild(child.id)">Удалить</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from "./UI/Input.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()


const children = computed(() => store.state.childrenData)

function updateName(name, index) {
    store.commit('changeChildName', {name: name, index: index})
}

function updateAge(age, index) {
    store.commit('changeChildAge', {age: age, index: index})
}

function deleteChild(id) {
    store.commit('removeChild', id)
}

function addChild() {
    store.commit('addChild')
}

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
