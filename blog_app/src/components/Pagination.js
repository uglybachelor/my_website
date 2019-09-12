import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1
    };
  }

  render() {
    // create an array for page numbers, eg [1,2,3,4,5...]
    const pageArray = Object.keys(new Int8Array(this.props.pageCount)).map(
      Number
    );
    return (
      <div className="section">
        <nav className="pagination" role="navigation" aria-label="pagination">
          <a
            className="pagination-previous"
            onClick={this.changePage.bind(this, "previous")}
          >
            Previous
          </a>
          <a
            className="pagination-next"
            onClick={this.changePage.bind(this, "next")}
          >
            Next page
          </a>

          {/* if over 5 pages, use "..." ; if not, show all page number */}
          {this.props.pageCount > 5 ? (
            <ul className="pagination-list">
              {pageArray
                .filter(i => {
                  return i < 3;
                })
                .map(i => (
                  <li>
                    <a
                      className="pagination-link"
                      onClick={this.gotoPage.bind(this, i + 1)}
                    >
                      {i + 1}
                    </a>
                  </li>
                ))}
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              {pageArray
                .filter(i => {
                  return i > pageArray.length - 3;
                })
                .map(i => (
                  <li>
                    <a
                      className="pagination-link"
                      onClick={this.gotoPage.bind(this, i + 1)}
                    >
                      {i + 1}
                    </a>
                  </li>
                ))}
            </ul>
          ) : (
            <ul className="pagination-list">
              {pageArray.map(i => {
                return (
                  <li>
                    <a
                      className="pagination-link"
                      onClick={this.gotoPage.bind(this, i + 1)}
                    >
                      {i + 1}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    );
  }

  // go to specific page
  gotoPage = page => {
    this.setState(
      {
        currPage: page
      },
      () => {
        this.props.requestPostsInfo(this.state.currPage);
      }
    );
  };

  // go to next/previous page
  changePage = type => {
    if (type === "next") {
      this.setState(
        {
          currPage: this.state.currPage + 1
        },
        () => {
          this.props.requestPostsInfo(this.state.currPage);
        }
      );
    } else {
      this.setState(
        {
          currPage: this.state.currPage - 1
        },
        () => {
          this.props.requestPostsInfo(this.state.currPage);
        }
      );
    }
  };
}

export default Pagination;
