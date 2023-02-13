import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { getClient } from "../../app/apicalls/clientCalls";
import FlexBetween from "../styled/FlexBetween";
const InfoItem = ({ label, value, mt, mb }) => {
  return (
    <FlexBetween
      sx={{
        gap: "1rem",
        marginTop: `${mt ? mt : 0}`,
        marginBottom: `${mb ? mb : 0}`,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#555",
        }}
      >
        {label}:{" "}
      </Typography>
      <Typography variant="h6">{value}</Typography>
    </FlexBetween>
  );
};
const ClientDetailView = ({ clientID }) => {
  const [client, setClient] = useState({
    client: undefined,
    order_count: undefined,
    orders: undefined,
  });

  useEffect(() => {
    getClient(clientID).then((res) => {
      setClient((prev) => {
        return {
          ...prev,
          client: res.client,
          order_count: res.order_count,
          orders: res.orders,
        };
      });
    });
  }, [clientID]);

  return (
    client.client && (
      <>
        <Box className="DetailedView orangeComp">
          <Box className="DetailedViewHeader">
            {" "}
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
              }}
            >
              {client.client.name}
            </Typography>{" "}
            <Divider />
          </Box>{" "}
          <Box className="DetailedViewBody">
            <GeneralInfo
              title={"Datos Generales"}
              subscriber_id={client.client.subscriber_id}
              agency={client.client.agency}
              province={client.client.state}
              city={client.client.city}
              address={client.client.address}
            />

            <ContactInfo
              title={"Informacion de Contacto"}
              email={client.client.email}
              phone={client.client.phone}
              contact_person1={client.client.contact_person1}
              contact_person2={client.client.contact_person2}
            />
            <UsageInfo title={"Informacion de Uso"} />
          </Box>
        </Box>
      </>
    )
  );
};

const GeneralInfo = ({
  title,
  subscriber_id,
  agency,
  province,
  city,
  address,
}) => {
  return (
    <Box className="DVBLeft LightOrangeComp">
      <Typography variant="h5" className="mb-2">
        <strong>{title}</strong>
      </Typography>
      <Divider className="mb-3" />
      <InfoItem label={"Agencia Cliente"} value={agency} mb={"0.5rem"} />
      <InfoItem label={"Nº de Abonado"} value={subscriber_id} mb={"0.5rem"} />
      <InfoItem label={"Provincia"} value={province} mb={"0.5rem"} />
      <InfoItem label={"Poblacion"} value={city} mb={"0.5rem"} />
      <InfoItem label={"Direccion"} value={address} mb={"0.5rem"} />
    </Box>
  );
};

const ContactInfo = ({
  title,
  email,
  phone,
  contact_person1,
  contact_person2,
}) => {
  return (
    <Box className="DVBCenter LightOrangeComp">
      <Typography variant="h5" className="mb-2">
        <strong>{title}</strong>
      </Typography>
      <Divider className="mb-3" />
      <InfoItem label={"Email"} value={email} mb={"0.5rem"} />
      <InfoItem label={"Telefono"} value={phone} mb={"0.5rem"} />
      <InfoItem
        label={"Persona de Contacto 1"}
        value={contact_person1}
        mb={"0.5rem"}
      />
      <InfoItem label={"Persona de Contacto 2"} value={contact_person2} />
    </Box>
  );
};

const UsageInfo = ({ title }) => {
  return (
    <Box className="DVBRight LightOrangeComp">
      <Typography variant="h5" className="mb-2">
        <strong>{title}</strong>
      </Typography>
      <Divider className="mb-3" />
    </Box>
  );
};
export default ClientDetailView;
