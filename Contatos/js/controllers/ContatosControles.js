class ContatosControles{
    constructor(){
        this._inputNome = document.querySelector("#nomeid");
        this._inputNumero = document.querySelector("#foneid");
        this._inputEmail = document.querySelector("#emailid");
        this._inputDesc = document.querySelector("#descid");
        this._listaContatos = new ListaContatos();
        this._contatosView = new ContatosView(document.querySelector("#contatosView"));
        this._contatosView.update(this._listaContatos);
        this._atualizandoContato = false;
    }
    adiciona(event){
        event.preventDefault();
        if (this._atualizandoContato) {
            this.editarContato(this._criaContatos());
        } else {
            this._listaContatos.adiciona(this._criaContatos());
        }
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

    atribuirContato(contato) {
        this._contatoAntigo = contato;
        this._inputNome.value = contato.nome;
        this._inputNumero.value = contato.numero;
        this._inputEmail.value = contato.email;
        this._inputDesc.value = contato.desc;
    }

    editar(nomeContato) {
        const contato = this._listaContatos.findContato(nomeContato);
        this.atribuirContato(contato);
        this._atualizandoContato = true;
        this._inputNome.focus();
    }

    editarContato(contato) {
        this._listaContatos.atualizarContato(contato, this._contatoAntigo);
        this._atualizandoContato = false;
    }


    excluir(e){
       let newContacts = this._listaContatos.contatos;

       newContacts = newContacts.filter(contact => contact.nome != e);

       this._listaContatos.setContatos(newContacts);
       this._contatosView.update(this._listaContatos);
    }
}