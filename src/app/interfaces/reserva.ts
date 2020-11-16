import { Mesa } from './mesa';

export class Reserva {
    id: string;
    mesa: Mesa;
    idCliente: string;
    fecha: string;
    fecha2:string;
    estado: string; // 'pendiente', 'confirmada', 'rechazada', 'expirada'
    hora:string;
    nombreCliente:string;
    cantidad:number;
    tipo:string;
    situacion:string;

    constructor(idCliente:string, fecha:string, hora:string, estado:string, nombreCliente:string, cantidad:number, tipo:string, fecha2:string){
        this.fecha=fecha;
        this.hora=hora;
        this.idCliente=idCliente;
        this.estado=estado;
        this.nombreCliente=nombreCliente;
        this.cantidad=cantidad;
        this.tipo=tipo;
        this.situacion="a reservar";
        this.fecha2=fecha2;
    }
}

export interface Espera {
    id:string;
    nombre:string;
    cantidad:string;
    ingreso:string;
    cliente:string;
}
