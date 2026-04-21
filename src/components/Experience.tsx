interface ProjectExperience {
  project: string;
  bullets: string[];
}

const projects: ProjectExperience[] = [
  {
    project: "ESTO GROUP",
    bullets: [
      "Engineered a high-performance lead ingestion system that supports both single and optimized bulk lead imports from Excel/CSV via efficient batch processing.",
      "Developed a suite of business intelligence APIs and real-time performance dashboards to provide granular visibility into Sales, PreSales, and Marketing metrics.",
      "Migrated resource-intensive synchronous workflows to a scalable asynchronous architecture powered by Celery workers for tasks like automated payment reminders and interest calculations.",
      "Implemented an automated multi-channel notification engine utilizing Push and Email alerts to ensure real-time stakeholder communication for all critical lead events.",
      "Independently architected and led the development of the entire backend infrastructure as the sole developer, maintaining full ownership of the project's technical delivery.",
    ],
  },
  {
    project: "NMACC",
    bullets: [
      "Architected a resilient payment processing system by transitioning to a strictly Server-to-Server (S2S) confirmation flow for the Vista ticketing service; this eliminated \"orphan\" bookings and prevented significant business loss by ensuring ticket confirmations were concrete and reliable.",
      "Developed a custom Analytics API to process transaction logs, specifically designed to isolate the root cause of failed bookings and empower the business with real-time diagnostic data for strategic improvements.",
      "Delivered rapid hotfixes and feature enhancements in direct response to evolving business needs and production behavior, ensuring continuous platform stability and aligning technical delivery with commercial goals.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="
        relative
        w-[100%]
        p-[16px] lg:p-[32px]
        flex flex-col
        justify-center items-center
        scroll-mt-[4rem]
      "
    >
      {/* Section Title */}
      <div className="w-full text-left pb-[24px]">
        <span
          className="
            py-[8px] rounded-md
            font-extrabold text-base
            md:text-xl
            section-title
          "
        >
          PROFESSIONAL EXPERIENCE
        </span>
      </div>

      {/* Company Card */}
      <div
        className="
          relative w-[100%]
          border-1 border-gray-300/15
          rounded-md
          backdrop-blur-md
          bg-gradient-to-br
          from-purple-300/3 via-purple-600/0 to-slate-300/3
          overflow-hidden
        "
      >
        {/* Company Header */}
        <div
          className="
            w-[100%]
            flex flex-col sm:flex-row
            justify-between items-start sm:items-center
            p-[16px] lg:p-[24px]
            bg-slate-900/30
            gap-2 sm:gap-0
          "
        >
          <div className="flex flex-col items-start gap-1">
            <span
              className="
                text-lg md:text-2xl lg:text-3xl
                font-extrabold tracking-[3px] md:tracking-[5px]
                gradient-animation bg-clip-text
              "
            >
              ES MAGICO
            </span>
            <span
              className="
                text-sm md:text-base
                tracking-widest
                text-white/60
                font-bold
              "
            >
              BACKEND DEVELOPER
            </span>
          </div>

          <span
            className="
              text-sm md:text-base
              tracking-widest
              text-white/50
              font-bold
              border-1 border-white/10
              rounded-sm
              px-3 py-1
            "
          >
            DEC 2025 — APR 2026
          </span>
        </div>

        {/* Projects */}
        <div className="p-[16px] lg:p-[24px] flex flex-col gap-8">
          {projects.map((proj, projIdx) => (
            <div key={projIdx} className="flex flex-col gap-4">
              {/* Project Name */}
              <span
                className="
                  text-base md:text-lg lg:text-xl
                  font-extrabold tracking-[2px] md:tracking-[4px]
                  text-white/90
                  border-b-1 border-white/10
                  pb-2
                "
              >
                {proj.project}
              </span>

              {/* Bullets */}
              <div className="flex flex-col gap-3">
                {proj.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="
                      flex items-start gap-3
                      group/bullet
                    "
                  >
                    <span className="text-base leading-[24px]">—</span>
                    <span
                      className="
                        text-base
                        leading-[24px]
                      "
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
