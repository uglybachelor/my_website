import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: this.props.pageCount
    };
  }
  render() {
    const pageArray = Object.keys(new Int8Array(this.state.pageCount)).map(
      Number
    );
    return (
      <div className="section">
        <nav className="pagination" role="navigation" aria-label="pagination">
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>

          {/* if over 5 pages, use "..." ; if not, show all page number*/}
          {this.state.pageCount > 5 ? (
            <ul class="pagination-list">
              {pageArray
                .filter(i => {
                  return i < 3;
                })
                .map(i => (
                  <li>
                    <a class="pagination-link">{i + 1}</a>
                  </li>
                ))}
              <li>
                <span class="pagination-ellipsis">&hellip;</span>
              </li>
              {pageArray
                .filter(i => {
                  return i > pageArray.length - 3;
                })
                .map(i => (
                  <li>
                    <a class="pagination-link">{i + 1}</a>
                  </li>
                ))}
            </ul>
          ) : (
            <ul class="pagination-list">
              {pageArray.map(i => {
                return (
                  <li>
                    <a class="pagination-link">{i + 1}</a>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    );
  }
}

export default Pagination;
