import { Upload, UploadProps } from 'antd';

export type AbstractUploadProps = UploadProps & {};

export function AbstractUpload(props: AbstractUploadProps) {
    return <Upload {...props} />;
}
