import { Atividades } from "./atividade";
import { Cadastro } from "./cadastro";

export class Professor extends Cadastro{
    nome: string;
    diciplina: string;

    constructor(_nome:string, _diciplina:string, _usuario: string, _senha: string){
        super(_usuario, _senha)
        this.nome = _nome;
        this.diciplina = _diciplina;

    }

    EditarAtiv(atividade: Atividades){
        console.log(atividade)
    }

    EditarNota(atividade: Atividades){
        console.log(atividade)
    }

    Excluir(){}
    
    Criar(){}
}