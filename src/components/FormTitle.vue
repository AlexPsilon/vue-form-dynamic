<script>
import mixinTitle from '../mixins/title';

export default {
    name: 'FormTitle',
    mixins: [mixinTitle],
    props: {
        tag: {
            type: String,
            default: 'h2',
        },
    },
};
</script>

<template>
    <component v-if="content"
        :is="tag"
        :class="getClassName('form__title')"
        v-html="content"
    ></component>
</template>

