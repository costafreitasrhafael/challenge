import React from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

import moment from 'moment';

import intl from '../../../locales/intl';
import IProfession from '../../../interface/profession';
import { Container, CardContent, CardHeader, InfoSections, Icons, TextSection, TitleSection, UserName, } from './styles';

interface Props {
  profession: IProfession;
}

const Card: React.FC<Props> = ({ profession }) => {
    const history = useHistory();  
    return (
        <>
            <Container>
                <CardHeader>
                    <UserName>{profession.name}</UserName>
                    <Icons>
                        <RiEdit2Line
                            size={22}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                return history.push(
                                `/profession/add/${profession.id}`,
                                );
                            }}
                        />
                    </Icons>
                </CardHeader>
                <CardContent>
                    <InfoSections>
                        <TitleSection>
                            {intl.get('Components.PointCard.status')}
                        </TitleSection>
                        {profession.status ? (
                            <TextSection style={{ color: '#238E58' }}>
                                {intl.get('Components.PointCard.active')}
                            </TextSection>
                            ) : (
                            <TextSection style={{ color: '#f52828' }}>
                                {intl.get('Components.PointCard.inactive')}
                            </TextSection>
                        )}
                    </InfoSections>
          
                    <InfoSections>
                        <TitleSection>{intl.get('Components.PointCard.install')}</TitleSection>
                        <TextSection>{moment(profession.createdAt).format('DD/MM/YYYY')}</TextSection>
                    </InfoSections>
         
                    <InfoSections>
                        <TitleSection> {intl.get('Components.PointCard.lastupdate')} </TitleSection>
                        <TextSection>{moment(profession.updatedAt).format('DD/MM/YYYY')}</TextSection>
                    </InfoSections>

                </CardContent>
            </Container>
        </>
    );
};

export default Card;
