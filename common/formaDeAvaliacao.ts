import { Avaliacao } from './avaliacao';

export class FormaDeAvaliacao {

    descricao: string;
    avaliacoes: Avaliacao[];

    constructor() {
        this.clean();
    }

    clean() {
        this.descricao = "";
        this.avaliacoes = [];
    }

    clone(): FormaDeAvaliacao {
        var formaDeAvaliacao: FormaDeAvaliacao = new FormaDeAvaliacao();
        formaDeAvaliacao.copyFrom(this);
        return formaDeAvaliacao;
    }

    copyFrom(from: FormaDeAvaliacao): void {
        this.descricao = from.descricao;
        this.avaliacoes = from.avaliacoes;
    }

}