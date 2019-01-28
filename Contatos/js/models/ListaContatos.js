class ListaContatos{

    constructor(){
        this._contatus = [];
    }

    adiciona(contato){
        this._contatus.push(contato);
    }
    get contatus(){
        return [].concat(this._contatus);
    }
}