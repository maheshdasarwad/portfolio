import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { data } from '../data/portfolioData'

export default function Education() {
  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">

        {/* Education Cards */}
        <div className="space-y-4 w-[450px]">
          {data.education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#1d2226]  p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-25 h-25 mt-2 flex items-center justify-center shrink-0">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain " />
                  ) : (
                    <GraduationCap size={22} className="text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[20px] font-bold text-[#f5a623] uppercase tracking-wider">
                    {edu.degree}
                  </span>

                  <h3 className="font-bold text-[18px] text-white mt-0.5">
                    {edu.field}
                  </h3>

                  <p className="text-[16px] text-[#0a66c2] font-medium mt-0.5">
                    {edu.institution}
                  </p>

                  <div className="flex gap-10 mt-2">
                  
                    <span className="flex items-center gap-1 text-[16px] text-[#b0b7bf]">
                      <Calendar size={16} /> {edu.startYear} – {edu.endYear}
                    </span>

                    <span className="justify-end text-[17px] font-semibold text-[#f5a623]">
                      {edu.gpa}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {edu.highlights.map(h => (
                      <span
                        key={h}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#2d3748] text-[#b0b7bf] border border-[#38434f]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration Section*/}
        <div className=" overflow-hidden flex items-center justify-end p-3">
         
          <img
            src="Learning-bro.svg"
            alt="Education Illustration"
            className=""
          />

        </div>

      </div>
    </div>
  )
}