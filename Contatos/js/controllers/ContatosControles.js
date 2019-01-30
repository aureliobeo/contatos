class ContatosControles{
    constructor(){
        this._inputNome = document.querySelector("#nomeid");
        this._inputNumero = document.querySelector("#foneid");
        this._inputEmail = document.querySelector("#emailid");
        this._inputDesc = document.querySelector("#descid");
        this._listaContatos = new ListaContatos();
        this._contatosView = new ContatosView(document.querySelector("#contatosView"));
        this._contatosView.update(this._listaContatos);
    }
    adiciona(event){
        event.preventDefault();
        this._listaContatos.adiciona(this._criaContatos());
        this._contatosView.update(this._listaContatos);
        this._limpaFormulario();
    }

    _criaContatos(){
        return new Contato (
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

    excluir(e){
       let newContacts = this._listaContatos.contatos;

       newContacts = newContacts.filter(contact => contact.nome != e);

       this._listaContatos.setContatos(newContacts);
       this._contatosView.update(this._listaContatos);
    }
}