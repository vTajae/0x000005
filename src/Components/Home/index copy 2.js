import React from 'react';
import styled from 'styled-components';

const CompanySection = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 48px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #f50057;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const TitleCard = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const TextCard = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
`;

const Home = () => {
  return (
    <CompanySection>
      <Container>
        <Title>About Our Company</Title>
        <Grid>
          <Card>
            <IconWrapper>
              <i className="fas fa-briefcase"></i>
            </IconWrapper>
            <TitleCard>Professional Team</TitleCard>
            <TextCard>We have a team of experienced professionals who are committed to providing the best solutions for your business needs.</TextCard>
          </Card>
          <Card>
            <IconWrapper>
              <i className="fas fa-handshake"></i>
            </IconWrapper>
            <TitleCard>Customer Satisfaction</TitleCard>
            <TextCard>Our top priority is customer satisfaction. We work closely with our clients to ensure that we meet their expectations and deliver the best results.</TextCard>
          </Card>
          <Card>
            <IconWrapper>
              <i className="fas fa-star"></i>
            </IconWrapper>
            <TitleCard>Quality Services</TitleCard>
            <TextCard>We take pride in the quality of our services. We use the latest technologies and techniques to deliver top-notch solutions that meet your business needs.</TextCard>
          </Card>
        </Grid>
      </Container>
    </CompanySection>
  );
};

export default Home;
