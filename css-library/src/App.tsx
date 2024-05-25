import React from 'react'
import ReactDOM from 'react-dom/client'

import { Table, Header } from './components'

const App = () => (
  <div className="container">
    <div>Name: css-library</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>

  <Header title='aaa' />

    <Table
      title='Cool title'
      rows={[{ mail: 'acmo@gmv.com', name: 'Álvaro', surname: 'de Caso' }]}
    />

  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
