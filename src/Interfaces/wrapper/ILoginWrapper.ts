import { ICUser } from './../common/IUser';

export interface ILoginWrapper{
    bPath?:string,
    uImg?:string,
    authUser?:ICUser,
    now?:string,
    user?:ICUser
}

export class ICLoginWrapper{
    constructor(
        public bPath:string,
        public uImg:string,
        public authUser:ICUser,
        public now:string,
        public user:ICUser
    ){}
}