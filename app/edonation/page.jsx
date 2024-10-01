import Donation from "./Donation";

export const metadata = {
    title: "E-Donation | Dhole Patil Ganpati",
    description: "Make a Divine Offering - Your contribution helps us continue the legacy of Lord Ganpati's teachings and traditions. Your donation supports our efforts to spread positivity, happiness, and community welfare. Together, let's nurture the spirit of giving and devotion.",
    keywords: ['Dhole Patil Ganpati','Dhole Patil','Pune', 'Kharadi', 'Ganpati','donate','dhole patil ganpati mandir'],
    openGraph: {
      title: 'E-Donation | Dhole Patil Ganpati',
      description: "Make a Divine Offering - Your contribution helps us continue the legacy of Lord Ganpati's teachings and traditions. Your donation supports our efforts to spread positivity, happiness, and community welfare. Together, let's nurture the spirit of giving and devotion.",
      url: 'https://dholepatilganpati.com/edonation',
    }
}

export default function Edonation() {
    return (
        <>
            <Donation />
        </>
    )
}