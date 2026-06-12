import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  UtensilsCrossed,
  Tag,
  Instagram,
  MapPin,
  Flame,
  Award,
  Zap,
  ChevronRight,
} from "lucide-react";
const HERO_BG_URL = "http://sharkscompany.online/wp-content/uploads/2026/06/Design-sem-nome-2-scaled.png";
const LOGO_URL = "http://sharkscompany.online/wp-content/uploads/2026/06/LOGO-SEM-FUNDO-ESPETINHO-LEGAL-PRIME.png";
import espCarne from "@/assets/esp-carne.jpg";
import espFrango from "@/assets/esp-frango.jpg";
import espCalabresa from "@/assets/esp-calabresa.jpg";
import espMisto from "@/assets/esp-misto.jpg";
import espPrime from "@/assets/esp-prime.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espetinho Legal Prime — Churrasco no palito. Sabor Prime." },
      {
        name: "description",
        content:
          "Espetinhos selecionados, preparados com tempero marcante. Peça agora pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5581987374815&text";

type LinkBtn = {
  href: string;
  label: string;
  desc: string;
  Icon: typeof MessageCircle;
  accent?: "whatsapp" | "gold" | "fire" | "default";
};

const links: LinkBtn[] = [
  {
    href: WHATSAPP_URL,
    label: "Pedir pelo WhatsApp",
    desc: "Faça seu pedido agora",
    Icon: MessageCircle,
    accent: "whatsapp",
  },
  {
    href: "https://www.ifood.com.br/delivery/recife-pe/espetinho-legal-prime-cordeiro/64d5ea03-e492-485f-a5cf-9b6ab21a86fd",
    label: "Ver Cardápio iFood",
    desc: "Confira nossos espetinhos e acompanhamentos",
    Icon: UtensilsCrossed,
    accent: "gold",
  },
  {
    href: "#promocoes",
    label: "Promoções do Dia",
    desc: "Ofertas especiais para hoje",
    Icon: Tag,
    accent: "fire",
  },
  {
    href: "https://www.instagram.com/espetinholegalprime/",
    label: "Instagram",
    desc: "Acompanhe novidades e bastidores",
    Icon: Instagram,
  },
  {
    href: "https://share.google/CvCz4QMbY9D4ruotm",
    label: "Localização",
    desc: "Veja onde estamos",
    Icon: MapPin,
  },
];

const destaques = [
  { Icon: Award, title: "Espetinhos selecionados", text: "Cortes nobres, padrão Prime." },
  { Icon: Flame, title: "Sabor de churrasco", text: "Brasa de verdade, tempero marcante." },
  { Icon: Zap, title: "Pedido rápido", text: "Direto no WhatsApp em segundos." },
];

const cardapio = [
  { nome: "Espetinho de Carne", img: espCarne, tag: "Clássico" },
  { nome: "Espetinho de Frango", img: espFrango, tag: "Tempero da casa" },
  { nome: "Espetinho de Salsichão", img: espCalabresa, tag: "Defumado" },
  { nome: "Espetinho Misto", img: espMisto, tag: "Pra dividir" },
  { nome: "Especial Prime", img: espPrime, tag: "Premium" },
];

function accentClasses(accent: LinkBtn["accent"]) {
  switch (accent) {
    case "whatsapp":
      return {
        wrap: "bg-[var(--whatsapp)] border-[var(--whatsapp)]/30 btn-3d btn-3d-whatsapp hover:btn-3d-whatsapp-hover active:btn-3d-whatsapp-active",
        icon: "bg-white/15 text-white",
        label: "text-white",
        desc: "text-white/80",
      };
    case "gold":
      return {
        wrap: "bg-gradient-to-br from-[var(--gold)] to-[oklch(0.70_0.16_60)] border-[var(--gold)]/30 btn-3d btn-3d-gold hover:btn-3d-gold-hover active:btn-3d-gold-active",
        icon: "bg-black/20 text-black",
        label: "text-black",
        desc: "text-black/70",
      };
    case "fire":
      return {
        wrap: "bg-gradient-to-br from-[var(--ember)] to-[var(--fire)] border-[var(--fire)]/30 btn-3d btn-3d-fire hover:btn-3d-fire-hover active:btn-3d-fire-active",
        icon: "bg-white/15 text-white",
        label: "text-white",
        desc: "text-white/85",
      };
    default:
      return {
        wrap: "glass-card btn-3d btn-3d-default hover:btn-3d-default-hover active:btn-3d-default-hover hover:border-[var(--gold)]/30",
        icon: "bg-[var(--gold)]/15 text-[var(--gold)]",
        label: "text-foreground",
        desc: "text-muted-foreground",
      };
  }
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient ember backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-ember-bg)" }}
      />
      <div aria-hidden className="texture-ember pointer-events-none fixed inset-0 -z-10" />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-0">
          <img
            src={HERO_BG_URL}
            alt="Espetinhos grelhando na brasa"
            width={1536}
            height={1536}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto flex max-w-xl flex-col items-center px-5 pt-10 pb-8 text-center">
          <div className="relative animate-float-up">
            <div
              aria-hidden
              className="animate-ember absolute inset-0 -z-10 rounded-full blur-2xl"
              style={{ background: "var(--gradient-fire)" }}
            />
            <img
              src={LOGO_URL}
              alt="Logo Espetinho Legal Prime"
              width={240}
              height={240}
              className="h-48 w-48 sm:h-60 sm:w-60 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            />
          </div>

          <h1 className="font-display mt-5 text-[45px] sm:text-6xl text-gradient-gold animate-float-up">
            Espetinho Legal Prime
          </h1>

          <p className="font-display mt-3 text-2xl sm:text-3xl text-foreground animate-float-up">
            Churrasco no palito.{" "}
            <span className="text-gradient-fire">Sabor Prime.</span>{" "}
            <span aria-hidden>🔥</span>
          </p>

          <p className="mt-4 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed animate-float-up">
            Espetinhos selecionados, preparados com tempero marcante e aquele
            sabor de churrasco que conquista.
          </p>
        </div>
      </section>

      {/* LINKS */}
      <section className="relative mx-auto max-w-xl px-5 pb-8">
        <ul className="flex flex-col gap-3">
          {links.map(({ href, label, desc, Icon, accent }, i) => {
            const c = accentClasses(accent);
            const external = href.startsWith("http");
            return (
              <li
                key={label}
                className="animate-float-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] ${c.wrap}`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${c.icon}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col text-left">
                    <span className={`font-display text-lg leading-tight ${c.label}`}>
                      {label}
                    </span>
                    <span className={`truncate text-xs ${c.desc}`}>{desc}</span>
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 ${c.label} opacity-70`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-xl px-5 pb-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {destaques.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="glass-card flex flex-col items-center rounded-2xl p-3 text-center"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--gradient-fire)" }}
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <p className="font-display mt-2 text-[0.78rem] sm:text-sm leading-tight text-gradient-gold">
                {title}
              </p>
              <p className="mt-1 hidden sm:block text-[0.7rem] text-muted-foreground leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIS PEDIDOS */}
      <section id="cardapio" className="mx-auto max-w-xl px-5 pb-12">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Cardápio
            </p>
            <h2 className="font-display text-3xl text-foreground">
              Mais pedidos da casa
            </h2>
          </div>
          <Flame className="h-6 w-6 text-[var(--fire)]" />
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {cardapio.map(({ nome, img, tag }, i) => (
            <li
              key={nome}
              className={`glass-card overflow-hidden rounded-2xl ${
                i === 4 ? "col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={nome}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--gold)] backdrop-blur">
                  {tag}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-3">
                <p className="font-display text-base leading-tight text-foreground">
                  {nome}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-[var(--whatsapp)] px-3 py-1.5 text-[0.7rem] font-bold text-white btn-3d btn-3d-whatsapp hover:btn-3d-whatsapp-hover active:btn-3d-whatsapp-active"
                >
                  Pedir agora
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="relative mx-auto max-w-xl px-5 pb-16">
        <div
          className="relative overflow-hidden rounded-3xl border border-[var(--gold)]/30 p-7 text-center"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.22 0.04 35), oklch(0.15 0.02 30))",
          }}
        >
          <div
            aria-hidden
            className="animate-ember absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "var(--gradient-fire)", opacity: 0.4 }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Bateu a fome?
            </p>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl text-gradient-fire">
              Vai de Prime.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Escolha seu espetinho favorito e faça seu pedido em poucos
              segundos.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--whatsapp)] px-6 py-4 font-display text-xl text-white btn-3d btn-3d-cta hover:btn-3d-cta-hover active:btn-3d-cta-active"
            >
              <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <footer className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground/70">
          © {new Date().getFullYear()} Espetinho Legal Prime
        </footer>
      </section>
    </main>
  );
}
