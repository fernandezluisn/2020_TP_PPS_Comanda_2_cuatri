import { Mesa } from './mesa';

export class Reserva {
    id: string;
    mesa: Mesa;
    idCliente: string;
    fecha: string;
    estado: string; // 'pendiente', 'confirmada', 'expirada'
    hora:string;
    nombreCliente:string;
    cantidad:number;
    tipo:string;

    constructor(idCliente:string, fecha:string, hora:string, estado:string, nombreCliente:string, cantidad:number, tipo:string){
        this.fecha=fecha;
        this.hora=hora;
        this.idCliente=idCliente;
        this.estado=estado;
        this.nombreCliente=nombreCliente;
        this.cantidad=cantidad;
        this.tipo=tipo;
    }
}

export interface Espera {
    id:string;
    nombre:string;
    cantidad:string;
    ingreso:string;
    cliente:string;
}
