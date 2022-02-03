import React from "react";

class SearchBar extends React.Component {
  // onInputChange(e) {
  //   console.log(e);
  // }
  // same thing as:
  // clean above, add onChange={(event) => console.log(event)} VS onChange={this.onInputChange}

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(event) => this.setState({ term: event })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
