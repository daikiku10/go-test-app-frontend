export type Task = {
  id: number;
  text: string;
  done: boolean;
}

export type TaskAction = 
  | {
    type: 'added';
    id: number;
    text: string;
  }
  | {
    type: 'changed';
    task: Task;
  }
  | {
    type: 'deleted';
    id: number;
  };
