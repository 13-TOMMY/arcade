
import { Link } from 'react-router-dom';
function BannerCard() {

    return (
        <div className='banner-card-container light-mode-card-background'>
            <h1>GAME OF THE DAY</h1>
            <div className='banner-content'>
                <img src="https://img.freepik.com/free-vector/pixel-art-vacation-background_52683-86708.jpg?w=1800&t=st=1701958646~exp=1701959246~hmac=f716b3433cca7288f0218f92a78153521fa97b4d80ab74458ca407ec63edc97c" alt="" />
                <div className='banner-description'>
                    <h2>
                        PIXEL ADVENTURE
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam minus officiis nulla veritatis aliquid vero quod labore quae aliquam libero consequuntur ducimus nobis assumenda atque, necessitatibus tempore ex error eius.
                        Nobis doloribus similique sunt blanditiis quibusdam facere maxime dolorem quas qui quia, deserunt corrupti esse cum harum ratione aliquid itaque minima ut voluptatum temporibus accusantium libero inventore facilis! Hic, nulla.
                    </p>
                    <Link to='#'>Link to game &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default BannerCard