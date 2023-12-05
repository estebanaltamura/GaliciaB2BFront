import { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OpportunityCardContainer } from './OpportunityCardContainer';
import './opportunitiesBrowser.css';

export const OpportunitiesBrowser = ({ data }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <Container
        sx={{
          marginTop: isDesktop ? '70px' : '30px',
          '@media (min-width: 960px)': { maxWidth: '1022px' },
        }}
      >
        <Typography variant='h4' textAlign='center'>
          ¡ No te pierdas éstas oportunidades !
        </Typography>

        <Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              variant='scrollable'
              sx={{
                marginTop: '20px',
                display: 'flex',
              }}
            >
              <Tab label='Ofertas' />
              <Tab label='Pedidos' />
              <Tab label='Eventos' />
              <Tab label='Capacitaciones' />
            </Tabs>
          </Box>
          <OpportunityCardContainer
            value={value}
            index={0}
            data={data}
          ></OpportunityCardContainer>
          <OpportunityCardContainer
            value={value}
            index={1}
          ></OpportunityCardContainer>
          <OpportunityCardContainer
            value={value}
            index={2}
          ></OpportunityCardContainer>
        </Box>
      </Container>
    </section>
  );
};
