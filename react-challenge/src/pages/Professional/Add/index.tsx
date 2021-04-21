import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import api from '../../../services/api';
import intl from '../../../locales/intl';
import IProps from '../../../interface/props';
import Modal from '../../../components/Modal';
import Select from '../../../components/Select';
import StructurePage from '../../StructurePage';
import ISelect from '../../../interface/select';
import { useFetch } from '../../../hooks/useFetch';
import CustomButton from '../../../components/Button';
import IProfession from '../../../interface/profession';
import { Container, TitleContainer, Title, InstructionsText, Main, InputsContainer, SelectContainer, Label, Buttons } from './styles';

const NewProfessional: React.FC<IProps> = ({ match }) => {

    const history = useHistory();

    const { data } = useFetch(`/professionals/${match.params.id}`);
    const professions: IProfession[] = useFetch('professions').data;

    const [modal, setModal] = useState<boolean>(false);
    const [name, setname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [status, setStatus] = useState<boolean>(true);
    const [profession, setProfession] = useState<IProfession>();
    const [maskValue, setMaskValue] = useState<string>('');
    const [actualProfession, setActualProfession] = useState<string>();
    const [allProfession, setAllProfession] = useState<ISelect[]>([]);

    useEffect(() => {
        const tempProfessions: React.SetStateAction<ISelect[]> = [];

        professions?.forEach((profession: IProfession) => {
            tempProfessions.push({ value: profession.id.toString(), title: profession.name });
        });
        setAllProfession(tempProfessions);
        if (tempProfessions.length > 0) {
            setActualProfession(tempProfessions[0].value.toString());
        }

        if (data && data.name) {
            setname(data.name);
            setEmail(data.email);
            setActualProfession(data.Profession.id.toString());
            setStatus(data.status);
            setMaskValue(data.phone);
        }
    }, [professions, data]);

    const handleProfession = (value: string) => {
        console.log(actualProfession);
        professions?.forEach((profession: IProfession) => {
            if (profession.id.toString() === value) {
                setActualProfession(value);
                return;
            }
        });
    };

    const handleStatus = (value: string) => {
        if (value === 'true')
            setStatus(true);

        if (value === 'false')
            setStatus(false);
    };

    const handleSave = () => {

        const found = professions.find(profession => {
            return actualProfession === profession?.id.toString();
        });

        const putData = {
            id: match.params.id !== undefined ? 3 : null,
            name,
            email,
            status,
            phone: maskValue,
            profession_id: found?.id,
        };

        if (match.params.id !== undefined) {
            api.put(`professionals/${match.params.id}`, putData).then(res => {
                setModal(true);
            });
        } else {
            api.post('professionals', putData).then(res => {
                setModal(true);
            });
        }
    };

    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            let mask = e.currentTarget.value;
            mask = mask.replace(/\D/g, '');
            mask = mask.replace(/^(\d{2})(\d)/g, '($1) $2');
            mask = mask.replace(/(\d)(\d{4})$/, '$1-$2');
            setMaskValue(mask);
        }
    };

    return (
        <>
            {modal ? (
                <Modal type="sucess" text={intl.get('Pages.NewProfessional.Modal.text')}>
                <CustomButton
                    text={intl.get('Pages.NewProfessional.Modal.confirm')}
                    background="var(--primary-color)"
                    color="var(--white-text)"
                    clickFunction={() => history.push('/professional')}
                />
                </Modal>
            ) : (
                <></>
            )}
            <StructurePage>
                <Container>
                    <TitleContainer>
                        <Title>{intl.get('Pages.NewProfessional.title')}</Title>
                    </TitleContainer>
                    <InstructionsText>
                        {intl.get('Pages.NewProfessional.instructions')}
                    </InstructionsText>
                    <Main>
                        <InputsContainer>
                            <TextField
                                id="standart"
                                label={intl.get('Pages.NewProfessional.name')}
                                autoComplete="none"
                                onChange={e => setname(e.currentTarget.value)}
                                value={name}
                            />
                            <SelectContainer>
                                <Label>{intl.get('Pages.NewProfessional.profession')}</Label>
                                <Select
                                    options={allProfession}
                                    color="#242A32"
                                    background="#fff"
                                    border="1px solid white"
                                    selectFunction={handleProfession}
                                    defaultValue={actualProfession}
                                />                                                               
                            </SelectContainer>

                            <TextField
                                id="standart"
                                label={intl.get('Pages.NewProfessional.email')}
                                autoComplete="none"
                                onChange={e => setEmail(e.currentTarget.value)}
                                value={email}
                            />
                            <TextField
                                id="standart"
                                label={intl.get('Pages.NewProfessional.phone')}
                                autoComplete="none"
                                onChange={handlePhone}
                                value={maskValue}
                            />
                            <SelectContainer>
                                <Label>{intl.get('Pages.NewProfessional.Status.title')}</Label>
                                <Select
                                    options={[
                                        {
                                        value: 'true',
                                        title: intl.get('Pages.NewProfessional.Status.active'),
                                        },
                                        {
                                        value: 'false',
                                        title: intl.get('Pages.NewProfessional.Status.inactive'),
                                        },
                                    ]}
                                    color="#242A32"
                                    background="#fff"
                                    border="1px solid white"
                                    selectFunction={handleStatus}
                                    defaultValue={status.toString()}
                                />
                            </SelectContainer>
                        </InputsContainer>
                        <Buttons>
                        <CustomButton
                            text={intl.get('Pages.NewProfessional.cancel')}
                            color="var(--secondary-color)"
                            background="var(--white-text)"
                            border="1px solid var(--secondary-color)"
                            clickFunction={() => history.push('/professional')}
                        />
                        <CustomButton
                            text={intl.get('Pages.NewProfessional.save')}
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

export default NewProfessional;
