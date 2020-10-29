export class Mesa {
    id?: string;
    numero: number;
    espacios: number;
    tipo: string;
    qr: string;
    foto: string;
    estado: string;

    constructor(qr:string, numero:number, espacios:number, tipo:string, foto:string, estado:string){
        this.numero=numero;
        this.qr=qr;
        this.espacios=espacios;
        this.tipo=tipo;
        this.foto=foto;
        this.estado=estado;
    }
}
