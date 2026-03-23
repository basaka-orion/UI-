import React, { useState, useRef, useEffect } from 'react';

// ==========================================
// NEW: T0 AVANT-GARDE STYLES (2026)
// ==========================================

// 1. Neuro-morphic (神经拟态)
export const NeuromorphicCard = () => {
    return (
        <div className="h-56 bg-[#f0f4f8] flex items-center justify-center relative overflow-hidden group">
            {/* Breathing organic shape */}
            <div className="absolute w-40 h-40 bg-gradient-to-br from-teal-200 to-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-[blob_7s_infinite]"></div>
            <div className="absolute w-40 h-40 bg-gradient-to-tr from-blue-200 to-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-[blob_7s_infinite_2s]"></div>
            
            {/* Glassy organic container */}
            <div className="relative z-10 w-3/4 h-3/4 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rounded-[50px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse shadow-[0_0_20px_rgba(52,211,153,0.5)] mb-3"></div>
                <h3 className="text-gray-700 font-medium tracking-wide">Breathe</h3>
                <p className="text-gray-400 text-xs mt-1">Bio-sync active</p>
            </div>
        </div>
    );
};

// 2. Quantum Glass (量子玻璃)
export const QuantumGlassCard = () => {
    return (
        <div className="h-56 bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden group">
            {/* Colorful background elements to refract */}
            <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-violet-600 to-pink-600 opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
            
            {/* Quantum Glass Pane */}
            <div className="relative z-10 w-4/5 h-4/5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 perspective-1000">
                {/* Chromatic Aberration Text */}
                <div className="relative">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 absolute -left-[2px] text-red-500 mix-blend-screen opacity-70 group-hover:translate-x-[-2px] transition-transform">QUANTUM</h2>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 absolute left-[2px] text-cyan-500 mix-blend-screen opacity-70 group-hover:translate-x-[2px] transition-transform">QUANTUM</h2>
                    <h2 className="text-4xl font-bold text-white relative z-10">QUANTUM</h2>
                </div>
                
                {/* Refraction lines */}
                <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.2)_25%,transparent_30%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
        </div>
    );
};

// 3. Ambient Aura (环境氛围)
export const AmbientAuraCard = () => {
    return (
        <div className="h-56 bg-[#111111] flex items-center justify-center relative overflow-hidden group">
            {/* Ambient Light Source */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/30 rounded-full filter blur-[50px] group-hover:w-48 group-hover:h-48 group-hover:bg-amber-400/40 transition-all duration-700"></div>
            
            {/* UI Element dissolving into background */}
            <div className="relative z-10 w-3/4 h-2/3 flex flex-col justify-end p-6 border-b border-l border-amber-500/20 rounded-bl-3xl bg-gradient-to-tr from-amber-500/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:border-amber-400/40">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.5)] mb-auto"></div>
                <h3 className="text-amber-50 font-light text-xl tracking-widest">AURA</h3>
                <div className="w-full h-[1px] bg-gradient-to-r from-amber-500/50 to-transparent mt-2"></div>
            </div>
        </div>
    );
};

// 4. Hyper-Brutalism (超粗野主义)
export const HyperBrutalismCard = () => {
    return (
        <div className="h-56 bg-[#ff3366] flex items-center justify-center relative overflow-hidden group perspective-1000">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(#000_2px,transparent_2px),linear-gradient(90deg,#000_2px,transparent_2px)] bg-[size:20px_20px] opacity-20"></div>
            
            {/* 3D Brutalist Block */}
            <div className="relative z-10 w-3/4 h-2/3 bg-[#00ffcc] border-4 border-black flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-3 shadow-[8px_8px_0px_0px_#000] group-hover:shadow-[16px_16px_0px_0px_#000]">
                <h2 className="text-5xl font-black text-black uppercase tracking-tighter transform -skew-x-12">HYPER</h2>
                <div className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black px-2 py-1 transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-black font-bold text-sm">RAW</span>
                </div>
                <button className="mt-4 bg-black text-white px-6 py-2 font-mono font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                    Execute
                </button>
            </div>
        </div>
    );
};

// 5. Copilot AI (AI副驾驶)
export const CopilotAICard = () => {
    const [streaming, setStreaming] = useState(false);
    const [text, setText] = useState('');
    const fullText = '> Analyzing context...\n> Building plan...\n> Executing task ✓';

    const startStream = () => {
        if (streaming) return;
        setStreaming(true);
        setText('');
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setStreaming(false);
            }
        }, 40);
    };

    return (
        <div className="h-56 bg-[#0d1117] flex flex-col p-4 relative overflow-hidden group font-mono text-sm">
            {/* Status bar */}
            <div className="flex items-center gap-2 mb-3 text-xs">
                <div className={`w-2 h-2 rounded-full ${streaming ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400'}`}></div>
                <span className="text-gray-500">{streaming ? 'Agent thinking...' : 'Ready'}</span>
                <div className="flex-1"></div>
                <span className="text-violet-400">copilot-4o</span>
            </div>

            {/* Streaming output */}
            <div className="flex-1 text-gray-300 whitespace-pre-wrap text-xs leading-relaxed overflow-hidden">
                {text || <span className="text-gray-600 italic">Click Run to start agent...</span>}
                {streaming && <span className="inline-block w-2 h-4 bg-violet-400 animate-pulse ml-0.5"></span>}
            </div>

            {/* Action button */}
            <button
                onClick={startStream}
                className="mt-2 self-end px-4 py-1.5 bg-violet-600 text-white rounded-md text-xs font-bold hover:bg-violet-500 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-wait"
                disabled={streaming}
            >
                {streaming ? '⏳ Running...' : '▶ Run Agent'}
            </button>
        </div>
    );
};

