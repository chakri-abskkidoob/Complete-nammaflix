<template>
    <div id="hello">
        <div></div>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    name: 'LogOut',
    props: {
        msg: String,
    },
    data() {
        return {
            form: {
                userName: ''
            },
            show: true,
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            axios.put(`http://localhost:8089/logout/${this.form.userName}`)
                .then(res => {
                    this.message = res.data.message
                    alert(this.message)
                })
                .catch(error => {
                    alert(error)
                })
        }
    }

}
</script>

<style>
#hello {
    width: 50%;
    margin: auto;
}

#form {
    width: 50%;
    height: 400px;
    margin: auto;
}

#submit {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
</style>