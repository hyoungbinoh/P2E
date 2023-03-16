import React from "react";
import styled from "styled-components";

const System = () => {
  return (
    <>
      <Title>StepWAR System</Title>
      <SystemWrap>
        <SystemInfo>
          <h3>Random Box</h3>
          <img src="img/RandomBox.svg" alt="RandomBox" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
        <SystemInfo>
          <h3>Collection</h3>
          <img src="img/Collection.svg" alt="Collection" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
        <SystemInfo>
          <h3>Staking</h3>
          <img src="img/Stacking.svg" alt="Staking" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
      </SystemWrap>
      <SystemWrap>
        <SystemInfo>
          <h3>Generation</h3>
          <img src="img/Generation.svg" alt="Generation" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
        <SystemInfo>
          <h3>Green Zone</h3>
          <img src="img/GreenZone.svg" alt="GreenZone" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
        <SystemInfo>
          <h3>AR</h3>
          <img src="img/AR.svg" alt="AR" />
          <hr />
          <p>Coming Soon...</p>
        </SystemInfo>
      </SystemWrap>
    </>
  );
};

const Title = styled.h2`
  background: linear-gradient(to right, #fff, #efc3fe);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 7rem;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 600;
  margin: 20px auto 60px auto;
  transition: all 2s ease;
`

const SystemWrap = styled.div`
  display:flex;
`
const SystemInfo = styled.div`
  width: 24rem;
  height: 25rem;
  margin: 2rem;
  color: #fff;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  transition: all 2s ease;
  border: solid 0px;
  border-radius: 25px;
  z-index: 5;
  & ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 3px;
    border-radius: 25px;
    background: linear-gradient(to right, #FC46B0, #53C9EC);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
            mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
  & h3 {
    font-size: 2rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    color: #fff;
    margin:4rem auto 1.5rem auto;
    transition: all 2s ease;
  }
  & img {
    width: 3.6rem;
    margin: 1rem auto;
    transition: all 2s ease;
  }
  & hr {
    width: 2rem;
    margin: 10px auto;
    color: #fff;
    transition: all 2s ease;
  }
  & p {
    font-size: 1.5rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    color: #fff;
    margin: 3rem auto;
    transition: all 2s ease;
  }
`

export default System;