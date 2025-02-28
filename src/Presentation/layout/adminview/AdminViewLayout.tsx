"use client"
import React, { useState, useEffect } from 'react'
import Style from './AdminViewLayout.module.scss'
import { Button, Flex, Menu, Breadcrumb } from '@/Presentation/design-system'
import type { MenuProps } from '@/Presentation/design-system';
import { Layout } from 'antd';
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { MdCampaign, MdOutlinePets, MdSpaceDashboard } from "react-icons/md";
import { FaPager } from "react-icons/fa";


import Image from "next/image";
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    href?: string,
): MenuItem {
    return {
        key,
        icon,
        children,
        label: href ? (
            <Link href={href} passHref>
                <span>{label}</span>
            </Link>
        ) : (
            label
        ),
    } as MenuItem;
}

const AdminViewLayout = ({ children, selectedKey, breadcrumbTitle }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentKey, setCurrentKey] = useState(selectedKey || '1');

    const items: MenuItem[] = [
        getItem('Dashboard', '1', <MdSpaceDashboard />, undefined, '/admin/dashboard'),
        getItem('Crear mascota', '2', <MdOutlinePets />, undefined, '/admin/create-pet'),
        getItem('Crear blog', '3', <FaPager />, undefined, '/admin/create-blog'),
        getItem('Crear campaña', '4', <MdCampaign size={24} />, undefined, '/admin/create-campaign'),
    ];

    useEffect(() => {
        if (selectedKey) {
            setCurrentKey(selectedKey);
        }
    }, [selectedKey]);

    const handleMenuSelect = ({ key }) => {
        setCurrentKey(key);
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider style={{ backgroundColor: 'var(--color-primary)' }} className={Style.mobileSlider} trigger={null} collapsible collapsed={!collapsed} defaultCollapsed breakpoint='md' collapsedWidth="0" onCollapse={(value) => setCollapsed(value)}>
                <Flex align='center' justify='center' className={Style.logoContainer}>
                    <Image
                        //src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${imageSrc}`}
                        src={'/images/dog.jpg'}
                        width={52}
                        height={52}
                        alt="Logo"
                        className={Style.image}
                    />
                </Flex>
                <Menu
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    theme="dark"
                    color="primary"
                    selectedKeys={[selectedKey]}
                    defaultSelectedKeys={[selectedKey]}
                    mode="inline"
                    items={items}
                    onSelect={handleMenuSelect}
                />
                <Flex justify='center' style={{ width: '100%' }}>
                    <Button
                        className={Style.mobileSliderBtn}
                        color='primary'
                        variant='text'
                        icon={collapsed ? <RiMenuUnfold3Fill size='18px' color='var(--color-bg)' /> : <RiMenuUnfold4Fill size='18px' color='var(--color-bg)' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: '80%',
                            height: 64,
                        }}
                    />
                </Flex>
            </Sider>

            <Sider style={{ backgroundColor: 'var(--color-primary)' }} className={Style.desktopSlider} trigger={null} collapsible collapsed={!collapsed} defaultCollapsed onCollapse={(value) => setCollapsed(value)}>
                <Flex align='center' justify='center' className={Style.logoContainer}>
                    <Image
                        //src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${imageSrc}`}
                        src={'/images/dog.jpg'}
                        width={52}
                        height={52}
                        alt="Logo"
                        className={Style.image}
                    />
                </Flex>
                <Menu
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    theme="dark"
                    color="primary"
                    selectedKeys={[selectedKey]}
                    defaultSelectedKeys={[selectedKey]}
                    mode="inline"
                    items={items}
                    onSelect={handleMenuSelect}
                />

            </Sider>

            <Layout>
                <Header className={Style.header} style={{ padding: 0, backgroundColor: 'var(--color-primary)' }}>
                    <Flex style={{ paddingLeft: 8, paddingRight: 8 }} align='center' justify='flex-start' gap={14}>
                        <Button
                            color='primary'
                            variant='text'
                            icon={collapsed ? <RiMenuUnfold3Fill size='18px' color='var(--color-bg)' /> : <RiMenuUnfold4Fill size='18px' color='var(--color-bg)' />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Breadcrumb
                            separator={<span className={Style.breadcrumb} style={{ color: 'var(--color-bg)' }}>{'>'}</span>}
                            items={[
                                { title: 'Home' },
                                { title: breadcrumbTitle }
                            ]}
                            itemRender={(route) => (
                                <span className={Style.breadcrumb} style={{ color: 'var(--color-bg)' }}>
                                    {route.title}
                                </span>
                            )}
                        />
                    </Flex>
                </Header>
                <Content style={{ padding: '24px 16px ', overflow: 'auto' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminViewLayout