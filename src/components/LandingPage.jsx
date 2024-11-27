import LandingProperties from "./LandingProperties";
import LandingIntro from "./LandingIntro";
import LandingSearch from "./LandingSearch";
import Subscribe from "./LandingSubscribe";
import LandingMaeler from "./LandingMaelere";
import LandingAppBanner from "./LandingAppBanner";

export default function LandingPage() {
    return (
        <main>
            <LandingSearch />
            <LandingIntro />
            <LandingProperties />
            <Subscribe />
            <LandingMaeler />
            <LandingAppBanner />
        </main>
    );
}
