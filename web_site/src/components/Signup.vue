<template>
    <div class="container-fluid">
        <div class="externa vh-100 vw-100">
            <div class="box col-4 justify-content-center">
                <label>Formulário de Cadastro</label>
                <form>
                    <div class="form-group image-upload">
                        <label for="file-input">
                            <img :src="require(`@/assets/${imagem}`)" alt="Foto de Perfil"/>
                        </label>

                        <input id="file-input" 
                        type="file" 
                        accept="image/*" 
                        name="foto"/>
                    </div>
                    <div class="form-group col-7">
                        <input type="email" 
                        class="form-control" 
                        id="InputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="E-mail"
                        nome="email">
                    </div>
                    <div class="form-group col-7">
                        <input type="text" 
                        class="form-control" 
                        id="InputNome" 
                        placeholder="Nome"
                        name="nome">
                    </div>
                    <div class="form-group col-7">
                        <input type="password" 
                        class="form-control" 
                        id="InputPassword" 
                        placeholder="Senha"
                        name="senha">
                    </div>
                    <div class="form-group col-7">
                        <input type="password" 
                        class="form-control" 
                        id="confirmaPassword" 
                        placeholder="Confirmar senha"
                        name="confirmacao">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Criar Conta</button>
                </form>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Signup',
    props:{
        imagem:String,
    }
}
</script>

<style>
    *{
        margin: 0;
        padding:0;
    }
    body, html {
        width: 100%;
        height: 100%;
    }
    .externa{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-image:url('~@/assets/backSignup.jpg');
        /* Center and scale the image nicely */
        background-repeat: no-repeat;
        background-size: cover;
    }
    .box{
        margin: 2% auto;
        position: relative;
        padding-bottom: 1%;
        padding-top: 1%;
        height: 90%;
        background-color: rgba(255, 255, 255, 0.5);
    }
    .form-group{
        margin:0 auto;
        padding-bottom: 2%;
        padding-top:2%;
    }
    .image-upload>input {
        display: none;
    }
    .image-upload img{
        margin:0 auto;
        border-radius: 50%;
        
    }

</style>