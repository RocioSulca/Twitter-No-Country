import { memo,} from "react";
import { ResultsApi } from "../../../../types";
import useGift from "../../../../Hooks/Home/useGif";
import LoadingComponent from "../../../LoadingComponent";
import useGifStore from "../../../../store/Home/postStore";
import {shallow} from "zustand/shallow";



export const SearchResults = memo (function Results() {
  const[setSelectImage] = useGifStore((state) => [state.setSelectImage], shallow)
  const {searchLoading, search} =useGift()
  if(searchLoading) return <LoadingComponent/>

  const handleClickImage = (img:string)=>{
    setSelectImage(img)
  window.history.back()
  }

    return (
      <div className="grid grid-cols-3 gap-1">
        {search.data?.map((gif:ResultsApi) => (
          <div key={gif.id}>
            <img
              className="w-[193px] h-[150px] cursor-pointer"
              src={gif.images.original.url}
              alt=""
              onClick={()=>handleClickImage(gif.images.original.url)}
            />
          </div>
        ))}
      </div>
    );
  });