import { SplineSceneBasic } from "@/components/ui/demo";
import AboutSection from "@/components/ui/demo-about";
import CoursesSection from "@/components/ui/demo-courses-with-boxes";
import Features2x2Demo from "@/components/ui/features-2x2-demo";
import TechZoneGallery from "@/components/ui/techzone-gallery";
import BranchesMapsDemo from "@/components/ui/branches-maps-demo";
import TechZoneFooter from "@/components/ui/techzone-footer";
import { TechZoneNavbar } from "@/components/ui/techzone-navbar";

export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-950 p-8 pt-24">
            {/* Navbar with Glow Effect */}
            <TechZoneNavbar />
            <div className="max-w-7xl mx-auto">
                <SplineSceneBasic />
            </div>

            {/* About Section with Dotted Surface */}
            <div className="max-w-7xl mx-auto">
                <AboutSection />

                {/* Courses Section - Grid Feature Cards */}
                <CoursesSection />

                {/* Features & Benefits Section - 2x2 Grid */}
                <Features2x2Demo />

                {/* TechZone Gallery - Interactive Cursor Trail */}
                <TechZoneGallery />

                {/* Branches Section - Interactive Maps */}
                <BranchesMapsDemo />
            </div>

            {/* Footer */}
            <TechZoneFooter />
        </main>
    );
}
