<template>
    <div>
        <h1>Name: {{myname}}</h1>
        <h1>how are u??</h1>
        <button @click="changeit">change name</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            myname : "kartik"
        }
    },
    methods: {
        changeit(){
            this.myname = "chirag";
        }
    }    
}
</script>