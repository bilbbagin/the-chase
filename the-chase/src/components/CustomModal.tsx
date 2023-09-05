import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export interface IModalProps {
  title: string;
  content: string;
  show: boolean;
  onClose?: () => void;
}

function CustonModal({ title, content, show, onClose }: IModalProps) {
  return (
    <Modal show={show} onHide={onClose} className="text-center">
      <Modal.Header>
        <Modal.Title className="text-center">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="display-4 text-center">{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustonModal;
