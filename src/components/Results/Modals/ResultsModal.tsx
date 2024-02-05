import React from 'react';
import styled from 'styled-components';

interface ResultsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: auto;
  height: 300px;
  width: 400px;
  padding: 20px;
`;

const CloseButton = styled.button`
  align-self: self-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 18px;
`

export const ResultsModal = ({ isOpen, onClose }: ResultsModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>X</CloseButton>
                <Text>SUCCESS</Text>
            </ModalContent>
        </ModalOverlay>
    );
};

