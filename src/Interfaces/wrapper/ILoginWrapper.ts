import { IUser } from './../common/IUser';

export interface ILoginWrapper{
    bPath?:string,
    uImg?:string,
    authUser?:IUser,
    now?:string,
    user?:IUser
}

export class ICLoginWrapper{
    constructor(
        public bPath:string,
        public uImg:string,
        public authUser:IUser,
        public now:string,
        public user:IUser
    ){}
}