// 6. Zero UI (零界面)
export const ZeroUICard = () => {
    const [proximity, setProximity] = useState(0);
    
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = e.clientX - rect.left - centerX;
        const y = e.clientY - rect.top - centerY;
        const dist = Math.sqrt(x * x + y * y);
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        setProximity(1 - Math.min(dist / maxDist, 1));
    };

    return (
        <div
            className="h-56 flex items-center justify-center relative overflow-hidden cursor-none"
            style={{ backgroundColor: `hsl(220, 15%, ${5 + proximity * 8}%)` }}
            onMouseMove={handleMove}
            onMouseLeave={() => setProximity(0)}
        >
            {/* Contextual elements that appear on proximity */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-700" style={{ opacity: proximity }}>
                <div className="w-32 h-32 rounded-full border border-white/10" style={{ transform: `scale(${0.5 + proximity * 0.5})`, opacity: proximity * 0.6 }}></div>
            </div>

            <div className="relative z-10 text-center transition-all duration-500" style={{ opacity: 0.2 + proximity * 0.8 }}>
                <div className="text-white/80 text-lg font-light tracking-[0.3em]" style={{ letterSpacing: `${0.3 - proximity * 0.2}em` }}>
                    AMBIENT
                </div>
                <div className="text-gray-500 text-[10px] mt-2" style={{ opacity: proximity > 0.5 ? 1 : 0, transition: 'opacity 0.3s' }}>
                    Interface appears when needed
                </div>
            </div>

            {/* Subtle glow follows cursor */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100,130,255,${proximity * 0.15}) 0%, transparent 50%)`
            }}></div>
        </div>
    );
};

// 7. Data Ink (数据墨水)
export const DataInkCard = () => {
    const data = [28, 45, 32, 58, 41, 72, 55, 68, 48, 85, 62, 78];
    const max = Math.max(...data);

    return (
        <div className="h-56 bg-[#fefefe] flex flex-col p-5 relative font-['IBM_Plex_Mono']">
            {/* Header - minimal */}
            <div className="flex justify-between items-baseline mb-1">
                <span className="text-[10px] text-gray-900 font-bold tracking-wide">REVENUE Q4</span>
                <span className="text-[10px] text-gray-400">$4.2M ↑12%</span>
            </div>
            <div className="h-px bg-gray-200 mb-3"></div>

            {/* Sparkline chart - pure data ink */}
            <div className="flex-1 flex items-end gap-[3px]">
                {data.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end group cursor-crosshair">
                        <div
                            className="w-full bg-gray-800 group-hover:bg-black transition-colors relative"
                            style={{ height: `${(v / max) * 100}%`, minHeight: '2px' }}
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {v}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Axis labels */}
            <div className="flex justify-between mt-1 text-[8px] text-gray-400">
                <span>Jan</span><span>Dec</span>
            </div>
        </div>
    );
};

// 8. Emotion Adaptive (情绪自适应)
export const EmotionAdaptiveCard = () => {
    const [mood, setMood] = useState<'calm' | 'joy' | 'focus'>('calm');

    const themes = {
        calm: { bg: 'from-blue-50 to-indigo-50', accent: 'bg-blue-400', text: 'text-blue-800', emoji: '🌊', label: 'Calm' },
        joy: { bg: 'from-amber-50 to-orange-50', accent: 'bg-amber-400', text: 'text-amber-800', emoji: '☀️', label: 'Joy' },
        focus: { bg: 'from-emerald-50 to-teal-50', accent: 'bg-emerald-500', text: 'text-emerald-800', emoji: '🎯', label: 'Focus' },
    };
    const t = themes[mood];

    return (
        <div className={`h-56 bg-gradient-to-br ${t.bg} flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700`}>
            {/* Background pulse */}
            <div className={`absolute w-40 h-40 ${t.accent} rounded-full filter blur-[60px] opacity-20 animate-pulse`}></div>

            <div className="relative z-10 text-center">
                <div className="text-4xl mb-2 transition-transform duration-500 hover:scale-125">{t.emoji}</div>
                <h3 className={`${t.text} font-medium text-lg transition-colors duration-500`}>{t.label}</h3>
                <p className="text-gray-400 text-[10px] mt-1">Adapting to your mood</p>
            </div>

            {/* Mood switchers */}
            <div className="absolute bottom-3 flex gap-3 z-20">
                {(['calm', 'joy', 'focus'] as const).map(m => (
                    <button
                        key={m}
                        onClick={(e) => { e.stopPropagation(); setMood(m); }}
                        className={`w-6 h-6 rounded-full transition-all duration-300 ${mood === m ? `${themes[m].accent} scale-110 shadow-lg` : 'bg-gray-300 hover:bg-gray-400'}`}
                        title={themes[m].label}
                    ></button>
                ))}
            </div>
        </div>
    );
};

// 9. Agentic OS (智能体OS)
export const AgenticOSCard = () => {
    const [agents, setAgents] = useState([
        { name: 'Planner', status: 'idle', color: 'emerald' },
        { name: 'Coder', status: 'idle', color: 'cyan' },
        { name: 'Reviewer', status: 'idle', color: 'violet' },
    ]);

    const runPipeline = () => {
        const statusFlow = ['running', 'running', 'idle'];
        agents.forEach((_, i) => {
            setTimeout(() => {
                setAgents(prev => prev.map((a, j) => ({
                    ...a,
                    status: j === i ? 'running' : j < i ? 'done' : 'idle'
                })));
            }, i * 800);
        });
        setTimeout(() => {
            setAgents(prev => prev.map(a => ({ ...a, status: 'done' })));
        }, agents.length * 800);
        setTimeout(() => {
            setAgents(prev => prev.map(a => ({ ...a, status: 'idle' })));
        }, agents.length * 800 + 2000);
    };

    return (
        <div className="h-56 bg-[#0a0f14] flex flex-col p-4 font-mono text-xs relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-emerald-400 font-bold text-[10px] tracking-wider">⬡ AGENT MESH</span>
                <span className="text-gray-600 text-[9px]">v2.0</span>
            </div>

            {/* Agent pipeline */}
            <div className="flex-1 flex flex-col gap-2">
                {agents.map((agent, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            agent.status === 'running' ? 'bg-yellow-400 animate-pulse' :
                            agent.status === 'done' ? 'bg-emerald-400' :
                            'bg-gray-600'
                        }`}></div>
                        <span className="text-gray-400 w-16">{agent.name}</span>
                        <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full transition-all duration-700 ${
                                agent.status === 'running' ? 'w-1/2 bg-yellow-400' :
                                agent.status === 'done' ? 'w-full bg-emerald-400' :
                                'w-0'
                            }`}></div>
                        </div>
                        <span className="text-gray-600 w-8 text-right">
                            {agent.status === 'done' ? '✓' : agent.status === 'running' ? '⟳' : '○'}
                        </span>
                    </div>
                ))}
            </div>

            {/* Connection lines */}
            <div className="absolute right-4 top-12 bottom-16 w-px bg-gradient-to-b from-emerald-500/30 via-cyan-500/30 to-violet-500/30"></div>

            <button
                onClick={runPipeline}
                className="mt-2 self-center px-4 py-1 border border-emerald-500/30 text-emerald-400 rounded text-[10px] hover:bg-emerald-500/10 active:scale-95 transition-all"
            >
                ▶ Execute Pipeline
            </button>
        </div>
    );
};

// 10. Wabi-Sabi Digital (数字侘寂)
export const WabiSabiCard = () => {
    return (
        <div className="h-56 bg-[#f5f0e8] flex items-center justify-center relative overflow-hidden group">
            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}></div>

            {/* Imperfect circle */}
            <div className="absolute top-6 right-8 w-20 h-20 border border-stone-300/40 rounded-[40%_60%_55%_45%/50%_40%_60%_50%] group-hover:rounded-[50%_50%_50%_50%] transition-all duration-[2s]"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-[200px]">
                <div className="w-12 h-px bg-stone-400/50 mx-auto mb-4"></div>
                <h3 className="font-serif text-stone-600 text-lg tracking-wide font-light">不完美</h3>
                <p className="text-stone-400 text-[10px] mt-2 leading-relaxed font-light">
                    Beauty in imperfection
                </p>
                <div className="w-8 h-px bg-stone-400/30 mx-auto mt-4 group-hover:w-16 transition-all duration-[1.5s]"></div>
            </div>

            {/* Weathered edge */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-stone-200/30 to-transparent"></div>
        </div>
    );
};

// ==========================================
// T0 AVANT-GARDE STYLES (2024-2025)
// ==========================================

// 1. Chromium Liquid (液态铬金)
export const ChromiumCard = () => {
    return (
        <div className="h-56 bg-black flex items-center justify-center relative overflow-hidden group cursor-pointer">
            {/* Background Noise */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            {/* Liquid Metal Blobs - Mix Blend Mode Difference */}
            <div className="absolute inset-0 filter blur-[40px] opacity-80 mix-blend-difference">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-white animate-[spin_8s_linear_infinite]"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-white animate-[spin_10s_reverse_infinite]"></div>
            </div>

            {/* Chrome Typography Container */}
            <div className="relative z-10 flex flex-col items-center mix-blend-difference text-white">
                <h2 className="text-5xl font-black italic tracking-tighter transform skew-x-[-12deg] group-hover:skew-x-0 transition-transform duration-500"
                    style={{ fontFamily: 'Impact, sans-serif' }}>
                    CHROME
                </h2>
                <div className="w-full h-1 bg-white mt-1 mb-2"></div>
                <p className="font-mono text-[10px] tracking-[0.5em] uppercase">Liquid Metal</p>
            </div>

            {/* Specular Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

// 2. Kinetic Typography (动势排印)
export const KineticCard = () => {
    return (
        <div className="h-56 bg-[#eaff00] flex flex-col justify-between overflow-hidden relative group cursor-crosshair text-black">
            {/* Marquee Background (Slow) */}
            <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="whitespace-nowrap text-6xl font-black italic leading-none animate-marquee" style={{ animationDuration: `${10 + i * 2}s` }}>
                        KINETIC TYPE KINETIC TYPE KINETIC TYPE
                    </div>
                ))}
            </div>

            {/* Main Interactive Text */}
            <div className="z-10 flex-grow flex items-center justify-center px-4">
                <h1 className="text-6xl font-black leading-none tracking-tighter text-center transition-all duration-300 ease-out group-hover:scale-y-150 group-hover:scale-x-90 group-hover:tracking-widest">
                    MOVE
                    <br />
                    FAST
                </h1>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-black text-[#eaff00] rounded-full w-20 h-20 flex items-center justify-center animate-[spin_4s_linear_infinite] group-hover:animate-none">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                    <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                    <text className="text-[14px] font-bold uppercase fill-current">
                        <textPath href="#curve">
                            • Variable • Fonts • Kinetic •
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

// 3. Dreamcore Aero (梦核航空)
export const DreamcoreCard = () => {
    return (
        <div className="h-56 bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF] flex items-center justify-center relative overflow-hidden group">
            {/* Clouds */}
            <div className="absolute top-4 left-4 w-16 h-8 bg-white rounded-full blur-md opacity-80 animate-[float-y_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-10 right-10 w-24 h-10 bg-white rounded-full blur-lg opacity-60 animate-[float-y_6s_ease-in-out_infinite_reverse]"></div>
            
            {/* The "Portal" or Orb */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-[#FFD1DC] via-white to-[#B5EAD7] shadow-[0_0_30px_rgba(255,255,255,0.8),inset_0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center transform transition duration-700 group-hover:scale-110 group-hover:rotate-180 cursor-pointer">
                <span className="text-3xl filter blur-[0.5px] opacity-80">👁️</span>
                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-pulse rounded-full"></div>
            </div>

            {/* Low-res Text */}
            <div className="absolute bottom-4 font-['Comic_Sans_MS'] text-[#ff69b4] text-sm tracking-widest drop-shadow-md mix-blend-multiply">
                memories_v1.0
            </div>

            {/* Bloom Filter Simulated */}
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
};

// 4. Spatial Bento (空间便当盒)
export const SpatialCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div className="h-56 bg-[#09090b] flex items-center justify-center relative p-6 group perspective-1000" onMouseMove={handleMouseMove}>
            <div 
                ref={cardRef}
                className="relative w-full h-full bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-100 ease-out group-hover:rotate-x-2 group-hover:rotate-y-2"
                style={{ 
                    backdropFilter: 'blur(20px)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Spotlight Gradient */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.1), transparent 40%)`
                    }}
                ></div>

                {/* Content */}
                <div className="p-5 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg flex items-center justify-center text-white font-bold text-lg">
                            S
                        </div>
                        <div className="bg-white/5 px-2 py-1 rounded-md border border-white/5 text-[10px] text-zinc-400 font-mono">
                            PRO
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-zinc-100 font-semibold text-lg">Spatial</h3>
                        <p className="text-zinc-500 text-xs mt-1">Light tracking enabled.</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-white h-full w-2/3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 5. Holographic Foil (全息镭射)
