/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 21px;
  background-color: ${({ main }) => (main === 'main' ? 'none' : '#c8aa9b')};
`;
const LoginBtn = styled.button`
  width: 110px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: ${({ main }) => (main === 'main' ? '#fff' : '#000')};
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;
const LogoutBtn = styled.button`
  width: 60px;
  height: 20px;
  background: none;
  font-weight: 500;
  padding: 4px;
  border: none;
  cursor: pointer;
  z-index: 10;
  color: ${({ main }) => (main === 'main' ? '#fff' : '#000')};
  &:hover {
    cursor: pointer;
  }
`;

const Greeting = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding: 0 10px 0 0;
  color: ${({ main }) => (main === 'main' ? '#fff' : '#000')};
`;

export default function TopBar({
  isLogin,
  modalHandler,
  loginId,
  main,
}) {

  return (
    <TopBarDiv main={main}>
      {isLogin ? (
        <>
          <Greeting main={main}>{loginId}님 반가워요!</Greeting>
          <LogoutBtn main={main} onClick={modalHandler}>
            로그아웃
          </LogoutBtn>
        </>
      ) : (
        <LoginBtn main={main} onClick={modalHandler}>
          로그인/회원가입
        </LoginBtn>
      )}
    </TopBarDiv>
  );
}
