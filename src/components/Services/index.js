import React from 'react'
import  Icon1 from '../../images/offroad.svg'
import  Icon2 from '../../images/savings.svg'
import  Icon3 from '../../images/team.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard, ServicesIcon,ServicesP,ServicesH2} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expences</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual offices</ServicesH2>
                        <ServicesP>You can access our platform anywhere anytime</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
