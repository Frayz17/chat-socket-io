import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px'
  },
  paper: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default useStyles;
