export class EncuestaEmpleado {
    idEmpleado: string;
    comentario: string;
    foto:string;
    demora:string;
    limpieza:number;
    fecha: Date;
    fila:boolean;
    roturas:boolean;
    falta:boolean;
    orden:string;

    constructor(idEmpleado:string, comentario:string, foto:string, demora:string, limpieza:number, fecha:Date, fila:boolean, roturas:boolean, falta:boolean,
        orden:string){
        this.idEmpleado=idEmpleado;
        this.comentario=comentario;
        this.foto=foto;
        this.demora=demora;
        this.limpieza=limpieza;
        this.fecha=fecha;
        this.fila=fila;
        this.roturas=roturas;
        this.falta=falta;
        this.orden=orden;
    }
}