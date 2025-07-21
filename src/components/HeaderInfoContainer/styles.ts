import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    gap:${p => p.theme.sizes.sm} ;


`;

export const SubContainer = styled.div`
   
   padding-left : 10px;

   flex: 1;

   display: flex;
   flex-direction: column;
   justify-content: center;

    overflow: hidden;

   > h3 {
      font-size: 14px;
      color: ${p => p.theme.colors.text};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }

`;

export const ImgContainer = styled.div`


   display: flex;
   align-items: center;
   justify-content: center;

   > svg {
        color: ${p => p.theme.colors.blue};
        height: 50px;
        width: 50px;
   }

`;