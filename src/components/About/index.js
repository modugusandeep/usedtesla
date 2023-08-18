import Header from "../Header";
import Persons from "../Persons";
import Footer from "../Footer";

import "./index.css";

const aboutAPP="Sell My Used Tesla is a marketplace for current owners of Tesla vehicles to sell their cars. The company has made it simple and safe to sell your car, with no commission, no hassle. Sellers can post a listing in seconds, manage the process from start to finish. We love Tesla’s because they are changing the way we use energy around the world by building sustainable products that will change our lives for generations - while fighting climate change and reducing dependence on fossil fuels. We have created this site as an extension of that mission - to help more people buy these amazing cars without any barriers or friction so we can move quickly towards a sustainable future together!"
const team=[
    {
        id:1,
        imageUrl: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
        name: "Nick Wood",
        content: "Nick Wood has been working in the Tech sector since 1993, he was the founder of one of New Zealand and Australia's largest Internet Service Provider IHUG, which in 2003 was sold to IInet in Australia, since then Nick has developed and operates multiple hotels in the South Pacific, and has investments in several Tech startups, Nick is a Tesla Enthusiast and strong supporter of the community and Mission."
    },
{
    id:2,
    name: "Sunil Prabhakar",
    imageUrl: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
    content: "As a Co-Founder, Sunil handles product and business development activities at Trabacus. He is very passionate about technology and has been the driving architect of the Trabacus system. He uses his thorough understanding of software development to constantly improve our SAAS solutions. He is a Computer Engineer with a PGDM in Systems & Finance."
},
{
    id: 3,
    name: "Arun Kalikeri",
    imageUrl: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
    content: "Arun is a Co-Founder at Trabacus. He is responsible for technology and cloud infrastructure at Trabacus. A researcher by nature, he is constantly looking for technologies that can make life easier for the tech team. He also assists and developers in their efforts. He brings with him over 7 years of experience in building and managing teams and companies. Arun holds a Masters degree in Computer Applications."
},
{
    id: 4,
    name: "Murali Shankar",
    imageUrl: "https://www.sellmyusedtesla.com/web/image?model=product.template&id=815&field=image_512",
    content: "Murali manages the tech team at Trabacus. He is responsible for all development pertaining to the product and time completion of the same. He brings with him over seven years of experience handling ERP projects across industries. He has been responsible for all our products since the ideation stage. With his vast experience in software development, he is very quick in understanding requirements and devising robust solutions."
}
]
const About = () => {
    return(
        <div>
            <Header/>
            <div className="body">
                <h3>About</h3>
                <p style={{padding:"45px"}}>{aboutAPP}</p>
            </div>
            <h3 style={{textAlign: "center"}}>Our Team</h3>
            <ul className="ul-list">
                {team.map(eachOne=> <Persons key={eachOne.id} details={eachOne}/>)}
            </ul>
            <Footer/>
        </div>
    )

}
export default About