class ListaContatos{
    constructor(){
        this._contatus = []
    }

    adiciona(contatus){
        this._contatus.push(contatus);
    }
    get contatus(){
        return this._contatus;
    }
}