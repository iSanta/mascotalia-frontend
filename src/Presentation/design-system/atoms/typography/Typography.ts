import { AbstractTypography, AbstractTypographyProps } from "@/Infrastructure/design-system";

export type TypographyProps = AbstractTypographyProps & {};

const Typography = AbstractTypography as TypographyProps;
Typography.Text = AbstractTypography.Text;
Typography.Link = AbstractTypography.Link;
Typography.Title = AbstractTypography.Title;
Typography.Paragraph = AbstractTypography.Paragraph;

export { Typography };
