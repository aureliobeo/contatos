class ContatosControles{
    constructor(){
        this._inputNome = document.querySelector("#nomeid");
        this._inputNumero = document.querySelector("#foneid");
        this._inputEmail = document.querySelector("#emailid");
        this._inputDesc = document.querySelector("#descid");
        this._listaContatus = new ListaContatos();
        this._contatosView = new ContatosView(document.querySelector("#contatosView"));
        this._contatosView.update(this._listaContatus);
    }
    adiciona(event){
        event.preventDefault();
        this._listaContatus.adiciona(this._criaContatos());
        this._contatosView.update(this._listaContatus);
        this._limpaFormulario();
    }

    _criaContatos(){
        return new Contatos (
            this._inputNome.value,
            this._inputNumero.value,
            this._inputEmail.value,
            this._inputDesc.value
        );
    }

    _limpaFormulario(){
        this._inputNome.value = "";
        this._inputNumero.value = "";
        this._inputEmail.value = "";
        this._inputDesc.value = "";

        this._inputNome.focus();
    }

    editar(model) {
       console.log(model);
    }

    excluir(event){
       console.log(event);
    }
}