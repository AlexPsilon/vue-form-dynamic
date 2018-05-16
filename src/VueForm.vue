<template>
    <form v-bind="{id, method, action}" @submit.prevent="handlerSubmit">
        <component v-for="(props, key) in schema" :key="key" :is="key" :properties="props"></component>
        <div class="form__group">
            <button class="form__submit" type="submit">Отправить</button>
        </div>
    </form>
</template>

<script>
import FormFields from './components/FormFields';

export default {
    name: 'VueForm',
    props: {
        id: {
            type: String,
            default: null,
        },
        method: {
            type: String,
            default: 'GET',
        },
        action: {
            type: String,
            required: true,
        },
        schema: {
            type: Object,
            default: () => ({}),
        },
        submitEnable: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        handlerSubmit(event) {
            if (this.submitEnable) {
                this.$emit('submit');
            }
        },
    },
    components: {
        fields: FormFields,
    },
};
</script>
