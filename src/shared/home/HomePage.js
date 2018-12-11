import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


import { fetchUser as fetchUserAction } from './actions';
import GithubUser from './GithubUser';

export class HomePage extends Component {
  componentWillMount() {
    this.props.loadUser();
  }

  render() {
    const { gists } = this.props;
    return (
      <div>
        <Helmet
          title="Welcome"
        />
        <h1>首页</h1>
        {/* {gists.length > 0 && <GistsList gists={gists.slice(0, 10)} />} */}
        <GithubUser user={gists} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loadUser: PropTypes.func.isRequired,
  gists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

HomePage.defaultProps = {
  gists: {},
};

const mapStateToProps = ({ gists }) => ({
  gists,
});

export default connect(
  mapStateToProps,
  {
    loadUser: fetchUserAction,
  },
)(HomePage);
