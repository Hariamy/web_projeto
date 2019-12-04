<template>
    <div class="externa vh-100 vw-100 d-flex justify-content-center">
        <div class="box">
            <h1 class="text-center">Formulário de Cadastro</h1>
            <form class="d-flex justify-content-center flex-column">
                <div class="form-group image-upload d-flex justify-content-center">
                    <label for="file-input">
                        <img src="../assets/person.svg" alt="Foto de Perfil"/>
                    </label>

                    <input 
                        id="file-input" 
                        type="file" 
                        accept="image/*" 
                        name="foto"
                    />
                </div>
                <div class="form-group">
                    <input 
                        type="email" 
                        class="form-control" 
                        id="InputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="E-mail"
                        nome="email"
                    />
                </div>
                <div class="form-group">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="InputNome" 
                        placeholder="Nome"
                        name="nome"
                    />
                </div>
                <div class="form-group">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="InputPassword" 
                        placeholder="Senha"
                        name="senha"
                    />
                </div>
                <div class="form-group">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="confirmaPassword" 
                        placeholder="Confirmar senha"
                        name="confirmacao"
                        />
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Criar Conta</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Cadastrar',
    props: {
        imagem: String,
    }
}
</script>

<style>

    .externa{
        background-image:url('~@/assets/background.png');

        background-repeat: no-repeat;
        background-size: cover;
    }
    .box {
        padding: 50px;
        width: 600px;
        height: 700px;
        background-color: rgba(255, 255, 255, 0.5);
    }
    .form-group{
        margin: 10px;
    }
    .image-upload > input {
        display: none;
    }
    .image-upload img{
        border-radius: 50%;
        width: 140px;
        height: 140px;
        
    }
</style>