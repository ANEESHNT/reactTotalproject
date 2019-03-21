import React, { Component } from 'react'

export default class Searchbar extends Component {
        render () {
          return (
            <div className="mx-sm-auto">
            <div className="input-group ">
            <input type="text" className="form-control-sm" size="70" placeholder="Search this blog"
            />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          </div>
    )
  }
}
