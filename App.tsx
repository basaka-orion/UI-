import React, { useState } from 'react';
import { STYLE_ITEMS } from './constants';
import { StyleItem, FusionResult } from './types';
import PrdModal from './components/PrdModal';
import FusionResultModal from './components/FusionResultModal';
import { fuseStyles } from './utils/ai';
import { 
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
    BlueprintCadCard
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

    const saveFusion = (result: FusionResult) => {
        if (!savedFusions.find(f => f.id === result.id)) {
            setSavedFusions([result, ...savedFusions]);
        }
    };

    const openSavedFusion = (result: FusionResult) => {
        setFusionResult(result);
    };

    // Component Factory
    const renderCardContent = (id: string) => {
        switch(id) {
            // T0 Interactive Components
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

            // T0/T1/T2/T3 Existing Interactive Components
            case 'bento': return <BentoCard />;
            case 'glass': return <GlassCard />;
            case 'brutal': return <BrutalCard />;
            case 'cassette': return <CassetteCard />;
            case 'neu': return <NeuCard />;
            case 'dos': return <DosCard />;
            case 'win95': return <Win95Card />;
            
            // Fallback for everything else (T1 styles, etc.)
            default: return <GenericCardRender id={id} />;
        }
    };

    return (
        <div className="min-h-screen pb-20">
             {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => setShowCollection(false)}>
                            UI Style Museum 
                            <span className="ml-2 text-indigo-600 text-xs align-middle bg-indigo-50 px-2 py-1 rounded border border-indigo-100 uppercase tracking-wide">Gemini 3.0 Edition</span>
                        </h1>
                        <p className="text-xs text-gray-500 font-mono mt-1">
                            {STYLE_ITEMS.length} Styles • Cross-Platform Specs • AI Fusion
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => { setShowCollection(!showCollection); setIsFusionMode(false); }}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${showCollection ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <span>📂</span> My Collection ({savedFusions.length})
                        </button>

                        <div className="h-6 w-px bg-gray-300 mx-2"></div>

                        <div className="flex items-center gap-2">
                             <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Lab:</span>
                             <button 
                                onClick={() => { setIsFusionMode(!isFusionMode); setShowCollection(false); setSelectedStyleIds([]); }}
                                className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                                    isFusionMode 
                                    ? 'bg-purple-600 text-white shadow-purple-200 ring-2 ring-purple-300 ring-offset-2' 
                                    : 'bg-white border border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600'
                                }`}
                            >
                                <span className={isFusionMode ? 'animate-spin' : ''}>🧬</span> 
                                {isFusionMode ? 'Fusion Mode ON' : 'Start Fusion'}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Collection View */}
                {showCollection ? (
                    <div>
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">My Collection</h2>
                            <button onClick={() => setShowCollection(false)} className="text-sm text-indigo-600 hover:underline">Back to Museum</button>
                        </div>
                        
                        {savedFusions.length === 0 ? (
                            <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                                <div className="text-4xl mb-4">🧪</div>
                                <h3 className="text-lg font-bold text-gray-500">No fusions yet</h3>
                                <p className="text-sm text-gray-400 mb-6">Enter Fusion Mode to create new styles.</p>
                                <button onClick={() => { setShowCollection(false); setIsFusionMode(true); }} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">Start Experiment</button>
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
                        )}
                    </div>
                ) : (
                    /* Standard Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {STYLE_ITEMS.map((item) => {
                            const isSelected = selectedStyleIds.includes(item.id);
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
                                                {isSelected ? 'Selected' : 'Tap to Select'}
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
                                <span>Synthesizing DNA...</span>
                            </>
                        ) : (
                            <>
                                <span className="text-2xl">⚗️</span>
                                <span>Fuse {selectedStyleIds.length} Styles</span>
                            </>
                        )}
                    </button>
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
        </div>
    );
};

export default App;