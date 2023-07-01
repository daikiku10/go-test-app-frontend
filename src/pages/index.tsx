import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AddTask from '@/components/AddTask'
import { Task } from '@/types/task'
import TaskList from '@/components/TaskList'

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  // 追加タスク関数
  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      }
    ])
  }
  // 変更タスク関数
  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        }
        return t;
      })
    )
  }
  // 削除タスク関数
  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id != taskId))
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </>
  )
}
