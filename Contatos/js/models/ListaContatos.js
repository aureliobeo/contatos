class ListaContatos{

    constructor(){
        this._contatos = [];
    }

    adiciona(contato){
        this._contatos.push(contato);
    }
    get contatos(){
        return [].concat(this._contatos);
    }

    setContatos(contato) {
        this._contatos = contato;
    }
}