import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  useCallback,
  useRef,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiHome } from 'react-icons/fi';
import { FaWhatsapp, FaCity } from 'react-icons/fa';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';

import getValidationErros from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Select from '../../components/Select';

import {
  Container,
  Title,
  Header,
  FormContainer,
  Field,
  FieldGroup,
  // ButtonStyle,
  ItensGrid,
} from './styles';

import logo from '../../assets/logo.svg';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get('items').then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUF(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filterdItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filterdItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email valido'),
        whatsapp: Yup.string().required('Whatsaap obrigatório'),
        uf: Yup.string().required('Unidade federativa obrigatório'),
        city: Yup.string().required('Cidade obrigatório'),
        latitude: Yup.number().required('Localização obrigatório'),
        longitude: Yup.number().required('Localização obrigatório'),
        items: Yup.array()
          .required('Minimo 1 item')
          .min(1, 'Selecione no mínimo 1 item'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      // console.log(err);

      const erros = getValidationErros(err);

      formRef.current?.setErrors(erros);
    }
  }, []);

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();

  //   const { name, email, whatsapp } = formData;
  //   const uf = selectedUf;
  //   const city = selectedCity;
  //   const [latitude, longitude] = selectedPosition;
  //   const itemsSelected = selectedItems;

  //   const data = new FormData();

  //   data.append('name', name);
  //   data.append('email', email);
  //   data.append('whatsapp', whatsapp);
  //   data.append('uf', uf);
  //   data.append('city', city);
  //   data.append('latitude', String(latitude));
  //   data.append('longitude', String(longitude));
  //   data.append('items', itemsSelected.join(','));

  //   if (selectedFile) {
  //     data.append('image', selectedFile);
  //   }

  //   await api.post('points', data);

  //   alert('Ponto de coleta criado');

  //   history.push('/');
  // }

  return (
    <Container id="page-create-point">
      <Header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </Header>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title>
            Cadastro do
            <br />
            ponto de coleta
          </Title>

          <Dropzone onFileUploaded={setSelectedFile} />

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <Field className="field">
              <Label htmlFor="name">Nome da entidade</Label>
              <Input
                icon={FiHome}
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
              />
            </Field>

            <FieldGroup className="field-group">
              <Field className="field">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  icon={FiMail}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                />
              </Field>

              <Field className="field">
                <Label htmlFor="whatsapp">WhatsAapp</Label>
                <Input
                  icon={FaWhatsapp}
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                  onChange={handleInputChange}
                />
              </Field>
            </FieldGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione o enderço no mapa</span>
            </legend>

            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker position={selectedPosition} />
            </Map>

            <FieldGroup className="field-group">
              <Field className="field">
                <Label htmlFor="uf">Estado (UF)</Label>
                <Select
                  icon={FaCity}
                  name="uf"
                  id="uf"
                  value={selectedUf}
                  onChange={handleSelectedUF}
                >
                  <option value="0">Selecione uma UF </option>
                  {ufs.map((uf) => (
                    <option value={uf} key={uf}>
                      {uf}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field className="field">
                <Label htmlFor="city">Cidade</Label>
                <Select
                  icon={FaCity}
                  name="city"
                  id="city"
                  value={selectedCity}
                  onChange={handleSelectedCity}
                >
                  <option value="0">Selecione uma cidade </option>
                  {cities.map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </Field>
            </FieldGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Ítens de coleta</h2>
              <span>Selecione um ou mais ítens abaixo</span>
            </legend>

            <ItensGrid className="items-grid">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={selectedItems.includes(item.id) ? 'selected' : ''}
                  onClick={() => handleSelectedItem(item.id)}
                >
                  <img src={item.image_url} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ItensGrid>
          </fieldset>

          <Button type="submit">Cadastrar ponto de coleta</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreatePoint;
