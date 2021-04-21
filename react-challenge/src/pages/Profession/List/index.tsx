import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiAddCircleLine } from 'react-icons/ri';

import Card from '../Card';
import api from '../../../services/api';
import intl from '../../../locales/intl';
import Button from '../../../components/Button';
import CommonStructurePage from '../../StructurePage';
import IProfession from '../../../interface/profession';
import { Container, Title, TitleContainer, Cards } from './styles';

const Profession: React.FC = () => {
    const history = useHistory();
    const [data, setData] = useState<IProfession[]>();

    useEffect(() => {
        api.get(`professions`).then(res => {
            const { data } = res;
            setData(data);
        });
    }, []);

    return (
        <CommonStructurePage>
            <Container>
                <TitleContainer>
                    <Title>{intl.get('Pages.Profession.title')}</Title>
                    <Button
                        text={intl.get('Pages.Profession.newRegister')}
                        color="#fff"
                        Icon={RiAddCircleLine}
                        background="var(--secondary-color)"
                        clickFunction={() =>
                            history.push('/profession/add')
                        }
                    />
                </TitleContainer>
                <Cards>
                    {data?.map((point: IProfession) => (
                        <Card profession={point} />
                    ))}
                </Cards>
            </Container>
        </CommonStructurePage>
    );
};

export default Profession;