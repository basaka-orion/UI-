import React, { useState, useEffect } from 'react';
import { getPrdData } from '../constants';
import { Platform } from '../types';

interface PrdModalProps {
    id: string;
    onClose: () => void;
}

const PrdModal: React.FC<PrdModalProps> = ({ id, onClose }) => {
    const [activeTab, setActiveTab] = useState<Platform>('web');
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    
    // Load data
    const data = getPrdData(id);

    // Animation entry
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 200); // Wait for exit animation
    };

    const handleCopy = () => {
        const prompt = generateAiPrompt();
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getPlatformIcon = (p: Platform) => {
        switch(p) {
            case 'web': return '🌐';
            case 'ios': return '🍎';
            case 'android': return '🤖';
            case 'mini': return '💬';
            default: return '📄';
        }
    };

    const getTabClass = (p: Platform) => {
        const base = "text-left px-3 py-2 rounded-md text-sm font-medium transition-colors w-full flex items-center gap-2";
        if (activeTab === p) return `${base} bg-indigo-100 text-indigo-700`;
        return `${base} text-gray-600 hover:bg-gray-100`;
    };

    // --- PROMPT ENGINEERING ---
    const generateAiPrompt = () => {
        const baseSpecs = `
- **Style Name**: ${data.name}
- **Border Radius**: ${data.specs.radius}
- **Shadow/Depth**: ${data.specs.shadow}
- **Typography**: ${data.specs.font}
- **Color Palette**: ${data.specs.colors}
`;

        let platformInstructions = '';
        let techStack = '';

        switch (activeTab) {
            case 'web':
                techStack = 'React (Functional Components) + Tailwind CSS';
                platformInstructions = `
1. Use Tailwind CSS utility classes strictly.
2. ${data.web}
3. Ensure responsiveness and accessibility (ARIA).
4. For animations, use 'framer-motion' or standard CSS keyframes.`;
                break;
            case 'ios':
                techStack = 'SwiftUI (iOS 17+)';
                platformInstructions = `
1. Use SwiftUI Views and Modifiers.
2. ${data.ios}
3. Use strict type safety and SF Symbols for icons.
4. Adhere to Apple Human Interface Guidelines regarding touch targets.`;
                break;
            case 'android':
                techStack = 'Kotlin + Jetpack Compose (Material 3)';
                platformInstructions = `
1. Use Jetpack Compose Modifiers.
2. ${data.android}
3. Handle Dark Mode automatically.
4. Use standard Material tokens where applicable but override shapes/colors to match the style specs.`;
                break;
            case 'mini':
                techStack = 'Uni-app (Vue 3) or Taro (React)';
                platformInstructions = `
1. Consider WeChat Mini Program limitations (no heavy DOM ops).
2. ${data.mini}
3. Use 'rpx' for responsive sizing.`;
                break;
        }

        return `
### Role
You are a world-class Senior Frontend Engineer and UI/UX Designer specializing in the "${data.name}" aesthetic.

### Task
Generate a high-fidelity **${activeTab.toUpperCase()}** component (e.g., a Dashboard Card or User Profile) that perfectly embodies this design style.

### Design System / Visual DNA
${baseSpecs}

### Technical Requirements
- **Tech Stack**: ${techStack}
- **Platform Rules**: ${platformInstructions}

### Output Format
Provide **only the full source code**. Add comments explaining how the visual style (shadows, blur, texture) is achieved in the code.
`.trim();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div 
                className={`bg-white w-full max-w-4xl h-[85vh] rounded-xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-200 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono bg-gray-200 text-gray-700 px-2 py-0.5 rounded">PRD & Specs</span>
                            <span className="text-xs text-gray-400">|</span>
                            <span className="text-xs text-indigo-600 font-medium">Ready for AI Generation</span>
                        </div>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-200 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                {/* Body */}
                <div className="flex-grow flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-56 bg-gray-50 border-r border-gray-200 p-4 flex flex-col gap-2 flex-shrink-0">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Target Platform</div>
                        <button onClick={() => setActiveTab('web')} className={getTabClass('web')}><span>🌐</span> Web / Desktop</button>
                        <button onClick={() => setActiveTab('ios')} className={getTabClass('ios')}><span>🍎</span> iOS (SwiftUI)</button>
                        <button onClick={() => setActiveTab('android')} className={getTabClass('android')}><span>🤖</span> Android (Compose)</button>
                        <button onClick={() => setActiveTab('mini')} className={getTabClass('mini')}><span>💬</span> Mini Program</button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow p-6 overflow-y-auto bg-white flex flex-col">
                        
                        {/* 1. Visual DNA Specs (Compact) */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-3 text-sm flex items-center gap-2">
                                🧬 Visual DNA
                            </h4>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                                    <div className="text-gray-400 mb-1">Radius</div>
                                    <div className="font-mono font-medium">{data.specs.radius}</div>
                                </div>
                                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                                    <div className="text-gray-400 mb-1">Shadow</div>
                                    <div className="font-mono font-medium truncate" title={data.specs.shadow}>{data.specs.shadow}</div>
                                </div>
                                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                                    <div className="text-gray-400 mb-1">Font</div>
                                    <div className="font-mono font-medium truncate">{data.specs.font}</div>
                                </div>
                                <div className="p-2 bg-gray-50 rounded border border-gray-100">
                                    <div className="text-gray-400 mb-1">Colors</div>
                                    <div className="font-mono font-medium truncate" title={data.specs.colors}>{data.specs.colors}</div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Platform Guide (Readable) */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2 text-sm">📖 Implementation Logic</h4>
                            <div className="prose prose-sm max-w-none text-gray-600 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                <p>{data[activeTab]}</p>
                            </div>
                        </div>

                        {/* 3. AI Prompt Generator (The "Killer Feature") */}
                        <div className="flex-grow flex flex-col min-h-0">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">🤖 GenAI Prompt</h4>
                                    <p className="text-[10px] text-gray-500">Copy this to Claude/ChatGPT to generate code instantly.</p>
                                </div>
                                <button 
                                    onClick={handleCopy}
                                    className={`text-xs px-3 py-1.5 rounded-md font-bold transition flex items-center gap-1 ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
                                >
                                    {copied ? '✓ Copied' : '📋 Copy Prompt'}
                                </button>
                            </div>
                            
                            <div className="flex-grow relative group">
                                <textarea 
                                    readOnly
                                    className="w-full h-full p-4 bg-gray-900 text-green-400 font-mono text-xs rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 custom-scrollbar leading-relaxed"
                                    value={generateAiPrompt()}
                                />
                                {/* Overlay hint */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity flex items-center justify-center">
                                    <span className="bg-black/80 text-white px-3 py-1 rounded text-xs backdrop-blur-sm">Ready to use</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrdModal;