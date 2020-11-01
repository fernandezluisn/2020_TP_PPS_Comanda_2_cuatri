export class MesaCliente {
    id?: string;
    cerrada: boolean;
    idCliente: string;
    idMesa: string;
    idMozo: string;
    juegoBebida: number;
    juegoDescuento: number;
    juegoPostre: number;
    propina: number;

    constructor(idMozo:string, idMesa:string, idCliente:string){
        this.cerrada=false;
        this.idCliente=idCliente;
        this.idMesa=idMesa;
        this.idMozo=idMozo;
    }
}
