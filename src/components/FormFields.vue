<template>
    <div class="form__group">
        <component v-for="(props, index) in properties"
            :is="`vue-${props.component}`"
            :key="index"
            v-bind="props"
        ></component>
    </div>
</template>

<script>
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';

export default {
    name: 'FormFields',
    props: {
        properties: {
            type: Array,
            required: true,
        },
    },
    components: {
        'vue-input': FormInput,
        'vue-checkbox': FormCheckbox,
    },
};
</script>
