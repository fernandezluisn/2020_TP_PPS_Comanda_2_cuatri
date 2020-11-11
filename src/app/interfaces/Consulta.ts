import { Mesa } from './mesa';

export class Consulta{
    public id:string;
    public mesa:string;
    public consulta:string;
    public estado:string;

    constructor (mesa:string , consulta:string , estado:string, id?:string){
        this.mesa = mesa;
        this.consulta = consulta;
        this.estado = estado;
        if(id){
            this.id =id;
        }
    }
}