import React, { Component } from 'react'
import normalize from 'normalize-css'
import style from './app.css'

import Header from '../Header'
import Main from '../Main'

class App extends Component {
	render () {
		return (
			<div className={style.root}>
				<Header />
				<Main />
			</div>
		)
	}
}

export default App