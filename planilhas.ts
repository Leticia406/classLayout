import { Atividades } from "./atividade";
import { Professor } from "./Professor";

export class Planilhas{
    professores: Professor;
    ano_letivo: string;
    atividades: Atividades

    constructor(_professores: Professor, _ano_letivo:string, _atividades: Atividades){
        this.ano_letivo = _ano_letivo;
        this.atividades = _atividades;
        this.professores = _professores
    }
}