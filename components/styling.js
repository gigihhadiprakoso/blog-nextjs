import styled from 'styled-components';

{/* General */}
export const Wrapper = styled.div`
    padding-top:6em;
    padding-bottom:6em;
    padding-left:14em;
    padding-right:14em;
`;

export const Row = styled.div`
    &:after{
        content: "";
        clear: both;
        display: table;
    }
`;

export const Column1 = styled.div`
    width: 8.33%;
    float:left;
`;
export const Column2 = styled.div`
    width: 16.66%;
    float:left;
`;
export const Column3 = styled.div`
    width: 25%;
    float:left
`;
export const Column4 = styled.div`
    width: 33.33%;
    float:left;
`;
export const Column5 = styled.div`
    width: 41.66%;
    float: left;
`;
export const Column6 = styled.div`
    width: 50%;
    float:left;
`;
export const Column7 = styled.div`
    width: 58.33%;
    float:left;
`;
export const Column8 = styled.div`
    width: 66.66%;
    float:left;
`;
export const Column9 = styled.div`
    width: 75%;
    float:left;
`;
export const Column10 = styled.div`
    width: 83.33%;
    float:left;
`;
export const Column11 = styled.div`
    width: 91.66%;
    float:left;
`;
export const Column12 = styled.div`
    width: 100%;
    float:left;
`;


{/* Content */}
export const ImageContent = styled.img`
    width:200px;
    height:100%;
`;
export const Category = styled.span`
    color:pink
`;
export const Title = styled.h3``;
export const Description = styled.div`
    float:bottom;
    ${props=>
        props.paragraph?
            "text-indent:4em;margin-bottom:2em":
            ""
    }
`;
export const MyDate = styled.div`
    color:#D4D5D4;
    margin-bottom:1em;
    font-size:10pt;
`;

{/* Navigation */}
export const Menu = styled.ul`
    text-align:center;
`;
export const ItemMenu = styled.li`
    width:auto;
    display:inline-block;
    margin-right:2em;
    margin-left:2em
`;
export const ItemNavigation = styled.li`
    width:auto;
    display:inline-block;
    margin-right:1em;
    margin-left:1em;
    float: ${props=>props.end?"right":""}
`;
export const Navigation = styled.ul`
`;
export const UpperMenu = styled.div`
    margin-bottom:2em
`;


const MenuFooter = styled.ul`
    list-style: none;
    padding-left: 0;
`;
const ItemMenuFooter = styled.li`
    list-style-type:none;
    margin:0;
    padding:0
`;
export const FooterStyle = {
    "Menu":MenuFooter,
    "ItemMenu":ItemMenuFooter
};