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
    findContato(nome) {
        return this._contatos.find(c => c.nome === nome);
    }

    setContatos(contato) {
        this._contatos = contato;
    }
}