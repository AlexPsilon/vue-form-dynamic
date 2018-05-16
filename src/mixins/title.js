export default {
    props: {
        content: {
            type: String,
            default: null,
        },
        className: {
            type: String,
            default: null,
        },
    },
    methods: {
        getClassName(defaultClassName) {
            return {
                [defaultClassName]: true,
                [this.className]: !!this.className,
            };
        },
    },
};
