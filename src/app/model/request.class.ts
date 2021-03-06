import { User } from './user.class';

export class Request {

    id : number;
    description : string;
    justification : string;
    rejectionReason: string;
    deliveryMode: string;
    status: string;
    total: number;
    userId: number;
    user: User;
    
    constructor (id : number = 0, description : string = '',
                justification : string = '', rejectionReason: string ='', deliveryMode: string = '',
                status: string = '', total: number = 0,user: User = new User (), userId: number =0
                ) {
            this.id =id;
            this.description= description;
            this.justification=justification;
            this.rejectionReason=rejectionReason;
            this.deliveryMode= deliveryMode;
            this.status = status;
            this.total= total;
            this.user=user;
            this.userId = userId;

        }
    
}
