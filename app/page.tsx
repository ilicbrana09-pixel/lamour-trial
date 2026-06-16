"use client";

import {
  ShoppingBag,
  Search,
  Truck,
  Flower2,
  Gift,
  Clock,
  Heart,
  Star,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const products = [
  {
    name: "Pink Rose Box",
    price: "8.900 RSD",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Luxury Roses",
    price: "12.500 RSD",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Coco Chanel Box",
    price: "15.900 RSD",
    badge: "Luxury",
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Gentleman Gift Box",
    price: "10.900 RSD",
    badge: "Gift",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop",
  },
];

const collections = [
  {
    title: "Flower Box",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luxury Roses",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Poklon Paketi",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Baby Collection",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F7F3EE] text-[#222]">
      <header className="fixed top-0 z-50 w-full border-b border-[#e7d9c8] bg-[#F7F3EE]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="font-serif text-3xl tracking-wide">
            L&apos;amour
          </a>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] md:flex">
            <a href="#home">Početna</a>
            <a href="#collections">Kolekcije</a>
            <a href="#shop">Shop</a>
            <a href="#about">O nama</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <div className="flex items-center gap-4">
            <Search size={20} />
            <a href="#shop">
              <ShoppingBag size={20} />
            </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-32 md:grid-cols-2"
      >
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
            Premium flower boutique
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Luksuzni buketi i flower box aranžmani
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Dostava 24/7 u Beogradu. Elegantni aranžmani i pokloni za posebne
            trenutke.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="bg-[#222] px-8 py-4 text-sm uppercase tracking-widest text-white transition hover:bg-[#C6A16E]"
            >
              Naruči odmah
            </a>
            <a
              href="#collections"
              className="border border-[#C6A16E] px-8 py-4 text-sm uppercase tracking-widest transition hover:bg-[#C6A16E] hover:text-white"
            >
              Pogledaj kolekciju
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury flowers"
          className="h-[650px] w-full rounded-t-full object-cover shadow-2xl"
        />
      </section>

      <section id="collections" className="bg-[#FFFDF9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
            Collections
          </p>
          <h2 className="mb-12 mt-4 text-center font-serif text-5xl">
            Premium kolekcije
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {collections.map((item) => (
              <a
                href="#shop"
                key={item.title}
                className="group overflow-hidden bg-[#F7F3EE] shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Ekskluzivni aranžmani za poklon i posebne prilike.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
            Web shop trial
          </p>
          <h2 className="mb-12 mt-4 text-center font-serif text-5xl">
            Best Sellers
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <span className="absolute left-4 top-4 z-10 bg-[#C6A16E] px-3 py-1 text-xs uppercase tracking-widest text-white">
                    {product.badge}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="pt-5">
                  <h3 className="font-serif text-2xl">{product.name}</h3>
                  <p className="mt-2 text-[#C6A16E]">{product.price}</p>
                  <a
                    href="#contact"
                    className="mt-5 block w-full border border-[#222] py-3 text-center text-sm uppercase tracking-widest transition hover:bg-[#222] hover:text-white"
                  >
                    Naruči proizvod
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E7D9C8] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-5">
          {[
            [Truck, "Dostava 24/7"],
            [Flower2, "Premium cveće"],
            [Heart, "Ručna izrada"],
            [Clock, "Dostava istog dana"],
            [Gift, "Personalizovana poruka"],
          ].map(([Icon, text]: any) => (
            <div key={text}>
              <Icon className="mx-auto mb-4 text-[#C6A16E]" size={34} />
              <p className="text-sm uppercase tracking-widest">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=1400&auto=format&fit=crop"
          alt="Luxury gift"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-serif text-5xl md:text-6xl">
            Poklon koji ostavlja utisak
          </h2>
          <p className="mt-5 max-w-xl text-lg">
            Elegantni aranžmani kreirani za najposebnije trenutke.
          </p>
          <a
            href="#shop"
            className="mt-8 bg-white px-8 py-4 text-sm uppercase tracking-widest text-[#222]"
          >
            Istraži kolekciju
          </a>
        </div>
      </section>

      <section id="about" className="bg-[#FFFDF9] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
            O nama
          </p>
          <h2 className="font-serif text-5xl">L&apos;amour Flower Boutique</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            L&apos;amour je premium flower & gift boutique iz Beograda,
            specijalizovan za luksuzne bukete, flower box aranžmane i elegantne
            poklone. Trial verzija pokazuje kako postojeći sajt može da izgleda
            kao moderan webshop sa premium estetikom.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
          Social look
        </p>
        <h2 className="mb-12 mt-4 text-center font-serif text-5xl">
          Instagram estetika
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-6">
          {products.concat(products.slice(0, 2)).map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="Gallery"
              className="h-56 w-full object-cover transition duration-500 hover:scale-105"
            />
          ))}
        </div>
      </section>

      <section className="bg-[#FFFDF9] px-6 py-24">
        <h2 className="mb-12 text-center font-serif text-5xl">
          Recenzije kupaca
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            "Prelepo pakovanje i luksuzan izgled.",
            "Dostava je bila brza i profesionalna.",
            "Izgleda mnogo bolje nego običan poklon.",
          ].map((review) => (
            <div key={review} className="bg-[#F7F3EE] p-8 text-center">
              <div className="mb-4 flex justify-center gap-1 text-[#C6A16E]">
                {[1, 2, 3, 4, 5].map((x) => (
                  <Star key={x} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg">&quot;{review}&quot;</p>
              <p className="mt-4 text-sm uppercase tracking-widest">
                Zadovoljan kupac
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#E7D9C8] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C6A16E]">
              Kontakt
            </p>
            <h2 className="font-serif text-5xl">Naručite luksuzni aranžman</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Forma je trial verzija za prezentaciju. U punoj verziji može da se
              poveže prava korpa, checkout, online plaćanje i administracija
              proizvoda.
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3">
                <Phone size={20} /> Dostava 24/7 u Beogradu
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={20} /> Beograd, Srbija
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} /> info@lamour.rs
              </p>
            </div>
          </div>

          <form className="bg-white p-8 shadow-sm">
            <input
              className="mb-4 w-full border border-[#E7D9C8] p-4 outline-none"
              placeholder="Ime i prezime"
            />
            <input
              className="mb-4 w-full border border-[#E7D9C8] p-4 outline-none"
              placeholder="Telefon"
            />
            <input
              className="mb-4 w-full border border-[#E7D9C8] p-4 outline-none"
              placeholder="Email"
            />
            <textarea
              className="mb-4 h-32 w-full border border-[#E7D9C8] p-4 outline-none"
              placeholder="Poruka / željeni aranžman"
            />
            <button
              type="button"
              className="w-full bg-[#222] py-4 text-sm uppercase tracking-widest text-white transition hover:bg-[#C6A16E]"
            >
              Pošalji upit
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#222] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-3xl">L&apos;amour</h3>
            <p className="mt-4 text-sm text-neutral-300">
              Premium flower & gift boutique Beograd.
            </p>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-widest">Shop</h4>
            <a href="#shop" className="block text-neutral-300">
              Flower Box
            </a>
            <a href="#shop" className="block text-neutral-300">
              Luxury Roses
            </a>
            <a href="#shop" className="block text-neutral-300">
              Gift Boxes
            </a>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-widest">Informacije</h4>
            <a href="#about" className="block text-neutral-300">
              O nama
            </a>
            <a href="#contact" className="block text-neutral-300">
              Dostava
            </a>
            <a href="#contact" className="block text-neutral-300">
              Kontakt
            </a>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-widest">Kontakt</h4>
            <p className="text-neutral-300">Beograd, Srbija</p>
            <p className="text-neutral-300">Dostava 24/7</p>
            <p className="text-neutral-300">@lamourboxbg</p>
          </div>
        </div>
      </footer>
    </main>
  );
}