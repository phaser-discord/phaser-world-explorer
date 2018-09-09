import React from 'react'
import { withRouter } from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.searchField = React.createRef()
  }

  handleSubmit(e) {
    console.log(this.props)
    const { history } = this.props
    e.stopPropagation()
    e.preventDefault()

    const q = this.searchField.current
      ? this.searchField.current.value
      : null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.searchField} />
        <button type="submit" value="Go!">Go!</button>
      </form>
    )
  }
}

export default withRouter(Search)