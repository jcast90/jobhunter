import * as React from 'react';
import EnhancedTable from './EnhancedTable';

interface IJobListProps {
  data: any;
}

const JobList: React.FunctionComponent<IJobListProps> = ({ data }):JSX.Element => {
  React.useEffect(() => {
    console.log(data)
  })
  return (
    <div>
      <EnhancedTable data={data} />
    </div>
  );
};

export default JobList;
