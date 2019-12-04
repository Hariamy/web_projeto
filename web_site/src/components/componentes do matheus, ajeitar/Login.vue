<template>
    <div class="login">
        <div class="container-fluid ">
            <div class="externa vh-100 vw-100">
                <div class = "menuLogin float-md-right vh-100 col justify-content-center">
                    <img alt="Logo" src="../assets/logo.png">
                    <form>
                        <div class="form-group ">
                            <input type="email" 
                            class="form-control" 
                            id="InputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Email"
                            v-model="email">
                        </div>
                        <div class="form-group">
                            <input type="password" 
                            class="form-control" 
                            id="InputPassword1" 
                            placeholder="Senha"
                            v-model="senha">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <small class="form-text">
                            Ainda não possui cadastro?
                        </small>
                        <a href="">Criar conta</a><br>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style>
    body {
        margin: 0;
        padding:0;
    }
    .menuLogin{
        padding-top: 7%;
        background-color: rgba(255, 255, 255, 0.5);
        width: 20%;
        height: 100%;
    }
    .externa{
        background-image:url('~@/assets/back.jpg');
        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>