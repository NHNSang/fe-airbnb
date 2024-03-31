import React from "react";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import HeadingCard from "./HeadingCard";
import ImgCard from "./ImgCard";

const ListingCard = ({
  src,
  alt,
  title,
  subtitle,
  numberOfRoom,
  numberOfBath,
  numberofGuest,
  starOfListing,
  priceOfRoom
}) => {
  return (
    <div className="  w-[270px] h-auto">
      <ImgCard 
      src={src}
      alt={alt}
      />
      <HeadingCard 
      title={title}
      subtitle={subtitle}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-row items-center">
            {/* numberOfRoom */}
            <p>{numberOfRoom}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423Q5.154 7 6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577Q20 8.154 20 9v2.3q.488.252.744.754T21 13v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9z"/></svg>
          </div>
          <div className="flex flex-row items-center">
            {/* numberOfBath */}
            <p>{numberOfBath}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 256 256"><path fill="currentColor" d="M232 98h-26v-2a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v2H62V52a14 14 0 0 1 14-14a14.47 14.47 0 0 1 14.12 11.19a6 6 0 1 0 11.76-2.38A26.32 26.32 0 0 0 76 26a26 26 0 0 0-26 26v46H24a14 14 0 0 0-14 14v32a54.06 54.06 0 0 0 54 54h2v18a6 6 0 0 0 12 0v-18h100v18a6 6 0 0 0 12 0v-18h2a54.06 54.06 0 0 0 54-54v-32a14 14 0 0 0-14-14m-90 4h52v36h-52Zm92 42a42 42 0 0 1-42 42H64a42 42 0 0 1-42-42v-32a2 2 0 0 1 2-2h106v34a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-34h26a2 2 0 0 1 2 2Z"/></svg>
          </div>
          <div className="flex flex-row items-center">
            {/* numberofGuest */}
            <p>
              {numberofGuest}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.385q-1.237 0-2.119-.882T9 8.385q0-1.238.881-2.12q.881-.88 2.119-.88t2.119.88q.881.882.881 2.12q0 1.237-.881 2.118T12 11.385m-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.833-1.018q1.418-.34 2.837-.34q1.42 0 2.837.34q1.417.34 2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646zm1-1h12v-.646q0-.332-.214-.625q-.215-.292-.594-.494q-1.234-.598-2.546-.916q-1.31-.319-2.646-.319q-1.335 0-2.646.319q-1.312.318-2.546.916q-.38.202-.594.494Q6 16.637 6 16.97zm6-7.23q.825 0 1.413-.588T14 8.385q0-.825-.587-1.413T12 6.385q-.825 0-1.412.587T10 8.385q0 .825.588 1.412t1.412.588m0 7.23"/></svg>
          </div>
        </div>
        <div className="flex flex-row items-center">
          {/* starOfListing  */}
          <p>
            {starOfListing}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
        </div>
      </div>
      <div>
        {/* priceOfRoom */}
        <span>{priceOfRoom}</span>/night
        </div>
    </div>
  );
};

export default ListingCard;
