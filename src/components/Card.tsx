import React from 'react';
import styles from "@/styles/Card.module.css";
import StatBar from './StatBar';

interface PokemonStat {
    name: string;
    value: number;
}

interface Pokemon {
    name: string;
    species: string;
    generation: string;
    pokedexNumber: string;
    image: string;
    description: string;
    types: string[];
    stats: PokemonStat[];
}

interface Props {
    pokemon: Pokemon;
}

const typeColors: Record<string, string> = {
    Psychic: 'pink',
    Poison: 'purple',
    Ghost: '#5E60B1',
    Steel: '#B7B9D0',
    Fighting: '#80351A',
    
};

const Card: React.FC<Props> = ({ pokemon }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.section1}>
                <div className={styles.name}>
                    <h1>{pokemon.name}</h1>
                    <span>{pokemon.species}</span>
                </div>
                <div className={styles.number}>
                    <h3>{pokemon.generation}</h3>
                    <span>Nº {pokemon.pokedexNumber}</span>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image} style={{ backgroundImage: `url(${pokemon.image})` }}></div>
            </div>
            <div className={styles.description}>
                {pokemon.description}
            </div>
            <div className={styles.typeContainer}>
                {pokemon.types.map((type, index) => (
                    <div key={index} className={styles.type} style={{ backgroundColor: typeColors[type] || 'rgba(71, 71, 63, 0.829)' }}>
                        <h2>{type}</h2>
                    </div>
                ))}
            </div>
            <div className={styles.stats}>
                {pokemon.stats.map((stat, index) => (
                    <div key={index} className={styles.statinfo}>
                        <h1>{stat.name}</h1>
                        <div className={styles.statBars}>
                            <StatBar value={stat.value} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
