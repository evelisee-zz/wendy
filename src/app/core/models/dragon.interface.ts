export interface DragonInfo {
    actions: Array<ActionDragonInfo>;
}

export interface ActionDragonInfo {
    desc: string;
    name: string;
}

export interface ActionDragonModifiedInfo {
    nome: string;
    descricao: string;
}