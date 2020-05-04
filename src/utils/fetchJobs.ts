interface JProps {
  category?: string;
  tags?: string;
  companyName?: string;
  search?: string;
  limit?: number;
}

const fetchJobs = async ({
  category,
  tags,
  companyName,
  search,
  limit,
}: JProps): Promise<any> => {
  const response = await fetch('/.netlify/functions/fetchJobs', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category,
      tags,
      companyName,
      search,
      limit,
    }),
  });
  const jobs = await response.json();

  console.log(jobs);
  return jobs;
};

export default fetchJobs;
