import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { m, AnimatePresence } from "framer-motion";
import { Code2, Eye, Sparkles } from "lucide-react";

export default function CodeWidget({ isActive }) {
  const [tab, setTab] = useState("code");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!isActive) {
      const t = setTimeout(() => {
        setTab("code");
        setClicked(false);
      }, 0);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => {
      setTab("preview");
      const t2 = setTimeout(() => {
        setClicked(true);
      }, 1000);
      return () => clearTimeout(t2);
    }, 1800);
    return () => clearTimeout(t1);
  }, [isActive]);

  const codeSnippet = [
    { line: 1, text: "const Button = () => {" },
    { line: 2, text: "  return (" },
    { line: 3, text: "    <button className=\"premium\">" },
    { line: 4, text: "      Launch SaaS" },
    { line: 5, text: "    </button>" },
    { line: 6, text: "  );" },
    { line: 7, text: "}" }
  ];

  return (
    <div className="w-full flex flex-col gap-2 relative overflow-hidden mt-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl h-36">
      {/* Tab controls styled like VS Code tabs */}
      <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
        {/* Fake window buttons */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2 h-2 rounded-full bg-[#27c93f]"></span>
          <span className="text-[8px] text-slate-500 font-mono ml-2">Button.tsx</span>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5 z-10">
          <button
            onClick={() => setTab("code")}
            className={`flex items-center gap-1 text-[8.5px] px-2 py-0.5 rounded transition-all cursor-pointer font-semibold ${
              tab === "code" ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Code2 size={9} /> Code
          </button>
          <button
            onClick={() => setTab("preview")}
            className={`flex items-center gap-1 text-[8.5px] px-2 py-0.5 rounded transition-all cursor-pointer font-semibold ${
              tab === "preview" ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Eye size={9} /> Preview
          </button>
        </div>
      </div>

      {/* Editor Screen */}
      <div className="flex-1 overflow-hidden relative text-[9px] bg-slate-950/40 rounded-lg border border-white/5 p-2 font-mono leading-normal">
        {tab === "code" ? (
          <div className="flex flex-col text-left">
            {codeSnippet.map((c) => (
              <div key={c.line} className="flex gap-2.5">
                <span className="w-3 text-slate-600 text-right select-none text-[8.5px]">{c.line}</span>
                <span className={c.line === 3 || c.line === 4 ? "text-blue-400" : "text-slate-400"}>
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <button
              onClick={() => setClicked(!clicked)}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-sans font-bold shadow-lg shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer transition-all duration-200 text-[10px]"
            >
              {clicked ? (
                <>
                  <Sparkles size={10} className="animate-spin text-blue-200" />
                  Deployed!
                </>
              ) : (
                "Launch SaaS"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
