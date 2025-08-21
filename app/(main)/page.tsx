"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AnimatedText from "@/components/AnimatedText";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Eye,
  FileText,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)]">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Shield className="h-5 w-5 mr-2" />
                <span>Official Regulatory Authority</span>
              </div>
            </motion.div>

            <AnimatedText
              text="Securing Zimbabwe's Financial Future"
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100"
            >
              The Securities and Exchange Commission of Zimbabwe - Ensuring
              market integrity, transparency, and investor protection
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-zinc-900 hover:bg-yellow-50 font-semibold px-8"
              >
                Investor Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-zinc-900 hover:bg-white/10 font-semibold px-8"
              >
                Market Updates
              </Button>
            </motion.div>
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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "200+",
                  label: "Listed Companies",
                  icon: <Building2 className="h-8 w-8" />,
                },
                {
                  value: "15K+",
                  label: "Protected Investors",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  value: "98%",
                  label: "Market Compliance",
                  icon: <Award className="h-8 w-8" />,
                },
                {
                  value: "24/7",
                  label: "Market Surveillance",
                  icon: <Eye className="h-8 w-8" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-yellow-50 rounded-xl"
                >
                  <div className="text-yellow-700 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
                  className="bg-yellow-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Providing essential services to market participants and
                investors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Licensing & Registration", icon: "📋" },
                { title: "Market Surveillance", icon: "👁️" },
                { title: "Investor Education", icon: "📚" },
                { title: "Enforcement", icon: "⚖️" },
                { title: "Policy Development", icon: "📝" },
                { title: "Dispute Resolution", icon: "🤝" },
                { title: "Public Awareness", icon: "📢" },
                { title: "Research & Statistics", icon: "📊" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-yellow-50 p-6 rounded-lg text-center group hover:bg-yellow-100 transition-colors"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-yellow-800 transition-colors">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Investor Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Essential tools and information to help you make informed
                investment decisions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Investor Guides",
                  icon: <BookOpen className="h-8 w-8" />,
                  count: "12+ Guides",
                },
                {
                  title: "Market Statistics",
                  icon: <BarChart3 className="h-8 w-8" />,
                  count: "Updated Daily",
                },
                {
                  title: "Legal Framework",
                  icon: <FileText className="h-8 w-8" />,
                  count: "Acts & Regulations",
                },
                {
                  title: "Complaints Portal",
                  icon: <Shield className="h-8 w-8" />,
                  count: "File a Complaint",
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 group hover:bg-yellow-100 transition-colors"
                >
                  <div className="text-yellow-700 mb-4">{resource.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600">{resource.count}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900 to-yellow-800 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
              <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
                Stay informed with the latest market developments and regulatory
                updates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "New Disclosure Guidelines Released",
                  date: "15 Nov 2023",
                  excerpt:
                    "The Commission has issued updated disclosure requirements for listed companies to enhance market transparency.",
                  category: "Regulatory Update",
                },
                {
                  title: "Quarterly Market Performance Report",
                  date: "8 Nov 2023",
                  excerpt:
                    "Q3 2023 market performance shows steady growth with increased participation from retail investors.",
                  category: "Market Report",
                },
                {
                  title: "Investor Education Workshop",
                  date: "2 Nov 2023",
                  excerpt:
                    "Join our free workshop on understanding investment risks and opportunities in the current market.",
                  category: "Event",
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="text-yellow-200 text-sm mb-4">
                    {news.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                  <p className="text-yellow-100 mb-4">{news.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-yellow-200">
                    <span>{news.date}</span>
                    <Button
                      variant="link"
                      className="text-white p-0 hover:text-yellow-200"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View All Updates
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Need Assistance?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team is ready to help with any questions about securities
                regulation, investor protection, or market participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-700 hover:bg-yellow-800">
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-700 text-yellow-700 hover:bg-yellow-50"
                >
                  Visit Our Offices
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
