export default function SeoMeta() {
    return (
        <>
            {/* Seo Meta Tiitle & Desc */}
            <meta name="title" content="MyQuran" />
            <meta
                name="description"
                content="MyQuran adalah aplikasi web yang berisi Al-Quran lengkap dengan terjemahan Bahasa Indonesia dan audio."
            />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="/" />
            <meta property="og:title" content="MyQuran" />
            <meta
                property="og:description"
                content="MyQuran adalah aplikasi web yang berisi Al-Quran lengkap dengan terjemahan Bahasa Indonesia dan audio."
            />
            <meta
                property="og:image"
                content="/favicon/android-chrome-512x512.png"
            />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="/" />
            <meta property="twitter:title" content="MyQuran" />
            <meta
                property="twitter:description"
                content="MyQuran adalah aplikasi web yang berisi Al-Quran lengkap dengan terjemahan Bahasa Indonesia dan audio."
            />
            <meta
                property="twitter:image"
                content="/favicon/android-chrome-512x512.png"
            />
        </>
    )
}
