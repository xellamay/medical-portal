import React from 'react';
import { Dialog, DialogBody } from "@blueprintjs/core";

const Modal: React.FC = () => (
  <Dialog title="Informational dialog" icon="info-sign">
    <DialogBody>
      <div className="bp4-dialog-container">
        <div className="bp4-dialog">
          <div className="bp4-dialog-header">
            <span className="bp4-icon-large bp4-icon-inbox"></span>
            <h5 className="bp4-heading">Dialog header</h5>
            <button aria-label="Close"
                    className="bp4-dialog-close-button bp4-button bp4-minimal bp4-icon-cross"></button>
          </div>
          <div className="bp4-dialog-body">
            This dialog hasn't been wired up with any open or close interactions.
            It's just an example of markup and styles.
          </div>
          <div className="bp4-dialog-footer">
            <div className="bp4-dialog-footer-actions">
              <button type="button" className="bp4-button">Secondary button</button>
              <button type="submit" className="bp4-button bp4-intent-primary">Primary button</button>
            </div>
          </div>
        </div>
      </div>
    </DialogBody>
  </Dialog>
)

export default Modal;
