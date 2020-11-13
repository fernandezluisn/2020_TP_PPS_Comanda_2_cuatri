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

    constructor(nombre:string, descripcion:string, tiempo:number, precio:number, tipo:string, imagen1:any, imagen2:any, imagen3:any){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.tiempo=tiempo;
        this.precio=precio;
        this.tipo=tipo;
        this.foto_1=imagen1;
        this.foto_2=imagen2;
        this.foto_3=imagen3;
    }
}
