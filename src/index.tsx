/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
// import App from './App'
import { Main } from './Main'

const root = document.getElementById('root')

render(() => <Main />, root!)
