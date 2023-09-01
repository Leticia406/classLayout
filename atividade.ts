
import { Aluno } from "./aluno";
import { Professor } from "./Professor";

export class Atividades {
    descricao: string;
    data : Date;
    prazo : boolean;
    nota : number;
    aluno: Aluno
    professor: Professor

    constructor(_descricao:string, _data:Date, _prazo:boolean, _nota:number, _professor:Professor, _aluno:Aluno){
        this.descricao = _descricao;
        this.data = _data;
        this.prazo = _prazo;
        this.nota = _nota;
        this.aluno = _aluno;
        this.professor = _professor
    }
}