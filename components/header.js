import Head from 'next/head';
import {Menu, 
    ItemMenu,
    UpperMenu,
    Navigation,
    ItemNavigation} from '../components/styling';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing:border-box
    } 
    html {
      font-family: "Lucida Sans", sans-serif;
    } 
    body {
      margin:0px;
    }
`;

const Header=()=>(
    <div>
        <GlobalStyle whiteColor />
        <Head>
            <title>Blog NextJS</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js" integrity="sha256-MAgcygDRahs+F/Nk5Vz387whB4kSK9NXlDN3w58LLq0=" crossOrigin="anonymous"></script>
        </Head>
        <UpperMenu>
            <Navigation>
                <ItemNavigation><i className="fab fa-facebook-f" aria-hidden="true"></i></ItemNavigation>
                <ItemNavigation><i className="fab fa-twitter" aria-hidden="true"></i></ItemNavigation>
                <ItemNavigation><i className="fab fa-instagram" aria-hidden="true"></i></ItemNavigation>
                <ItemNavigation><i className="fab fa-whatsapp" aria-hidden="true"></i></ItemNavigation>
                <ItemNavigation end><i className="fas fa-shopping-bag" aria-hidden="true"></i> Keranjang</ItemNavigation>
                <ItemNavigation end><i className="fas fa-user" aria-hidden="true"></i> Login/Daftar</ItemNavigation>
                <ItemNavigation end><i className="fas fa-search" aria-hidden="true"></i></ItemNavigation>
            </Navigation>
        </UpperMenu>
        <hr />
        <Menu>
            <ItemMenu><Link href="/">Home</Link></ItemMenu>
            <ItemMenu><Link href="/">New Arrival</Link></ItemMenu>
            <ItemMenu><Link href="/">Tas Besar</Link></ItemMenu>
            <ItemMenu><Link href="/">Tas Kecil</Link></ItemMenu>
            <ItemMenu><Link href="/">Tas Punggung</Link></ItemMenu>
            <ItemMenu><Link href="/">Promo</Link></ItemMenu>
            <ItemMenu><Link href="/">Blog</Link></ItemMenu>
        </Menu>
        <hr />
</div>
)

export default Header;