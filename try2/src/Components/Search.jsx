import React from "react";

class SearchBar extends React.Component {
  // onInputChange(e) {
  //   console.log(e);
  // }
  // same thing as:
  // clean above, add onChange={(event) => console.log(event)} VS onChange={this.onInputChange}

  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
