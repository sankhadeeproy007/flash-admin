import PropTypes from 'prop-types';
import React from 'react';
import { PageHeader } from 'antd';

import theme from '../../theme/theme';

export const Header = props => {
  const style = {
    backgroundImage: `linear-gradient(111.8deg, ${
      theme['@gradient-primary']
    } 19.8%, ${theme['@gradient-secondary']} 92.1%)`,
  };

  return <PageHeader className="header" style={style} {...props} />;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func,
};
