import React from 'react'
import FindYourPetStyle from "@/Presentation/components/FindYourPet/FindYourPet.module.scss";
import Style from './LoginSection.module.scss'
import Image from 'next/image'
import Login from "@/Presentation/components/Login"

const LoginSection = () => {
    return (
        <>
            <div className={`${FindYourPetStyle.wrapper} ${Style.wrapper}`}>
                <div className={FindYourPetStyle.background}></div>
            </div>
            <div className={Style.blob}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
                    <path fill="#FFAF45" />
                </svg>
            </div>
            <div className={Style.blob1}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
                    <path fill="#FFAF45" />
                </svg>
            </div>
            <div className={Style.blob2}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%">
                    <path fill="#FFAF45" />
                </svg>
            </div>
            <div className={Style.loginBoxContainer}>
                <Image
                    src="/Logo Full color claro.svg"
                    priority
                    alt="Logo"
                    width={310}
                    height={225}
                    className={Style.logo}
                />
                <Login/>
            </div>
        </>
    );
}

export default LoginSection