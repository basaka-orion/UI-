import React, { useState } from 'react';
import { STYLE_ITEMS } from './constants';
import { StyleItem, FusionResult, ProjectPrd } from './types';
import PrdModal from './components/PrdModal';
import FusionResultModal from './components/FusionResultModal';
import ProjectPrdModal from './components/ProjectPrdModal';
import { fuseStyles, generateProjectPrd } from './utils/ai';
import { 
    // NEW T0 (2025)
    ChromiumCard,
    KineticCard,
    DreamcoreCard,
    SpatialCard,
    HolographicCard,
    DitherCard,
    RisographCard,
    EtherealCard,
    // EXISTING T0
    BentoCard, 
    GlassCard, 
    BrutalCard, 
    CassetteCard, 
    NeuCard,
    DosCard,
    Win95Card,
    GenericCardRender,
    LiquidGlassCard,
    SkeuoNatureCard,
    SkeuoStoneCard,
    ThreeDCard,
    AuroraCard,
    AtomicCard,
    JetsonsCard,
    SolarpunkUtopiaCard,
    BrutalBWCard,
    GenUICard,
    AiAbstractCard,
    BlueprintCadCard,
    AnthropicCard
} from './components/InteractiveCards';

const App: React.FC = () => {
    // --- State ---
    const [activeModalId, setActiveModalId] = useState<string | null>(null);
    const [isFusionMode, setIsFusionMode] = useState(false);
    const [selectedStyleIds, setSelectedStyleIds] = useState<string[]>([]);
    const [isFusing, setIsFusing] = useState(false);
    const [fusionResult, setFusionResult] = useState<FusionResult | null>(null);
    const [savedFusions, setSavedFusions] = useState<FusionResult[]>([]);
    const [showCollection, setShowCollection] = useState(false);

    // --- Project Genesis State ---
    const [showIdeaInput, setShowIdeaInput] = useState(false);
    const [userIdea, setUserIdea] = useState('');
    const [isGeneratingProject, setIsGeneratingProject] = useState(false);
    const [generationStatus, setGenerationStatus] = useState<string>(''); // NEW: Status message
    const [projectResult, setProjectResult] = useState<ProjectPrd | null>(null);
    const [savedProjects, setSavedProjects] = useState<ProjectPrd[]>([]);
    const [collectionTab, setCollectionTab] = useState<'styles' | 'projects'>('styles');

    // --- Actions ---

    const toggleSelection = (id: string) => {
        if (selectedStyleIds.includes(id)) {
            setSelectedStyleIds(selectedStyleIds.filter(sid => sid !== id));
        } else {
            if (selectedStyleIds.length >= 3) {
                alert("Please select max 3 styles for fusion.");
                return;
            }
            setSelectedStyleIds([...selectedStyleIds, id]);
        }
    };

    const handleCardClick = (id: string) => {
        if (isFusionMode) {
            toggleSelection(id);
        } else {
            // Nothing usually, maybe a preview expand? 
            // For now interactive cards handle their own clicks internally.
            // We just let the PRD button handle the modal.
        }
    };

    const startFusion = async () => {
        if (selectedStyleIds.length < 2) return;
        
        setIsFusing(true);
        try {
            const result = await fuseStyles(selectedStyleIds, STYLE_ITEMS);
            setFusionResult(result);
        } catch (e) {
            alert("Fusion failed. Please try again.");
        } finally {
            setIsFusing(false);
        }
    };

    const handleCreateProject = async () => {
        if (!userIdea.trim()) return;
        setShowIdeaInput(false);
        setIsGeneratingProject(true);
        setGenerationStatus("正在初始化 Genesis 引擎...");
        
        try {
            const prd = await generateProjectPrd(
                userIdea, 
                STYLE_ITEMS,
                (status) => setGenerationStatus(status) // Callback for status updates
            );
            setProjectResult(prd);
        } catch (e) {
            alert("Failed to generate project. Please try again.");
        } finally {
            setIsGeneratingProject(false);
            setGenerationStatus("");
        }
    };

    const saveFusion = (result: FusionResult) => {
        if (!savedFusions.find(f => f.id === result.id)) {
            setSavedFusions([result, ...savedFusions]);
        }
    };

    const saveProject = (result: ProjectPrd) => {
        if (!savedProjects.find(p => p.id === result.id)) {
            setSavedProjects([result, ...savedProjects]);
        }
    };

    const openSavedFusion = (result: FusionResult) => {
        setFusionResult(result);
    };

    const openSavedProject = (result: ProjectPrd) => {
        setProjectResult(result);
    };

    // Component Factory
    const renderCardContent = (id: string) => {
        switch(id) {
            // NEW T0 (2025 Avant-Garde)
            case 'chromium': return <ChromiumCard />;
            case 'kinetic': return <KineticCard />;
            case 'dreamcore': return <DreamcoreCard />;
            case 'spatial': return <SpatialCard />;
            case 'holographic': return <HolographicCard />;
            case 'dither': return <DitherCard />;
            case 'risograph': return <RisographCard />;
            case 'ethereal': return <EtherealCard />;

            // T0 Interactive Components (Existing)
            case 'anthropic-serif': return <AnthropicCard />;
            case 'ai-abstract': return <AiAbstractCard />;
            case 'blueprint-cad': return <BlueprintCadCard />;
            case 'liquid-glass': return <LiquidGlassCard />;
            case 'skeuo-nature': return <SkeuoNatureCard />;
            case 'skeuo-stone': return <SkeuoStoneCard />;
            case '3d-interactive': return <ThreeDCard />;
            case 'aurora-mesh': return <AuroraCard />;
            case 'atomic-age': return <AtomicCard />;
            case 'jetsons': return <JetsonsCard />;
            case 'solarpunk-utopia': return <SolarpunkUtopiaCard />;
            case 'brutal-bw': return <BrutalBWCard />;
            case 'gen-ui': return <GenUICard />;

            // T1/T2/T3 Existing Interactive Components
            case 'bento': return <BentoCard />;
            case 'glass': return <GlassCard />;
            case 'brutal': return <BrutalCard />;
            case 'cassette': return <CassetteCard />;
            case 'neu': return <NeuCard />;
            case 'dos': return <DosCard />;
            case 'win95': return <Win95Card />;
            
            // Fallback for everything else
            default: return <GenericCardRender id={id} />;
        }
    };

    return (
        <div className="min-h-screen pb-20 relative">
             {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => setShowCollection(false)}>
                            UI Style Museum 
                            <span className="ml-2 text-indigo-600 text-xs align-middle bg-indigo-50 px-2 py-1 rounded border border-indigo-100 uppercase tracking-wide">Gemini 3.0 Edition</span>
                        </h1>
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            {STYLE_ITEMS.length} Styles • 2025 Avant-Garde • AI Fusion
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => { setShowIdeaInput(true); setShowCollection(false); }}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <span>✨</span> 创建新项目
                        </button>

                        <div className="h-6 w-px bg-gray-300 mx-2"></div>

                        <button 
                            onClick={() => { setShowCollection(!showCollection); setIsFusionMode(false); }}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${showCollection ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <span>📂</span> 我的收藏
                        </button>

                        <button 
                            onClick={() => { setIsFusionMode(!isFusionMode); setShowCollection(false); setSelectedStyleIds([]); }}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border flex items-center gap-2 ${
                                isFusionMode 
                                ? 'bg-purple-600 text-white border-purple-600' 
                                : 'bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600'
                            }`}
                        >
                            <span className={isFusionMode ? 'animate-spin' : ''}>🧬</span> 
                            {isFusionMode ? '风格融合' : '风格实验室'}
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Collection View */}
                {showCollection ? (
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">我的收藏</h2>
                            <div className="flex gap-2">
                                <button onClick={() => setCollectionTab('styles')} className={`px-4 py-1 rounded-full text-xs font-bold ${collectionTab === 'styles' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>融合风格 ({savedFusions.length})</button>
                                <button onClick={() => setCollectionTab('projects')} className={`px-4 py-1 rounded-full text-xs font-bold ${collectionTab === 'projects' ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-500'}`}>完整项目 ({savedProjects.length})</button>
                            </div>
                        </div>
                        
                        {collectionTab === 'styles' && (
                            savedFusions.length === 0 ? (
                                <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                                    <div className="text-4xl mb-4">🧪</div>
                                    <h3 className="text-lg font-bold text-gray-500">暂无融合风格</h3>
                                    <p className="text-sm text-gray-400 mb-6">进入融合模式创造全新的 UI 风格。</p>
                                    <button onClick={() => { setShowCollection(false); setIsFusionMode(true); }} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">开始实验</button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {savedFusions.map(fusion => (
                                        <div key={fusion.id} className="bg-white rounded-xl border border-indigo-100 shadow-sm overflow-hidden group hover:shadow-md transition cursor-pointer" onClick={() => openSavedFusion(fusion)}>
                                            <div className="h-40 bg-[#f8fafc] relative flex items-center justify-center overflow-hidden p-4">
                                                {/* Preview Inject */}
                                                <style>{fusion.css}</style>
                                                <div className="fusion-preview-box w-full pointer-events-none transform scale-75 origin-center" dangerouslySetInnerHTML={{__html: fusion.html}} />
                                            </div>
                                            <div className="p-4 border-t border-gray-100">
                                                <h3 className="font-bold text-gray-800">{fusion.name}</h3>
                                                <p className="text-xs text-gray-500 mt-1 truncate">{fusion.parentStyles.join(' + ')}</p>
                                                <div className="mt-3 text-[10px] text-indigo-500 font-mono bg-indigo-50 inline-block px-2 py-1 rounded">
                                                    AI Generated
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}

                        {collectionTab === 'projects' && (
                            savedProjects.length === 0 ? (
                                <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                                    <div className="text-4xl mb-4">✨</div>
                                    <h3 className="text-lg font-bold text-gray-500">暂无项目</h3>
                                    <p className="text-sm text-gray-400 mb-6">有一个好点子？让 AI 帮您生成完整 PRD。</p>
                                    <button onClick={() => { setShowCollection(false); setShowIdeaInput(true); }} className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-bold">创建新项目</button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {savedProjects.map(project => (
                                        <div key={project.id} className="bg-white rounded-xl border border-pink-100 shadow-sm overflow-hidden group hover:shadow-md transition cursor-pointer flex flex-col h-64" onClick={() => openSavedProject(project)}>
                                            <div className="p-5 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex-grow relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-3 opacity-20 text-4xl">📄</div>
                                                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                                                <p className="text-xs text-gray-400 line-clamp-3 italic">"{project.userIdea}"</p>
                                                
                                                <div className="mt-4 flex gap-1 flex-wrap">
                                                    {project.visualStyleFusion?.styleIds?.slice(0, 3).map(sid => (
                                                        <span key={sid} className="text-[9px] bg-white/10 px-2 py-1 rounded border border-white/10">{sid}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="p-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 flex justify-between items-center">
                                                <span>全栈 PRD</span>
                                                <span>{new Date(project.timestamp).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    /* Standard Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {STYLE_ITEMS.map((item) => {
                            const isSelected = selectedStyleIds.includes(item.id);
                            // Highlight New T0 Styles
                            const isNewT0 = ['chromium', 'kinetic', 'dreamcore', 'spatial', 'holographic', 'dither', 'risograph', 'ethereal'].includes(item.id);

                            return (
                                <div 
                                    key={item.id} 
                                    onClick={() => handleCardClick(item.id)}
                                    className={`
                                        bg-white rounded-xl overflow-hidden flex flex-col group transition-all duration-300 relative
                                        ${isFusionMode ? 'cursor-pointer' : ''}
                                        ${isSelected 
                                            ? 'ring-4 ring-purple-500 ring-offset-2 transform scale-[1.02] shadow-xl z-10' 
                                            : isFusionMode 
                                                ? 'opacity-60 hover:opacity-100 hover:scale-[1.01] border border-gray-200' 
                                                : 'border border-gray-200 hover:shadow-lg'
                                        }
                                        ${item.id === 'cassette' && !isSelected ? 'border-t-4 border-t-orange-500' : ''}
                                    `}
                                >
                                    {/* New Label */}
                                    {isNewT0 && !isFusionMode && (
                                        <div className="absolute top-2 left-2 z-20 bg-black/90 backdrop-blur text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider animate-pulse border border-white/20 shadow-lg">
                                            Trend 2025 💎
                                        </div>
                                    )}

                                    {/* Selection Indicator */}
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 z-20 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                                            ✓
                                        </div>
                                    )}

                                    {/* Card Header */}
                                    <div className="p-3 border-b bg-gray-50 flex justify-between items-center">
                                        <span className={`font-bold text-sm truncate pr-2 ${item.id === 'cassette' ? 'text-orange-700' : 'text-gray-700'}`}>
                                            {item.title}
                                        </span>
                                        <span className={`text-xs px-1.5 py-0.5 rounded font-mono shrink-0 ${item.tierColorClass}`}>
                                            {item.tier}
                                        </span>
                                    </div>

                                    {/* Canvas / Preview Area */}
                                    <div className={isFusionMode ? 'pointer-events-none' : ''}>
                                        {renderCardContent(item.id)}
                                    </div>

                                    {/* Card Footer */}
                                    <div className="font-size-[0.75rem] text-gray-500 bg-white p-4 border-t border-gray-100 flex-grow flex flex-col justify-end text-xs">
                                        <p className="mb-2 line-clamp-2">{item.description}</p>
                                        <p className="mb-3 line-clamp-2">{item.application}</p>
                                        {!isFusionMode && (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); setActiveModalId(item.id); }}
                                                className={`w-full text-center font-bold py-1.5 px-2 rounded border text-xs transition active:scale-95 ${
                                                    item.id === 'cassette' 
                                                        ? 'bg-orange-50 hover:bg-orange-100 text-orange-800 border-orange-200' 
                                                        : item.id === 'brutal'
                                                            ? 'bg-yellow-100 hover:bg-yellow-200 text-black border-black'
                                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
                                                }`}
                                            >
                                                📄 查看 PRD & 规范
                                            </button>
                                        )}
                                        {isFusionMode && (
                                            <div className={`w-full text-center py-1.5 font-bold rounded border transition-colors ${isSelected ? 'bg-purple-600 text-white border-purple-600' : 'text-purple-600 bg-purple-50 border-purple-100'}`}>
                                                {isSelected ? '已选择' : '点击选择'}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            {/* Fusion Floating Action Bar */}
            {isFusionMode && selectedStyleIds.length > 0 && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-up">
                    <button 
                        onClick={startFusion}
                        disabled={selectedStyleIds.length < 2 || isFusing}
                        className={`
                            flex items-center gap-3 px-8 py-4 rounded-full shadow-2xl font-bold text-lg transition-all
                            ${selectedStyleIds.length < 2 
                                ? 'bg-gray-800 text-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 active:scale-95 ring-4 ring-purple-500/30'
                            }
                        `}
                    >
                        {isFusing ? (
                            <>
                                <span className="animate-spin text-2xl">⏳</span>
                                <span>合成 DNA 中...</span>
                            </>
                        ) : (
                            <>
                                <span className="text-2xl">⚗️</span>
                                <span>融合 {selectedStyleIds.length} 种风格</span>
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Loading Overlay for Project Generation */}
            {isGeneratingProject && (
                <div className="fixed inset-0 bg-black/80 z-[100] flex flex-col items-center justify-center text-white backdrop-blur-sm">
                    <div className="text-6xl mb-6 animate-pulse">🧠</div>
                    <h2 className="text-2xl font-bold mb-2">Genesis 引擎运行中...</h2>
                    {/* Dynamic Status Text */}
                    <p className="text-gray-400 font-mono animate-pulse">{generationStatus || "正在初始化..."}</p>
                </div>
            )}

            {/* Idea Input Modal */}
            {showIdeaInput && (
                <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 animate-scale-in">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Project Genesis</h3>
                            <button onClick={() => setShowIdeaInput(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">告诉我们您的 APP 创意。AI 将进行市场调研，选择完美的风格融合，并为您编写完整的技术 PRD。</p>
                        <textarea 
                            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-sm mb-4"
                            placeholder="例如：一个为程序员设计的冥想应用，看起来像复古终端，但感觉很平静..."
                            value={userIdea}
                            onChange={(e) => setUserIdea(e.target.value)}
                        />
                        <button 
                            onClick={handleCreateProject}
                            disabled={!userIdea.trim()}
                            className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50"
                        >
                            生成完整 PRD
                        </button>
                    </div>
                </div>
            )}

            {/* Modals */}
            {activeModalId && (
                <PrdModal 
                    id={activeModalId} 
                    onClose={() => setActiveModalId(null)} 
                />
            )}

            {fusionResult && (
                <FusionResultModal 
                    result={fusionResult}
                    isSaved={!!savedFusions.find(f => f.id === fusionResult.id)}
                    onSave={saveFusion}
                    onClose={() => setFusionResult(null)}
                />
            )}

            {projectResult && (
                <ProjectPrdModal
                    project={projectResult}
                    isSaved={!!savedProjects.find(p => p.id === projectResult.id)}
                    onSave={saveProject}
                    onClose={() => setProjectResult(null)}
                />
            )}
        </div>
    );
};

export default App;