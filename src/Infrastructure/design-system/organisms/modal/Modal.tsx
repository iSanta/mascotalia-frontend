import { Modal, ModalProps } from 'antd';

export type AbstractModalProps = ModalProps & {};

export function AbstractModal(props: AbstractModalProps) {
    return <Modal {...props} />;
}
