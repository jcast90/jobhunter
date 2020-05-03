import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { LocalStateContext } from '../globalState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    }
  }),
);

interface IProps {
  handleSearch: any;
}

const SearchBar: React.FC<IProps> = ({ handleSearch }: IProps): JSX.Element => {
  const { filters, updateFilters } = React.useContext(LocalStateContext);
  const [ inputValue, setInputValue ] = React.useState('')
  const classes = useStyles();

  const handleChange = (e: any): any => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (): any => {
    const params = {
      search: inputValue
    }

    handleSearch(params);
  }

  React.useEffect(() => {
    const searchTerms = filters.join(',');
    setInputValue(searchTerms);
  },[filters]);

  return (
    <div className={classes.root}>
       <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} sm={9}>
              <TextField id="standard-basic" value={inputValue} label="Search for a job..." onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="outlined" color="primary" onClick={ handleSubmit }>
              Search
            </Button>
          </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar;