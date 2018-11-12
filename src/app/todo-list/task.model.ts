let count=0;

export class TaskModel{
    id:number;
    description:string;
    isDone:boolean;

    constructor(desc:string,isDone:boolean=false)
    {
        this.id=count++;
        this.description=desc;
        this.isDone=isDone;
    }
}