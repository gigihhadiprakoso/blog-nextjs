import { ImageContent, 
    Category, 
    Title,
    Description,
    Column3,
    Column9, Row
    } from './styling';
import styled from 'styled-components';
import Link from 'next/link';

const Item = styled.div`
    max-height:200px;
    overflow:auto;
    margin-bottom:1.3em;
`;

const ItemContent=()=>(
    <Item>
        <Row>
            <Column3>
                <ImageContent src="https://image.freepik.com/free-photo/happy-woman-coat-with-many-shopping-nets_23-2148316410.jpg" />
            </Column3>
            <Column9>
                <Category>Life Style</Category>
                <Title>
                    <Link href="/detail_page">
                        Contoh Judul Blog
                    </Link>
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat.
                    Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Libero id faucibus nisl tincidunt eget nullam non nisi
                </Description>
            </Column9>
        </Row>
    </Item>
);

export default ItemContent;