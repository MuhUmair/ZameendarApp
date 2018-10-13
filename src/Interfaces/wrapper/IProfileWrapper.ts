import { ICUser } from './../common/IUser';

export interface IProfileWrapper{
    user?:ICUser,
    productName?:string,
    productMinRates?:string,
    productMaxRates?:string,
    productDescription?:string
}

export class ICProfileWrapper{
    constructor(
        public user:ICUser,
        public productName:string,
        public productMinRates:string,
        public productMaxRates:string,
        public productDescription:string,
    ){}
}