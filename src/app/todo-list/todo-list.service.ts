import {TaskModel} from './task.model';


export class TodoListService{

    tasks= new Map<number,TaskModel>();

    addTask(desc:string){
      let task=new TaskModel(desc);
      this.tasks.set(task.id,task);
      //this.tasks.push(new TaskModel(desc));
    }
  
    removeTask(task:TaskModel){
      this.tasks.delete(task.id);
      // this.tasks.splice(index,1);
    }
    get totalIsDone(){
      let total=0;
      for(let t of this.tasks.values()){
        if(t.isDone)
          total++;
      }
      return total;
    }
}