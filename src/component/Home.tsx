import { SetStateAction, useEffect, useState } from "react";
import Reciters from "./Reciters";
import Chapter from "./Chapter";
import Player from "./Player";
import axios from "axios";

const Home = () => {
  const [reciters, setRecitres] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [reciterDetail, setReciterDetail] = useState(null);
  const [chapterDetail, setChapterDetail] = useState(null);

  //Get all reciters with audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get("https://mp3quran.net/api/_english.php");
      setRecitres(reciters);
    }
    fetchData();
  }, []);

  //Get all chapter
  useEffect(() => {
    async function fetchData() {
      const { data: chapters } = await axios.get(
        "https://api.quran.com/api/v4/chapters"
      );
      setChapters(chapters);
    }
    reciters && reciters.length > 0 && fetchData();
  }, [reciters]);

  const reciterHandler = (reciter: SetStateAction<null>) => {
    setReciterDetail(reciter)
  };
  const chapterHandler = (chapter: SetStateAction<null>) => {
    setChapterDetail(chapter)
  };

  return (
    <div className="flex flex-wrap  p-5 home-body h-lvh">
      <div className="w-full md:w-1/3 overflow-y-auto scroll">
        <Reciters reciters={reciters} reciterHandler={reciterHandler} />
      </div>
      <div className="w-full md:w-1/3 overflow-y-auto scroll">
        <Chapter chapters={chapters && chapters.chapters} chapterHandler={chapterHandler} />
      </div>
      <div className="w-full md:w-1/3 overflow-y-auto scroll">
        <Player reciterDetail={reciterDetail} chapterDetail={chapterDetail}/>
      </div>
    </div>
  );
};

export default Home;
