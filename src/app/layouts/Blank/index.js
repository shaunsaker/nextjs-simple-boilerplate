import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Blank from './Blank';

export class BlankContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <Blank />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BlankContainer);
