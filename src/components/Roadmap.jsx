// import Section from "./Section"
import Headings from "./Headings";
import { roadmap } from "../constants";
import grid from "../assets/svg/RoadMap/grid.png"
import check2 from "../assets/svg/RoadMap/check-02.svg"
import loading1 from "../assets/svg/RoadMap/loading-01.svg"
// import TagLine from "./TagLine";

const RoadMap = () => {
    return <div className="container md:pb-10">
        <Headings tag="Ready to get started" title="What we are working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
            {roadmap.map((item) => {
                const status = item.status === 'done' ? "Done" : "In Progress";
                return (
                    <div key={item.id} className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}>
                        <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <img src={grid} className="w-full" width={550} height={550} alt="Grid" />
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between">
                                    {/* <TagLine>{item.date}</TagLine> */}
                                    <div>
                                        <img src={item.status === "done" ? check2 : loading1} className="mr-2.5" width={16} height={16} />
                                    </div>

                                </div>
                                <div className="tagline">{status}</div>
                            </div>
                            <div className="mb-10">
                                <img src={item.imageUrl} className="w-full" width={630} height={420} />
                            </div>
                            <h4 className="h4 mb-4">{item.title}</h4>
                            <p className="body-2 text-n-4">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default RoadMap;