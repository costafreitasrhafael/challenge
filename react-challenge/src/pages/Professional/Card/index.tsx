import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';

import intl from '../../../locales/intl';
import api from '../../../services/api';
import Modal from '../../../components/Modal';
import CustomButton from '../../../components/Button';
import IProfessional from '../../../interface/professional';
import { Container, CardContent, CardHeader, InfoSections, Icons, TextSection, TitleSection, UserName, } from './styles';

interface Props {
    professional: IProfessional;
  }

const UserCard: React.FC<Props> = ({ professional }) => {
    
    const history = useHistory();
    const [confirmModal, setConfirmModal] = useState<boolean>(false);
    const [sucessModal, setSucessModal] = useState<boolean>(false);
    const [hideCard, setHideCard] = useState<string>('flex');

    function openWarningDelete() {
        setConfirmModal(true);
    }

    function deleteProfessional(id: number) {
        setConfirmModal(false);
        api.delete(`professionals/${id}`);
        setHideCard('none');
        setSucessModal(true);
    }

    return (
        <>
            {confirmModal ? (
                <Modal
                    text={intl.get('Components.ProfessionalCard.Modal.deleteText')}
                    type="warning"
                >
                    <CustomButton
                        text={intl.get('Components.ProfessionalCard.Modal.notDelete')}
                        clickFunction={() => setConfirmModal(false)}
                        color="var(--primary-color)"
                        border="1px solid var(--primary-color)"
                        background="var(--white-text)"
                    />
                    <CustomButton
                        text={intl.get('Components.ProfessionalCard.Modal.delete')}
                        clickFunction={() => deleteProfessional(professional.id)}
                        color="var(--white-text)"
                        background="var(--primary-color)"
                    />
                </Modal>
            ) : (
                <></>
            )}
            {sucessModal ? (
                <Modal
                    text={intl.get('Components.ProfessionalCard.Modal.sucessText')}
                    type="sucess"
                >
                    <CustomButton
                        text={intl.get('Components.ProfessionalCard.Modal.confirm')}
                        clickFunction={() => setSucessModal(false)}
                        color="var(--white-text)"
                        background="var(--primary-color)"
                    />
                </Modal>
            ) : (
                <></>
            )}
            <Container style={{ display: hideCard }}>
                <CardHeader>
                    <UserName>{professional.name}</UserName>
                    <Icons>
                        <RiEdit2Line
                            size={22}
                            style={{ cursor: 'pointer' }}
                            onClick={() => history.push(`/professional/add/${professional.id}`)}
                        />
                        <RiDeleteBin2Line
                            size={22}
                            style={{ cursor: 'pointer' }}
                            onClick={() => openWarningDelete()}
                        />
                    </Icons>
                </CardHeader>
                <CardContent>
                    <InfoSections>
                        <TitleSection>
                            {intl.get('Components.ProfessionalCard.status')}
                        </TitleSection>
                        {professional.status ? (
                            <TextSection style={{ color: '#238E58' }}>
                                {intl.get('Components.ProfessionalCard.active')}
                            </TextSection>
                        ) : (
                            <TextSection style={{ color: '#f52828' }}>
                                {intl.get('Components.ProfessionalCard.inactive')}
                            </TextSection>
                        )}
                    </InfoSections>

                    <InfoSections>
                        <TitleSection>
                            {intl.get('Components.ProfessionalCard.profession')}
                        </TitleSection>
                        <TextSection>
                            {professional?.Profession?.name}
                        </TextSection>
                    </InfoSections>

                    <InfoSections>
                        <TitleSection>{intl.get('Components.ProfessionalCard.email')}</TitleSection>
                        <TextSection>{professional.email}</TextSection>
                    </InfoSections>

                    <InfoSections>
                        <TitleSection>{intl.get('Components.ProfessionalCard.phone')}</TitleSection>
                        <TextSection>{professional.phone}</TextSection>
                    </InfoSections>

                </CardContent>
            </Container>
        </>
    );
};

export default UserCard;
