import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomhook } from './01-useState/CounterWithCustomhook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayautEffect/Layout'
import { Memorize } from './06-memos/memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbakHook } from './06-memos/CallbakHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
