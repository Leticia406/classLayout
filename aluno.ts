import { Cadastro } from "./cadastro";

export class Aluno extends Cadastro {
    nome: string;
    RM: string;
    numchamada: number;
    atividades: string;
    notas: number;
    

    constructor(_nome:string, _RM:string, _numchamada:number, _atividades:string, _notas:number, _usuario:string, _senha:string){
        super( _usuario, _senha)
        this.nome = _nome;
        this.RM = _RM;
        this.numchamada = _numchamada;
        this.atividades = _atividades;
        this.notas = _notas;
    }
    }
