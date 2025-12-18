import { GoogleGenAI, Type } from "@google/genai";
import { StyleItem, FusionResult, ProjectPrd } from "../types";
import { PRD_DATA } from "../constants";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// === FUSION ENGINE: STYLE LAB ===
export async function fuseStyles(selectedStyleIds: string[], allStyles: StyleItem[]): Promise<FusionResult> {
  const selectedItems = allStyles.filter(s => selectedStyleIds.includes(s.id));
  const parentNames = selectedItems.map(s => s.title).join(', ');
  
  // Extract specific visual DNA from T0-T3 tiers
  const styleContext = selectedItems.map(item => {
    const prd = PRD_DATA[item.id];
    return {
      name: item.title,
      tier: item.tier, // Important: Let AI know the tier (T0 = Experimental, T3 = Classic)
      desc: item.description,
      visualDNA: prd ? prd.specs : {}
    };
  });

  const prompt = `
    Role: Visionary Creative Technologist & Avant-Garde UI Designer.
    
    Task: Create a brand new, never-before-seen UI visual language by fusing the following styles: ${parentNames}.
    
    **CRITICAL DESIGN RULES (DO NOT IGNORE):**
    1. **NO GENERIC LAYOUTS**: Do NOT generate a standard dashboard, generic landing page, or simple Bootstrap grid.
    2. **BREAK THE GRID**: Use overlapping elements, asymmetry, absolute positioning, massive typography, or fluid shapes.
    3. **DEEP FUSION**: 
       - If T0 (e.g., Liquid/3D) is present, use advanced CSS (filters, transforms, mesh gradients).
       - If T3 (e.g., Retro/Brutal) is present, use raw aesthetics but modernized.
       - The result must look like an Awwwards Site of the Day or a Dribbble Top Shot.
    4. **SCOPE**: All CSS must be scoped to \`.fusion-preview-box\`.
    
    Context Input: ${JSON.stringify(styleContext)}

    Requirements:
    1. Name: Invent a creative, artistic name for this new style.
    2. Code: Generate CSS and HTML for a "Hero Component" that demonstrates this style's maximum potential.
    3. PRD: Brief specs describing this new visual language.

    Output Schema (JSON):
    {
      "name": "string",
      "description": "string (Short, artistic description of the vibe)",
      "css": "string (Advanced CSS, use animations, complex gradients, clip-paths)",
      "html": "string (Semantic but art-directed HTML structure)",
      "specs": { "radius": "string", "shadow": "string", "font": "string", "colors": "string" },
      "platform_guides": { "web": "string", "ios": "string", "android": "string", "mini": "string" }
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });
    const text = response.text;
    if (!text) throw new Error("No response");
    const data = JSON.parse(text);

    return {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      css: data.css,
      html: data.html,
      parentStyles: selectedItems.map(s => s.title),
      timestamp: Date.now(),
      prd: {
        name: data.name,
        specs: data.specs,
        web: data.platform_guides.web,
        ios: data.platform_guides.ios,
        android: data.platform_guides.android,
        mini: data.platform_guides.mini
      }
    };
  } catch (error) {
    console.error("Fusion failed:", error);
    throw error;
  }
}

// === GENESIS ENGINE: PROJECT CREATION ===
export async function generateProjectPrd(
    userIdea: string, 
    availableStyles: StyleItem[],
    onStatusUpdate: (status: string) => void
): Promise<ProjectPrd> {
    
    // Pass the tier info to AI so it knows T0 is experimental
    const stylesContext = availableStyles.map(s => ({ 
        id: s.id, 
        tier: s.tier,
        desc: s.description, 
        name: s.title 
    }));

    try {
        // --- PHASE 1: REAL RESEARCH (Google Search) ---
        onStatusUpdate("正在连接全球知识库，进行深度市场调研...");
        
        const researchPrompt = `
        任务：针对用户提出的产品想法 "${userIdea}" 进行严肃、深度的市场调研。
        
        请使用 Google Search 工具查找：
        1. 目前市场上类似的竞品或解决方案（寻找设计最独特的）。
        2. 该领域的最新技术趋势 (2024/2025)。
        3. 目标用户的核心痛点。
        
        输出：请用**简体中文**撰写一份 200 字左右的深度调研摘要，列出关键发现。
        `;

        const researchResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: researchPrompt,
            config: {
                tools: [{googleSearch: {}}],
            }
        });
        
        const researchData = researchResponse.text || "无法获取实时网络数据，基于通用知识库分析。";
        
        // --- PHASE 2: BRAINSTORMING & ARCHITECTURE ---
        onStatusUpdate("专家团队（CPO/CTO/设计总监）正在基于调研结果进行激烈辩论...");

        const mainPrompt = `
        你是一个由三位世界级专家组成的精英产品团队。你们正在召开一场关于 "${userIdea}" 的立项会议。
        
        **背景资料（基于真实调研）**：
        ${researchData}

        **团队成员**：
        1. **CPO (Steve)**: 极其挑剔，关注用户心理、市场差异化。他的语言风格犀利、直击要害。
        2. **CTO (Linus)**: 务实、严谨，关注架构扩展性、安全性。他讨厌过度设计。
        3. **设计总监 (Jony)**: 
           - **核心原则**：痛恨平庸。痛恨"标准后台模板"。
           - **任务**：他必须从 Style Context 中选择 1-3 个风格（尤其是 T0/T1 级别的）进行**变异融合**。
           - **指令**：生成的 UI 必须是颠覆性的。不要标准的 Navbar + Sidebar。要探索悬浮界面、动态网格、液态排版或沉浸式 3D。

        **任务**：
        1. **圆桌讨论**：三位专家必须用**简体中文**进行辩论。Design Director 必须强烈反对任何保守的设计方案。
        2. **最终决策**：确定 PRD 细节。
        3. **构建产物**：
           - **UI 代码 (High-Fidelity)**: 生成 HTML/CSS。CSS 必须限定在 \`.project-preview-box\` 类下。
           - **设计要求**: 使用高级 CSS 特性（backdrop-filter, mix-blend-mode, gradients, animations, complex shadows）。不要写简单的白底黑字。
           - **Markdown 手册**: 撰写一份专业的 PRD 执行手册。

        **可用风格库**：${JSON.stringify(stylesContext)}

        **输出格式**：JSON
        `;

        const schema = {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                elevatorPitch: { type: Type.STRING },
                targetAudience: { type: Type.STRING },
                teamBrainstorming: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            role: { type: Type.STRING, enum: ["CPO", "CTO", "Design Director"] },
                            name: { type: Type.STRING },
                            avatar: { type: Type.STRING },
                            focus: { type: Type.STRING },
                            opinion: { type: Type.STRING, description: "Detailed opinion in Simplified Chinese" }
                        },
                        required: ["role", "name", "avatar", "focus", "opinion"]
                    }
                },
                visualStyleFusion: {
                    type: Type.OBJECT,
                    properties: {
                        styleIds: { type: Type.ARRAY, items: { type: Type.STRING } },
                        reasoning: { type: Type.STRING },
                        colorPalette: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ["styleIds", "reasoning", "colorPalette"]
                },
                previewHtml: { type: Type.STRING },
                previewCss: { type: Type.STRING },
                features: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            description: { type: Type.STRING },
                            priority: { type: Type.STRING, enum: ["P0", "P1", "P2"] }
                        },
                        required: ["name", "description", "priority"]
                    }
                },
                techStack: {
                    type: Type.OBJECT,
                    properties: {
                        frontend: { type: Type.STRING },
                        backend: { type: Type.STRING },
                        database: { type: Type.STRING },
                        infrastructure: { type: Type.STRING }
                    },
                    required: ["frontend", "backend", "database", "infrastructure"]
                },
                databaseSchema: { type: Type.STRING },
                apiEndpoints: { type: Type.STRING },
                prdManual: { type: Type.STRING, description: "A complete, professional PRD execution manual in Markdown format (Simplified Chinese)." }
            },
            required: ["title", "elevatorPitch", "targetAudience", "teamBrainstorming", "visualStyleFusion", "previewHtml", "previewCss", "features", "techStack", "databaseSchema", "apiEndpoints", "prdManual"]
        };

        onStatusUpdate("设计总监正在否决平庸方案，构建高保真艺术原型...");

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', // Using Flash for complex structured generation + text volume
            contents: mainPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: schema
            }
        });

        const text = response.text;
        if(!text) throw new Error("AI Generation failed");
        
        const data = JSON.parse(text);

        return {
            id: Date.now().toString(),
            timestamp: Date.now(),
            userIdea: userIdea,
            researchReport: researchData,
            ...data
        };

    } catch (e) {
        console.error("Project Generation Failed", e);
        throw e;
    }
}

