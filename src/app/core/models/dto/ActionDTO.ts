import { ActionDragonInfo } from '../dragon.interface';

export class ActionDTO {
    nome: string;
    descricao: string;

    constructor({name, desc}: ActionDragonInfo) {
        this.nome = name;
        this.descricao = desc;
    }
}