import React, { useState } from 'react';
import Card from './Card';
import styles from '@/styles/PokemonGallery.module.css';

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

const PokemonGallery: React.FC = () => {
  // Sample Pokemon data - you can expand this or connect to an API later
  const allPokemon: Pokemon[] = [
    {
      name: "Mewtwo",
      species: "Genetic Pokémon",
      generation: "Gen 1",
      pokedexNumber: "0150",
      image: "/mewtwo.png",
      description: "A vicious psychic Pokémon created by genetic engineering. Its cold, glowing eyes strike fear into its enemy.",
      types: ["Psychic"],
      stats: [
        { name: "HP", value: 7 },
        { name: "Attack", value: 8 },
        { name: "Defense", value: 7 },
        { name: "Speed", value: 8 }
      ]
    },
    {
      name: "Lucario",
      species: "Aura Pokémon",
      generation: "Gen 4",
      pokedexNumber: "0448",
      image: "/lucario.png",
      description: "It's said that no foe can remain invisible to Lucario, since it can detect Auras. Even foes it could not otherwise see.",
      types: ["Fighting", "Steel"],
      stats: [
        { name: "HP", value: 6 },
        { name: "Attack", value: 8 },
        { name: "Defense", value: 4 },
        { name: "Speed", value: 9 }
      ]
    },
    {
      name: "Gengar",
      species: "Shadow Pokémon",
      generation: "Gen 1",
      pokedexNumber: "0094",
      image: "/gengar.png",
      description: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
      types: ["Ghost", "Poison"],
      stats: [
        { name: "HP", value: 8 },
        { name: "Attack", value: 6 },
        { name: "Defense", value: 7 },
        { name: "Speed", value: 5 }
      ]
    },
    {
      name: "Pikachu",
      species: "Mouse Pokémon",
      generation: "Gen 1",
      pokedexNumber: "0025",
      image: "/pikachu.png",
      description: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
      types: ["Electric"],
      stats: [
        { name: "HP", value: 4 },
        { name: "Attack", value: 5 },
        { name: "Defense", value: 4 },
        { name: "Speed", value: 7 }
      ]
    },
    {
      name: "Greninja",
      species: "Ninja Pokémon",
      generation: "Gen 6",
      pokedexNumber: "0658",
      image: "/gerninja.png",
      description: "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
      types: ["Water", "Dark"],
      stats: [
        { name: "HP", value: 6 },
        { name: "Attack", value: 8 },
        { name: "Defense", value: 5 },
        { name: "Speed", value: 9 }
      ]
    },
    {
      name: "Sceptile",
      species: "Forest Pokémon",
      generation: "Gen 3",
      pokedexNumber: "0254",
      image: "/sceptile.png",
      description: "The leaves growing on Sceptile's body are very sharp edged. This Pokémon is very agile—it leaps all over the branches of trees and jumps on its foe from above or behind.",
      types: ["Grass"],
      stats: [
        { name: "HP", value: 6 },
        { name: "Attack", value: 7 },
        { name: "Defense", value: 5 },
        { name: "Speed", value: 9 }
      ]
    },
    {
      name: "Rayquaza",
      species: "Sky High Pokémon",
      generation: "Gen 3",
      pokedexNumber: "0384",
      image: "/rayquaza.png",
      description: "Rayquaza lived for hundreds of millions of years in the earth's ozone layer, never descending to the ground. This Pokémon appears to feed on water and particles in the atmosphere.",
      types: ["Dragon", "Flying"],
      stats: [
        { name: "HP", value: 8 },
        { name: "Attack", value: 10 },
        { name: "Defense", value: 7 },
        { name: "Speed", value: 8 }
      ]
    }

  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Get unique types for filter
  const allTypes = [...new Set(allPokemon.flatMap(pokemon => pokemon.types))];

  // Filter Pokemon based on search term and type
  const filteredPokemon = allPokemon.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pokemon.species.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || pokemon.types.includes(selectedType);
    return matchesSearch && matchesType;
  });

  // Carousel navigation functions
  const nextSlide = () => {
    if (currentIndex < filteredPokemon.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, filteredPokemon.length - cardsPerView)); // Loop to the end
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset current index when filter changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [filteredPokemon.length]);

  // Responsive cards per view
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1200) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pokemon Gallery</h1>
        <p className={styles.subtitle}>Discover and explore amazing Pokemon cards</p>
      </div>

      {/* Search and Filter Controls */}
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Pokemon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterContainer}>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={styles.typeFilter}
          >
            <option value="">All Types</option>
            {allTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Pokemon Carousel */}
      <div className={styles.carouselContainer}>
        {filteredPokemon.length > 0 ? (
          <>
            <button 
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={prevSlide}
            >
              <span>‹</span>
            </button>
            
            <div className={styles.carouselWrapper}>
              <div 
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                  width: `${(filteredPokemon.length / cardsPerView) * 100}%`
                }}
              >
                {filteredPokemon.map((pokemon, index) => (
                  <div 
                    key={pokemon.pokedexNumber} 
                    className={styles.carouselSlide}
                    style={{ width: `${100 / filteredPokemon.length}%` }}
                  >
                    <Card pokemon={pokemon} />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={nextSlide}
            >
              <span>›</span>
            </button>
            
            {/* Pagination Dots */}
            {filteredPokemon.length > cardsPerView && (
              <div className={styles.carouselDots}>
                {Array.from({ length: Math.ceil(filteredPokemon.length / cardsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${Math.floor(currentIndex / cardsPerView) === index ? styles.activeDot : ''}`}
                    onClick={() => goToSlide(index * cardsPerView)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={styles.noResults}>
            <p>No Pokemon found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <p>Showing {filteredPokemon.length} of {allPokemon.length} Pokemon</p>
      </div>
    </div>
  );
};

export default PokemonGallery; 