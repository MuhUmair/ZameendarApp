import { IUser } from './IUser';
export interface IUser{
    id?:number,
    name?:string,
    phone?:string,
    mobile?:string,
    email?:string,
    address?:string,
    type?:number,
    mType?:string,
    city?:number,
    capacity?:string,
    category?:number,
    description?:string
}

export class ICUser implements IUser{
    
    constructor(
        public id:number,
        public name:string,
        public phone:string,
        public mobile:string,
        public email:string,
        public address:string,
        public type:number,
        public mType:string,
        public city:number,
        public capacity:string,
        public category:number,
        public description:string,
        ){}
}