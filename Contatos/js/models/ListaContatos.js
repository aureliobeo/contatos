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

    atualizarContato(novoContato, contatoAntigo) {
        const contatos = this.contatos;
        const indexContatoAntigo = contatos.indexOf(contatoAntigo);
        contatos[indexContatoAntigo] = novoContato;

        this.setContatos(contatos);
    }

    setContatos(contato) {
        this._contatos = contato;
    }
}