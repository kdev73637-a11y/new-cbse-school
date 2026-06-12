import { useState } from "react";

export default function DisclosureTable({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!sections || sections.length === 0) {
    return <div className="text-center text-gray-500 py-8">No disclosure data available.</div>;
  }

  return (
    <div className="space-y-3">
      {sections.map((section, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition font-semibold text-gray-900 text-left"
          >
            <span>{section.heading}</span>
            <svg className={`w-5 h-5 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openIndex === idx && (
            <div className="p-4 bg-white">
              <table className="w-full text-sm">
                <tbody>
                  {section.items.map((item, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="py-3 pr-4 font-medium text-gray-700 w-2/5">{item.label}</td>
                      <td className="py-3 text-gray-600">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
