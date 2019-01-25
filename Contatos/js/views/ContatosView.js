class ContatosView{

    constructor (elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Numero</th>
                            <th>Email</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${model.contatus.map(n =>
                        `
                            <tr>
                                <td>${n.nome}</td>
                                <td>${n.numero}</td>
                                <td>${n.email}</td>
                                <td>${n.desc}</td>
                            </tr>
                        `
                    ).join("")}
                    </tbody>
             </table>
            `;
    }

    update (model){
        this._elemento.innerHTML = this._template(model);
    }

}