import styled from "@emotion/styled";

export const Container = styled.div`
width: 420px;
margin: 0 auto 60px auto;
background-color: #fff;
border-radius: 6px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
text-align: center;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {
    transform: scale(1.02);
}
`

export const Image = styled.img`
margin: 0 auto 30px auto;
width: 120px;
border: 1px solid gray;
border-radius: 50%;
`

export const TopBox = styled.div`
padding: 25px 0 25px 0;

`

export const InfoMainText = styled.p`
margin-bottom: 8px;
font-size: 24px;
line-height: 1.33;
color: #000;
`

export const InfoText = styled.p`
color:gray;
font-size: 16px;
line-height: 1.17;
:not(:last-of-type) {
    margin-bottom: 8px;
}
`

export const BottomBox = styled.ul`
display: flex;
align-items: center;
border-top: 1px solid darkgray;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`

export const BottomBoxItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 33.3333%;
min-height: 80px;
background-color: #EEEEEE;

:first-of-type {
    border-right: 1px solid darkgray;
    border-bottom-left-radius: 6px;
}

:last-of-type {
    border-left: 1px solid darkgray;
    border-bottom-right-radius: 6px;
}
`

export const BottomMainText = styled.span`
color: gray;
margin-bottom: 6px;
font-size: 15px;
line-height: 1.17;
`

export const BottomSecondaryText = styled.span`
color: #000;
font-size: 16px;
line-height: 1.33;
`