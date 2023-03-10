import React from 'react';
import { Dialog, DialogBody } from "@blueprintjs/core";
import { useParams } from "react-router-dom";
import { getMockById } from "../../fixtures";

interface UrlParams {
  id: string
}

const Modal: React.FC = () => {
  const { id } = useParams<UrlParams>();
  const mockById = getMockById(id);

  return (
    <Dialog title="Informational dialog" icon="info-sign">
      <DialogBody>
        <div>
          <div>
            <img src={mockById.image} alt={mockById.lastname}/>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  )
}

export default Modal;