export const HolographicCard = () => {
    return (
        <div className="h-56 relative overflow-hidden group cursor-pointer flex items-center justify-center">
             {/* Holographic Base Gradient - Animated */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#ff00cc] via-[#333399] to-[#66ffff] bg-[length:400%_400%] animate-aurora"></div>
             
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
             
             {/* Glass Overlay */}
             <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             {/* Sticker */}
             <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-white/40 to-white/10 border border-white/50 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                 <div className="text-white font-black text-xs tracking-widest text-center mix-blend-overlay">
                     HOLO<br/>GRAPHIC
                 </div>
                 {/* Specular Shine */}
                 <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
             </div>
        </div>
    );
};

// 6. Dither Punk (抖动朋克)
export const DitherCard = () => {
    return (
        <div className="h-56 bg-black relative overflow-hidden group flex items-center justify-center">
            {/* Dither Pattern CSS Trick */}
            <div 
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#555 1px, transparent 1px)',
                    backgroundSize: '3px 3px'
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center bg-white border-2 border-white p-4 max-w-[80%] shadow-[4px_4px_0px_#555] transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none cursor-pointer">
                <h3 className="font-['VT323'] text-3xl font-bold uppercase tracking-widest text-black">1-BIT</h3>
                <p className="font-mono text-[10px] text-black mt-1">ATKINSON DITHERING</p>
                {/* Pixel Icon */}
                <div className="flex justify-center gap-1 mt-2">
                    <div className="w-2 h-2 bg-black"></div>
                    <div className="w-2 h-2 bg-black"></div>
                    <div className="w-2 h-2 bg-gray-400"></div>
                </div>
            </div>
        </div>
    );
};

// 7. Risograph (孔版印刷)
export const RisographCard = () => {
    return (
        <div className="h-56 bg-[#fffbf0] relative overflow-hidden group flex items-center justify-center cursor-pointer">
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/rough-cloth.png')] mix-blend-multiply"></div>

            {/* Riso Ink Layers (Multiply Blend) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] w-32 h-32 bg-[#ff007f] rounded-full mix-blend-multiply opacity-80 filter blur-[0.5px] group-hover:translate-x-[-65%] transition-transform duration-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-32 h-32 bg-[#00aaff] rounded-full mix-blend-multiply opacity-80 filter blur-[0.5px] group-hover:translate-x-[-35%] transition-transform duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 mix-blend-multiply text-[#1a1a1a]">
                <h2 className="text-4xl font-serif font-black italic tracking-tighter" style={{ textShadow: '2px 2px 0px rgba(255,255,0,0.5)' }}>RISO</h2>
            </div>
            
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};

// 8. Ethereal Glow (以太光晕)
export const EtherealCard = () => {
    return (
        <div className="h-56 bg-[#fcfcfc] flex items-center justify-center relative overflow-hidden group">
            {/* Massive Bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-[0_0_80px_40px_rgba(255,255,255,1)] z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#f0f0f0] to-white opacity-50"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center transition-transform duration-700 group-hover:scale-105">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mb-4"></div>
                <h3 className="font-serif text-2xl text-gray-800 tracking-[0.2em] font-light blur-[0.5px] hover:blur-none transition-all duration-500">ANGEL</h3>
                <p className="text-[9px] text-gray-400 mt-2 uppercase tracking-[0.3em] font-light">Ethereal Interface</p>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mt-4"></div>
            </div>

            {/* Soft Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fff5e6] rounded-full filter blur-[40px] opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#e6f0ff] rounded-full filter blur-[40px] opacity-60"></div>
        </div>
    );
};


// ==========================================
// T0: EXISTING HIGH FIDELITY STYLES
// ==========================================

// 0. Anthropic Serif (人文智性)
export const AnthropicCard = () => {
    return (
        <div className="h-56 bg-[#F3F0EB] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer">
            {/* Subtle Gradient Noise */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply"></div>
            
            {/* Breathing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#E6DCC8] to-[#D9D2C5] rounded-full opacity-50 blur-3xl animate-pulse"></div>

            {/* Editorial Content */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-4">
                     <span className="font-['Playfair_Display'] font-medium italic text-[#333333] text-3xl tracking-wide group-hover:tracking-widest transition-all duration-700">
                         Claude
                     </span>
                </div>
                
                <p className="font-sans text-[10px] text-[#666666] max-w-[140px] leading-relaxed mb-6 opacity-80">
                    Safe, accurate, and secure AI for your team.
                </p>

                <button className="px-6 py-2 bg-[#D06C59] text-white font-serif text-sm rounded-full shadow-[0_4px_14px_rgba(208,108,89,0.3)] hover:bg-[#B85C4A] hover:shadow-[0_6px_20px_rgba(208,108,89,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                    Talk to Claude
                </button>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute bottom-4 left-4 font-serif text-[#333333] opacity-30 text-xs italic">
                Anthropic
            </div>
        </div>
    );
};

// 0. AI Abstract (智构抽象)
export const AiAbstractCard = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<any[]>([]);
    const animationFrameRef = useRef<number>();
    const mouseRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Init Particles
        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Background Void
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update & Draw Particles
            particlesRef.current.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`; // Electric Blue
                ctx.fill();

                // Connections (Synapses)
                // 1. Particle to Particle
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const p2 = particlesRef.current[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 60) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 - dist/60 * 0.2})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // 2. Mouse to Particle (Interaction)
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    // Active Synapse Glow
                    ctx.strokeStyle = `rgba(168, 85, 247, ${0.8 - dist/100 * 0.8})`; // Neon Purple
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                    ctx.stroke();
                    
                    // Excite particle
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(168, 85, 247, 0.4)`;
                    ctx.fill();
                }
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current = { x: -100, y: -100 };
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-56 relative overflow-hidden flex items-center justify-center cursor-crosshair group"
        >
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="relative z-10 text-center pointer-events-none mix-blend-screen">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                    NEURAL
                </h2>
                <div className="text-[10px] text-cyan-500 font-mono mt-1 opacity-80">LATENT SPACE VISUALIZED</div>
            </div>
        </div>
    );
};

// 0. Blueprint CAD (工程蓝图)
export const BlueprintCadCard = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Snap to grid (grid size ~20px)
        const rawX = e.clientX - rect.left;
        const rawY = e.clientY - rect.top;
        const snappedX = Math.round(rawX / 5) * 5;
        const snappedY = Math.round(rawY / 5) * 5;
        setCoords({ x: snappedX, y: snappedY });
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="h-56 bg-[#003366] relative overflow-hidden cursor-none group"
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
                     backgroundSize: '20px 20px' 
                 }}></div>
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
                     backgroundSize: '100px 100px' 
                 }}></div>

            {/* Crosshair (Infinite) */}
            <div className="absolute top-0 bottom-0 w-px bg-white/50 pointer-events-none" style={{ left: coords.x }}></div>
            <div className="absolute left-0 right-0 h-px bg-white/50 pointer-events-none" style={{ top: coords.y }}></div>

            {/* Floating Schematic Object */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/80 w-32 h-20 flex items-center justify-center pointer-events-none">
                 <div className="absolute -top-3 -left-3 w-2 h-2 border-t border-l border-white"></div>
                 <div className="absolute -top-3 -right-3 w-2 h-2 border-t border-r border-white"></div>
                 <div className="absolute -bottom-3 -left-3 w-2 h-2 border-b border-l border-white"></div>
                 <div className="absolute -bottom-3 -right-3 w-2 h-2 border-b border-r border-white"></div>
                 <div className="text-white/80 font-mono text-xs">MODULE_A1</div>
                 {/* Dotted Lines to cursor */}
                 <svg className="absolute top-0 left-0 w-full h-full overflow-visible opacity-50">
                     <line x1="50%" y1="50%" x2={coords.x - (containerRef.current?.offsetWidth || 0)/2 + 64} y2={coords.y - (containerRef.current?.offsetHeight || 0)/2 + 40} stroke="white" strokeDasharray="4 2" />
                 </svg>
            </div>

            {/* UI Overlay */}
            <div className="absolute top-2 right-2 text-white font-mono text-[10px] bg-[#002244] px-2 py-1 border border-white/20">
                <div>X: {coords.x.toFixed(2)}</div>
                <div>Y: {coords.y.toFixed(2)}</div>
                <div>Z: 0.00</div>
                <div className="text-yellow-400 mt-1">SNAP: ON</div>
            </div>

            <div className="absolute bottom-2 left-2 text-white/50 font-mono text-[9px]">
                ISO 9001:2025 // SCALE 1:1
            </div>
            
            {/* Custom Cursor Text */}
            <div 
                className="absolute text-[9px] text-yellow-300 font-mono pointer-events-none pl-2 pb-2"
                style={{ left: coords.x, top: coords.y }}
            >
                TRK
            </div>
        </div>
    );
};

