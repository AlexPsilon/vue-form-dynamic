<template>
    <form v-if="isShow"
        class="form"
        v-bind="{action, method}"
    >
        <component v-for="(data, component) in schema"
            :key="component"
            :is="`vue-${component}`"
            v-bind="data"
        ></component>
    </form>
</template>

<script>
import FormTitle from './components/FormTitle';
import FormSubTitle from './components/FormSubTitle';

export default {
    name: 'VueForm',
    props: {
        action: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            default: 'POST',
        },
        schema: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        isShow() {
            return Object.keys(this.schema).length > 0;
        },
    },
    components: {
        [`vue-title`]: FormTitle,
        [`vue-subTitle`]: FormSubTitle,
    },
};
</script>
