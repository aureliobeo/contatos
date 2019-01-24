class Contatos{
    constructor(nome, numero, email, desc){
        this._nome = nome;
        this._numero = numero;
        this._email = email;
        this._desc = desc;
    }

    get nome (){
        return new this._nome;
    }

    get numero(){
        return new this._numero;
    }

    get email(){
        return new this._email;
    }

    get desc(){
        return new this._desc;
    }
}