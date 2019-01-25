class ListaContatos{

    constructor(){
        this._contatus = [];
    }

    adiciona(contatos){
        this._contatus.push(contatos);
    }
    get contatus(){
        return [].concat(this._contatus);
    }
}