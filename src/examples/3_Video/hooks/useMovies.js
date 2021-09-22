import {useEffect, useState} from 'react';
import {getMovies} from '../services';

const FAKE_MOVIES = [
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg',
    description:
      'Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!',
    id: 848278,
    key: 848278,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg',
    rating: 5,
    releaseDate: '2021-09-01',
    title: 'Jurassic Hunt',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/byflnwPMumyvrCW9SfO5Miq3647.jpg',
    description:
      "After she's irreversibly poisoned, a ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
    id: 597891,
    key: 597891,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/uQWgSRXeYRWCvGIX9LDNBW6XBYD.jpg',
    rating: 6.8,
    releaseDate: '2021-09-10',
    title: 'Kate',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
    description:
      'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
    id: 436969,
    key: 436969,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg',
    rating: 7.9,
    releaseDate: '2021-07-28',
    title: 'The Suicide Squad',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/uizrxdqIl1a4c9UIhSdPM3o6u0f.jpg',
    description:
      'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
    id: 566525,
    key: 566525,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
    rating: 7.9,
    releaseDate: '2021-09-01',
    title: 'Shang-Chi and the Legend of the Ten Rings',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/vD8oPUpDUZDTGI5IVofxrUjxxUO.jpg',
    description:
      'An off-duty SAS soldier, Tom Buckingham, must thwart a terror attack on a train running through the Channel Tunnel. As the action escalates on the train, events transpire in the corridors of power that may make the difference as to whether Buckingham and the civilian passengers make it out of the tunnel alive.',
    id: 595743,
    key: 595743,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg',
    rating: 5.9,
    releaseDate: '2021-08-11',
    title: 'SAS: Red Notice',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg',
    description:
      'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
    id: 497698,
    key: 497698,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    rating: 7.7,
    releaseDate: '2021-07-07',
    title: 'Black Widow',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
    description:
      'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
    id: 451048,
    key: 451048,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
    rating: 7.9,
    releaseDate: '2021-07-28',
    title: 'Jungle Cruise',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg',
    description:
      "A devastated husband vows to bring justice to the people responsible for his wife's death while protecting the only family he has left, his daughter.",
    id: 619297,
    key: 619297,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg',
    rating: 6.9,
    releaseDate: '2021-08-18',
    title: 'Sweet Girl',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/xDnFlNrNUoSKPq4uptnhYmUZNpm.jpg',
    description:
      'Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities with a mysterious tie to her past.',
    id: 619778,
    key: 619778,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg',
    rating: 7.2,
    releaseDate: '2021-09-01',
    title: 'Malignant',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/mtRW6eAwOO27h3zrfU2foQFW7Hg.jpg',
    description:
      'Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.',
    id: 675445,
    key: 675445,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg',
    rating: 7.9,
    releaseDate: '2021-08-09',
    title: 'PAW Patrol: The Movie',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg',
    description:
      'The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.',
    id: 482373,
    key: 482373,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg',
    rating: 7.7,
    releaseDate: '2021-08-12',
    title: "Don't Breathe 2",
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg',
    description:
      "Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive as they discover all the games that they've played before.",
    id: 585216,
    key: 585216,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/jGYJyPzVgrVV2bgClI9uvEZgVLE.jpg',
    rating: 7.1,
    releaseDate: '2021-07-01',
    title: 'Escape Room: Tournament of Champions',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/8s4h9friP6Ci3adRGahHARVd76E.jpg',
    description:
      "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
    id: 379686,
    key: 379686,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
    rating: 7.4,
    releaseDate: '2021-07-08',
    title: 'Space Jam: A New Legacy',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg',
    description:
      'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
    id: 459151,
    key: 459151,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
    rating: 7.8,
    releaseDate: '2021-07-01',
    title: 'The Boss Baby: Family Business',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg',
    description:
      'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.',
    id: 588228,
    key: 588228,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
    rating: 8.1,
    releaseDate: '2021-07-02',
    title: 'The Tomorrow War',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/fZ4hrFacm5yow9gT64rS6YMNyHz.jpg',
    description:
      'A mysterious former secret service agent must urgently return to France when his estranged son  is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.',
    id: 729720,
    key: 729720,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/ttpKJ7XQxDZV252KNEHXtykYT41.jpg',
    rating: 6.9,
    releaseDate: '2021-07-30',
    title: 'Le Dernier Mercenaire',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
    description:
      'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
    id: 508943,
    key: 508943,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    rating: 8.1,
    releaseDate: '2021-06-17',
    title: 'Luca',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
    description:
      "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    id: 385128,
    key: 385128,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
    rating: 7.5,
    releaseDate: '2021-05-19',
    title: 'F9',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/mCaolOVQ5Y9Hfv3R2izakXo6UJg.jpg',
    description:
      'Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.',
    id: 565028,
    key: 565028,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/dqoshZPLNsXlC1qtz5n34raUyrE.jpg',
    rating: 6.6,
    releaseDate: '2021-08-25',
    title: 'Candyman',
  },
  {
    backdrop:
      'https://image.tmdb.org/t/p/w370_and_h556_multi_faces/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg',
    description:
      'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
    id: 581726,
    key: 581726,
    poster:
      'https://image.tmdb.org/t/p/w440_and_h660_face/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
    rating: 7.5,
    releaseDate: '2021-06-10',
    title: 'Infinite',
  },
];
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!movies.length) {
          const data = await getMovies();
          setMovies(data);
        }
      } catch (e) {
        setMovies(FAKE_MOVIES);
      }
    };
    fetchData();
  }, [movies]);

  return {movies};
};

export default useMovies;
