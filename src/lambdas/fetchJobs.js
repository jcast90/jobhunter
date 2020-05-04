import fetch from 'node-fetch';

const fetchData = ({ tags, limit, search, category, companyName }) => {
  const tagBuilder = tags ? `tags=${tags}&` : '';
  const limitBuilder = limit ? `limit=${limit}&` : '';
  const searchBuilder = search ? `search=${search}&` : '';
  const categoryBuilder = category ? `category=${category}&` : '';
  const companyNameBuilder = companyName ? `companany_name=${companyName}&` : '';
  const url = `https://remotive.io/api/remote-jobs?${searchBuilder}${tagBuilder}${limitBuilder}${categoryBuilder}${companyNameBuilder}`;

  const jobs = await fetch(url).then(res => res.json());
  const data = await jobs;

  return data
}

export async function handler(event, context, callback) {
  const { tags, limit, search, category, companyName } = event;

  try{
    const data = await fetchData({ tags, limit, search, category, companyName });
    const res = await data.json();
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify({ jobs: res })
    };
  }catch(err){
    return {
      statusCode: 400,
      body: JSON.stringify(err)
    };
  }
};