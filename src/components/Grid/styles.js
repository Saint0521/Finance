import styled from"styled-components";

export const Table =styled.table`
    width:98%; 
    background-color:#90EE90;
    padding:20px;
    box-shadow: 0px 0px 5px #3CB371;
    border-radius:5px;
    max-width:1120px;
    margin:0 auto;
`;
    
export const Thead =styled.thead``;
export const Tbody =styled.tbody``;
export const Tr =styled.tr``;

export const Th =styled.th`
    border-bottom:inset;
    padding-bottom:5px;
    text-align:${(props) =>(props.alignCenter ?"center":"start")};
    width:${(props) =>(props.width ?props.width +"%":"auto")};
`;