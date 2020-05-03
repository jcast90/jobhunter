import React from 'react';

const initialContext = {
  filters: []
}

const LocalStateContext = React.createContext<any>(initialContext);
const LocalProvider = LocalStateContext.Provider;

const GlobalProvider = ({ children }: any ): JSX.Element => {
  const [ filters, setFilters ] = React.useState<string[]>([]);

  const updateFilters = (newFilters: any) => setFilters(newFilters);

  return (
    <LocalProvider value={{ filters, updateFilters }} >
      {children}
    </LocalProvider>
  )
}

export {
  GlobalProvider,
  LocalStateContext,
  initialContext
}