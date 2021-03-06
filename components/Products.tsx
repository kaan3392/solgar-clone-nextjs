import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { products } from "../data";
import { Dot, Dots } from "./Slider";
import Image from "next/image";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fffaf3;
  padding: 40px 0px;
  @media only screen and (max-width: 768px) {
    height: calc(80vh - 85px);
  }
  @media only screen and (max-width: 380px) {
    height: calc(90vh - 85px);
    padding: 20px 0px;
  }
`;

const Wrapper = styled.div`
  margin: 0px 200px;
  @media only screen and (max-width: 768px) {
    margin: 0 50px;
  }
  @media only screen and (max-width: 380px) {
    margin: 0 10px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.span`
  letter-spacing: 0.3rem;
  margin-bottom: 15px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const SubTitle = styled.h1`
  color: #802c1c;
  font-size: 24px;
  letter-spacing: 0.1rem;
  margin-bottom: 15px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 380px) {
    letter-spacing: 1px;
    text-align: center;
    font-size: 22px;
  }
`;

const Info = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 500;
  @media only screen and (max-width: 380px) {
    line-height: 1.8rem;
  }
`;

const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Arrow = styled.div`
  top: 50%;
  position: absolute;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
`;

const ImgCon = styled.div`
  display: flex;
  width: 100%;
  transition: all 1s ease;
`;

const PContainer = styled.div`
  min-width: 33%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    min-width: 50%;
  }
  @media only screen and (max-width: 380px) {
    min-width: 100%;
    height: 300px;
  }
`;

const PImg = styled.div`
  height: 90%;
  width: 70%;
  position: relative;
  cursor: pointer;
`;

const PCat = styled.span`
  color: rgb(143, 126, 34);
`;

const PTitle = styled.h2`
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Products = () => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [numberOfProductShown, setNumberOfProductShown] = useState<any>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : products.length - numberOfProductShown);
    }
    if (direction === "right") {
      setIndex(index < products.length - numberOfProductShown ? index + 1 : 0);
    }
  };
 
  useEffect(() => {
    if (!slideRef.current) {
      return;
    }
    setSlideWidth(slideRef.current.clientWidth);
    if (!imgRef.current) {
      return;
    }
    imgRef.current.style.transform = `translateX(${-slideWidth * index}px)`;
    setNumberOfProductShown(
      Math.round(imgRef.current.clientWidth / slideRef.current.clientWidth)
    );
  }, [index, slideWidth]);


  const DotsLoop: React.FunctionComponent = () => {
    return (
      <Dots>
        {[...Array(products.length - numberOfProductShown + 1)].map((e, i) => {
          return <Dot key={i} active={index === i}></Dot>;
        })}
      </Dots>
    );
  };

  return (
    <Container>
      <Wrapper>
        <Text>
          <Title>SOLGAR V??TAM??N</Title>
          <SubTitle>S??Z??N ??????N GEL????T??R??LM???? YEN??L??K???? ??R??NLER</SubTitle>
          <Info>
            Solgar?? olarak, ihtiyac??n??z olan deste??i, ihtiya?? duydu??unuz anda
            size sunmak i??in y??ksek kaliteli bile??enleri bir araya getiren
            benzersiz, yenilik??i ??r??nler yaratmaya kendimizi adad??k.
          </Info>
        </Text>
        <Slider>
          <Arrow style={{ left: 10 }} onClick={() => handleClick("left")}>
            <ArrowBack />
          </Arrow>
          <ImgCon ref={imgRef}>
            {products.map((product) => (
              <PContainer key={product.id} ref={slideRef}>
                <PImg>
                  <Image
                    src={product.img}
                    alt=""
                    objectFit="contain"
                    layout="fill"
                    priority
                  />
                </PImg>
                <PCat className="productCat">{product.categories}</PCat>
                <PTitle className="productTitle">{product.title}</PTitle>
              </PContainer>
            ))}
          </ImgCon>
          <Arrow style={{ right: 10 }} onClick={() => handleClick("right")}>
            <ArrowForward />
          </Arrow>
        </Slider>
      </Wrapper>
      <DotsLoop />
    </Container>
  );
};

export default Products;
