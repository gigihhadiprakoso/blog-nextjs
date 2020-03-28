import styled from 'styled-components';
import {Wrapper, FooterStyle, Column4, Row} from './styling';

const BackgroundFooter=styled.div`
    background-color:#ededed
`;

const Footer=()=>(
    <BackgroundFooter>
        <Wrapper>
            <Row>
            <Column4>
                <div><b>Informasi</b></div>
                <FooterStyle.Menu>
                    <FooterStyle.ItemMenu>Tentang kami</FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>Syarat penggunaan</FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>Ketentuan privasi</FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>Kontak kami</FooterStyle.ItemMenu>
                </FooterStyle.Menu>
            </Column4>
            <Column4>
                <div><b>Bantuan</b></div>
                <FooterStyle.Menu>
                    <FooterStyle.ItemMenu>Bayar ditempat</FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>Cara Pemesanan</FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>Ketentuan Pengembalian</FooterStyle.ItemMenu>
                </FooterStyle.Menu>
            </Column4>
            <Column4>
                <div><b>Ikuti Kami</b></div>
                <FooterStyle.Menu>
                    <FooterStyle.ItemMenu>
                        <i className="fab fa-facebook-square" style={{color: "rgb(59, 91, 152)"}} aria-hidden="true"></i>&nbsp;&nbsp;Facebook
                    </FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>
                        <i className="fab fa-instagram" 
                            style={{color: "#f77737"}}></i>&nbsp;&nbsp;Instagram
                    </FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>
                        <i className="fab fa-twitter" style={{color: "#00acee"}} aria-hidden="true"></i>&nbsp;&nbsp;Twitter
                    </FooterStyle.ItemMenu>
                    <FooterStyle.ItemMenu>
                    <i className="fab fa-whatsapp" style={{color: "#075e54"}} aria-hidden="true"></i>&nbsp;&nbsp;WhatsApp
                    </FooterStyle.ItemMenu>
                </FooterStyle.Menu>
            </Column4>
            </Row>
        </Wrapper>
    </BackgroundFooter>
)

export default Footer;