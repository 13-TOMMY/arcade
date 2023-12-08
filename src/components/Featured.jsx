import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Featured() {

    //placeholder content
    const games = {
        name: [
            "PIXEL ADVENTURE",
            "DINO CRYSIS",
            "EXTREME RACING 3"
        ],
        description: [
            "A super fun game with PIXELS!",
            "Stop the dinosaurs before they break free from their ancient prison!",
            "Race to survive in this arcade, high-octane blast!"
        ]
    };

    const totalGames = games.name.length;

    const [featured, setFeatured] = useState(0);

    const updateFeatured = (addition) => {
        const newIndex = (featured + addition + totalGames) % totalGames;
        setFeatured(newIndex);
    }

    const previousGameIndex = (featured - 1 + totalGames) % totalGames;
    const nextGameIndex = (featured + 1) % totalGames;

    return (
        <div className='card-container'>
            <h1>FEATURED</h1>
            <div className='featured-content'>
                <button onClick={() => updateFeatured(-1)}>&larr;</button>
                <div className='featured-card light-mode-card-background'>
                    <img src={`https://picsum.photos/seed/${games.name[nextGameIndex]}/300`} alt="" />
                    <h2>{games.name[nextGameIndex]}</h2>
                    <Link to='#'>Link to game &rarr;</Link>
                </div>
                <div className='main-featured-card featured-card light-mode-card-background'>
                    <img src={`https://picsum.photos/seed/${games.name[featured]}/300`} alt="" />
                    <h2>{games.name[featured]}</h2>
                    <p>{games.description[featured]}</p>
                    <Link to='#'>Link to game &rarr;</Link>
                </div>
                <div className='featured-card light-mode-card-background'>
                    <img src={`https://picsum.photos/seed/${games.name[previousGameIndex]}/300`} alt="" />
                    <h2>{games.name[previousGameIndex]}</h2>
                    <Link to='#'>Link to game &rarr;</Link>
                </div>
                <button onClick={() => updateFeatured(1)}>&rarr;</button>
            </div>
        </div>
    );
}

export default Featured;
