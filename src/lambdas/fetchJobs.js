import fetch from 'node-fetch';

const fetchData = async ({ tags, limit, search, category, companyName }) => {
  const tagBuilder = tags ? `tags=${tags}&` : '';
  const limitBuilder = limit ? `limit=${limit}&` : '';
  const searchBuilder = search ? `search=${search}&` : '';
  const categoryBuilder = category ? `category=${category}&` : '';
  const companyNameBuilder = companyName ? `company_name=${companyName}&` : '';
  const url = `https://remotive.io/api/remote-jobs?${searchBuilder}${tagBuilder}${limitBuilder}${categoryBuilder}${companyNameBuilder}`;

  return await fetch(url).then((res) => res.json());
};

export async function handler(event, context, callback) {
  const { tags, limit, search, category, companyName } = JSON.parse(event.body);

  try {
    const data = await fetchData({
      tags,
      limit,
      search,
      category,
      companyName,
    });
    const res = await data;

    return {
      statusCode: 200,
      body: JSON.stringify({ ...res }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
}
