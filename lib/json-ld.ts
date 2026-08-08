import { site } from "./site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      logo: `${site.url}/icon.svg`,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "id-ID",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa lama proses top up di Zynvora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rata-rata di bawah 10 detik setelah pembayaran terkonfirmasi. Saat maintenance server game, proses bisa tertunda hingga beberapa menit.",
      },
    },
    {
      "@type": "Question",
      name: "Metode pembayaran apa saja yang tersedia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QRIS, DANA, OVO, GoPay, ShopeePay, BCA, BRI, Mandiri, BNI.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana jika saya salah memasukkan User ID?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hubungi live chat kami segera. Tim kami akan membantu memperbaiki data sebelum item dikirim.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Zynvora menyediakan refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Jika top up gagal, dana dikembalikan 100% ke metode pembayaran asal.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah transaksi di Zynvora aman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aman. Kami tidak pernah meminta password atau OTP. Cukup User ID dan Server ID.",
      },
    },
    {
      "@type": "Question",
      name: "Kapan jam operasional Zynvora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Server top up aktif 24 jam, 7 hari seminggu. Termasuk hari libur nasional.",
      },
    },
    {
      "@type": "Question",
      name: "Game apa saja yang bisa di-top up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile Legends, Free Fire, PUBG Mobile, COD Mobile, Magic Chess: Go Go. Katalog bertambah tiap bulan.",
      },
    },
  ],
};
