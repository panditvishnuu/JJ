import { motion } from "framer-motion";
import ProductCard from "./FeatureProductCard";
import { images } from "../../public/constants/images";
import { Link } from "react-router-dom";

const productCardVariants = [
  {
    id: 1,
    image: images.zairah,
    brand: "JJ Atelier",
    name: "Zairah",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Zairah is not worn — she is entered. From the Aarambh collection by Jateen & Jasmeet, Zairah evokes the grace of twilight — where detail softens into memory and fabric moves like quiet poetry. The upper tunic, hand-pleated in adusk-blush hue, cascades with sculpted ease — its neckline adorned with glass-cut embroidery, metallic resham, and temple-inspired embellishment. A work of craftsmanship that captures light and stillness in every fold. Beneath, the print pants speak  language of abstraction — JJ’s inhouse expressionism rendered in fluid strokes and neutral rebellion.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: "SW175",
    setIncludes: "Upper tunic and print pants",
    fabric: {
      Tunic: "Celestial Georgette Silk",
      Pants: "Aureum Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: "Medium",
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 2,
    image: images.erya,
    brand: "JJ Atelier",
    name: "Erya",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "A fusion of contemporary grandeur and heritage artistry, designed for luxury soirées and high-profile occasions, blending ornate craftsmanship with modern elegance.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes:
      "Sheer Organza Jacket with Georgette Underlay; Panelled Organza Trousers",
    fabric: {
      Jacket: "Embroidered sheer organza with georgette underlay",
      Trousers: "Panelled organza",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51279,
      images.Image51286,
      images.Image51292,
      images.Image51298,
      images.Image51302,
      images.Image51314,
      images.Image51353,
    ],
  },
  {
    id: 3,
    image: images.velina,
    brand: "JJ Atelier",
    name: "Velina",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Velina is twilight sculpted into form — a silhouette where celestial embroidery meets fluid geometry, inspired by European haute couture.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes:
      "Signature Print Embroidered Georgette Blouson; Tailored Organza Trousers",
    fabric: {
      Blouson: "Embroidered georgette",
      Trousers: "Organza",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 4,
    image: images.azmina,
    brand: "JJ Atelier",
    name: "Azmina",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Azmina is not a garment — she’s an entrance. A high-low tunic with hand-embroidered constellation details paired with icy blue palazzos.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "High-low tunic; Palazzo pants",
    fabric: {
      Tunic: "Abstract print fabric",
      Pants: "Lightweight palazzo fabric",
    },
    color: "Icy blue",
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51480,
      images.Image51487,
      images.Image51489,
      images.Image51494,
      images.Image51498,
    ],
  },
  {
    id: 5,
    image: images.amaira,
    brand: "JJ Atelier",
    name: "Zayelle",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Zayelle embodies a celestial dance between opulence and delicacy, weaving heritage craftsmanship into modern expression.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Layered satin top; Pleated satin bottoms",
    fabric: {
      Top: "Seraphine Satin & Satin Georgette",
      Bottom: "Pleated Seraphine Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 6,
    image: images.oceira,
    brand: "JJ Atelier",
    name: "Oriselle",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Oriselle speaks in controlled elegance—softness and structure meet in poetic contrast in this coord set.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Veil-Sheen Satin upper; Wide-leg satin trousers",
    fabric: {
      Top: "Veil-Sheen Satin & Celeste Sleeves",
      Bottom: "Veil-Sheen Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 7,
    image: images.inara,
    brand: "JJ Atelier",
    name: "Inara",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Inara is a sculpted jumpsuit that dialogues between structure and fluidity, with moody pastel prints and hand-embellished appliqués.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Embellished jumpsuit",
    fabric: {
      Base: "Pleated Aureum Veil-Sheen Satin",
      Sleeves: "Celeste Chiffon",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51415,
      images.Image51432,
      images.Image51510,
      images.Image51521,
      images.Image51538,
      images.Image51539,
    ],
  },
  {
    id: 8,
    image: images.eliara,
    brand: "JJ Atelier",
    name: "Eliara",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Eliara is a celestial declaration woven between dawn and dusk—sculpted satin meets sheer chiffon with fresco-inspired embroidery.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Bustier top; Ombré-veiled satin bottoms",
    fabric: {
      Top: "Aurora Silk Satin & Georgette Chiffon",
      Bottom: "Ombré-Veil Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51647,
      images.Image51648,
    ],
  },
  {
    id: 9,
    image: images.namya,
    brand: "JJ Atelier",
    name: "Namya",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Namya sways between fantasy and form—an empire-line georgette tunic with sharara-style pants, hand-embroidered like constellations.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Empire-line tunic; Sharara-style pants",
    fabric: {
      Tunic: "Celestial Satin Georgette",
      Pants: "Veil-Sheen Satin Georgette",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51301,
      images.Image51322,
      images.Image51384,
      images.Image51432,
      images.Image51582,
    ],
  },
  {
    id: 10,
    image: images.azmina,
    brand: "JJ Atelier",
    name: "Tazirah",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Tazirah speaks in motifs—ancient geometric hand-embroidery on a dusky rose silk-georgette blend with pleated trousers.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Long-line jacket; Pleated trousers",
    fabric: {
      Jacket: "Silk-Georgette & Satin Organza",
      Trousers: "Aureum Crepe Satin",
    },
    color: "Dusky rose",
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 11,
    image: images.oceira,
    brand: "JJ Atelier",
    name: "Oceira",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Oceira emerges as a sculpture in motion—corset top with oceanic embroidery and ombré pleated satin pants.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Corset top; Ombré pleated pants",
    fabric: {
      Corset: "Veil-Sheen Satin",
      Pants: "Aureum Crepe Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
  {
    id: 12,
    image: images.alvara,
    brand: "JJ Atelier",
    name: "Alvara",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Alvara is draped mythology—a one-shoulder corset with pastel threadwork and a cascading silk drape.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Embroidered corset; Cascading silk drape",
    fabric: {
      Corset: "Silk Organza",
      Drape: "Veil-Sheen Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [
      images.Image51802,
      images.Image51808,
      images.Image51818,
      images.Image51820,
      images.Image51822,
      images.Image51827,
      images.Image51828,
    ],
  },
  {
    id: 13,
    image: images.sevina,
    brand: "JJ Atelier",
    name: "Sevina",
    price: null,
    currency: "INR",
    taxInfo:
      "All taxes are included in MRP / Shipping and duties will be calculated at Checkout",
    description:
      "Sevina is wearable wind—a halter-style tunic in Celestial Whisper Silk with abstract embroidery, paired with satin mist trousers.",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    styleCode: null,
    setIncludes: "Halter tunic; Wide-leg satin trousers",
    fabric: {
      Tunic: "Celestial Whisper Silk",
      Pants: "Veil-Sheen Satin",
    },
    color: null,
    washCare: "Dry clean only",
    modelSize: null,
    disclaimer:
      "The color of the product might appear slightly different from what you see here. This can be due to the varying display settings on different devices, as well as any lighting filters or special effects used during the photo shoot.",
    images: [],
  },
];

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};


const FeaturedCollection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className="flex-1 md:pl-10 px-4" // Added horizontal padding for mobile
    >
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-serif mb-8 text-center md:text-left px-2 md:px-0" // Added mobile padding
      >
        FEATURED COLLECTION BY{" "}
        <span className="italic font-medium underline decoration-amber-500">
          JJ ATELIER
        </span>
      </motion.h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0"> {/* Added mobile padding */}
        {productCardVariants.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block"
            state={{ product }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="h-full" // Ensure consistent height
            >
              <ProductCard product={product} />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedCollection;
