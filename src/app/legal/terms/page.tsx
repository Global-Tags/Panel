import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'General Terms and Conditions',
    description: 'The General Terms and Conditions of GlobalTags',
    openGraph: {
        title: 'General Terms and Conditions',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function GeneralTermsAndConditions() {
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-8 bg-gray-800 rounded-lg shadow-lg flex-1">
                <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">Allgemeine Geschäftsbedingungen</h1>

                <p className="mb-4">
                    Bei Problemen oder Fragen bitte an <Link href="mailto:contact@globaltags.xyz" className="text-blue-400 hover:underline">contact@globaltags.xyz</Link> wenden.
                </p>
                
                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">1. Annahme der Bedingungen</h2>
                <p className="mb-4">
                    Mit der Nutzung eines beliebigen GlobalTags Mod Wrappers und der zugehörigen API erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen (AGB) einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie das GlobalTags-System bitte nicht. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite mit einem aktualisierten "Gültig ab"-Datum veröffentlicht.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">2. Pflichten des Nutzers</h2>
                <p className="mb-4">
                    Sie sind für alle Aktivitäten verantwortlich, die über Ihr Konto im GlobalTags-System durchgeführt werden. Dies umfasst:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Das Setzen und Verwalten Ihrer Tags, Tag-Positionen und Icons.</li>
                    <li>Sicherzustellen, dass die von Ihnen bereitgestellten Daten oder Inhalte keine Rechte Dritter oder geltendes Recht verletzen.</li>
                    <li>Die Sicherheit Ihrer Kontoinformationen zu gewährleisten, einschließlich API-Keys, falls zutreffend.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">3. Nutzung des Dienstes</h2>
                <p className="mb-4">
                    Das GlobalTags-System steht Spielern und Entwicklern in der Minecraft-Community zur Verfügung. Es besteht eine große Freiheit bei der Wahl der Tags, jedoch gibt es einige Grenzen, die nicht überschritten werden dürfen. Die Regeln zur Nutzung des Dienstes finden sie in unserer <Link href="https://docs.globaltags.xyz/rules" className="text-blue-400 hover:underline" target="_blank">Dokumentation</Link>.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">4. Datenerfassung und Datenschutz</h2>
                <p className="mb-4">
                    Zahlungen werden ausschließlich über die Monetarisierungsfunktion für sogenannte "Discord Applications" über <Link href="https://discord.com" className="text-blue-400 hover:underline" target="_blank">Discord</Link> abgewickelt. Durch die Nutzung der GlobalTags API erklären Sie sich mit der Erfassung und Nutzung von Daten gemäß der <Link href="/legal/privacy" className="text-blue-400 hover:underline">Datenschutzerklärung</Link> einverstanden. Dies umfasst die Speicherung von UUIDs, Minecraft-Versionen, Tag-Verlauf, Reports, Rollen und anderen Daten, die für die Funktionalität des Systems erforderlich sind.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">5. Verwaltung und Löschung von Tags</h2>
                <p className="mb-4">
                    Sie können jederzeit die Löschung Ihres Tags beantragen. Bitte beachten Sie, dass das Entfernen Ihrer Daten dazu führt, dass Sie zukünftig keine Tags mehr setzen können. Datenlöschanfragen können über unseren <Link href="/discord" className="text-blue-400 hover:underline">Discord-Server</Link> eingereicht werden.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">6. Kontosperrung und Banns</h2>
                <p className="mb-4">
                    GlobalTags behält sich das Recht vor, Nutzerkonten nach eigenem Ermessen zu sperren oder zu bannen, wenn diese gegen die AGB verstoßen oder wenn es aus anderen Gründen notwendig ist, die Integrität des Systems und seiner Nutzer zu schützen. Das Team ist nicht verpflichtet, Informationen über Strafen offenzulegen.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">7. Personalisierte Inhalte und Verantwortung</h2>
                <p className="mb-4">
                    In bestimmten Fällen können Nutzer erworbene Dienstleistungen mit eigenen Inhalten personalisieren (z. B. durch eigene Texturen). Der Nutzer versichert, dass die auf dem Server abgelegten Inhalte nicht gegen geltendes Recht verstoßen. Er verpflichtet sich, die Dienste von GlobalTags nicht zur Speicherung oder Verbreitung von obszönem, pornographischem, rassistischem, bedrohlichem oder verleumderischem Material zu verwenden. Der Nutzer darf mit seinen Dateien keinerlei Urheber-, Marken-, Patent- oder andere Rechte Dritter verletzen. Jeder Nutzer trägt die alleinige Verantwortung für seine Dateien. GlobalTags haftet weder für unmittelbare noch für mittelbare Schäden, die durch hochgeladene Dateien entstehen. Schadensersatzansprüche oder sonstige Regressansprüche gegen GlobalTags sind ausgeschlossen.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">8. Sonstige Bestimmungen und salvatorische Klausel</h2>
                <p className="mb-4">Auf diese AGB findet ausschließlich das deutsche Recht Anwendung. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der restlichen Bestimmungen unberührt.</p>
            </div>
        </div>
    );
}
