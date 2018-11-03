import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import * as stores from './stores'
import AppRouter from './AppRouter'
import './App.css'

class App extends Component {
    render() {
        return ( 
            <Provider {...stores}>
                <AppRouter />
            </Provider>
        )
    }
}

export default App