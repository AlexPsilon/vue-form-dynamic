<script>
import mixinTitle from '../mixins/title';

export default {
    name: 'FormSubTitle',
    mixins: [mixinTitle],
    props: {
        tag: {
            type: String,
            default: 'p',
        },
    },
};
</script>

<template>
    <component v-if="content"
        :is="tag"
        :class="getClassName('form__sub-title')"
        v-html="content"
    ></component>
</template>

