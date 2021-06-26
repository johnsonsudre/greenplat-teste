import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleApp = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
* {
    font-family: 'Roboto', sans-serif;
  }
`;

export const HeaderBox = styled.div`
  opacity: 1;
  padding: 0px;
  margin: 0px;
  border: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
`;

export const Logo = styled.img`
  padding-top: 22px;
  padding-left: 20px;
  width: 146px;
  height: 38px;
  align-self: baseline;
`;

export const Container = styled.div`
  padding: 0 10px;
  @media (min-width: 90%) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const ContentApp = styled.div`
  padding: 35px 49px;
  margin: 0px;
  border: 0px;
`;

export const FormHeader = styled.div`
  height: 60px;
  width: 100%;
  color: #515151;
  opacity: 1;
  display: flex;
  align-items: center;
`;

export const FormUserIcon = styled.img`
  position: absolute;
  display: inline-block;
  justify-self: start;
  width: 60px;
  height: 60px;
`;

export const FormTitle = styled.div`
  margin: 0px;
  width: 100%;
  position: relative;
  p {
    display: inline;
    font-size: 25px;
    margin: 0px;
    padding-left: 70px;
  }
  span {
    font-size: 13px;
    position: absolute;
    bottom: -20px;
    right: 0px;
  }
`;

export const FormUser = styled.form`
  width: 100%;
  div {
    display: block;
    div {
      div {
        padding-bottom: 20px;
        display: inline-block;
        label {
          display: block;
          font-size: 15px;
          padding-bottom: 5px;
        }
        input,
        select {
          height: 30px;
          background: #ffffff;
          border: 1px solid #d0d0d0;
          border-radius: 4px;
        }
        button {
          display: inline-block;
          border: none;
          width: 95%;
          height: 30px;
          margin: 0;
          border-radius: 4px;
          text-decoration: none;
          background: #5cac21 0% 0% no-repeat padding-box;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: background 250ms ease-in-out, transform 150ms ease;
          img {
            width: 14px;
            padding-right: 12px;
          }
        }

        button:hover,
        button:focus {
          background: #6ac626;
        }

        button:active {
          transform: scale(0.99);
        }
      }
    }
  }
`;

export const ListUsers = styled.div`
  display: block;
  width: 100%;
  padding: 10px 0px;
  table {
    border-radius: 4px;
    border-spacing: 1px 1px;
    width: inherit;
    background: #d0d0d0 0% 0% no-repeat padding-box;
    tr {
      th {
        background: #e0e0e0 0% 0% no-repeat padding-box;
        font-size: 14px;
        color: #101010;
        text-align: left;
        padding-left: 10px;
        text-transform: uppercase;
        height: 40px;
      }
    }
    tr {
      td {
        padding: 0px 10px;
        cursor: pointer;
        background: #ffffff 0% 0% no-repeat padding-box;
        color: #101010;
        height: 40px;
        font-size: 14px;
        color: #303030;
        div {
          text-align: center;
        }
      }
    }

    tr:hover {
      background-color: #5cac2166;
    }
  }
`;

export const BoxUsers = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 2px #00000067;
  border-radius: 4px;
  opacity: 1;
  padding: 20px;
`;

export default {
  GlobalStyleApp,
  HeaderBox,
  Logo,
  Container,
  ContentApp,
  FormHeader,
  FormTitle,
  FormUserIcon,
  FormUser,
  ListUsers,
  BoxUsers,
};
