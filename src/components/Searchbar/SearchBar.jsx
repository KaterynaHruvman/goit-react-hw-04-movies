import { Component } from 'react';
import styles from './stylesSearchbar.module.scss';

class Searchbar extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  handelChange = ev => {
    this.setState({ searchQuery: ev.currentTarget.value });
  };

  handelSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.props);
    this.props.history.push({
      query: this.state.searchQuery,
    });
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };
  componentDidMount = () => {
    if (this.props.history.location.query) {
      this.props.onSubmit(this.props.history.location.query);
    } else {
      return;
    }
  };

  render() {
    return (
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.searchQuery}
            onChange={this.handelChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
