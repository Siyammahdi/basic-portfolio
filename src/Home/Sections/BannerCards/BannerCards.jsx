import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import ComponentLayout from "../../ComponentLayout/ComponentLayout";
import Tilt from 'react-parallax-tilt';

const CardList = [
    {
        id: 1,
        title: "Deeper Skillset",
        detail: "Proficient in a variety of technologies, including HTML, CSS, Modern JavaScript and frameworks like React.js, Next.js, and Node, Express for backend",
        icon: <IoSettingsOutline />
    },
    {
        id: 2,
        title: "Creative Work",
        detail: "Passionate about crafting visually appealing, user-friendly interfaces, translating design concepts into responsive, interactive web applications.",
        icon: <BsPersonWorkspace />
    },
    {
        id: 3,
        title: "Strong Dedication",
        detail: "Dedicated to delivering high-quality on time. Detail-oriented with clean, maintainable code. Proactively stays current with industry trends",
        icon: <IoDiamondOutline />
    },
];


const BannerCards = () => {
    return (
        <div>
            <ComponentLayout>
                <card className="flex gap-5 pb-24">
                    {
                        CardList.map(({ id, title, detail, icon }) => (
                            <div key={id} className="card w-96 h-full">
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                <div className=" bg-purple-950 backdrop-blur-md bg-opacity-70 rounded-xl px-4 py-8 shadow-xl ">
                                    <div className="px-8">
                                        <a className="text-7xl text-start text-blue-500">{icon}</a>
                                    </div>
                                    <div className="card-body pb-0">
                                        <h2 className="card-title text-xl text-white">{title}</h2>
                                        <p>{detail}</p>
                                    </div>
                                </div>
                                </Tilt>
                            </div>
                        ))
                    }
                </card>
            </ComponentLayout>
        </div>
    );
};

export default BannerCards;