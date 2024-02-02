import styled from 'styled-components';

export const SFooter = styled.footer`
   position: absolute;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 50px;
   background-color: #00a75d;

   @media (max-width: 600px) {
      position: relative;
      bottom: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 50px;
   }
`;

const Footer = () => {
   return <SFooter>@Copyright</SFooter>;
};

export default Footer;
