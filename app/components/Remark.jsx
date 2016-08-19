import React from 'react';

import Avatar from './Avatar.jsx';
import Button from './Button.jsx';
import TextField from './TextField';

export default class Remark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      textValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onRemark && this.props.onRemark(this.state.textValue);
    this.setState({
      textValue: ''
    })
  }

  render() {
    const avatar = this.props.user
      ? <Avatar image={this.props.user.image} width="50" />
      : null;
    return (
      <div className="remark">
        <div className="remark-avatar">
          {avatar}
        </div>
        <form className="remark-body" onSubmit={this.handleSubmit}>
           <TextField placeholder="いま何してる？" value={this.state.textValue} onChange={this.handleTextChange} />
          <div className="remark-nav">
            <div className="remark-char-count">
              {this.state.textValue.length}/140
            </div>
            <Button>送信</Button>
          </div>
        </form>
      </div>
    )
  }
}
