import { stringify } from 'querystring';

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
    qrMesa: string;
    

    constructor( idMesa:string, idCliente:string, qrMesa: string){
        this.cerrada=false;
        this.idCliente=idCliente;
        this.idMesa=idMesa;
        this.qrMesa = qrMesa;
        this.juegoDescuento=null;
       // this.idMozo=idMozo;
    }
}
