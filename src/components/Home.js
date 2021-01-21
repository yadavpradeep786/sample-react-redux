import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import ServiceSection from "./ServiceSection";
import ProviderSection from "./ProviderSection";
import { fetchServices, fetchProviders } from "../actions/home";

const styles = {
  home: {
    padding: "1rem",
    display: "flex",
  },
  section: {
    padding: "1rem",
    width: "50%",
  },
};

const Home = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const { providers, services, selectedService } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchProviders());
    return () => true;
	}, [dispatch]);
	
  const filteredProfiles = useMemo(() => {
		if(providers) {
			if (!selectedService) {
				return providers.data;
			}
	
			return providers.data.filter(provider => {
				const { subspecialties = [] } = provider.attributes;
	
				return subspecialties.includes(selectedService);
			});
		} else {
			return [];
		}
  }, [providers, selectedService]);

  return (
    <>
      {loading || !services || !providers ? (
				<Grid container justify="center" alignItems="center" style={{height: '100%'}}>
					<CircularProgress />
				</Grid>
      ) : (
        <div style={styles.home}>
          <div style={styles.section}>
      			<h1>Control Section</h1>
            <ServiceSection
              data={services.data}
              count={services.meta["record-count"]}
            />
          </div>
          <div style={styles.section}>
      			<h1>Result Section</h1>
            <ProviderSection
              data={filteredProfiles}
              count={filteredProfiles.length}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
