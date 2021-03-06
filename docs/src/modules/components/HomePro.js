/* eslint-disable material-ui/no-hardcoded-labels */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from 'docs/src/modules/components/Link';

const styles = theme => ({
  root: {
    padding: theme.spacing(1, 2, 1, 2),
    right: 0,
    left: 0,
    color: theme.palette.common.white,
    backgroundColor: '#626980',
    position: 'relative',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      top: 100,
      left: 'auto',
      position: 'absolute',
      borderBottomLeftRadius: 36 / 2,
      borderTopLeftRadius: 36 / 2,
    },
  },
});

function HomePro(props) {
  const { classes } = props;

  return (
    <Link
      variant="body2"
      className={classNames(classes.root, 'mui-fixed')}
      href="/getting-started/support/#professional-support-premium"
    >
      Get Professional Support
    </Link>
  );
}

HomePro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePro);
