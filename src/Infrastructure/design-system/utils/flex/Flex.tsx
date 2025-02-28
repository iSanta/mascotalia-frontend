import { Flex, FlexProps } from 'antd';

export type AbstractFlexProps = FlexProps & {};

export function AbstractFlex(props: AbstractFlexProps) {
    return <Flex {...props} />;
}
