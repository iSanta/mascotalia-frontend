import { AbstractUpload, AbstractUploadProps } from "@/Infrastructure/design-system";

export type UploadProps = AbstractUploadProps & {};

export function Upload(props: UploadProps) {
  return <AbstractUpload {...props} />;
}
