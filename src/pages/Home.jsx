import { useEffect, useState } from 'react';
import { SearchOpportunities } from '../components/searchOpportunities/SearchOpportunities';

import { getData } from '../services/internal/fakeApi';
import { OpportunitiesBrowser } from '../components/opportunitiesBrowser/OpportunitiesBrowser';

export const Home = () => {
  const [data, setData] = useState(null);

  const getOpportunities = async () => {
    const data = await getData();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    //En el primer render de home se hace el request para:
    //Primera seccion: ofertas, pedidos, eventos, capacitacion
    //Segunda seccion: empresas
    getOpportunities();
    console.log('entro    ');
  }, []);

  return (
    <>
      <SearchOpportunities />
      <OpportunitiesBrowser data={data} />
    </>
  );
};
