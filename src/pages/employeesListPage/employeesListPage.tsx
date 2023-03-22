import React, { useEffect, useState } from 'react';
import Search from "../../entities/ui/search/search";
import { doctorFixturesList, getMockDoctorById } from "../../entities/fixtures";
import Page from "../../entities/ui/page/Page";
import classes from "./employeesListPage.module.scss";
import { Doctor } from "../../entities/models";
import EmployeeCardHorizontal from "../../entities/ui/employee-card-horizontal/EmployeeCardHorizontal";
import ModalDoctor from "../../entities/ui/modal/ModalDoctor";
import { Text } from "../../components/text";

const EmployeesListPage: React.FC = () => {
  //Модальное окно
  const [openModal, setOpenModal] = useState(false);
  const [doctor, setDoctor] = useState<null | Doctor>(null);

  const handleClickCard = (id: Doctor["id"]) => {
    setDoctor(getMockDoctorById(id));
    setOpenModal(true);
  }

  const closeModal = () => {
    setDoctor(null);
    setOpenModal(false);
  }

    //Фильтрация по карточкам
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Doctor[]>(doctorFixturesList);

  const onFilter = () => {
    const result = doctorFixturesList.filter((doctor) => {
      const fullName = `${doctor.name} ${doctor.surname} ${doctor.lastname}`.toLowerCase();
      return fullName.includes(inputValue.toLowerCase());
    });
    setList(result);
  }

  const handleChangeInput = (value: string) => setInputValue(value);

  useEffect(() => {
    onFilter()
  }, [inputValue])

  return (
    <Page>
      <Search onChange={handleChangeInput} />
      <div className={classes.list}>
        {list.map((item) => (
          <EmployeeCardHorizontal
            key={item.id}
            name={item.name}
            lastname={item.lastname}
            surname={item.surname}
            image={item.image}
            jobTitle={item.jobTitle}
            filial={item.filial}
            experience={item.experience}
            onClick={() => handleClickCard(item.id)}
          />)
        )}
        {list.length === 0 && (
          <Text>Ничего не найдено</Text>
        )}
      </div>
      {doctor && (
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
    </Page>
  )
}

export default EmployeesListPage;
