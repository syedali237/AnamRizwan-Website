import myPhoto from "../assets/photo.jpeg"

export default function MainPage() {
  return (
    // <div className="flex flex-grow justify-center items-center h-screen">
    //   <div className="bg-white flex justify-center items-center rounded-3xl w-3/4 h-3/4 border-2 border-black">
    //     infosc das dkjasmnklsmalo
    //   </div>
    // </div>
    <div className="flex flex-grow justify-center items-center min-h-screen">
      <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg p-20 max-w-screen-lg border-2 border-gray-400 shadow-2xl">
        {/* left side */}
        <div className="md:w-1/2 md:p-4">
          <h1 className="text-4xl font-bold">
            Hi!
          </h1>
          <h2 className="text-6xl font-bold mb-4">
            I am Anam..
          </h2>
          <p className="text-justify">
            I am a concoction of delusion and reality. I like to think about
            things that look impossible. As a seasoned copywriter, I blend
            creativity with clarity in content. I like to sing, dance and just
            roam around and talk to people like me. You will often find me at a
            random metro station humming to my favourite songs while waiting for
            the metro. Full Delulu!!!
          </p>
        </div>
        {/* right side div */}
        <div className="md:w-1/2 md:p-4">
          <img src={myPhoto} alt="myself" className="rounded-lg ml-6" />
        </div>
      </div>
    </div>
  );
}