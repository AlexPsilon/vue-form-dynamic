<template>
    <FormField v-bind="{id, label, required}" >
        <input class="form__input"
            v-bind="{id, type, required}"
            v-model="value"
        />
    </FormField>
</template>

<script>
import rndm from 'rndm';
import FormField from './FormField';

export default {
    name: 'FormInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            default: null,
        },
        defaultValue: {
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
        onChange: {
            type: Function,
            default: Function.proptotype,
        },
        validator: {
            type: Function,
            default: null,
        },
    },
    data() {
        return {
            id: rndm(7).toLowerCase(),
            value: this.defaultValue,
        };
    },
    watch: {
        value(value) {
            if (typeof this.validator === 'function' && !this.validator(value)) {
                return;
            }

            this.onChange(value);
        },
    },
    components: {
        FormField,
    },
};
</script>