// 1. Liquid Glass (液态玻璃)
export const LiquidGlassCard = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMove = (e: React.MouseEvent) => {
        if (!boxRef.current) return;
        const rect = boxRef.current.getBoundingClientRect();
        // Calculate percentage from center
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setOffset({ x: x * 20, y: y * 20 });
    };

    return (
        <div className="p-0 bg-cover bg-center h-56 relative overflow-hidden flex items-center justify-center group" 
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80)' }}
             onMouseMove={handleMove}
             onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        >
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
            
            <div ref={boxRef} className="relative w-full h-full flex items-center justify-center">
                {/* Liquid Blob Container */}
                <div 
                    className="relative w-40 h-40 animate-blob bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center text-white overflow-hidden transition-transform duration-200"
                    style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
                >
                    {/* Simulated Caustics/Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 transform translate-x-[-150%] animate-[shimmer_3s_infinite]"></div>
                    
                    <div className="text-center z-10 mix-blend-overlay pointer-events-none select-none">
                        <div className="text-3xl font-light">💧</div>
                        <div className="text-xs font-bold tracking-widest mt-1 uppercase">Liquid</div>
                    </div>
                    
                    {/* Distortion Helper (SVG filter referenced in HTML) */}
                    <div className="absolute inset-0" style={{ backdropFilter: 'url(#liquid-displacement)' }}></div>
                </div>
            </div>
        </div>
    );
};

// 2. Neo-Skeuomorphism: Nature (自然复兴)
export const SkeuoNatureCard = () => {
    return (
        <div className="h-56 bg-[#eaddcf] flex items-center justify-center relative overflow-hidden group cursor-pointer">
            {/* Wood Texture Simulation */}
            <div className="absolute inset-0 opacity-20" style={{ 
                backgroundImage: `repeating-linear-gradient(45deg, #8b5a2b 0, #8b5a2b 1px, transparent 0, transparent 50%),
                                  repeating-linear-gradient(-45deg, #a0522d 0, #a0522d 1px, transparent 0, transparent 50%)`,
                backgroundSize: '30px 30px'
            }}></div>
            
            <div className="relative bg-[#f4e4bc] p-6 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-[#e6d2a5] flex flex-col items-center gap-3 transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Growing Plant Animation */}
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                     <div className="absolute bottom-0 w-1 h-0 bg-green-600 group-hover:h-8 transition-all duration-1000 ease-out rounded-t-full"></div>
                     <div className="absolute bottom-6 left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-full scale-0 group-hover:scale-100 transition-all duration-500 delay-500"></div>
                     <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-green-400 rounded-full transform translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-500 delay-700"></div>
                </div>
                <div className="text-center">
                    <h4 className="font-serif text-[#5c4033] font-bold">Growth</h4>
                    <p className="text-[10px] text-[#8b4513] opacity-70 group-hover:opacity-100 transition">Hover to water</p>
                </div>
            </div>
        </div>
    );
};

// 3. Neo-Skeuomorphism: Stone (金融石材)
export const SkeuoStoneCard = () => {
    return (
        <div className="h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
            <div className="relative w-56 h-36 rounded-lg shadow-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-500">
                {/* Marble Texture */}
                <div className="absolute inset-0 bg-gray-800" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/40"></div>
                
                {/* Metallic Chip */}
                <div className="absolute top-5 left-5 w-10 h-8 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 rounded-md shadow-md border border-yellow-100/30"></div>
                
                {/* Embossed Text */}
                <div className="absolute bottom-12 left-5 text-gray-300 font-mono text-sm tracking-[0.15em] text-shadow-sm group-hover:text-white transition-colors">
                    **** 4921
                </div>
                <div className="absolute bottom-5 left-5 text-[10px] text-gray-400 font-bold uppercase">Platinum</div>
                <div className="absolute bottom-5 right-5 text-gray-400 font-bold italic text-xl mix-blend-overlay">VISA</div>
                
                {/* Sheen Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform"></div>
            </div>
        </div>
    );
};

// 4. Interactive 3D (全维空间)
export const ThreeDCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        if(!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Enhance rotation effect
        cardRef.current.style.transform = `
            perspective(800px)
            rotateY(${x * 40}deg)
            rotateX(${-y * 40}deg)
            scale(1.1)
        `;
    };

    const handleLeave = () => {
        if(cardRef.current) {
            cardRef.current.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)`;
        }
    };

    return (
        <div className="h-56 bg-indigo-50 flex items-center justify-center overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
            <div 
                ref={cardRef}
                className="w-40 h-40 bg-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center text-white transition-transform duration-200 ease-out cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none"></div>
                
                {/* Floating Element 1 */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-500 rounded-full shadow-lg flex items-center justify-center font-bold text-xs" 
                     style={{ transform: 'translateZ(60px)' }}>
                     Hi
                </div>
                {/* Floating Element 2 */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-lg shadow-lg opacity-90" 
                     style={{ transform: 'translateZ(30px)' }}></div>
                
                <h3 className="text-3xl font-black drop-shadow-md" style={{ transform: 'translateZ(80px)' }}>3D</h3>
            </div>
        </div>
    );
};

// 5. Aurora Mesh (极光渐变)
export const AuroraCard = () => {
    return (
        <div className="h-56 bg-gray-900 relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 group">
            <div className="absolute inset-0 animate-aurora mix-blend-overlay opacity-80" 
                 style={{ backgroundImage: 'linear-gradient(45deg, #ff00cc, #3333ff, #00ccff)' }}></div>
            
            {/* Mesh Blobs */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_10s_linear_infinite] opacity-60 mix-blend-screen" 
                 style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(0,0,0,0) 70%)' }}></div>
            <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] animate-float opacity-60 mix-blend-screen" 
                 style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(0,0,0,0) 70%)' }}></div>
            
            <div className="relative z-10 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-white text-center shadow-2xl transition-transform group-hover:scale-105">
                <h2 className="text-2xl font-bold tracking-tight">Aurora</h2>
                <div className="w-8 h-1 bg-white/50 mx-auto my-2 rounded-full"></div>
                <p className="text-xs opacity-80">Mesh Gradients</p>
            </div>
        </div>
    );
};

