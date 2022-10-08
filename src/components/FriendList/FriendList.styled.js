import styled from "@emotion/styled";

export const BoxList = styled.ul`
width: 420px;
margin: 0 auto 60px auto;
background-color: transparent;
border-radius: 6px;
text-align: center;
`

export const BoxItem = styled.li`
display: flex;
align-items: center;
min-height: 80px;
padding: 12px;
border-radius: 6px;
background-color: rgb(141, 214, 214);
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
:not(:last-of-type) {
    margin-bottom: 10px;
}
`

export const IsOnlineSymbol = styled.span`
width: 25px;
height: 25px;
margin-right: 12px;
border-radius: 50%;
flex-shrink:0;
background-color: ${(p) => {
    return p.active ? 'green' : 'red';
}};
`

export const Image = styled.img`
width: 80px;
height: 80px;
margin-right: 12px;
border-radius: 8px;
background-color: #fff;
`

export const FriendName = styled.p`
display: flex;
align-items: center;
width: 100%;
min-height: 80px;
font-size: 30px;
line-height: 1.33;
`
