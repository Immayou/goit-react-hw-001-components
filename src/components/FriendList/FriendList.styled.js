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
width: 100%;
min-height: 80px;
border-radius: 6px;
background-color: #fff;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
:not(:last-child) {
    margin-bottom: 10px;
}
`

export const Image = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
`

export const FriendName = styled.p`
display: flex;
align-items: center;
width: 100%;
min-height: 80px;
font-size: 30px;
line-height: 1.33;
`
