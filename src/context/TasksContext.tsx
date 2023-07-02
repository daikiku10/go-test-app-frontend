import { Task, TaskAction } from "@/types/task";
import { Dispatch, createContext } from "react";

export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);