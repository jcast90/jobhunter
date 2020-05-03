interface IProps {
  category?: string;
  tags?: string;
  company_name?: string;
  search?: string;
  limit?: number;
}

const fetchJobs = async ({ category,  tags, company_name, search, limit }: IProps): Promise<any> => {
  const tagBuilder = tags ? `tags=${tags}&` : '';
  const limitBuilder = limit ? `limit=${limit}&` : '';
  const searchBuilder = search ? `search=${search}&` : '';
  const categoryBuilder = category ? `category=${category}&` : '';
  const companyNameBuilder = company_name ? `companany_name=${company_name}&` : '';
  const url = `https://remotive.io/api/remote-jobs?${searchBuilder}${tagBuilder}${limitBuilder}${categoryBuilder}${companyNameBuilder}`;

  const jobs = await fetch(url).then(res => res.json());
  const data = await jobs;

  return data

}

export default fetchJobs