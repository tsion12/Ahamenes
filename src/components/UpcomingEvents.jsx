import Socials1 from "../assets/images/socials1.png";
import Socials8 from "../assets/images/socials8.png";
import Socials2 from "../assets/images/socials2.png";
import Socials3 from "../assets/images/socials3.png";
import Socials4 from "../assets/images/socials4.png";
import Socials5 from "../assets/images/socials5.png";
import Socials6 from "../assets/images/socials6.png";
import Socials7 from "../assets/images/socials7.png";
import Socials9 from "../assets/images/socials9.png";

const UpcomingEvents = () => {
  return (
    <div
      name="team"
      className="w-full h-screen repeating-bg flex flex-col items-center justify-center pt-4 text-gray-300">
      {" "}
      <h2 className="text-[48px] mt-20 font-bold tracking-widest">
        UPCOMING EVENTS
      </h2>
      <p className="text-lg tracking-widest">
        Some of the best events to look forward to are
      </p>
      <div className="flex items-center justify-center my-10">
        <div className=" mx-auto w-full h-full grid grid-cols-3 grid-rows-3 gap-8">
          <div className="bg-[#ED98AA] text-black h-50 w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Litfest</div>
            <div>
              {" "}
              An annual event that marks the beginning of the academic year. The
              day is packed with a hand-picked selection of literary events
              carefully curated by the seniors to open new avenues for the
              freshers
            </div>
          </div>
          <div className="bg-[#FFF59E] text-black h-50 w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Last Word Standing</div>
            <div>
              {" "}
              An inter-department debate conducted by the Crescent Debating
              Society. The event comprises of competitive rule-based debates
              which ultimately lead to the recognition of sound minds and help
              nurture the communication skills of its participants
            </div>
          </div>
          <div className="bg-[#B0DAFB] text-black h-50 w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">LitRapture</div>
            <div>
              {" "}
              An annual inter collegiate literary extravaganza designed to bring
              together young talents from around the state. It encourages
              healthy competitions as a means to extend friendships and share
              the passion for literature
            </div>
          </div>
          <div className="bg-[#B0FBB7] text-black h-50 w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Minerva</div>
            <div>
              {" "}
              Minerva is a virtual literary festival designed to kindle the
              spirits of literary from the comfort of one’s home.
            </div>
          </div>
          <div className="bg-[#F3EEEA] text-black h-50 w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Litfest</div>
            <div>
              Apart from this, the Society organizes regular workshops for
              debating, creative writing, spoken word poetry, elocution and
              improve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
