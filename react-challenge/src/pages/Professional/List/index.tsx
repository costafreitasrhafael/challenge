import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { RiAddCircleLine, RiSearchLine } from 'react-icons/ri';


import Card from '../Card';
import api from '../../../services/api';
import intl from '../../../locales/intl';
import Button from '../../../components/Button';
import StructurePage from '../../StructurePage';
import IProfessional from '../../../interface/professional';
import { Container, Title, SelectContainer, TitleContainer, Cards } from './styles';

const Professional: React.FC = () => {

  const history = useHistory();

  const [data, setData] = useState<IProfessional[]>();
  const [findProfessionals, setFindProfessionals] = useState<string>('');

  useEffect(() => {
    api.get(`professionals`).then(res => {
        const { data } = res;
        setData(data);
    });
  }, []);

  const handleFilterUsers = () => {    

    let URL = 'professionals';

    if (findProfessionals !== '') {      
      URL += `?name=${findProfessionals}`;
    }
    api.get(URL).then(res => {
      const { data } = res;
      setData(data);
    });
  };

  return (
    <StructurePage>
      <Container>
        <TitleContainer>
          <Title>{intl.get('Pages.Professional.title')}</Title>
          <Button
            text={intl.get('Pages.Professional.newRegister')}
            color="#fff"
            Icon={RiAddCircleLine}
            background="var(--secondary-color)"
            clickFunction={() => history.push('/professional/add')}
          />
        </TitleContainer>        
        
        <SelectContainer>
          <TextField
            id="standard-basic"
            value={findProfessionals}
            onChange={e => setFindProfessionals(e.currentTarget.value)}
            style={{ width: '100%' }}
            placeholder={intl.get('Pages.Professional.findUser')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiSearchLine size={18} color="#808495" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            text={intl.get('Pages.Professional.filter')}
            color="#fff"
            background="#FF750B"
            clickFunction={handleFilterUsers}
          />
        </SelectContainer>
        <Cards>
          {data?.map((professional: IProfessional) => (
            <Card professional={professional} />
          ))}
        </Cards>
      </Container>
    </StructurePage>
  );
};

export default Professional;