<template>
    <div class="form__field">
        <label v-if="label" :for="id">
            <span v-html="label"></span>
            <span v-if="required">*</span>
        </label>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FormField',
    props: {
        id: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
