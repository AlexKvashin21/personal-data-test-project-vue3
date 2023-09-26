<template>
    <div class="input">
        <div class="input__name">{{name}}</div>
        <input
            :value="value"
            @input="updateValue"
            placeholder="..."
            type="text"
        >
    </div>

</template>

<script setup>
const props = defineProps({
    value: {
        required: true
    },
    name: String,
});

const emit = defineEmits(['update:value']);

const updateValue = (event) => {
    emit('update:value', event.target.value);
}

</script>

<style scoped lang="scss">

.input {
    border: 1px solid rgba(241, 241, 241, 1);
    padding: 8px 16px;
    border-radius: 4px;

    &__name {
        color: rgba(17, 17, 17, 0.48);
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
    }

    > input {
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        width: 100%;
    }
}


</style>
