import * as React from 'react';
import EnhancedTable from './EnhancedTable';

interface JobListProps {
  data: any;
}

const JobList: React.FunctionComponent<JobListProps> = ({
  data,
}: JobListProps): JSX.Element => {
  React.useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      <EnhancedTable data={data} />
    </div>
  );
};

export default JobList;
