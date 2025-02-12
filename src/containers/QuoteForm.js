import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';



export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = Object.assign({}, this.state, { id: uuid() })
    this.props.addQuote(quote)
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={ event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name='content'
                        className="form-control"
                        value={this.state.content} onChange={(event)=> this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name='author'
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={(event)=> this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     content: state.quote,
//     author: state.author
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addQuote: addQuote
//   }, dispatch)
// }

export default connect(null, {addQuote})(QuoteForm);