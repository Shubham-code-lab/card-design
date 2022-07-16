const app = Vue.createApp({
    data() {
        return {
            activeElement: null,
        }
    },
    methods: {
        containerHover(container) {
            this.$refs.firstContainer.style.width = this.$refs.secondContainer.style.width = this.$refs.thirdContainer.style.width = "26%";
            if (container === 'first')
                this.activeElement = this.$refs.firstContainer
            else if (container === 'second')
                this.activeElement = this.$refs.secondContainer
            else if (container === 'third')
                this.activeElement = this.$refs.thirdContainer
            this.activeElement.style.width = "32%";
            this.activeElement.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
            this.activeElement.style.borderRadius = "5%";
        },
        containerNormal() {
            this.$refs.firstContainer.style.width = this.$refs.secondContainer.style.width = this.$refs.thirdContainer.style.width = "28%";
            this.activeElement.style.boxShadow = null;
            this.activeElement.style.borderRadius = null;
            console.log(this.activeElement);
        }
    },
});

app.mount('#app');