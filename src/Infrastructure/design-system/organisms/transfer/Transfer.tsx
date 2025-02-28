import { Transfer, TransferProps } from 'antd';

export type AbstractTransferProps = TransferProps & {};

export function AbstractTransfer(props: AbstractTransferProps) {
    return <Transfer {...props} />;
}
