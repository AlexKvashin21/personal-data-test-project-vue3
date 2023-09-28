<template>
    <Layout>
        <div class="preview" v-if="children && personalData">
            <div class="preview__personal">
                <div class="preview__title">
                    Персональные данные
                </div>
                <div class="preview__personal-text">
                    {{personalData.name}}, {{personalData.age}} лет
                </div>
            </div>
            <div class="preview__children" v-if="children.length">
                <div class="preview__title">
                    Дети
                </div>
                <div class="preview__children-items">
                    <div class="preview__children-item" v-for="child in children">
                        {{child.name}}, {{child.age}} лет
                    </div>
                </div>
            </div>
        </div>
        <div v-else style="margin-top: 30px; text-align: center">Данные не найдены!</div>
    </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import {computed, ref} from "vue";
import {useStore} from "vuex";

const store = useStore()
const personalData = computed(() => store.state.personalData)
const children = computed(() => store.state.childrenData)

if (localStorage.getItem('personal_data') && localStorage.getItem('children_data')) {
    store.dispatch('getPersonalData')
}

</script>

<style scoped lang="scss">

.preview {
    margin-top: 30px;

    &__title {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;

    }

    &__personal {

    }

    &__personal-text {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }

    &__children {
        margin-top: 60px;
    }

    &__children-items {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__children-item {
        background-color: rgba(241, 241, 241, 1);
        border-radius: 5px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding: 10px 20px;
        width: max-content;
    }
}

</style>
