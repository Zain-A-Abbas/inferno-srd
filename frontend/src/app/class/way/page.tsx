import { GetServerSideProps } from "next";
import db from "../../../../lib/db";
import { Way } from "../../../../types/db";
import getWayById from "../../../../lib/ways";

export default async function WayPage({ searchParams }: Props) {
  const idString = (await searchParams).ID;

  if (!idString) {
    return (<h1>ID missing.</h1>);
  }

  const id = Number(idString);

  const data = await getWayById(id);

  if (!data) return (<h1>Way with that ID does not exist.</h1>);


  return (
    <>
      <div>
        <h1>{data.gameClass.name}</h1>
        <p>
          {data.gameClass.description}
        </p>
        <h2>Starting Stats</h2>
        {data.way.hit_points} Hit Points per level
        <h3>Ability Scores</h3>
        <ul>
          {data.way.stat_boosts.split(",").map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <h3>Saving Throws</h3>
        <ul>
          {data.way.saving_throws.split(",").map((save, index) => (
            <li key={index}>{save}</li>
          ))}
        </ul>
        <h3>Proficiencies</h3>
        <ul>
          {data.way.weapon_proficiency.split(",").map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
          {data.way.armor_proficiency.split(",").map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
