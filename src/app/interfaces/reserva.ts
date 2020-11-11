export class Reserva {
    id: string;
    idMesa: string;
    idCliente: string;
    fecha: string;
    estado: string; // 'pendiente', 'confirmada', 'expirada'
    hora:string;

    constructor(idCliente:string, fecha:string, hora:string, estado:string){
        this.fecha=fecha;
        this.hora=hora;
        this.idCliente=idCliente;
        this.estado=estado;
    }
}

export interface Espera {
    id:string;
    nombre:string;
    cantidad:string;
    ingreso:string;
    cliente:string;
}
