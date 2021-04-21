import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import api from '../../../services/api';
import intl from '../../../locales/intl';
import Modal from '../../../components/Modal';
import Select from '../../../components/Select';
import StructurePage from '../../StructurePage';
import CustomButton from '../../../components/Button';
import { Container, TitleContainer, Title, InstructionsText, Main, InputsContainer, Buttons, SelectContainer, Label } from './styles';

interface IProps {
    match: {
        params: {
            id: string;
        };
    };
}

const NewProfession: React.FC<IProps> = ({ match }) => {
    const [modal, setModal] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<boolean>(true);
    const history = useHistory();

    useEffect(() => {        
        if (match.params.id !== undefined) {
            api.get(`professions/${match.params.id}`).then(res => {
                const { data } = res;
                setName(data.name)
                setStatus(data.status);
            });
        }
    }, []);


    const handleStatus = (value: string) => {
        if (value === '1') 
            setStatus(true);

        if (value === '2')
            setStatus(false);
    };

    const handleSave = () => {
        const postData = {
            id: 3, 
            name: name,
            status: status
        };
        
        if (match.params.id !== undefined) {
            api.put(`professions/${match.params.id}`, postData).then(res => {
                setModal(true);
            });
        } else {
            api.post('professions', postData).then(res => {
                setModal(true);
            });
        }
    };
    return (
        <>
            {modal ? (
                <Modal
                    type="sucess"
                    text={intl.get('Pages.NewProfession.Modal.text')}>
                    <CustomButton
                        text={intl.get('Pages.NewProfession.Modal.confirm')}
                        background="var(--primary-color)"
                        color="var(--white-text)"
                        clickFunction={() => history.push('/profession')}
                    />
                </Modal>
            ) : (
                <></>
            )}
            <StructurePage>
                <Container>
                    <TitleContainer>
                        <Title>{intl.get('Pages.NewProfession.title')}</Title>
                    </TitleContainer>
                    <InstructionsText>
                        {intl.get('Pages.NewProfession.instructions')}
                    </InstructionsText>
                    <Main>
                        <InputsContainer>
                            <TextField
                                id="standart"
                                label={intl.get('Pages.NewProfession.name')}
                                autoComplete="none"
                                onChange={e => setName(e.currentTarget.value)}
                                value={name}
                            />
                            <SelectContainer>
                                <Label>{intl.get('Pages.NewProfession.status')}</Label>
                                <Select
                                    options={[
                                        {
                                            value: '1',
                                            title: intl.get('Pages.Profession.Status.active'),
                                        },
                                        {
                                            value: '2',
                                            title: intl.get('Pages.Profession.Status.inactive'),
                                        },
                                    ]}
                                    color="#242A32"
                                    background="#fff"
                                    border="1px solid white"
                                    selectFunction={handleStatus}
                                />
                            </SelectContainer>
                        </InputsContainer>

                        <Buttons>
                            <CustomButton
                                text={intl.get('Pages.NewProfession.cancel')}
                                color="var(--secondary-color)"
                                background="var(--white-text)"
                                border="1px solid var(--secondary-color)"
                                clickFunction={() =>
                                    history.push('/profession')
                                }
                            />
                            <CustomButton
                                text={intl.get('Pages.NewProfession.save')}
                                background="var(--secondary-color)"
                                color="var(--white-text)"
                                clickFunction={handleSave}
                            />
                        </Buttons>
                    </Main>
                </Container>
            </StructurePage>
        </>
    );
};

export default NewProfession;
