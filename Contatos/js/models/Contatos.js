class Contatos{
    constructor(nome, numero, email, desc){
        
        this._nome = nome;
        this._numero = numero;
        this._email = email;
        this._desc = desc;
    }

    get nome (){
        return this._nome;
    }

    get numero(){
        return this._numero;
    }

    get email(){
        return this._email;
    }

    get desc(){
        return this._desc;
    }
}