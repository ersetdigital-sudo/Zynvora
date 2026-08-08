import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Pilih Game",
    desc: "Tentukan judul game dari katalog Zynvora.",
  },
  {
    num: "02",
    title: "Masukkan User ID",
    desc: "Tambahkan Server ID bila game memerlukannya.",
  },
  {
    num: "03",
    title: "Pilih Nominal",
    desc: "Diamond, UC, atau CP sesuai kebutuhan.",
  },
  {
    num: "04",
    title: "Bayar",
    desc: "QRIS, e-wallet, atau transfer bank.",
  },
  {
    num: "05",
    title: "Diproses Otomatis",
    desc: "Item masuk ke akun rata-rata di bawah 10 detik.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara" className="sect border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[11px] tracking-[.25em] uppercase text-white/40">Alur</p>
        <h2 className="mt-3 font-display h-sec font-semibold">Lima langkah, selesai.</h2>
        <div className="mt-12 grid md:grid-cols-5 gap-4 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80} className="hairline rounded-2xl p-5 sm:p-7 bg-panel">
              <div className="font-display text-5xl font-light text-white/10">{step.num}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50 font-light">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
