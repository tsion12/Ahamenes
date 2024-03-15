import React from "react";
const UpcomingEvents = () => {
  return (
    <div
      name="team"
      className="w-full h-screen  flex flex-col items-center md:justify-center pt-4  text-gray-300">
      {" "}
      <h2 className="md:text-[48px] text-[20px]  md:mt-20 mt-10 font-bold tracking-widest">
        UPCOMING EVENTS
      </h2>
      <p className="text-lg tracking-widest">
        Some of the best events to look forward to are
      </p>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#ED98AA] text-black h-auto w-full md:w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Litfest</div>
            <div>
              An annual event that marks the beginning of the academic year. The
              day is packed with a hand-picked selection of literary events
              carefully curated by the seniors to open new avenues for the
              freshers.
            </div>
          </div>
          <div className="bg-[#FFF59E] text-black h-auto w-full md:w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Last Word Standing</div>
            <div>
              An inter-department debate conducted by the Crescent Debating
              Society. The event comprises of competitive rule-based debates
              which ultimately lead to the recognition of sound minds and help
              nurture the communication skills of its participants.
            </div>
          </div>
          <div className="bg-[#B0DAFB] text-black h-auto w-full md:w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">LitRapture</div>
            <div>
              An annual intercollegiate literary extravaganza designed to bring
              together young talents from around the state. It encourages
              healthy competitions as a means to extend friendships and share
              the passion for literature.
            </div>
          </div>
          <div className="bg-[#B0FBB7] text-black h-auto w-full md:w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Minerva</div>
            <div>
              Minerva is a virtual literary festival designed to kindle the
              spirits of literary enthusiasts from the comfort of one’s home.
            </div>
          </div>
          <div className="bg-[#F3EEEA] text-black h-auto w-full md:w-80 p-6 flex flex-col gap-2 rounded-lg">
            <div className="text-3xl">Litfest</div>
            <div>
              Apart from this, the Society organizes regular workshops for
              debating, creative writing, spoken word poetry, elocution, and
              improv.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
