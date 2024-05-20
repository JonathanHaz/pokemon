import Spline from "@splinetool/react-spline";
import Image from "next/image";
import styles from "@/styles/first.module.css";
import Card from "./Card";

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

const First: React.FC = () => {

const mewtwoStats: PokemonStat[] = [
  { name: "HP", value: 7 },
  { name: "Attack", value: 8 },
  { name: "Defense", value: 7 },
  { name: "Speed", value: 8 }
];

const lucarioStats: PokemonStat[] = [
{ name: "HP", value: 6 },
{ name: "Attack", value: 8 },
{ name: "Defense", value: 4 },
{ name: "Speed", value: 9 }
];

const gengarStats: PokemonStat[] = [
{ name: "HP", value: 8 },
{ name: "Attack", value: 6 },
{ name: "Defense", value: 7 },
{ name: "Speed", value: 5 }
];

const mewtwo: Pokemon = {
  name: "Mewtwo",
  species: "Genetic Pokémon",
  generation: "Gen 1",
  pokedexNumber: "0150",
  image: "/mewtwo.png",
  description: "A vicious psychic Pokémon created by genetic engineering. Its cold, glowing eyes strike fear into its enemy.",
  types: ["Psychic"],
  stats: mewtwoStats
};

const lucario: Pokemon = {
  name: "Lucario",
  species: "Aura Pokémon",
  generation: "Gen 4",
  pokedexNumber: "0448",
  image: "/lucario.png",
  description: "It's said that no foe can remain invisible to Lucario, since it can detect Auras. Even foes it could not otherwise see.",
  types: ["Fighting", "Steel"],
  stats: lucarioStats
};

const gengar: Pokemon = {
  name: "Gengar",
  species: "Shadow Pokémon",
  generation: "Gen 1",
  pokedexNumber: "0094",
  image: "/gengar.png",
  description: "	To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
  types: ["Ghost", "Poison"],
  stats: gengarStats
};


  return (
       <div className={styles.container}>
        <div className={styles.background}/>
      <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Image src="/logo.png" alt="pokeball" width={250} height={100} />
      </div>
    </div>
    <div className={styles.hero}>
      <div>
          <h1 className={styles.title}>Gotta Collect 'Em All</h1>
       <h2 className={styles.secondTitle}>Come and join the biggest Pokémon Card Collecting Community</h2>
      </div>
        <button className={styles.button}>Get Started</button>
    </div>
          <div className={styles.pokeball}>
          <Spline scene="https://prod.spline.design/v4appmfvgnxBkThF/scene.splinecode" />
          </div>
        <div className={styles.mewtwo}>
          <div className={`${styles.cardContainer} ${styles.mewtwoCard}`}>
            <Card pokemon={mewtwo} />
          </div>
        </div>

        <div className={styles.lucario}>
          <div className={`${styles.cardContainer} ${styles.lucarioCard}`}>
            <Card pokemon={lucario} />
          </div>
        </div>

        <div className={styles.gengar}>
          <div className={`${styles.cardContainer} ${styles.gengarCard}`}>
            <Card pokemon={gengar} />
          </div>
        </div>
      </div>
  )
}

export default First