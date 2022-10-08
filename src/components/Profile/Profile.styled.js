import styled from "@emotion/styled";

export const Container = styled.div`
width: 420px;
background-color: #fff;
border-radius: 6px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
text-align: center;
`

export const Image = styled.img`
margin: 0 auto 30px auto;

width: 120px;
border: 1px solid gray;
border-radius: 50%;
`

export const TopBox = styled.div`
padding: 30px 0 30px 0;
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
:not(:last-child) {
    margin-bottom: 8px;
}
`

export const BottomBox = styled.ul`
display: flex;
align-items: center;
`

export const BottomBoxItem = styled.li`
width: 33.3333%;
min-height: 80px;

`