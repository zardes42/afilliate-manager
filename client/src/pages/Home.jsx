import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import AfilliateForm from '../components/AfilliateForm';
import {DefaultHead,DefaultTitle,DefaultContent} from '../styles/styles'
import AfilliateList from '../components/AfilliateList';

const Container = styled.div`
    width: 100%;
    display: flex;
    background-color:rgba(255, 255, 255, 0.212);


`
const Body = styled.div`
display: flex;
flex-direction: column;
margin: 0 30px;
width: 100%;

`
const Section = styled.div`
    margin-bottom:40px;
`
const Head = styled(DefaultHead)``
const Title = styled(DefaultTitle)``
const Content = styled(DefaultContent)``
const Card = styled.div` 
    flex: 1;
    max-width: 200px;
    height: 150px;
    border-radius: 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const CardInfo = styled.div`
    padding: 15px;
    max-width: 100%;
    height: 100%;
    position: relative;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopTitle = styled.p`
    font-size:16px;
`
const Bottom = styled.div`
    position: absolute;
    bottom: 30%;
    left: 10%;
    `
const Value = styled.span`
    font-weight: 600;
    font-size: 40px;
`


const Home = () => {

    let iconSize = '25' ;
    let iconColor = '#393744';


  return (
    <Container>
        <NavBar />
        <Body>
            <SearchBar />
            <Section>
                <Title>Actions available</Title>
                <Content>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Afilliates</TopTitle>
                                <Icon icon="bi:person"  width="25" height="25" color="#393744" />
                            </Top>
                            <Bottom>
                                <Value>0</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Total Orders</TopTitle>
                                <Icon icon="eva:shopping-cart-outline"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>0</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Completed Orders</TopTitle>
                                <Icon icon="ic:round-done"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>0</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                    <Card>
                        <CardInfo >
                            <Top>
                                <TopTitle>Add Afilliates</TopTitle>
                                <Icon icon="ic:baseline-person-add-alt"  width={iconSize} height={iconSize} color={iconColor} />
                            </Top>
                            <Bottom>
                                <Value>0</Value>
                            </Bottom>
                        </CardInfo>
                    </Card>
                </Content>
            </Section>
            <Section>
                <Title>Add New Afilliate</Title>
                <Content>
                    <AfilliateForm />
                </Content>
            </Section>
            <Section>
                <AfilliateList />
            </Section>
            
            
        </Body>
        
    </Container>
  )
}

export default Home