<template>
    <div class="container-fluid">
        <div class="box col-6 justify-content-center">
            <label>Alterar informações pessoais</label>
            <form>
                <div class="form-group image-upload">
                    <label for="file-input">
                        <img :src="require(`@/assets/${foto}`)" alt="Foto de Perfil"/>
                    </label>

                    <input id="file-input" 
                    type="file" 
                    accept="image/*" 
                    name="foto"/>
                </div>
                <div class="form-group col-10">
                    <input type="email" 
                    class="form-control" 
                    id="InputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="E-mail"
                    nome="email">
                </div>
                <div class="form-group col-10">
                    <input type="text" 
                    class="form-control" 
                    id="InputNome" 
                    placeholder="Nome"
                    name="nome">
                </div>
                <div class="form-group col-10">
                    <input type="password" 
                    class="form-control" 
                    id="InputPassword" 
                    placeholder="Senha"
                    name="senha">
                </div>
                <div class="form-group col-10">
                    <input type="password" 
                    class="form-control" 
                    id="confirmaPassword" 
                    placeholder="Confirmar senha"
                    name="confirmacao">
                </div>
                
                <button type="submit" class="btn btn-primary col-4">Salvar Alterações</button>
            </form>
        </div>
    </div>
  
</template>

<script>
export default {
    name:'Edit',
    props:{
        foto: String,
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
    .form-group{
        margin:0 auto;
        padding-bottom: 2%;
        padding-top:2%;
    }
    .box{
        margin: 2% auto;
        position: relative;
        padding-bottom: 2%;
        padding-top: 2%;
        height: 90%;
        background-color: rgba(0, 0, 0,0.1);
    }
    .image-upload>input {
        display: none;
    }
    .image-upload img{
        margin:0 auto;
        border-radius: 50%;
        
    }

</style>