import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  
`;
const Top = styled.div`
  background-color: #f9ecd9;
  display: flex;
  width: 100%;
  padding-top: 20px;
  @media only screen and (max-width: 768px) {
    height: 45%;
    flex-direction: column;
  }
`;
const TopLeft = styled.div`
  width: 50%;
  padding: 40px 30px 80px 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 20px 10px 50px 40px;
    width: 100%;
  }
  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;
const TopLeftTitle = styled.div`
  color: #302519;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;
const TopLeftDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    line-height: 25px;
  }
`;
const TopLeftExtra = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgb(100, 92, 45);
`;
const TopRight = styled.div`
  width: 50%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const TopRightCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Center = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const CenterLeft = styled.div`
  width: 50%;
  height: 100%;
  /* overflow: hidden; */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const CenterRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #f9ecd9;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const CenterRightWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 50px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;
const CenterRightTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: brown;
  margin-bottom: 20px;
  text-align: center;
`;
const CenterRightText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const Bottom = styled.div`
  width: 100%;
  background-color: #c8a46b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  @media only screen and (max-width: 380px) {
    padding: 10px;
    text-align: center;
  }
`;
const BottomTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;
const BottomText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

const Advert = () => {
  return (
    <Container>
      <Top>
        <TopLeft>
          <TopLeftTitle>Lorem ipsum dolor sit amet.</TopLeftTitle>
          <TopLeftDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            laudantium aut assumenda vitae necessitatibus doloremque autem.
            Debitis totam laborum recusandae cumque voluptatem qui eius, dolorem
            animi quae, aliquid quibusdam nihil.
          </TopLeftDesc>
          <TopLeftExtra>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </TopLeftExtra>
        </TopLeft>
        <TopRight>
          <TopRightCon>
            <Image
              src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/9364AC81-C9DB-CC39-BFBA-9C6C671B6E89.png"
              alt=""
            />
          </TopRightCon>
        </TopRight>
      </Top>
      <Center>
        <CenterLeft>
          <Image
            src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/CB54AA9F-62A4-5F27-8EDC-FABF2B5D52AB.png"
            alt=""
          />
        </CenterLeft>
        <CenterRight>
          <CenterRightWrapper>
            <CenterRightTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </CenterRightTitle>
            <CenterRightText>
              Lorem ipsum dolor sit amet.
            </CenterRightText>
            <CenterRightText>Lorem, ipsum.</CenterRightText>
            <CenterRightText>Lorem, ipsum. </CenterRightText>
            <CenterRightText>Lorem, ipsum dolor.</CenterRightText>
            <CenterRightText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum.
            </CenterRightText>
          </CenterRightWrapper>
        </CenterRight>
      </Center>
      <Bottom>
        <BottomTitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </BottomTitle>
        <BottomText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut dolor cum sunt cumque.
        </BottomText>
      </Bottom>
    </Container>
  );
};

export default Advert;
