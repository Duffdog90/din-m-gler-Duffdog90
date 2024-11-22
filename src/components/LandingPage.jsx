import LandingProperties from "./LandingProperties";
import LandingIntro from "./LandingIntro";
import LandingSearch from "./LandingSearch";
import Subscribe from "./LandingSubscribe";

export default function LandingPage() {
    return (
        <main>
            <LandingSearch />
            <LandingIntro />
            <LandingProperties />
            <Subscribe />
        </main>
    );
}