// 6. Atomic Age (原子时代)
export const AtomicCard = () => {
    return (
        <div className="h-56 bg-[#008080] flex items-center justify-center overflow-hidden relative group cursor-pointer">
            {/* Starburst Pattern */}
            <div className="absolute inset-0 bg-[repeating-conic-gradient(#006666_0deg_10deg,#008080_10deg_20deg)] opacity-30 group-hover:rotate-12 transition duration-700 ease-in-out"></div>
            
            <div className="relative z-10 w-32 h-32 bg-[#FFD700] rounded-full flex items-center justify-center shadow-[0_0_0_8px_#FF6B6B] transition-transform group-hover:scale-110">
                {/* Orbit */}
                <div className="absolute w-40 h-10 border-2 border-white/60 rounded-[100%] rotate-45 animate-pulse"></div>
                <div className="absolute w-40 h-10 border-2 border-white/60 rounded-[100%] -rotate-45 animate-pulse delay-75"></div>
                
                <span className="font-['Playfair_Display'] font-black text-[#008080] text-xl italic z-10">ATOM</span>
                {/* Satellite */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full shadow-lg animate-bounce"></div>
            </div>
        </div>
    );
};

// 7. The Jetsons (杰森一家)
export const JetsonsCard = () => {
    return (
        <div className="h-56 bg-[#e0f7fa] flex items-center justify-center relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4fc3f7 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

            {/* Googie Shape Container */}
            <div className="relative bg-white border-4 border-[#4fc3f7] rounded-[40px_10px_40px_10px] p-6 shadow-[10px_10px_0px_rgba(0,0,0,0.1)] transform rotate-2 group-hover:rotate-0 transition duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ffab91] rounded-full border-2 border-white shadow-md"></div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-[#4fc3f7] flex items-center justify-center mb-2 overflow-hidden bg-[#e1f5fe]">
                        <div className="w-10 h-10 border-t-4 border-r-4 border-[#0288d1] rounded-full animate-spin"></div>
                    </div>
                    <h4 className="font-['Chakra_Petch'] font-bold text-[#0277bd] text-sm tracking-wider">AUTO-WASH</h4>
                    <button className="mt-2 px-4 py-1 bg-[#ffab91] text-white rounded-full text-xs font-bold hover:bg-[#ff8a65] transition active:scale-95 shadow-md">START</button>
                </div>
            </div>
        </div>
    );
};

// 8. Solarpunk Utopia (太阳朋克)
export const SolarpunkUtopiaCard = () => {
    return (
        <div className="h-56 bg-[#f7f3e8] flex items-center justify-center overflow-hidden relative">
            <div className="relative p-8 border-2 border-[#556b2f] rounded-[50px_50px_0_0] bg-gradient-to-b from-[#fffbe6] to-[#f0e6c8] shadow-lg group hover:scale-105 transition duration-500 cursor-pointer">
                {/* Organic Ornament */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-8 flex justify-center space-x-2 mt-2">
                     <div className="w-2 h-2 rounded-full bg-[#daa520] group-hover:bg-[#ffbf00] transition-colors"></div>
                     <div className="w-2 h-2 rounded-full bg-[#daa520] group-hover:bg-[#ffbf00] transition-colors"></div>
                     <div className="w-2 h-2 rounded-full bg-[#daa520] group-hover:bg-[#ffbf00] transition-colors"></div>
                </div>
                
                <div className="mt-4 text-center">
                    <h3 className="font-['Cinzel'] font-bold text-[#2f4f4f] text-xl">HARMONY</h3>
                    <div className="w-full h-px bg-[#556b2f] my-2 group-hover:w-1/2 mx-auto transition-all"></div>
                    <p className="font-['Inter'] text-[10px] text-[#556b2f]">Technology × Nature</p>
                </div>
                
                {/* Sun Glow */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400/30 blur-xl rounded-full group-hover:scale-150 transition duration-700"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#556b2f]"></div>
            </div>
        </div>
    );
};

// 9. Dystopian Brutalism (纯黑白反乌托邦)
export const BrutalBWCard = () => {
    return (
        <div className="h-56 bg-black flex flex-col justify-between p-4 font-mono text-white relative overflow-hidden group cursor-crosshair">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#222_3px)] opacity-50 pointer-events-none"></div>
            
            <div className="flex justify-between items-start z-10">
                <span className="border border-white px-1 text-xs bg-white text-black">ERR_404</span>
                <span className="animate-pulse text-red-500">● REC</span>
            </div>
            
            <div className="z-10 group-hover:translate-x-2 transition-transform">
                <h1 className="text-4xl font-bold leading-none tracking-tighter mix-blend-difference">TRUTH</h1>
                <h1 className="text-4xl font-bold leading-none tracking-tighter ml-4 italic opacity-50">LIES</h1>
            </div>
            
            <button className="self-end border-b border-white hover:bg-white hover:text-black transition-colors z-10 text-xs uppercase p-1">
                Access Data &gt;
            </button>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full mix-blend-exclusion filter blur-xl opacity-0 group-hover:opacity-100 transition duration-100"></div>
        </div>
    );
};

// 10. Gen UI (超个性化)
export const GenUICard = () => {
    const [mode, setMode] = useState<'default' | 'focus' | 'elderly'>('default');
    const [loading, setLoading] = useState(false);

    const switchMode = (newMode: 'default' | 'focus' | 'elderly') => {
        if (newMode === mode) return;
        setLoading(true);
        setTimeout(() => {
            setMode(newMode);
            setLoading(false);
        }, 600);
    };

    const getStyles = () => {
        switch(mode) {
            case 'focus': return 'bg-[#1a1a1a] text-gray-400 items-center justify-center';
            case 'elderly': return 'bg-yellow-50 text-black items-start justify-start p-6';
            default: return 'bg-white text-gray-800 items-center justify-center';
        }
    };

    return (
        <div className={`h-56 transition-all duration-500 flex flex-col relative overflow-hidden ${getStyles()}`}>
            
            {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-purple-600">
                    <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-bold mt-2">Generating UI...</span>
                </div>
            )}

            {/* Dynamic Content */}
            {!loading && mode === 'default' && (
                <div className="text-center animate-fade-in">
                    <h3 className="text-lg font-bold">Standard UI</h3>
                    <p className="text-xs text-gray-500 mb-4">One size fits all</p>
                    <div className="flex gap-2 justify-center">
                         <div className="w-8 h-2 bg-gray-200 rounded"></div>
                         <div className="w-8 h-2 bg-gray-200 rounded"></div>
                    </div>
                </div>
            )}
            
            {!loading && mode === 'focus' && (
                <div className="text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center mb-2 mx-auto shadow-[0_0_20px_rgba(147,51,234,0.5)] animate-pulse">
                        <span className="text-2xl text-white">🧘</span>
                    </div>
                    <p className="text-xs tracking-[0.2em] uppercase">Deep Focus Mode</p>
                </div>
            )}
            
            {!loading && mode === 'elderly' && (
                <div className="w-full animate-fade-in">
                    <h2 className="text-3xl font-black mb-2">余额</h2>
                    <div className="text-4xl font-bold text-blue-800 mb-4">¥ 8,000</div>
                    <button className="w-full py-3 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-lg active:scale-95 transition">转账</button>
                </div>
            )}

            {/* Context Switchers */}
            <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2 z-20">
                <button onClick={(e) => {e.stopPropagation(); switchMode('default')}} className={`w-3 h-3 rounded-full transition-colors ${mode === 'default' ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-gray-400'}`} title="Standard"></button>
                <button onClick={(e) => {e.stopPropagation(); switchMode('focus')}} className={`w-3 h-3 rounded-full transition-colors ${mode === 'focus' ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-gray-400'}`} title="Focus"></button>
                <button onClick={(e) => {e.stopPropagation(); switchMode('elderly')}} className={`w-3 h-3 rounded-full transition-colors ${mode === 'elderly' ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-gray-400'}`} title="Accessible"></button>
            </div>
            
            <div className="absolute top-2 right-2 text-[10px] text-gray-400 bg-gray-100 px-1 rounded border border-gray-200 z-20">AI Context: {mode}</div>
        </div>
    );
};


// ... Existing Components (BentoCard, GlassCard, etc.) ...
// === 1. Bento Card ===
export const BentoCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [temp, setTemp] = useState('24.5°C');
    const [systemActive, setSystemActive] = useState(false);

    return (
        <div className="p-4 bg-gray-100 flex-grow relative h-56">
            <div className="grid grid-cols-2 gap-2 h-40">
                <div 
                    className="bento-card bg-white rounded-2xl p-3 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md" 
                    onClick={() => setTemp((Math.random() * 10 + 20).toFixed(1) + '°C')}
                >
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs">☀️</div>
                    <div><div className="text-[10px] text-gray-400">Update</div><div className="font-bold text-lg">{temp}</div></div>
                </div>
                
                <div 
                    className={`bento-card rounded-2xl p-3 text-white flex flex-col justify-between shadow-sm cursor-pointer transition-colors duration-300 ${isPlaying ? 'bg-gray-800' : 'bg-gray-900'}`} 
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                        {isPlaying ? '⏸' : '▶'}
                    </div>
                    <div>
                        <div className={`text-[10px] ${isPlaying ? 'text-green-400' : 'text-gray-400'}`}>
                            {isPlaying ? 'Now Playing' : 'Paused'}
                        </div>
                        <div className="font-bold text-sm">Starboy</div>
                    </div>
                </div>
                
                <div className="col-span-2 bento-card bg-blue-500 text-white rounded-2xl p-3 flex items-center justify-between shadow-sm">
                    <span className="font-bold text-sm">System</span>
                    <div className="w-10 h-5 bg-blue-400 rounded-full relative cursor-pointer" onClick={() => setSystemActive(!systemActive)}>
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0 left-0 transition-transform duration-200 ${systemActive ? 'translate-x-5' : ''}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// === 2. Glass Card ===
export const GlassCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0) rotateY(0)');

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0) rotateY(0)');
    };

    return (
        <div 
            ref={containerRef}
            className="p-0 bg-gradient-to-br from-purple-600 to-blue-500 h-56 relative flex items-center justify-center overflow-hidden" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute w-24 h-24 bg-pink-500 rounded-full top-4 left-4 blur-xl opacity-80"></div>
            <div className="absolute w-24 h-24 bg-cyan-400 rounded-full bottom-4 right-4 blur-xl opacity-80"></div>
            <div 
                ref={cardRef}
                className="style-glass w-56 p-4 rounded-xl text-white cursor-pointer select-none"
                style={{ transform }}
            >
                <div className="flex justify-between items-center mb-4"><span className="text-xs opacity-80">VISA</span><span className="text-xs">•••• 8899</span></div>
                <div className="text-lg font-bold mb-1 shadow-sm">$8,450.00</div>
                <div className="text-[10px] opacity-70">Hover to Tilt</div>
            </div>
        </div>
    );
};