// === GHOST DESIGN TEAM: LIVE EDIT ===
export async function modifyProjectUi(
    currentHtml: string, 
    currentCss: string, 
    instruction: string,
    selectedElementHtml?: string
): Promise<{ html: string, css: string }> {

    const contextInput = selectedElementHtml 
        ? `用户选中了以下特定元素: \n${selectedElementHtml}`
        : `用户希望修改全局视图。`;

    const prompt = `
    角色: 你是 "幽灵设计团队" (Ghost Design Team) —— 一支精英 UI 突击队，擅长处理高端、前卫的界面。
    
    当前 UI 状态:
    - HTML: ${currentHtml}
    - CSS: ${currentCss}
    
    用户反馈指令: "${instruction}"
    上下文: ${contextInput}
    
    **设计原则**:
    1. **拒绝平庸**: 即使是微小的修改，也要保持整体的 T0-T3 融合风格。不要退化成默认样式。
    2. **视觉冲击**: 如果用户要求"强调"，尝试使用发光、模糊、独特的排版，而不是简单的加粗变红。
    3. **严谨性**: 保持 CSS 作用域为 \`.project-preview-box\`。
    4. **语言**: 如果需要修改文字内容，请使用**简体中文**。

    输出 JSON: { "html": "updated html", "css": "updated css" }
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });

        const text = response.text;
        if(!text) throw new Error("Modification failed");
        return JSON.parse(text);

    } catch (e) {
        console.error("UI Modification Failed", e);
        throw e;
    }
}