import React from "react";
import {
  MdGroups,
  MdPeople,
  MdCalendarMonth,
  MdVerified,
  MdVisibility,
  MdRocketLaunch,
} from "react-icons/md";

const About = () => {
  return (
    <main className="bg-[#f7f9fb] text-gray-800 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm mb-5">
              Our Mission
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Connecting Patients With{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-cyan-500">
                Trusted Healthcare
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Medora is redefining healthcare by connecting patients with trusted
              specialists through modern digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl text-white bg-linear-to-r from-purple-600 to-cyan-500 shadow-lg">
                Join Our Network
              </button>

              <button className="px-6 py-3 rounded-xl border bg-white shadow">
                View Our Story
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6cQ5jwR_lLBsSYX6QUIimf9uI_Q3O0n6uvyX9Uqc-dvgc0TBL9FQPvLwvHjzznM5sUWy8Q4tpiUzrMKKcraksIOA_W-TiKHSzsDxdosmx5WSemykP-IRy0o0ciFoiDufNbEcEpaeQ3i3g9_WjF0SJT_W1tQTVvyUWNPDnmHlF6ASTvuhsiF8ujDcHuE7GlGGlIBipb-9-6t40Y_aWUcuxPAVdKOfbBQYOTZv5Y5df4fQl2E6Q0RCuB0JIuSFCCxgdxAdhP_ucM7I"
              alt="healthcare"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-3xl p-6 text-center">
            <MdGroups className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">1,200+</h3>
            <p className="text-gray-500 text-sm">Active Doctors</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 text-center">
            <MdPeople className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">45,000+</h3>
            <p className="text-gray-500 text-sm">Happy Patients</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 text-center">
            <MdCalendarMonth className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">150k+</h3>
            <p className="text-gray-500 text-sm">Appointments</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 text-center">
            <MdVerified className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">99.9%</h3>
            <p className="text-gray-500 text-sm">Satisfaction</p>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-12 gap-12">

          {/* IMAGE */}
          <div className="md:col-span-5 order-2 md:order-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC70gcPG4FLQvY0kdTlzOmZH2Rv3QdKd2KLB88wgCich3xzRo9W7iwXqSGCxcpdPcHeVBp8A8bMcq5w4e3hF6DAqmIicdq5yl00JerO7RyqJy4yP0-dy87mg2LfrMM3sgA4K7quz5qn18elCSXMkPYwJzZgtNKEgoPTrkkg3wIhA_u3vSwlUKDbqcEJpIQoESRGwxbJS9JgzqyIWiAH2x2TSXYq915duk_0IWSzJvCdPPUYWD4-LANQtUwaqrUb-P1pHfyOKUHksNs"
              alt="founders"
              className="rounded-3xl shadow-xl h-112.5 w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="md:col-span-7 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey to{" "}
              <span className="text-purple-600">Transform Healthcare</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2021, Medora started with a mission to simplify healthcare access.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We connect patients with specialists using modern digital platforms and AI systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 border-t pt-6">
              <div>
                <h4 className="font-semibold">Transparency</h4>
                <p className="text-sm text-gray-500">
                  Clear pricing and verified doctors.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Accessibility</h4>
                <p className="text-sm text-gray-500">
                  24/7 access to healthcare services.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center mb-10">
          <h2 className="text-3xl font-bold">Designed for the Future</h2>
          <p className="text-gray-600 mt-2">
            Core pillars that guide Medora
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-8">

          {/* VISION */}
          <div className="bg-[#131b2e] text-white p-10 rounded-3xl relative overflow-hidden">
            <MdVisibility className="text-7xl opacity-10 absolute top-6 right-6" />
            <h3 className="text-xl font-semibold mb-4 text-white bg-purple-800/60 rounded-2xl w-fit px-4 py-1">Vision</h3>
            <h1 className="text-3xl font-semibold text-white my-4">A World Without Waiting Rooms</h1>
            <p className="opacity-80 text-lg font-medium">
              We envision a global healthcare landscape where immediate, high-quality medical expertise is a fundamental right, accessible through a single, intuitive interface that values patient time as much as clinical outcomes.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-linear-to-r from-purple-600 to-cyan-500 text-white p-10 rounded-3xl relative overflow-hidden">
            <MdRocketLaunch className="text-7xl opacity-10 absolute top-6 right-6" />
            <h3 className="text-xl font-semibold mb-4 bg-purple-800/60 rounded-2xl w-fit px-4 py-1">Mission</h3>
            <h1 className="text-3xl font-semibold text-white my-4">Empowering Modern Patients</h1>
            <p className="opacity-90 text-lg font-medium">
              Our mission is to empower patients with choice and clinicians with efficiency. We build the digital infrastructure necessary to facilitate trusted relationships between healthcare providers and the communities they serve.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;