import Header from '../components/header';
import {Wrapper} from '../components/styling';
import Contents from '../components/list_content';
import Footer from '../components/footer';

const Index=()=>(
    <div>
        <Header />
        <img src="https://cdn.pixabay.com/photo/2016/11/23/17/08/bag-1853847_960_720.jpg" 
            width="100%"
            style={{
            marginLeft:"auto",
            marginRight:"auto","display":"block",
            marginTop:"3em",
            marginBottom:"3em"}}/>
        <Wrapper>
            <Contents />
        </Wrapper>
        <Footer />
    </div>
)

export default Index;