
import { Link } from 'react-router-dom';
function BannerCard() {

    return (
        <div className='card-container'>
            <h1>GAME OF THE DAY</h1>
            <div className='banner-content light-mode-card-background'>
                <img src="https://img.freepik.com/premium-vector/pixel-art-male-character-holding-shotgun-isolated-white-background_658931-165.jpg?w=740" alt="" />
                <div className='banner-description'>
                    <h2>
                        TARGET TIME TRIAL
                    </h2>
                    <p>
                        How many targets can you hit in fifteen seconds? There&apos;s only one way to find out... by playing the best target shooting game the world has ever seen.
                        <br />
                        <br />
                        *that statement may be untrue
                        <br />
                        <br />
                        **game may speed up on it&apos;s own for no reason due to bugs...
                    </p>
                    <Link to={'/game/SHOOTINGGAME'}>Link to game &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default BannerCard