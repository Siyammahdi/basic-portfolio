import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ComponentLayout from '../../ComponentLayout/ComponentLayout';
import Tilt from 'react-parallax-tilt';
import { Waypoint } from 'react-waypoint';
import Aos from 'aos';


const AchievementData = [
  {
    id: 1,
    count: '20',
    name: 'Digital Products',
  },
  {
    id: 2,
    count: '5',
    name: 'Direct Clients',
  },
  {
    id: 3,
    count: '54',
    name: 'Total Projects',
  },
];

const Achievements = () => {
  const [isCounting, setIsCounting] = useState(false);

  const startCounting = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []); 

  return (
    <ComponentLayout>
      <div className="flex gap-5 justify-center mt-8 pb-36">
        {AchievementData.map((achievement) => (
          <Tilt key={achievement.id} tiltMaxAngleX={6} tiltMaxAngleY={6} className="w-full">
            <Waypoint onEnter={startCounting} bottomOffset="20%">
              <div
                data-aos="fade-up"
                data-aos-delay={(achievement.id - 1) * 200}
                className="bg-purple-950 flex justify-center items-center gap-5 text-white p-8 rounded-xl"
              >
                <p className="text-6xl font-bold mb-2 text-blue-400">
                  {isCounting && <CountUp duration={3} start={0} end={achievement.count} />}
                </p>
                <p className="w-20 font-semibold">{achievement.name}</p>
              </div>
            </Waypoint>
          </Tilt>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Achievements;
