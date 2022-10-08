import styled from "@emotion/styled";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const Box = styled.section`
width: 500px;
margin: 0 auto 60px auto;
background-color: #fff;
border-radius: 4px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`

export const Title = styled.h2`
padding: 30px 0;
font-size: 36px;
line-height: 1.33;
`

export const List = styled.ul`
display: flex;
align-items: center;
`
export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 20%;
min-height: 80px;
background-color: ${getRandomHexColor()};

border-bottom-left-radius: 50px;

:not(:last-child) {
    border-right: 1px solid #EEEEEE;
}
`
export const ItemLabel = styled.span`
margin-bottom: 6px;
color: #fff;
font-size: 15px;
line-height: 1.17;
`

export const ItemValue = styled.span`
color:#fff;
font-size: 20px;
line-height: 1.33;
`