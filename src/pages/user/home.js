import Banner from "../../components/banner";
import ExploreApart from "../../components/exploreApart";
import FindApart from "../../components/findApart";
import ListHotel from "../../components/listHotel";

export default function Home() {
    return (
        <>
        <Banner/>
        <ListHotel/>
        <FindApart/>
        <ExploreApart/>
        </>
    );
}
