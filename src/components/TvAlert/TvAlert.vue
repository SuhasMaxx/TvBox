<template>
    <div v-if="currentMsg" v-bind:class="classObject">
        {{currentMsg}}
        <div @click="closeAlert" class="close">✖</div>
    </div>
</template>
<style scoped>
    .container{
        padding: 1em;
        padding-right: 3em;
        color: white;
        border-radius: 0.25rem;
        border: 1px solid var(--ruby-red);
        position: relative;
    }

    .close{
        position: absolute;
        right: 0;
        top: 0;
        padding: 1em;
        cursor: pointer;
    }
    .close:hover{
        font-weight: bold;
    }

    .error{
        background-color: var(--imperial-red);
    }

    .success{
        background-color: #cfe2ff;
    }

    .notify{
        background-color: #cff4fc;
    }
</style>
<script>
export default {
    setup() {
        
    },
    props: {
        type: {
            type: String,
            default: 'error'
        },
        msg : {
            type: String,
            default: ''
        },
        showClose: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            currentMsg: ''
        }
    },
    watch: {
        // whenever question changes, this function will run
        msg: function (newMsg) {
        this.currentMsg = newMsg;
        }
    },
    methods: {
        closeAlert(){
            this.currentMsg = "";
        }
    },
    computed: {
        classObject: function () {
            return {
                error: this.type === "error",
                success: this.type === "success",
                notify: this.type === "notify=ication",
                container: true
            }
        },
    }
}
</script>