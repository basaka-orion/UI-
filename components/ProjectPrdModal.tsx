import React, { useEffect, useState, useRef } from 'react';
import { ProjectPrd } from '../types';
import { STYLE_ITEMS } from '../constants';
import { modifyProjectUi } from '../utils/ai';

interface Props {
    project: ProjectPrd;
    onClose: () => void;
    onSave: (p: ProjectPrd) => void;
    isSaved: boolean;
}

const ProjectPrdModal: React.FC<Props> = ({ project, onClose, onSave, isSaved }) => {
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<'overview' | 'preview' | 'manual' | 'tech'>('overview');
    
    const [currentData, setCurrentData] = useState<ProjectPrd>(project);
    
    // Design Studio State
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
    const [editPrompt, setEditPrompt] = useState('');
    const [isModifying, setIsModifying] = useState(false);
    const previewContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 200);
    };

    // --- Ghost Team Apply Logic ---
    const handleApplyChanges = async () => {
        if (!editPrompt.trim()) return;
        setIsModifying(true);
        try {
            const result = await modifyProjectUi(
                currentData.previewHtml,
                currentData.previewCss,
                editPrompt,
                selectedElement?.outerHTML
            );
            setCurrentData({ ...currentData, previewHtml: result.html, previewCss: result.css });
            setEditPrompt('');
            setSelectedElement(null);
        } catch (e) {
            alert("设计团队正忙，请重试。");
        } finally {
            setIsModifying(false);
        }
    };

    // --- Interaction Logic ---
    const handlePreviewClick = (e: React.MouseEvent) => {
        if (!isEditMode) return;
        e.preventDefault();
        e.stopPropagation();
        const target = e.target as HTMLElement;
        if (target.classList.contains('project-preview-box')) {
            setSelectedElement(null);
            return;
        }
        setSelectedElement(target);
    };

    const getStyleDetails = (id: string) => STYLE_ITEMS.find(s => s.id === id);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
            <div 
                className={`bg-white w-full max-w-[95vw] h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                {/* Header */}
                <div className="bg-gray-900 text-white p-6 flex justify-between items-start border-b border-gray-800 flex-shrink-0">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Project Genesis</div>
                             <div className="text-gray-500 text-xs font-mono">{new Date(currentData.timestamp).toLocaleDateString()}</div>
                        </div>
                        <h1 className="text-3xl font-black tracking-tighter">{currentData.title}</h1>
                    </div>
                    <div className="flex gap-3">
                         <button 
                            onClick={() => onSave(currentData)}
                            disabled={isSaved}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition flex items-center gap-2 ${isSaved ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                        >
                           {isSaved ? '✓ 已保存' : '💾 保存项目'}
                        </button>
                        <button onClick={handleClose} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition">
                            ✕
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <div className="bg-gray-100 border-b border-gray-200 flex px-8 space-x-8 flex-shrink-0 overflow-x-auto">
                    <button onClick={() => setActiveTab('overview')} className={`py-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${activeTab === 'overview' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500'}`}>🧠 调研与决策</button>
                    <button onClick={() => setActiveTab('preview')} className={`py-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${activeTab === 'preview' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500'}`}>🎨 智能设计室</button>
                    <button onClick={() => setActiveTab('manual')} className={`py-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${activeTab === 'manual' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500'}`}>📘 PRD 手册</button>
                    <button onClick={() => setActiveTab('tech')} className={`py-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${activeTab === 'tech' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-500'}`}>⚙️ 技术蓝图</button>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-hidden bg-white">
                    
                    {/* --- TAB 1: OVERVIEW & BRAINSTORM --- */}
                    {activeTab === 'overview' && (
                        <div className="h-full overflow-y-auto p-8 custom-scrollbar">
                            <div className="max-w-5xl mx-auto space-y-10">
                                {/* The User Idea */}
                                <section className="text-center mb-10">
                                    <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">用户原始想法</h2>
                                    <p className="text-2xl font-serif italic text-gray-700">"{currentData.userIdea}"</p>
                                </section>
                                
                                {/* Research Report */}
                                <section className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                                    <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                                        🌍 市场深度调研报告
                                        <span className="text-xs font-normal bg-white px-2 py-1 rounded text-blue-500 border border-blue-200">Google Search Powered</span>
                                    </h3>
                                    <div className="prose prose-sm max-w-none text-blue-800 leading-relaxed whitespace-pre-wrap">
                                        {currentData.researchReport}
                                    </div>
                                </section>

                                {/* The Round Table */}
                                <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        💬 专家圆桌会议记录
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {currentData.teamBrainstorming?.map((member, idx) => (
                                            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative">
                                                <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-2xl border border-gray-100 rounded-full shadow-sm">{member.avatar}</div>
                                                <div className="mt-4 mb-2">
                                                    <h4 className="font-bold text-gray-900">{member.name} <span className="text-gray-400 font-normal">({member.role})</span></h4>
                                                    <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">{member.focus}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                                    "{member.opinion}"
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Product Definition */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <section>
                                        <h3 className="text-gray-900 font-bold mb-4">核心卖点 (Elevator Pitch)</h3>
                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg text-purple-900 text-lg leading-relaxed">
                                            {currentData.elevatorPitch}
                                        </div>
                                    </section>
                                    <section>
                                        <h3 className="text-gray-900 font-bold mb-4">视觉策略</h3>
                                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                                            <p className="text-gray-600 mb-4">{currentData.visualStyleFusion?.reasoning}</p>
                                            <div className="flex gap-2">
                                                {currentData.visualStyleFusion?.colorPalette?.map((c, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full shadow-sm border border-gray-100" style={{backgroundColor: c}} title={c}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Features */}
                                <section>
                                    <h3 className="text-gray-900 font-bold mb-4">MVP 核心功能</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentData.features?.map((f, i) => (
                                            <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition">
                                                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-white ${f.priority === 'P0' ? 'bg-red-500' : 'bg-blue-500'}`}>
                                                    {f.priority}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">{f.name}</h4>
                                                    <p className="text-sm text-gray-500">{f.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}

                    {/* --- TAB 2: DESIGN STUDIO (INTERACTIVE) --- */}
                    {activeTab === 'preview' && (
                        <div className="h-full flex flex-col lg:flex-row">
                            {/* Tools Panel */}
                            <div className="lg:w-80 bg-gray-50 border-r border-gray-200 flex flex-col p-4 z-10 shadow-xl flex-shrink-0">
                                <div className="mb-6">
                                    <h3 className="font-bold text-gray-900 mb-1">Ghost Design Team</h3>
                                    <p className="text-xs text-gray-500">AI 实时设计修正中。</p>
                                </div>
                                
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-gray-500">工具箱</span>
                                        <button 
                                            onClick={() => { setIsEditMode(!isEditMode); setSelectedElement(null); }}
                                            className={`text-xs px-2 py-1 rounded font-bold transition ${isEditMode ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                                        >
                                            {isEditMode ? '状态: 选择' : '状态: 浏览'}
                                        </button>
                                    </div>

                                    {selectedElement ? (
                                        <div className="mb-3 p-2 bg-purple-50 border border-purple-100 rounded text-xs text-purple-700">
                                            <span className="font-bold">选中:</span> {selectedElement.tagName.toLowerCase()}
                                        </div>
                                    ) : (
                                        <div className="mb-3 p-2 bg-gray-100 rounded text-xs text-gray-500">
                                            目标: 全局页面
                                        </div>
                                    )}

                                    <textarea 
                                        className="w-full h-24 p-3 text-sm border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                                        placeholder="告诉设计师：'把按钮变得更圆润'，'把背景改成暗黑模式'..."
                                        value={editPrompt}
                                        onChange={(e) => setEditPrompt(e.target.value)}
                                    />
                                    
                                    <button 
                                        onClick={handleApplyChanges}
                                        disabled={isModifying || !editPrompt}
                                        className={`w-full py-2.5 rounded-lg font-bold text-sm text-white transition flex items-center justify-center gap-2 ${isModifying ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
                                    >
                                        {isModifying ? <span className="animate-spin">⏳</span> : <span>✨ 执行修改</span>}
                                    </button>
                                </div>
                                <div className="mt-auto text-[10px] text-gray-400 text-center">
                                    AI 会在保留布局结构的同时应用您的样式。
                                </div>
                            </div>

                            {/* Canvas */}
                            <div className="flex-grow bg-[#e5e5e5] relative flex flex-col overflow-hidden">
                                <style>{currentData.previewCss}</style>
                                {isEditMode && (
                                    <style>{`
                                        .project-preview-box * { cursor: crosshair !important; }
                                        .project-preview-box *:hover { outline: 2px solid #9333ea !important; outline-offset: 2px; }
                                    `}</style>
                                )}
                                
                                <div className="flex-grow overflow-auto p-8 flex justify-center">
                                    <div 
                                        ref={previewContainerRef}
                                        className="relative bg-white shadow-2xl min-w-[375px] max-w-[1200px] w-full min-h-[600px] rounded-lg overflow-hidden"
                                        onClick={handlePreviewClick}
                                    >
                                        <div 
                                            className="project-preview-box h-full"
                                            dangerouslySetInnerHTML={{ __html: currentData.previewHtml }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* --- TAB 3: PRD MANUAL (MARKDOWN) --- */}
                    {activeTab === 'manual' && (
                        <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white">
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 text-yellow-800 text-sm flex items-center gap-3">
                                    <span className="text-2xl">📘</span>
                                    <div>
                                        <span className="font-bold">PRD 执行手册</span>
                                        <p>这是由 AI 整理的完整产品需求文档，可直接导出交付给开发团队。</p>
                                    </div>
                                </div>
                                <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-code:bg-slate-100 prose-code:text-pink-600 prose-code:px-1 prose-code:rounded">
                                    <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                                        {currentData.prdManual || "PRD 手册生成中..."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- TAB 4: TECH SPECS --- */}
                    {activeTab === 'tech' && (
                        <div className="h-full overflow-y-auto p-8 custom-scrollbar">
                            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4">数据库架构 (DB Schema)</h3>
                                    <pre className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-inner whitespace-pre-wrap border border-gray-700">
                                        {currentData.databaseSchema}
                                    </pre>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4">API 接口定义</h3>
                                    <pre className="bg-gray-900 text-blue-400 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-inner whitespace-pre-wrap border border-gray-700">
                                        {currentData.apiEndpoints}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPrdModal;