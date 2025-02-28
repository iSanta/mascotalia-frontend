import { Typography, TypographyProps } from 'antd';

export type AbstractTypographyProps = TypographyProps & {};

const AbstractTypography = Typography as AbstractTypographyProps;
AbstractTypography.Text = Typography.Text;
AbstractTypography.Link = Typography.Link;
AbstractTypography.Title = Typography.Title;
AbstractTypography.Paragraph = Typography.Paragraph;

export default AbstractTypography;
