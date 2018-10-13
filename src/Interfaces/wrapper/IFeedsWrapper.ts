import { ICUser } from './../common/IUser';

export interface IFeedsWrapper{
    user?:ICUser,
    productName?:string,
    productRates?:string,
    productDescription?:string,
    feedDescription?:string
}

export class ICFeedsWrapper{
    constructor(
        public user:ICUser,
        public productName:string,
        public productRates:string,
        public productDescription:string,
        public feedDescription:string,
    ){}
}