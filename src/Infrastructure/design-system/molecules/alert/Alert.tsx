import { Alert, AlertProps } from 'antd';

export type AbstractAlertProps = AlertProps & {};

export function AbstractAlert(props: AbstractAlertProps) {
    return <Alert {...props} />;
}
