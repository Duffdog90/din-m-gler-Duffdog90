import LandingProperties from "./LandingProperties";
import LandingSearch from "./LandingSearch";
import LandingIntro from "./LandinIntro";

export default function LandingPage() {
    return (
        <main>
            <LandingSearch />
            <LandingIntro />
            <LandingProperties />
        </main>
    );
}
