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
                            <th>       </th>
                            <th>       </th>
                        </tr>
                    </thead>
                    <tbody>
                    ${model.contatos.map(n =>
                        `
                            <tr "id="contato">
                                <td>${n.nome}</td>
                                <td>${n.numero}</td>
                                <td>${n.email}</td>
                                <td>${n.desc}</td>
                                <td><button type="button" class="btn btn-info edit" onclick="contatosControles.editar('${n.nome}')">Edit</button></td>
                                <td><button type="button" class="btn btn-danger excluir" onclick="contatosControles.excluir('${n.nome}')">Delete</button></td>
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

    excluir(model){
        console.log(model);
    }
} 