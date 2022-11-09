import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div><header className="py-5">
        <div className="container px-lg-5 w-75">
          <div className="p-4 p-lg-5 bg-light rounded-3">
            <div className="m-4 m-lg-5">
              <h1 className="display-5">A warm welcome!</h1>
              <p className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi inventore modi ex sequi cum amet ab sunt soluta dolores laboriosam!</p>
              <a className="btn btn-primary btn-lg" href="#!">Call to action!</a>
            </div>
          </div>
        </div>
      </header></div>
    )
  }
}
