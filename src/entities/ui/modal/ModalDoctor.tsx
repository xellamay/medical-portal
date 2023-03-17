import React from 'react';
import { Dialog, DialogBody, Icon } from "@blueprintjs/core";
import classes from "./ModalDoctor.module.scss";
import { Text } from "../../../components/text";

interface Props {
  isOpen?: boolean,
  onClose?: () => void,
  image: string,
  jobTitle: string,
  filial: string,
  birthday: string,
  experience: string,
  name: string,
  lastname: string,
  surname: string
}

const ModalDoctor: React.FC<Props> = ({ isOpen, onClose, image, jobTitle, filial, birthday, experience, name, surname, lastname}) => {

  return (
    <Dialog className={classes.dialog} isOpen={isOpen} onClose={onClose} canOutsideClickClose={true}>
      <DialogBody className={classes.dialog__body}>
        <div>
          <img className={classes.dialog__image} src={image} alt="image"/>
        </div>
        <div>
          <div className={classes.dialog__header}>
            <Text tagName="h3" heading>{lastname} {name} {surname} </Text>
            <Text tagName="div" large>{jobTitle}</Text>
            <Text tagName="div" large>{filial}</Text>
          </div>
          <div className={classes.dialog__desc}>
            <Text className={classes.dialog__item} tagName="div">
              <p className={classes.dialog__text}>
                <Icon icon="emoji"/>
                День рождения
              </p>
              <p className={classes.dialog__text}>{birthday}</p>
            </Text>
            <Text className={classes.dialog__item} tagName="div">
              <p className={classes.dialog__text}>
                <Icon icon="calendar"/>
                Стаж работы
              </p>
              <p className={classes.dialog__text}>{experience}</p>
            </Text>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  )
}

export default ModalDoctor;
