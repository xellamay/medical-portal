import React, { useState } from 'react';
import { EmployeeCard } from "../../entities/ui";
import Section from "../../entities/ui/section/Section";
import { doctorFixturesList, getMockDoctorById } from "../../entities/fixtures";
import ScrollList from "../../entities/ui/scroll-list/ScrollList";
import { Dialog, DialogBody, Icon } from "@blueprintjs/core";
import { Text } from "../../components/text";
import classes from "./WelcomeList.module.scss";
import { Doctor } from "../../entities/models";
import ModalDoctor from "../../entities/ui/modal/ModalDoctor";

const WelcomeList: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [doctor, setDoctor] = useState<null | Doctor>(null);

  const handleClickCard = (id: Doctor["id"]) => {
    setDoctor(getMockDoctorById(id));
    setOpenModal(true)
  }

  const closeModal = () => {
    setDoctor(null);
    setOpenModal(false);
  }

  return (
    <Section title="Добро пожаловать!" subtitle="Перейти в раздел">
      { doctor && (
        <ModalDoctor
          isOpen={openModal}
          onClose={closeModal}
          filial={doctor.filial}
          jobTitle={doctor.jobTitle}
          image={doctor.image}
          birthday={doctor.birthday}
          experience={doctor.experience}
          name={doctor.name}
          lastname={doctor.lastname}
          surname={doctor.surname}
        />
      )}
      <ScrollList>
        {doctorFixturesList.map((item) => (
          <EmployeeCard
            key={item.id}
            name={item.name}
            lastname={item.lastname}
            surname={item.surname}
            image={item.image}
            jobTitle={item.jobTitle}
            filial={item.filial}
            onClick={() => handleClickCard(item.id)}
          />)
        )}
      </ScrollList>
    </Section>
  )
}

export default WelcomeList;
