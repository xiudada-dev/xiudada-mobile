import React, { Component } from 'react'
import { Provider } from 'mobx-react'

<<<<<<< HEAD
=======
import './AsyncInterceptors'
>>>>>>> ljh
import * as stores from './stores'
import AppRouter from './AppRouter'
import './App.css'

class App extends Component {
<<<<<<< HEAD
    render() {
        return ( 
=======

    constructor(props) {
        super(props)
        this.state = {
            increase: 'none',
        }
    }

    render() {
        return (
>>>>>>> ljh
            <Provider {...stores}>
            	<AppRouter />
            </Provider>
        )
    }
}

export default App