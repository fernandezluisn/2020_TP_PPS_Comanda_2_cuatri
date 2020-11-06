export class Producto {
    nombre:string;
    descripcion:string;
    tiempo:number;
    precio:number;
    foto_1:any;
    foto_2:any;
    foto_3:any;
    qr:string;
    sector:string;
    id:string;
    tipo:string;

    constructor(nombre:string, descripcion:string, tiempo:number, precio:number, tipo:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.tiempo=tiempo;
        this.precio=precio;
        this.tipo=tipo;
    }
}
