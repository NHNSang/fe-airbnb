import Banner from "../../components/banner";
import ExploreApart from "../../components/exploreApart";
import Feedback from "../../components/feedBack";
import FindApart from "../../components/findApart";
import ListHotel from "../../components/listHotel";
import Question from "../../components/question";

export default function Home() {
    return (
        <>
        <Banner/>
        <ListHotel/>
        <FindApart/>
        <ExploreApart/>
        <Feedback/>
        <Question/>
        </>
    );
}
