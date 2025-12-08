import React, { useState, useEffect } from 'react';
import { FusionResult, Platform } from '../types';

interface FusionResultModalProps {
    result: FusionResult;
    onClose: () => void;
    onSave: (result: FusionResult) => void;
    isSaved: boolean;
}

const FusionResultModal: React.FC<FusionResultModalProps> = ({ result, onClose, onSave, isSaved }) => {
    // 'ai' is a new tab type
    const [activeTab, setActiveTab] = useState<Platform | 'ai'>('web');
    const [visible, setVisible] = useState(false);
    const [promptCopied, setPromptCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 200);
    };

    const handleCopyPrompt = () => {
        const prompt = generateReplicationPrompt();
        navigator.clipboard.writeText(prompt);
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2000);
    };

    const generateReplicationPrompt = () => {
        return `
### Role
You are a creative UI Engineer specializing in unique, hybrid design systems.

### Context
I have created a new UI style named "${result.name}" by fusing: ${result.parentStyles.join(' + ')}.
The style is defined by the following CSS DNA:

\`\`\`css
${result.css}
\`\`\`

### Task
Using the CSS variables and visual logic provided above, please generate a **Web Component (React + Tailwind)**.

**Component to Build**: [Insert Component Name Here, e.g., A Login Form, A Dashboard Widget, A Navigation Bar]

### Requirements
1. Extract the key visual traits (shadows, gradients, border-radius) from the provided CSS.
2. Apply these traits to the new component to ensure consistency.
3. The result should look like it belongs to the same "Design System" as the reference CSS.
4. Provide clean, functional code.
`.trim();
    };

    const getPlatformIcon = (p: Platform | 'ai') => {
        switch(p) {
            case 'web': return '🌐';
            case 'ios': return '🍎';
            case 'android': return '🤖';
            case 'mini': return '💬';
            case 'ai': return '🧠';
            default: return '📄';
        }
    };

    const renderTabButton = (id: Platform | 'ai', label: string) => (
        <button 
            onClick={() => setActiveTab(id)} 
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition flex items-center justify-center gap-2 ${
                activeTab === id 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
        >
            {getPlatformIcon(id)} {label}
        </button>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <style>
                {/* Inject Dynamic CSS safely */}
                {result.css}
            </style>
            
            <div 
                className={`bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 border border-indigo-100 ${visible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}
            >
                {/* Header with Sparkle */}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-md animate-pulse">
                            ✨
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{result.name}</h3>
                            <p className="text-xs text-gray-500 font-mono">
                                DNA: {result.parentStyles.join(' + ')}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                         <button 
                            onClick={() => onSave(result)}
                            disabled={isSaved}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition ${isSaved ? 'bg-green-100 text-green-700 cursor-default' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'}`}
                        >
                           {isSaved ? '✓ Saved' : '💾 Save Style'}
                        </button>
                        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-white rounded-full transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                </div>
                
                {/* Body - Split View */}
                <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* Left: Dynamic Preview Canvas */}
                    <div className="lg:w-1/2 bg-[#f8fafc] p-8 flex flex-col items-center justify-center border-r border-gray-200 relative overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 z-10">Live Preview</div>
                        
                        {/* The Fusion Container */}
                        <div className="fusion-preview-box w-full max-w-sm" dangerouslySetInnerHTML={{ __html: result.html }} />
                        
                        <div className="mt-8 text-xs text-gray-400 max-w-xs text-center z-10 italic">
                            "{result.description}"
                        </div>
                    </div>

                    {/* Right: Specs & Prompts */}
                    <div className="lg:w-1/2 flex flex-col bg-white">
                         <div className="flex border-b border-gray-200 overflow-x-auto">
                            {renderTabButton('web', 'Web')}
                            {renderTabButton('ios', 'iOS')}
                            {renderTabButton('android', 'Android')}
                            {renderTabButton('ai', '🤖 AI Prompt')}
                        </div>

                        <div className="flex-grow overflow-y-auto p-6">
                            
                            {/* IF AI TAB IS SELECTED */}
                            {activeTab === 'ai' ? (
                                <div className="h-full flex flex-col">
                                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100 mb-4">
                                        <h4 className="font-bold text-indigo-900 text-sm mb-1">🚀 Replicate this style</h4>
                                        <p className="text-xs text-indigo-700">
                                            This prompt contains the CSS DNA of your fused style. Copy it to Claude or ChatGPT to generate <strong>Login Forms, Tables, or Dashboards</strong> in this exact style.
                                        </p>
                                    </div>
                                    <div className="flex-grow relative group border border-gray-200 rounded-lg overflow-hidden">
                                        <textarea 
                                            readOnly
                                            className="w-full h-full p-4 bg-gray-900 text-green-400 font-mono text-xs resize-none focus:outline-none custom-scrollbar leading-relaxed"
                                            value={generateReplicationPrompt()}
                                        />
                                        <button 
                                            onClick={handleCopyPrompt}
                                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold transition border border-white/20"
                                        >
                                            {promptCopied ? '✓ Copied' : '📋 Copy Prompt'}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* STANDARD TABS */
                                <>
                                    {/* Token Specs */}
                                    <div className="mb-6">
                                        <h4 className="font-bold text-gray-800 mb-3 text-sm">🧬 Visual DNA Specs</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 uppercase">Radius</div>
                                                <div className="text-sm font-mono text-gray-800">{result.prd.specs.radius}</div>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 uppercase">Shadow</div>
                                                <div className="text-sm font-mono text-gray-800 truncate" title={result.prd.specs.shadow}>{result.prd.specs.shadow}</div>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 uppercase">Font</div>
                                                <div className="text-sm font-mono text-gray-800">{result.prd.specs.font}</div>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded border border-gray-100">
                                                <div className="text-[10px] text-gray-500 uppercase">Colors</div>
                                                <div className="text-sm font-mono text-gray-800 truncate">{result.prd.specs.colors}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Implementation Guide */}
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-3 text-sm flex items-center gap-2">
                                            {getPlatformIcon(activeTab)} Implementation Guide
                                        </h4>
                                        <div className="prose prose-sm text-gray-600 bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
                                            {result.prd[activeTab]}
                                        </div>
                                    </div>

                                    {/* Code Snippet */}
                                    <div className="mt-6">
                                        <h4 className="font-bold text-gray-800 mb-2 text-sm">Generated CSS Reference</h4>
                                        <pre className="bg-gray-900 text-gray-300 p-3 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-40 custom-scrollbar">
                                            {result.css}
                                        </pre>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FusionResultModal;