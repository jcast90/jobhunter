import React from 'react';
import logo from './logo.svg';
import './App.css';
import fetchJobs from './utils/fetchJobs';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import Grid from '@material-ui/core/Grid';
import { GlobalProvider } from './globalState';

function App() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    const params = {
      limit: 10,
      search: 'software engineer',
    };
    try {
      const data = fetchJobs(params);
      data.then((res) => setJobs(res.jobs));
      console.log('test', jobs);
    } catch (err) {
      throw Error(err);
    }
  }, []);

  const handleSubmit = (params: any) => {
    try {
      const data = fetchJobs(params);
      data.then((res) => setJobs(res.jobs));
    } catch (err) {
      throw Error(err);
    }
  };

  return (
    <GlobalProvider>
      <div className="App">
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <SearchBar handleSearch={handleSubmit} />
          {jobs && <JobList data={jobs} />}
        </Grid>
      </div>
    </GlobalProvider>
  );
}

export default App;
