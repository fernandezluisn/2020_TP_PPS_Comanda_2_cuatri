export class Mesa {
    id?: string;
    numero: number;
    espacios: number;
    tipo: string;
    qr: string;
    foto: string;
    estado: string;
    uidField: string;
    constructor(numero:number, espacios:number, tipo:string, foto:string, estado:string){
        this.numero=numero;        
        this.espacios=espacios;
        this.tipo=tipo;
        this.foto=foto;
        this.estado=estado;
    }
}


export enum MesasEstados{
    "Vacia",
    "Ocupada",
}
