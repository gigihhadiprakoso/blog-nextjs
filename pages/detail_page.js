import Header from '../components/header';
import Footer from '../components/footer';
import { FooterStyle, Category, Wrapper, Title, Description, MyDate } from '../components/styling';

const Detail=()=>(
    <div>
        <Header />
        <img src="https://cdn.pixabay.com/photo/2017/03/21/20/47/shopping-2163323_960_720.jpg"
            style={{
                marginLeft:"auto",
                marginRight:"auto","display":"block",
                marginTop:"3em"}}/>
        
        <Wrapper>
            <Category>Life Style</Category>
            <Title>Contoh Judul Blog</Title>
            <MyDate>17 Februari 2019</MyDate>
            <Description paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis tempus iaculis. Mauris nulla sapien, 
                laoreet id ligula interdum, tincidunt efficitur sem. Etiam dignissim, sapien non porta ultrices, urna urna maximus lectus, 
                eu tincidunt velit ipsum vel mi. Nullam tortor nisl, molestie sit amet fermentum sit amet, egestas ut purus. Aenean nulla nisi, 
                sollicitudin in viverra vitae, ullamcorper a orci. Nullam nec justo vitae dui commodo rhoncus. In at libero a felis rutrum dictum. 
                Sed egestas suscipit justo, a tincidunt ex faucibus ut. Pellentesque a neque eu nisi condimentum varius. Vivamus vehicula 
                accumsan tellus.
            </Description>
            <Description paragraph>
                Cras suscipit posuere massa, et lacinia leo ullamcorper sit amet. Donec est enim, vulputate in ornare et, bibendum in felis. 
                Aliquam eleifend lobortis quam, eu tristique nisl laoreet in. Nam maximus massa sit amet ornare malesuada. Duis fringilla eget odio sed pulvinar. 
                Donec vitae quam neque. Nulla sit amet eros metus. Donec rhoncus, arcu in sollicitudin pulvinar, diam purus venenatis augue, quis maximus felis 
                erat ut sem. Suspendisse potenti. Vestibulum scelerisque pharetra dolor, in ullamcorper sem. Suspendisse at blandit metus. Pellentesque feugiat sagittis tortor eget cursus. 
            </Description>
        </Wrapper>
        <Footer />
    </div>
)

export default Detail;