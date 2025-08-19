"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)]">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText
              text="Securing Zimbabwe's Financial Future"
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            >
              The Securities and Exchange Commission of Zimbabwe - Ensuring
              market integrity and investor protection
            </motion.p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-[var(--seczim-brown-light)] hover:bg-[var(--seczim-brown-accent)] text-[var(--seczim-white)]"
              >
                Learn More
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[var(--seczim-white)] text-[var(--seczim-brown)] hover:bg-[var(--seczim-brown-accent)] hover:text-[var(--seczim-brown)]"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[var(--seczim-brown)]">
              Our Core Functions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Regulation",
                  description:
                    "Ensuring fair and efficient securities markets through comprehensive regulation.",
                  icon: "📊",
                },
                {
                  title: "Investor Protection",
                  description:
                    "Safeguarding investor interests and maintaining market integrity.",
                  icon: "🛡️",
                },
                {
                  title: "Capital Formation",
                  description:
                    "Facilitating capital raising while ensuring proper disclosures.",
                  icon: "💼",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--seczim-brown)]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[var(--seczim-brown)]">
              Latest News & Updates
            </h2>

            {/* News items would go here */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
