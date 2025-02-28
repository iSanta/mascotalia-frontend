import { AbstractResult, AbstractResultProps } from "@/Infrastructure/design-system";

export type ResultProps = AbstractResultProps & {};

export function Result(props: ResultProps) {
  return <AbstractResult {...props} />;
}
