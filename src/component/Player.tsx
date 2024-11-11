import React from "react";
import ReactPlayer from "react-player";

// Define the type for reciterDetail
interface ReciterDetail {
  name: string;
  Server: string;
}

// Define the type for chapterDetail
interface ChapterDetail {
  name_arabic: string;
  name_complex: string;
  revelation_place: string;
  translated_name: {
    name: string;
  };
  id: string;
}

interface PlayerProps {
  reciterDetail: ReciterDetail | null;
  chapterDetail: ChapterDetail | null;
}

const Player: React.FC<PlayerProps> = ({ reciterDetail, chapterDetail }) => {
  const audioLink = (reciter: string, number: string) => {
    return reciter + "/" + ("00" + number).slice(-3) + ".mp3";
  };

  return (
    <div className="min-h-screen shadow-lg p-3 bg-red">
      <h1 className="text-2xl font-bold text-center">Player</h1>
      <br />
      <hr />
      {reciterDetail && chapterDetail ? (
        <ul className="list-group text-end">
          <div>
            <li className="list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer fs-5">
              <span className="pt-4">Reciter:</span>
              <span className="p-4">{reciterDetail.name}</span>
            </li>
            <hr className="my-1" />
            <li className="list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer fs-5">
              <span className="pt-4">Chapter in Arabic:</span>
              <span className="p-4">{chapterDetail.name_arabic}</span>
            </li>
            <hr className="my-1" />
            <li className="list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer fs-5">
              <span className="pt-4">Chapter in English:</span>
              <span className="p-4">{chapterDetail.name_complex}</span>
            </li>
            <hr className="my-1" />
            <li className="list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer fs-5">
              <span className="pt-4">Revelation Place:</span>
              <span className="p-4">{chapterDetail.revelation_place}</span>
            </li>
            <hr className="my-1" />
            <li className="list-group-item bg-transparent border-0 text-light py-0 flex justify-between cursor-pointer fs-5">
              <span className="pt-4">Translated Name:</span>
              <span className="p-4">{chapterDetail.translated_name.name}</span>
            </li>
            <hr className="my-1" />
            <div>
              <ReactPlayer
                url={audioLink(reciterDetail.Server, chapterDetail.id)}
                controls
                playing
                width="100%"
                height="60px"
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className="text-center">
          <div className="spinner border-4 border-t-4 border-gray-200 rounded-full w-12 h-12"></div>
        </div>
      )}
    </div>
  );
};

export default Player;