// === 3. Brutal Card ===
export const BrutalCard = () => {
    return (
        <div className="p-6 bg-white flex flex-col items-center justify-center gap-4 h-56">
            <div className="style-brutal w-full p-3 transform -rotate-1 hover:rotate-0 cursor-pointer active:bg-yellow-200">
                <h4 className="font-black text-lg uppercase">CLICK ME!</h4>
                <p className="font-mono text-xs">I am raw and unfiltered.</p>
            </div>
            <button className="style-brutal-btn px-6 py-2 font-bold text-white w-full text-sm">SUBMIT</button>
        </div>
    );
};

// === 4. Cassette Card ===
export const CassetteCard = () => {
    const [logs, setLogs] = useState(['> SYSTEM READY...', '> WAITING INPUT...']);
    const logRef = useRef<HTMLDivElement>(null);

    const addLog = () => {
        setLogs(prev => [...prev, '> ACCESS GRANTED.']);
    };

    useEffect(() => {
        if(logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="p-4 bg-gray-900 h-56 relative">
            <div className="style-cassette p-4 w-full h-full flex flex-col">
                <div className="cassette-scanline absolute inset-0 z-10"></div>
                <div className="flex justify-between border-b border-orange-500/50 mb-2 pb-1 text-xs z-20">
                    <span>SYS_ROOT</span>
                    <span className="animate-pulse text-red-500">REC ●</span>
                </div>
                <div className="flex-grow font-mono text-xs overflow-hidden z-20 overflow-y-auto" ref={logRef}>
                    {logs.map((log, i) => <div key={i}>{log}</div>)}
                </div>
                <button 
                    className="cassette-btn border border-orange-500 py-1 px-2 text-xs z-20 mt-2 hover:bg-orange-500 hover:text-black transition"
                    onClick={addLog}
                >
                    INITIATE SEQUENCE
                </button>
            </div>
        </div>
    );
};

// === 5. Neomorphism ===
export const NeuCard = () => {
    const [pressed, setPressed] = useState(false);
    return (
        <div className="p-6 bg-[#e0e5ec] flex flex-col items-center justify-center gap-6 h-56">
            <div className="flex gap-6">
                <button 
                    className={`w-12 h-12 style-neu flex items-center justify-center text-gray-500 cursor-pointer active:scale-95 ${pressed ? 'pressed' : ''}`} 
                    onClick={() => setPressed(!pressed)}
                >
                    <svg className={`w-5 h-5 transition-colors ${pressed ? 'text-blue-500' : ''}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
                <button 
                    className={`w-12 h-12 style-neu flex items-center justify-center text-blue-500 cursor-pointer ${!pressed ? 'pressed' : ''}`}
                    onClick={() => setPressed(!pressed)}
                >
                    <span className="font-bold text-xs">ON</span>
                </button>
            </div>
        </div>
    )
}

// === 14. DOS Card ===
export const DosCard = () => {
    return (
        <div className="p-4 bg-black h-56 font-['VT323'] text-white text-sm" onClick={() => document.getElementById('dos-input')?.focus()}>
            <div className="text-[#000084] bg-gray-200 text-center font-bold mb-2">C:\COMMAND.COM</div>
            <div>Microsoft(R) Windows DOS</div>
            <div className="flex">
                <span className="mr-1">C:\&gt;</span>
                <input id="dos-input" className="style-dos-input" type="text" defaultValue="dir" autoComplete="off" />
            </div>
        </div>
    )
}

// === 19. Win95 Card ===
export const Win95Card = () => {
    const [pos, setPos] = useState({ x: 32, y: 32 });
    const dragging = useRef(false);
    const relPos = useRef({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent) => {
        dragging.current = true;
        relPos.current = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!dragging.current) return;
        setPos({
            x: e.clientX - relPos.current.x,
            y: e.clientY - relPos.current.y
        });
    };

    const onMouseUp = () => {
        dragging.current = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    // Cleanup
    useEffect(() => {
        return () => {
             document.removeEventListener('mousemove', onMouseMove);
             document.removeEventListener('mouseup', onMouseUp);
        }
    }, [])

    return (
        <div className="p-4 bg-[#008080] h-56 relative overflow-hidden">
            <div 
                className="style-win95-window w-48 shadow-xl" 
                style={{ top: pos.y, left: pos.x }}
            >
                <div className="style-win95-title" onMouseDown={onMouseDown}>
                    <span>My PC</span>
                    <button className="style-win95-btn px-1 py-0">X</button>
                </div>
                <div className="p-3 text-center">
                    <button className="style-win95-btn">OK</button>
                </div>
            </div>
        </div>
    );
};


// === Generic / Simple Renderers based on ID ===
export const GenericCardRender = ({ id }: { id: string }) => {
    switch (id) {
        case 'natural':
            return (
                <div className="p-6 h-56 flex flex-col items-center justify-center bg-[#f0e6d2] text-[#5c4033] relative overflow-hidden group">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cardboard.png')" }}></div>
                     <div className="absolute w-24 h-24 bg-[#556b2f] rounded-full blur-2xl opacity-20 group-hover:scale-150 transition duration-700"></div>
                     <h3 className="font-serif italic text-2xl z-10 mb-2">Organic</h3>
                     <button className="z-10 px-6 py-2 border border-[#8b4513] rounded-full text-sm hover:bg-[#8b4513] hover:text-white transition duration-300">Explore</button>
                </div>
            );
        case 'personal':
            return (
                <div className="p-6 h-56 flex flex-col items-center justify-center bg-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="transform -rotate-6 bg-yellow-300 p-4 shadow-[4px_4px_0px_black] border-2 border-black z-10 font-['Permanent_Marker'] group-hover:rotate-0 group-hover:scale-110 transition duration-300">
                        <span className="text-xl">MY VIBE!</span>
                    </div>
                    <div className="absolute top-4 right-4 text-3xl animate-bounce">✨</div>
                </div>
            );
        case 'tactile':
            return (
                <div className="p-6 h-56 flex items-center justify-center bg-[#d4c4a8] relative group">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/denim.png')" }}></div>
                    <div className="relative z-10 p-6 border-2 border-dashed border-[#8b4513] rounded-lg bg-[#e6d2b5] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] group-hover:-translate-y-1 transition-all">
                        <span className="font-mono font-bold text-[#5c4033]">HANDMADE</span>
                    </div>
                </div>
            );
        case 'digicute':
            return (
                <div className="p-6 h-56 flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden group">
                    <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-blue-200 rounded-full blur-xl group-hover:translate-x-5 transition-transform duration-700"></div>
                    <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-yellow-200 rounded-full blur-xl group-hover:-translate-x-5 transition-transform duration-700"></div>
                    <div className="relative z-10 bg-white/80 backdrop-blur px-6 py-3 rounded-[99px] shadow-sm border border-pink-100 flex items-center gap-2 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                        <span className="text-2xl animate-bounce">🐱</span>
                        <span className="font-bold text-gray-700">Meow!</span>
                    </div>
                </div>
            );
        case 'microind':
            return (
                <div className="p-6 h-56 bg-slate-200 flex flex-col justify-center relative border border-slate-400 group">
                    <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-500">SYS.001</div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="border border-slate-400 p-4 bg-gradient-to-br from-slate-100 to-slate-300 shadow-inner">
                        <div className="h-2 w-full bg-slate-200 mb-2 overflow-hidden border border-slate-300">
                            <div className="h-full bg-orange-500 w-2/3 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                        </div>
                        <div className="flex justify-between font-mono text-xs text-slate-600">
                            <span>LOAD</span>
                            <span className="group-hover:text-orange-600">ACTIVE</span>
                        </div>
                    </div>
                </div>
            );
        case 'snapshot':
            return (
                <div className="p-6 h-56 bg-gray-100 flex items-center justify-center relative group">
                    <div className="bg-white p-2 pb-8 shadow-xl transform rotate-3 transition-all hover:rotate-0 hover:scale-110 duration-300 w-32 cursor-pointer z-10">
                         <div className="h-24 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200')] bg-cover bg-center grayscale hover:grayscale-0 transition duration-500"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs font-handwriting text-gray-500 opacity-50 group-hover:opacity-100 transition">Paris, 2024</div>
                </div>
            );
        case 'blooming':
            return (
                <div className="p-6 h-56 bg-rose-500 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-orange-400 opacity-80 mix-blend-multiply group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute inset-0 flex flex-wrap opacity-20 group-hover:opacity-40 transition duration-500 scale-125">
                         {[...Array(20)].map((_, i) => <div key={i} className="text-4xl transform hover:scale-125 transition duration-300">🌸</div>)}
                    </div>
                    <h1 className="relative z-10 text-4xl font-black text-white mix-blend-overlay tracking-tighter group-hover:tracking-widest transition-all duration-500">BLOOM</h1>
                </div>
            );
        case 'distorted':
            return (
                <div className="p-6 h-56 bg-black flex items-center justify-center overflow-hidden cursor-pointer">
                    <div className="relative group">
                        <h1 className="text-4xl font-bold text-white italic tracking-tighter transform skew-x-12 group-hover:skew-x-0 transition duration-200">REBEL</h1>
                        <div className="absolute top-0 left-1 text-4xl font-bold text-red-600 italic tracking-tighter mix-blend-exclusion opacity-0 group-hover:opacity-100 transform translate-x-2 transition duration-100">REBEL</div>
                        <div className="w-full h-1 bg-white mt-1 transform -skew-x-12 group-hover:rotate-6 transition"></div>
                    </div>
                </div>
            );
        case 'neondark':
            return (
                <div className="p-6 h-56 bg-[#121212] flex items-center justify-center">
                    <button className="px-8 py-3 rounded-xl bg-[#1a1a1a] text-cyan-400 font-bold border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] hover:bg-cyan-950/30 hover:scale-105 active:scale-95 transition-all duration-200">
                        GLOW MODE
                    </button>
                </div>
            );
        case 'freshretro':
            return (
                <div className="p-6 h-56 bg-gradient-to-b from-teal-50 to-teal-100 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-teal-300 to-teal-500 shadow-lg flex items-center justify-center text-white relative overflow-hidden group hover:scale-110 transition duration-300 cursor-pointer">
                         <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-t-[30px] group-hover:h-3/4 transition-all duration-500"></div>
                         <span className="text-3xl drop-shadow-md z-10">💧</span>
                    </div>
                </div>
            );
        case 'frutiger':
            return (
                <div className="p-6 bg-gradient-to-t from-green-100 to-blue-200 flex items-center justify-center relative overflow-hidden h-56">
                    <button className="style-frutiger w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white cursor-pointer hover:scale-105 transition duration-300 relative group">
                        <div className="style-frutiger-gloss group-hover:opacity-100 transition"></div>
                        <span className="text-2xl drop-shadow-md z-10 group-hover:rotate-12 transition">🌍</span>
                        <span className="font-bold text-shadow z-10 text-xs mt-1">Start</span>
                    </button>
                </div>
            );
        case 'clay':
            return (
                <div className="p-6 bg-indigo-50 flex items-center justify-center h-56">
                    <div className="style-clay px-6 py-4 text-center cursor-pointer">
                        <div className="w-12 h-12 bg-pink-300 rounded-full mx-auto mb-2 shadow-inner flex items-center justify-center text-xl animate-bounce">🦄</div>
                        <h4 className="font-bold text-gray-700 text-sm">Mint NFT</h4>
                        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg text-xs font-bold hover:bg-blue-600 active:scale-95 transition">1.5 ETH</button>
                    </div>
                </div>
            );
        case 'minimal':
            return (
                <div className="p-6 bg-white flex flex-col justify-center h-56 text-center group cursor-pointer">
                    <h1 className="text-2xl font-light text-black mb-1 tracking-tighter group-hover:tracking-widest transition-all duration-500">PURE.</h1>
                    <div className="w-8 h-px bg-black mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <button className="border border-black px-4 py-1 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition duration-500">Explore</button>
                </div>
            );
        case 'skeuo':
            return (
                <div className="p-6 flex items-center justify-center h-56 bg-[#e0e0e0]">
                    <div className="bg-gray-200 p-4 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,1),0_5px_10px_rgba(0,0,0,0.1)] border border-gray-300 flex flex-col items-center gap-3">
                        <div className="text-gray-500 text-xs font-bold text-shadow-sm">POWER</div>
                        <div className="skeuo-switch" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                            <div className="skeuo-toggle"></div>
                        </div>
                    </div>
                </div>
            );
        case 'pixel':
            return (
                <div className="p-6 bg-indigo-900 h-56 flex flex-col items-center justify-center gap-3">
                    <div className="text-yellow-300 font-['Press_Start_2P'] text-xs animate-pulse">INSERT COIN</div>
                    <button className="style-pixel-btn px-4 py-2 text-xs hover:scale-105 active:scale-100 transition-transform">START</button>
                </div>
            );
        case 'cyber':
            return (
                <div className="p-6 bg-[#0f0f1a] h-56 flex flex-col justify-center items-center relative overflow-hidden group">
                    <div className="absolute inset-0 cyber-grid opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <button className="style-cyber-btn px-6 py-2 font-mono text-sm relative z-10" onClick={(e) => e.currentTarget.innerText = 'HACKED'}>CONNECT_</button>
                </div>
            );
        case 'bauhaus':
            return (
                <div className="bg-[#f0f0f0] p-6 h-56 relative overflow-hidden flex flex-col justify-center group cursor-pointer">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-red-600 rounded-full mix-blend-multiply transition-all group-hover:scale-150 duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-600 mix-blend-multiply transform rotate-45 transition-all group-hover:rotate-90 group-hover:scale-125 duration-500"></div>
                    <h4 className="font-bold text-2xl relative z-10 font-sans tracking-tighter">LESS<br/>IS<br/>MORE</h4>
                </div>
            );
        case 'acid':
            return (
                <div className="bg-black p-6 h-56 flex flex-col justify-center items-center text-center relative overflow-hidden cursor-crosshair group">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none group-hover:opacity-40 transition"></div>
                    <h4 className="text-3xl font-['Space_Mono'] italic font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 transform skew-x-12 hover:skew-x-0 transition duration-500 scale-110">CHAOS</h4>
                </div>
            );
        case 'material':
            return (
                <div className="p-6 bg-[#fef7ff] h-56 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full bg-[#e8def8] p-3 rounded-2xl text-[#1d1b20] mb-2 cursor-pointer transition hover:bg-[#d0bcff] active:scale-95">
                        <div className="text-sm font-medium">Notification</div><div className="text-xs opacity-60">Meeting at 10am.</div>
                    </div>
                    <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#6750a4] text-white rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl active:bg-[#4f378b] transition group">
                        <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">+</span>
                    </button>
                </div>
            );
        case 'doodle':
            return (
                <div className="p-6 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-white h-56 font-['Permanent_Marker'] group cursor-pointer">
                    <div className="border-2 border-gray-800 p-3 rounded-sm shadow-[2px_2px_0_#333] transform rotate-1 group-hover:rotate-0 group-hover:shadow-[4px_4px_0_#333] transition-all">
                        <h3 className="text-lg">To Do:</h3>
                        <div className="flex items-center gap-2 mt-2"><input type="checkbox" className="style-doodle-checkbox" defaultChecked /><span className="text-sm line-through">Buy Coffee</span></div>
                    </div>
                </div>
            );
        case 'aurora':
            return (
                <div className="p-0 bg-white h-56 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 blur-[50px] opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 blur-[50px] opacity-60 animate-pulse delay-75"></div>
                    <div className="relative z-10 p-4 bg-white/30 backdrop-blur-lg rounded-xl border border-white/50 cursor-pointer hover:bg-white/50 transition"><span className="font-bold text-gray-800">Soft Focus</span></div>
                </div>
            );
        case 'paper':
            return (
                <div className="p-6 bg-[#fffaf0] h-56 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
                    <div className="bg-white p-3 shadow-lg transform -rotate-2 border border-gray-200 w-32 h-32 flex items-center justify-center transition hover:rotate-0 hover:scale-105 duration-300">
                        <span className="font-serif font-bold italic z-10 text-gray-800">Craft</span>
                    </div>
                </div>
            );
        case 'vapor':
            return (
                <div className="style-vapor p-6 h-56 flex flex-col items-center justify-center relative overflow-hidden group">
                    <h2 className="text-2xl font-bold italic vapor-text group-hover:translate-x-1 group-hover:text-pink-300 transition-all">AESTHETICS</h2>
                    <marquee className="text-xs w-full absolute bottom-2" scrollamount="3">MUSIC FOR ELEVATORS • VISUALIZE</marquee>
                </div>
            );
        case 'solar':
            return (
                <div className="p-6 bg-[#fdf6e3] h-56 flex items-center justify-center">
                    <div className="style-solar p-4 w-full max-w-xs text-center cursor-pointer group">
                        <div className="text-3xl mb-2 solar-leaf inline-block">🌱</div>
                        <h4 className="font-bold text-lg">Eco</h4>
                    </div>
                </div>
            );
        case 'swiss':
            return (
                <div className="style-swiss p-4 h-56 grid grid-cols-2 grid-rows-2 gap-0 relative group cursor-pointer">
                    <div className="swiss-grid-line absolute top-1/2 w-full transition-all group-hover:top-1/3"></div>
                    <div className="absolute left-1/2 h-full border-l border-black transition-all group-hover:left-2/3"></div>
                    <div className="p-2 font-bold text-3xl flex items-end">01</div>
                    <div className="p-2 col-span-2 text-4xl font-black tracking-tighter leading-none flex items-center">GRID</div>
                </div>
            );
        case 'blueprint':
            return (
                <div className="style-blueprint p-6 h-56 relative flex flex-col justify-center items-center group">
                    <div className="border border-white/50 w-32 h-20 relative flex items-center justify-center group-hover:border-white transition-colors">
                        <span className="text-xs">MODULE A</span>
                        <div className="absolute w-full h-px bg-white/30 -left-4 top-1/2 group-hover:w-[120%] transition-all"></div>
                        <div className="absolute h-full w-px bg-white/30 left-1/2 -top-4 group-hover:h-[120%] transition-all"></div>
                    </div>
                </div>
            );
        case 'memphis':
            return (
                <div className="style-memphis p-6 h-56 flex flex-col items-center justify-center gap-2 group">
                    <div className="flex items-end gap-1">
                        <div className="w-8 h-12 bg-blue-600 rounded-t-full group-hover:h-14 transition-all"></div>
                        <div className="w-12 h-16 bg-yellow-400 rounded-full group-hover:w-14 transition-all"></div>
                        <div className="w-8 h-8 bg-pink-500 rounded-full mb-8 group-hover:mb-10 transition-all"></div>
                    </div>
                    <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition">Join</button>
                </div>
            );
        case 'gothic':
            return (
                <div className="style-gothic p-6 h-56 flex flex-col items-center justify-center text-center relative group">
                    <h4 className="text-xl font-bold text-[#b30000] relative z-10 group-hover:text-red-600 transition" style={{ textShadow: '0 0 5px black' }}>DIABLO</h4>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8a0000] to-transparent my-2 group-hover:w-32 transition-all duration-500"></div>
                </div>
            );
        default:
            return (
                <div className="p-6 h-56 flex items-center justify-center text-gray-400">
                    Preview Not Available
                </div>
            );
    }
};
