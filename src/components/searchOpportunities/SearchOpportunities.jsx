import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const SearchOpportunities = () => {
  const options = ['Opción 1', 'Opción 2', 'Opción 3'];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <section>
      <Container
        sx={
          isDesktop
            ? {
                padding: '75px 140px',
                '@media (min-width: 600px)': { padding: '75px 140px' },
                backgroundColor: '#FFE2CE',
                borderRadius: '32px',
                marginTop: '50px',
              }
            : {
                padding: '145px 25px 55px 25px',
                '@media (min-width: 600px)': {
                  padding: '145px 25px 55px 25px',
                },
                backgroundColor: '#FFE2CE',
                borderRadius: '0px',
                marginTop: '0px',
              }
        }
      >
        <Typography
          variant={isDesktop ? 'h2' : 'h5'}
          width={isDesktop ? '450px' : '276px'}
          margin={!isDesktop && 'auto'}
          fontWeight='500'
          textAlign={isDesktop ? 'left' : 'center'}
        >
          Encontrá la oportunidad que estabas buscando
        </Typography>
        <Box
          sx={
            isDesktop
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  borderBottomRightRadius: '60px',
                  borderTopRightRadius: '60px',
                  borderBottomLeftRadius: '35px',
                  borderTopLeftRadius: '35px',
                  backgroundColor: 'white',
                  height: '70px',
                  marginTop: '50px',
                }
              : {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  height: 'fit-content',
                  margin: '50px auto 0 auto',
                  width: '325px',
                }
          }
        >
          <FormControl
            sx={
              isDesktop
                ? {
                    marginLeft: '20px',
                    width: 85,
                    backgroundColor: '#F4F4F4',
                  }
                : {
                    marginTop: '20px',
                    width: 276,
                    backgroundColor: '#F4F4F4',
                  }
            }
          >
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              value='TODAS'
              displayEmpty
              sx={{ fontSize: '13px', fontWeight: '600' }}
            >
              <MenuItem value='TODAS'>TODAS</MenuItem>

              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={
              isDesktop
                ? {
                    marginLeft: '15px',
                    width: 93,
                    backgroundColor: '#F4F4F4',
                  }
                : {
                    marginTop: '15px',
                    width: 276,
                    backgroundColor: '#F4F4F4',
                  }
            }
          >
            <Select
              inputProps={{ 'aria-label': 'Without label' }}
              value='RUBROS'
              displayEmpty
              sx={{ fontSize: '13px', fontWeight: '600' }}
            >
              <MenuItem value='RUBROS'>RUBROS</MenuItem>

              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            variant='outlined'
            placeholder='Buscar'
            sx={{
              '& .MuiOutlinedInput-root': {
                border: 'none',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
              backgroundColor: '#F4F4F4',
              borderRadius: isDesktop ? '40px' : '10px',
              marginTop: !isDesktop && '15px',
              marginLeft: isDesktop ? '15px' : '0',
              flexGrow: isDesktop ? '1' : '0',
              width: !isDesktop && '276px',
            }}
          />

          <Button
            variant='contained'
            sx={{
              margin: isDesktop ? '0 20px 0 5px' : '15px auto 25px auto',
              borderRadius: '20px',
              backgroundColor: '#E94335',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'none',
              width: isDesktop ? '192px' : '276px',
            }}
          >
            Buscar
          </Button>
        </Box>
      </Container>
    </section>
  );
};
