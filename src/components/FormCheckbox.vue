<template>
    <FormField class="form__field_checkbox"
        v-bind="{id, label, required}"
    >
        <input
            class="form__checkbox"
            v-bind="{value, id}"
            type="checkbox"
            v-model="checked"
        />
    </FormField>
</template>

<script>
import rndm from 'rndm';
import FormField from './FormField';

export default {
    name: 'FormCheckbox',
    props: {
        type: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
        defaultChecked: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function,
            default: Function.proptotype,
        },
    },
    data() {
        return {
            id: rndm(7).toLowerCase(),
            checked: this.defaultChecked,
        };
    },
    watch: {
        checked(value) {
            this.onChange(value);
        },
    },
    components: {
        FormField,
    },
};
</script>
