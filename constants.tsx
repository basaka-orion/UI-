import { PrdData, StyleItem } from './types';

// ==========================================
// PRD Data Dictionary
// ==========================================
export const PRD_DATA: Record<string, PrdData> = {
  // --- T0: 2026 Avant-Garde ---
  'neuro-morphic': {
    name: 'Neuro-morphic (神经拟态)',
    specs: {
      radius: 'Organic / Breathing',
      shadow: 'Bio-luminescent Glow',
      font: 'Humanist Sans / Variable',
      colors: 'Tissue Pink, Synapse Blue, Fluid Green'
    },
    web: '模拟生物组织的呼吸感与脉动。使用 CSS 动画实现不规则的流体形状 (Blob) 缓慢变化。色彩过渡极度柔和，仿佛带有生命体征。交互反馈类似神经突触的激活。',
    ios: '利用 CoreAnimation 实现复杂的非线性形变。触觉反馈 (Haptics) 模拟心跳或呼吸频率。',
    android: '使用 RenderEffect 和自定义 Shader 创造有机体的柔软边缘。',
    mini: '使用多层半透明的 SVG 动画叠加，模拟细胞分裂或呼吸效果。'
  },
  'quantum-glass': {
    name: 'Quantum Glass (量子玻璃)',
    specs: {
      radius: '16px - 32px',
      shadow: 'Chromatic Aberration (色差)',
      font: 'Sharp Grotesk / Mono',
      colors: 'Deep Void, Prismatic Refraction'
    },
    web: 'Glassmorphism 的终极进化。不仅有模糊，还必须包含色散 (Chromatic Aberration) 和次表面散射 (Subsurface Scattering)。使用多层 mix-blend-mode 和 filter 模拟光线穿过复杂介质的折射。',
    ios: '深度定制 UIVisualEffectView，加入 RGB 通道分离的着色器。',
    android: '通过 Vulkan 或 OpenGL ES 编写自定义材质，实现物理级别的光线折射。',
    mini: '使用预渲染的带有色散效果的高清玻璃素材，配合简单的 CSS 模糊。'
  },
  'ambient-aura': {
    name: 'Ambient Aura (环境氛围)',
    specs: {
      radius: 'Borderless / Dissolving',
      shadow: 'Massive Colored Light',
      font: 'Thin / Elegant Serif',
      colors: 'Warm Amber, Ethereal Violet'
    },
    web: '去边框化设计 (Borderless UI)。界面元素融入背景，仅通过光影的强弱和色彩的晕染来划分层级。大量使用极高模糊半径 (100px+) 的 radial-gradient 作为光源。',
    ios: 'UI 元素如同悬浮在发光气体中。利用 SwiftUI 的 .blur 和 .blendMode 创造氛围感。',
    android: '使用动态的 Mesh Gradient 作为背景，UI 控件的边缘与背景柔和过渡。',
    mini: '通过大面积的 CSS 径向渐变背景和极简的线条图标实现。'
  },
  'hyper-brutalism': {
    name: 'Hyper-Brutalism (超粗野主义)',
    specs: {
      radius: '0px / Sharp Angles',
      shadow: 'Hard Solid Drop (3D)',
      font: 'Massive / Distorted Sans',
      colors: 'Neon Cyan, Hot Magenta, Pure Black'
    },
    web: '结合 3D 视角的粗野主义。极高对比度，巨大的排版，故意破坏网格。使用 CSS 3D Transforms (rotateX, rotateY) 让扁平元素呈现出厚重的物理块状感。',
    ios: '利用 SceneKit 或 RealityKit 将 UI 控件变成真正的 3D 物理块，交互带有沉重的碰撞感。',
    android: '自定义 View 绘制带有厚度的 3D 边框，结合物理引擎 (如 Box2D) 实现掉落和碰撞。',
    mini: '使用 CSS 伪元素模拟 3D 厚度，配合强烈的色彩对比和粗体文字。'
  },
  // --- T0: Chromium Liquid (液态铬金) ---
  'chromium': {
    name: 'Chromium Liquid (液态铬金)',
    specs: {
      radius: 'Fluid / Blob',
      shadow: 'Specular Reflection',
      font: 'Gothic / Serrated / Liquid',
      colors: 'Silver, Chrome, Neon Green'
    },
    web: '模拟 T-1000 液态金属质感。必须使用复杂的 CSS gradient 模拟金属反光。混合模式 (mix-blend-mode: difference/exclusion) 是关键。配合 SVG 滤镜和噪点 (Noise) 纹理。',
    ios: '使用 Metal Shader 渲染实时流体。交互带有粘滞感。',
    android: 'RenderEffect 模糊 + 阈值滤镜实现液化。',
    mini: '使用静态的高清液态金属 3D 渲染图作为背景，前景文字做简单的浮动动画。'
  },
  // --- T0: Kinetic Typography (动势排印) ---
  'kinetic': {
    name: 'Kinetic Typography (动势排印)',
    specs: {
      radius: '0px',
      shadow: 'None',
      font: 'Variable Fonts (Width/Slant axis)',
      colors: 'High Contrast B&W + Neon Accent'
    },
    web: '文字即图像。字号必须巨大 (10vw+)。利用 Variable Fonts 实现鼠标悬停时的拉伸、倾斜变形。无休止的 Marquee 滚动。打破网格限制。',
    ios: 'CoreText 引擎深度定制。利用陀螺仪控制文字的重力倒塌。',
    android: 'TextClock 或 AnimatedVectorDrawable 实现文字形变动画。',
    mini: 'Canvas 绘制文字动画以保证 60fps 帧率。'
  },
  // --- T0: Dreamcore (梦核航空) ---
  'dreamcore': {
    name: 'Dreamcore Aero (梦核航空)',
    specs: {
      radius: '16px - 100px',
      shadow: 'Soft Bloom / Glow',
      font: 'Comic Sans / Rounded Sans',
      colors: 'Sky Blue, Grass Green, Pink clouds'
    },
    web: 'Y2K 美学的超现实变体。蓝天白云背景，加上低保真 (Low-res) 的 3D 元素。带有一种“熟悉的陌生感” (Liminal Space)。光晕 (Bloom) 效果要强。',
    ios: '复古拟物图标，但带有现代的柔光滤镜。',
    android: '动态壁纸风格，气泡漂浮动画。',
    mini: '使用高饱和度的 PNG 贴纸堆叠。'
  },
  // --- T0: Spatial Bento (空间便当盒) ---
  'spatial': {
    name: 'Spatial Bento (空间便当盒)',
    specs: {
      radius: '24px',
      shadow: 'Inner Glow + Spotlight',
      font: 'Inter / San Francisco',
      colors: 'Dark Glass, Subtle Gradients'
    },
    web: '超越普通 Grid。卡片必须有深度 (Z-axis)。鼠标移动时，卡片边缘要有跟随光标的“聚光灯”效果 (Spotlight Effect)。材质是深色磨砂玻璃。',
    ios: 'VisionOS 设计规范的降维打击。悬浮感，层级分明。',
    android: 'Material 3 的 Elevation 结合动态光照 Shader。',
    mini: '简化为深色半透明卡片，保留边框高亮。'
  },
  // --- T0: Holographic Foil (全息镭射) ---
  'holographic': {
    name: 'Holographic Foil (全息镭射)',
    specs: {
      radius: '12px',
      shadow: 'Iridescent Glow',
      font: 'Söhne / Helvetica Now',
      colors: 'Spectrum Gradients, Silver'
    },
    web: '模拟物理镭射材质。使用 background-attachment: fixed 配合复杂的线性渐变模拟光线折射。必须叠加 SVG Noise 纹理以增加真实感。',
    ios: 'CoreImage 滤镜链：色彩偏移 + 噪点叠加。',
    android: 'ShaderFactory 实现动态彩虹光效。',
    mini: '使用预渲染的高清镭射视频作为背景，循环播放。'
  },
  // --- T0: Dither Punk (抖动朋克) ---
  'dither': {
    name: 'Dither Punk (抖动朋克)',
    specs: {
      radius: '0px',
      shadow: 'Hard Drop 1-bit',
      font: 'Pixel / Bitmap Fonts',
      colors: '1-bit Black & White only'
    },
    web: '1-bit 美学。使用 CSS radial-gradient 模拟有序抖动 (Ordered Dithering)。图片必须处理为 Atkinson Dither 效果。交互只有黑与白，无中间灰度。',
    ios: '自定义 Bitmap 渲染管线。',
    android: 'PorterDuff 模式处理位图。',
    mini: 'Canvas 像素级操作模拟。'
  },
  // --- T0: Risograph (孔版印刷) ---
  'risograph': {
    name: 'Risograph (孔版印刷)',
    specs: {
      radius: 'Rough Edge',
      shadow: 'Multiply Offset',
      font: 'Serif (Ink Bleed)',
      colors: 'Fluorescent Pink, Cornflower Blue'
    },
    web: '模拟油墨叠印。核心是 mix-blend-mode: multiply。颜色必须是传统的 Riso 色卡（荧光粉、蓝、黄）。故意制造 2px-3px 的套色偏差 (Misalignment)。',
    ios: 'CoreGraphics 混合模式。',
    android: 'Paint.setXfermode(PorterDuff.Mode.MULTIPLY)。',
    mini: 'CSS 混合模式 (部分支持) 或 Canvas 绘制。'
  },
  // --- T0: Ethereal Glow (以太光晕) ---
  'ethereal': {
    name: 'Ethereal Glow (以太光晕)',
    specs: {
      radius: '40px',
      shadow: 'Massive White Bloom',
      font: 'Editorial New / Thin Serif',
      colors: 'White, Pale Gold, Lightest Grey'
    },
    web: '过度曝光美学。大量使用 filter: drop-shadow() 制造发光物体。背景是极淡的渐变。字体要细、雅致。给人一种“天堂般”的失重感。',
    ios: '高斯模糊半径设为 50px+。',
    android: 'RenderEffect.createBlurEffect。',
    mini: '半透明白色蒙层叠加。'
  },

  // --- T0: Anthropic Serif ---
  'anthropic-serif': {
    name: 'Anthropic Serif (人文智性)',
    specs: {
      radius: '12px (Soft)',
      shadow: 'Subtle Warm Glow',
      font: 'Serif (Editorial) / Sans (Clean)',
      colors: 'Warm Paper (#F3F0EB), Charcoal, Terracotta'
    },
    web: '核心美学是“一本会呼吸的杂志”。背景必须使用暖色调 (#F3F0EB 或 #EAE0D5)。标题使用高雅的衬线体 (Recoleta 或 Playfair Display)。按钮为圆润的 Pill Shape。交互反馈要克制、优雅，避免过度的科技感炫光。',
    ios: '使用系统衬线字体 (New York) 配合 San Francisco。强调阅读体验。界面元素之间要有大量的呼吸感留白。',
    android: 'Material You 的色彩系统非常适合，提取大地色系。使用 Serif 字体作为标题强调。',
    mini: '轻量化阅读体验。加载动画可以使用简单的衬线字母呼吸效果。'
  },
  // --- T0: AI Abstract ---
  'ai-abstract': {
    name: 'AI Abstract (智构抽象)',
    specs: {
      radius: 'Organic / Fluid',
      shadow: 'Bioluminescent Glow',
      font: 'Space Mono / Söhne',
      colors: 'Void Black (#050505), Electric Blue, Neon Purple'
    },
    web: '核心是可视化"潜空间(Latent Space)"。使用 WebGL 或 Canvas 绘制动态粒子网络。节点连接需具备距离感知的透明度变化。背景叠加 Perlin Noise 实现呼吸感。',
    ios: '利用 Metal 框架渲染粒子系统。交互手势触发"突触激活"的光效。',
    android: '使用 Custom View 和 Paint.setShader 实现高光渐变的连线效果。',
    mini: '使用 Canvas 2D 上下文绘制简化版的粒子连线，控制粒子数量以保证 60fps。'
  },
  // --- T0: Blueprint CAD ---
  'blueprint-cad': {
    name: 'Blueprint CAD (工程蓝图)',
    specs: {
      radius: '0px (ISO Standard)',
      shadow: 'None / Flat Layering',
      font: 'DIN 1451 / Monospace',
      colors: 'Blueprint Blue (#003366), White Lines (#FFFFFF)'
    },
    web: '严格遵循 ISO 工程制图标准。必须包含：无限长十字准星、实时坐标数值(X/Y/Z)、网格吸附效果。所有线条为 1px 实线或虚线，无抗锯齿模糊。',
    ios: '使用 CoreGraphics 绘制高精度矢量路径。强调"测量"和"标注"的交互反馈。',
    android: 'Canvas API 绘制技术图纸。数字变化使用等宽字体以防止抖动。',
    mini: '适合工具类应用。使用 cover-view 覆盖 Canvas 实现悬浮参数面板。'
  },
  // --- T0: Liquid Glass ---
  'liquid-glass': {
    name: 'Liquid Glass (液态玻璃)',
    specs: {
      radius: 'Fluid / Variable',
      shadow: 'Caustics / Specular Highlights',
      font: 'Inter / San Francisco (Clean)',
      colors: 'Adaptive Environment + High Refraction'
    },
    web: '超越 CSS backdrop-filter。必须实现边缘的光学畸变(Distortion)和焦散(Caustics)效果。交互时表现出高粘度(Viscosity)流体特性，如拖拽时的拉伸与回弹。',
    ios: '核心是空间计算。利用 Vision Pro 的环境光反射能力。界面不是贴在屏幕上的，而是有厚度、有折射率的实体介质。',
    android: '使用 RenderEffect 和 Shader 实现动态模糊与液化效果。根据系统负载改变“玻璃”的浑浊度。',
    mini: '因性能限制，使用静态的焦散图片素材叠加，交互上保留简单的弹簧动画。'
  },
  // --- T0: Skeuo Nature ---
  'skeuo-nature': {
    name: 'Neo-Skeuomorphism: Wood & Plant (自然复兴)',
    specs: {
      radius: 'Organic / Hand-carved',
      shadow: 'Deep Ambient Occlusion',
      font: 'Serif (E.g., Recoleta)',
      colors: 'Raw Wood, Chlorophyll Green'
    },
    web: '材质纹理(Texture)必须随机化，避免重复。使用 WebGL 或 Canvas 模拟植物生长的过程代替线性进度条。触感上强调“粗糙”与“温润”。',
    ios: '利用 Haptics 模拟指尖划过木纹的微震动。视觉上强调生物亲和性(Biophilia)，降低用户皮质醇。',
    android: '动态壁纸与材质取色结合。组件边缘处理成未打磨的手工感。',
    mini: '加载动画使用发芽、开花等自然过程。适合冥想、环保、手作类应用。'
  },
  // --- T0: Skeuo Stone ---
  'skeuo-stone': {
    name: 'Neo-Skeuomorphism: Stone & Metal (金融基石)',
    specs: {
      radius: 'Sharp / Chiseled',
      shadow: 'Heavy / Grounded',
      font: 'Mono / Engraved',
      colors: 'Granite Grey, Cold Steel, Gold'
    },
    web: '大理石或花岗岩纹理，传达“永久”与“安全”。配合冷冽的金属光泽。交互沉重，阻尼感强。',
    ios: '用于加密货币或银行应用。金属拉丝效果需随手机陀螺仪转动而改变光泽。',
    android: '强调“基石”般的稳定性。转场动画应如同石门开启般厚重。',
    mini: '通过高精度的图片素材传递信任感。'
  },
  // --- T0: 3D Interactive ---
  '3d-interactive': {
    name: 'Interactive 3D (全维空间)',
    specs: {
      radius: 'N/A (Geometry)',
      shadow: 'Ray-traced / Real-time',
      font: 'Floating 3D Text',
      colors: 'Material Dependent'
    },
    web: 'Z轴功能化：深度代表重要性。使用 Spline 或 Three.js。微交互立体化（如汉堡菜单不仅是变色，而是机械结构展开）。',
    ios: 'RealityKit 是核心。模型需具备物理属性（重力、碰撞）。',
    android: 'SceneView 集成。确保模型在不同光照下的渲染一致性。',
    mini: '使用轻量级 glTF 模型，优化加载速度，仅在关键交互点使用 3D。'
  },
  // --- T0: Aurora Mesh ---
  'aurora-mesh': {
    name: 'Dynamic Gradients (极光渐变)',
    specs: {
      radius: 'Soft / Blended',
      shadow: 'Glow / Diffusion',
      font: 'Modern Sans',
      colors: 'Fluid Spectrum'
    },
    web: '非线性渐变。使用 Mesh Gradient 技术，多个色点自由浮动、融合。作为视觉白噪音，引导注意力而非强迫。',
    ios: '利用 Metal 渲染复杂的流体色彩。品牌色的动态拓扑结构。',
    android: 'Canvas 绘制动态着色器。色彩随时间或情绪缓慢流动。',
    mini: '使用 CSS 动画实现简化的多背景移动效果。'
  },
  // --- T0: Atomic Age ---
  'atomic-age': {
    name: 'Atomic Age Optimism (原子时代)',
    specs: {
      radius: 'Streamlined / Oval',
      shadow: 'Hard Edge / Pop',
      font: 'Futura / Geometric',
      colors: 'Teal, Mustard, Pink, Orange'
    },
    web: '星爆(Starburst)图标，电子轨道路径。乐观主义的配色。适合 AI 创新工具，传达“科技造福人类”的初衷。',
    ios: '动画强调“发射”、“升空”的轻盈感。',
    android: '复古未来主义的各种几何图形组合。',
    mini: '活泼、高饱和度，适合营销活动。'
  },
  // --- T0: Jetsons ---
  'jetsons': {
    name: 'The Jetsons Aesthetic (杰森一家)',
    specs: {
      radius: 'Asymmetric / Blob',
      shadow: 'Floating / Lifted',
      font: 'Googie Style / Script',
      colors: 'Pastel Blue, Space White'
    },
    web: 'Googie 建筑风格的 UI 化。悬浮的玻璃圆顶容器。反重力设计。',
    ios: '强调“一键式”自动化操作的魔力。非对称布局。',
    android: '悬浮操作按钮(FAB)的变体。',
    mini: '智能家居控制面板的首选风格。'
  },
  // --- T0: Solarpunk Utopia ---
  'solarpunk-utopia': {
    name: 'Solarpunk Utopia (太阳朋克)',
    specs: {
      radius: 'Art Nouveau Curves',
      shadow: 'Warm Sunlight',
      font: 'Organic Serif',
      colors: 'Forest Green, Ocean Blue, Gold'
    },
    web: '新艺术运动复兴。藤蔓、水流般的曲线布局。模拟自然阳光色温。',
    ios: '拒绝死板网格。交互反馈温和滋养，而非多巴胺刺激。',
    android: '系统级字体大小与色彩需适应自然阅读环境。',
    mini: '社区、公益、慢生活应用。'
  },
  // --- T0: Brutal BW ---
  'brutal-bw': {
    name: 'Dystopian Neo-Brutalism (反乌托邦)',
    specs: {
      radius: '0px',
      shadow: 'None / Hard Black',
      font: 'Default System / Courier',
      colors: 'Pure Black (#000), Pure White (#FFF)'
    },
    web: '纯黑白高对比。去装饰化。甚至故意重叠遮挡(Anti-UX)。隐喻“赤裸的真相”或“原始数据”。',
    ios: '挑战传统的“流畅”审美。信息密度极大。',
    android: '黑客文化、加密应用。',
    mini: '新闻、深度阅读、硬核工具。'
  },
  // --- T0: Gen UI ---
  'gen-ui': {
    name: 'Hyper-personalization (超个性化)',
    specs: {
      radius: 'Adaptive',
      shadow: 'Context Aware',
      font: 'User Preference',
      colors: 'Mood Based'
    },
    web: '布局实时重组(Real-time Reflow)。基于用户视力、情绪、时间生成 UI。',
    ios: '结合 HealthKit 数据，压力大时界面变柔和。',
    android: '千人千面。意图驱动的组件生成(Widget Generation)。',
    mini: '终极形态，需依赖云端大模型实时下发样式。'
  },

  // ... Existing Styles ...
  'bento': {
    name: 'Bento Grid (便当盒)',
    specs: {
      radius: '24px - 32px (Large)',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      font: 'San Francisco / Inter (Sans-serif)',
      colors: 'Bg: #F3F4F6, Card: #FFFFFF, Accent: #000000'
    },
    web: '使用CSS Grid布局。gap建议为16px或24px。卡片应具有hover放大效果(scale 1.02)。',
    ios: '严格遵循Apple Human Interface Guidelines。使用系统模糊材质(SystemMaterial)。Tab栏使用半透明背景。',
    android: '参考Material Design 3，但圆角更大。不使用Material Elevation，改用平铺色块区分层级。',
    mini: '导航栏自定义。利用view组件实现卡片布局，注意小屏幕适配，每行最多展示2个卡片。'
  },
  'glass': {
    name: 'Glassmorphism (毛玻璃)',
    specs: {
      radius: '16px',
      shadow: 'backdrop-filter: blur(20px)',
      font: 'Thin Sans-serif weights',
      colors: 'White opacity (0.1 - 0.7)'
    },
    web: '必须使用 backdrop-filter: blur()。如果不兼容(Firefox旧版)，回退到半透明纯色背景。背景必须是深色或多彩渐变。',
    ios: '使用 UIVisualEffectView。主要使用 .systemUltraThinMaterial 或 .systemChromeMaterial。',
    android: '性能警告：实时模糊在低端Android机上非常耗电。建议使用静态模糊图片作为背景，或使用RenderScript预处理。',
    mini: '微信小程序支持 backdrop-filter，但性能一般。建议仅在弹窗或导航栏使用，不要全屏使用。'
  },
  'brutal': {
    name: 'Neo-Brutalism (野兽派)',
    specs: {
      radius: '0px (Sharp) or 4px (Minimal)',
      shadow: '4px 4px 0px 0px #000000 (Hard)',
      font: 'Courier / Archivo Black',
      colors: 'High saturation: #FF00FF, #00FF00'
    },
    web: '边框统一为 2px-4px solid black。交互必须有位移：active时 translate(4px, 4px) 并消除阴影。',
    ios: '不使用标准UIKit控件样式。自定义UIButton，绘制Layer边框。动画曲线使用线性(Linear)而非缓动。',
    android: '自定义Drawable XML背景。使用StateListAnimator实现按压位移效果。',
    mini: 'View组件设置 border: 2px solid black。点击态使用 hover-class 修改 transform。'
  },
  'cassette': {
    name: 'Cassette Futurism (磁带未来)',
    specs: {
      radius: '2px - 4px',
      shadow: 'Text-shadow: 0 0 5px [Color]',
      font: 'VT323 / OCR-A',
      colors: 'Black #0C0C0C, Amber #FF9900'
    },
    web: '使用CSS扫描线(Scanlines)遮罩。所有图片需做灰度或单色处理(CSS filter)。布局多用线条分割。',
    ios: '自定义字体是关键，需在Info.plist注册字体。界面尽量扁平，避免层级过深。',
    android: '使用Canvas绘制波形图动画。状态栏建议隐藏或沉浸式黑色。',
    mini: 'Canvas性能受限，扫描线建议用半透明PNG图片覆盖实现。'
  },
  'neu': {
      name: 'Neomorphism (新拟态)',
      specs: {
          radius: '12px - 20px',
          shadow: 'Double shadow (light & dark)',
          font: 'Nunito / Quicksand',
          colors: '#E0E5EC (Classic)'
      },
      web: '使用双层Box-shadow实现凸起和凹陷效果。注意对比度问题，重要操作需增加颜色区分。',
      ios: '复杂阴影可能导致列表滚动掉帧，建议仅在静态控制面板使用。',
      android: '不推荐使用Elevation，需自定义ShapeDrawable绘制多层阴影。',
      mini: '避免在复杂列表中使用，渲染压力较大。'
  },
  'frutiger': {
      name: 'Frutiger Aero (Y2K)',
      specs: {
          radius: '12px - 18px',
          shadow: 'Glossy gradients, reflections',
          font: 'Segoe UI / Frutiger',
          colors: 'Sky Blue, Grass Green'
      },
      web: '大量使用线性渐变和高光遮罩。图片素材需具备透明度和倒影。',
      ios: '复古风格，需使用大图标和拟真材质。',
      android: '使用GradientDrawable叠加多层实现高光。',
      mini: '图片资源较大，注意包体积优化。'
  },
  'dos': {
      name: 'DOS / Terminal',
      specs: {
          radius: '0px',
          shadow: 'None',
          font: 'VT323 / Consolas',
          colors: 'Black Bg, Green/White Text'
      },
      web: '纯色背景，闪烁光标动画。所有输入框去除默认样式。',
      ios: '隐藏状态栏，全屏黑色。',
      android: '使用Monospace字体。',
      mini: '适合极客风工具类小程序。'
  },
  'win95': {
      name: 'Retro OS (Win95)',
      specs: {
          radius: '0px',
          shadow: 'Bevel emboss (Light top/left, Dark bot/right)',
          font: 'MS Sans Serif / Pixel',
          colors: '#C0C0C0 (Gray)'
      },
      web: '经典的3D边框效果通过border实现。',
      ios: '非原生体验，需全套自定义组件。',
      android: '自定义View绘制边框。',
      mini: '非常适合复古游戏或趣味应用。'
  },
  // --- New Styles ---
  'natural': {
      name: 'Natural / Native (自然原生)',
      specs: {
          radius: 'Variable / Organic',
          shadow: 'Soft diffusion',
          font: 'Serif / Handwritten',
          colors: 'Earth Tones (#8B4513, #556B2F)'
      },
      web: '使用纹理背景(如纸张、布料)。色彩取自大自然。减少直线，多用曲线。',
      ios: '使用暖色调和圆润的图标。避免冷冰冰的科技蓝。',
      android: 'Material You的动态取色非常适合此风格，提取壁纸中的自然色。',
      mini: '适合露营、茶叶、手作类电商小程序。'
  },
  'personal': {
      name: 'Extreme Personal (极致个性)',
      specs: {
          radius: 'Random / Sketchy',
          shadow: 'Hard Scribble',
          font: 'Custom Handwriting',
          colors: 'Clashing / Marker Colors'
      },
      web: '打破常规布局，使用absolute定位创造重叠感。手写SVG路径作为装饰。',
      ios: '尽量减少系统原生控件的使用，按钮和弹窗全部自定义手绘风格。',
      android: '使用VectorDrawable绘制不规则形状的背景。',
      mini: '强调IP形象，每一个角落都充满作者的“私货”。'
  },
  'tactile': {
      name: 'Tactile Handmade (触感手工)',
      specs: {
          radius: 'Rough Edges',
          shadow: 'Emboss / Deboss / Stitching',
          font: 'Typewriter / Stamp',
          colors: 'Kraft Paper, Denim'
      },
      web: '使用CSS border-image或dashed border模拟缝线。增加噪点(Noise)纹理。',
      ios: '拟物化的回归，但更强调布料、皮革的粗糙质感而非光泽。',
      android: '通过TileMode重复材质纹理。',
      mini: '适合文创、DIY社区。'
  },
  'digicute': {
      name: 'Digital Cute (数字萌系)',
      specs: {
          radius: 'Full Pill (999px)',
          shadow: 'Soft Pastel Glow',
          font: 'Rounded Sans / Pixel Hybrid',
          colors: 'Pastel Pink, Cyan, Yellow'
      },
      web: '大量使用圆角。色彩甜美高亮。结合像素图标和矢量圆润图形。',
      ios: '图标风格要软萌，动效要Q弹(Spring Animation)。',
      android: '界面留白要多，文字颜色不要纯黑，用深灰或深蓝。',
      mini: '二次元、宠物、盲盒类应用首选。'
  },
  'microind': {
      name: 'Micro Industrial (微型工业)',
      specs: {
          radius: '2px - 6px (Precise)',
          shadow: 'Metallic sheen',
          font: 'DIN / Technical',
          colors: 'Silver, Steel Blue, Warning Orange'
      },
      web: '细边框(1px)。刻度线装饰。带有金属拉丝质感的渐变背景。',
      ios: '强调数据的展示，排版紧凑有序。',
      android: '冷色调为主，高亮色用于警示或关键数据。',
      mini: '适合硬件控制、数据监控类工具。'
  },
  'snapshot': {
      name: 'Life Snapshot (生活快照)',
      specs: {
          radius: '0px (Photo) / 8px (Container)',
          shadow: 'Realistic Photo Shadow',
          font: 'Humanist Sans',
          colors: 'White Frame, Vivid Content'
      },
      web: '模拟拍立得效果：白边框+底部阴影。图片不一定要正，可以微旋转。',
      ios: '相册流布局。过渡动画使用放大缩小，模拟查看照片的过程。',
      android: '沉浸式图片浏览。',
      mini: '社交分享、旅行记录类。'
  },
  'blooming': {
      name: 'Blooming (绚烂繁盛)',
      specs: {
          radius: 'Organic Curves',
          shadow: 'Colorful Blur',
          font: 'Bold Serif',
          colors: 'High Saturation Multi-color'
      },
      web: '大胆使用高饱和度背景或满版图案。元素层叠丰富，不留过多白。',
      ios: '导航栏和Tab栏可以半透明透出底部繁复的背景。',
      android: '使用Palette API从图片中提取鲜艳色彩应用到UI控件。',
      mini: '节日营销、美妆、时尚杂志类。'
  },
  'distorted': {
      name: 'Distorted / Cut (扭曲切割)',
      specs: {
          radius: '0px / Polygon',
          shadow: 'Glitch / Slice',
          font: 'Stretched / Oblique',
          colors: 'Black, White, Neon Red'
      },
      web: '使用clip-path切割容器。CSS transform: skew() 制造扭曲感。',
      ios: '转场动画可以使用错位或切割效果。',
      android: '自定义View path实现非矩形布局。',
      mini: '潮牌、滑板、极限运动类。'
  },
  'neondark': {
      name: 'Neon Dark (霓虹暗黑)',
      specs: {
          radius: '8px - 16px',
          shadow: 'Neon Glow (Box-shadow spread)',
          font: 'Modern Sans',
          colors: 'Dark Grey (#121212) + Neon'
      },
      web: '深色模式基底。关键元素通过box-shadow产生发光效果。',
      ios: '利用OLED屏幕特性，纯黑背景省电且对比度高。',
      android: '暗黑模式适配。发光颜色可以根据内容动态变化。',
      mini: '夜间娱乐、酒吧预订、游戏社区。'
  },
  'freshretro': {
      name: 'Fresh Retro (清新复古)',
      specs: {
          radius: '12px',
          shadow: 'Glassy / Water Drop',
          font: 'Rounded Serif',
          colors: 'Mint, Aqua, White'
      },
      web: '00年代初的拟物风格的轻量化回归。通透的按钮，水滴质感。',
      ios: '图标具有体积感但不过于厚重。',
      android: '清爽、干净，避免过多的装饰线，用光影塑造体积。',
      mini: '健康管理、纯净水、护肤品。'
  }
};

// Helper for default PRD data
export const getPrdData = (id: string): PrdData => {
  if (PRD_DATA[id]) return PRD_DATA[id];
  const title = STYLE_ITEMS.find(s => s.id === id)?.title || 'Unknown Style';
  return {
    name: title,
    specs: {
      radius: 'Varies',
      shadow: 'Standard',
      font: 'System Default',
      colors: 'Brand Colors'
    },
    web: `Standard implementation for ${title}. Focus on semantic HTML and responsive CSS.`,
    ios: 'Use standard UIKit/SwiftUI components with custom branding.',
    android: 'Material Design implementation guidelines apply.',
    mini: 'Standard view/flex layout implementation.'
  };
};

// ==========================================
// Style Items List - Sorted by Tier then Custom
// ==========================================

const RAW_STYLES: Omit<StyleItem, 'title'>[] = [
  // --- NEW 2026 TRENDS (T0++) ---
  {
      id: 'neuro-morphic',
      tier: 'T0',
      tierColorClass: 'bg-emerald-50 text-teal-600 ring-2 ring-emerald-200',
      description: '2026趋势: 神经拟态。生物反馈，呼吸感，有机流体形态。',
      application: '应用: 脑机接口, 冥想疗愈, 次世代健康管理。',
      hasCustomRender: true
  },
  {
      id: 'quantum-glass',
      tier: 'T0',
      tierColorClass: 'bg-black text-fuchsia-400 ring-2 ring-cyan-500',
      description: '2026趋势: 量子玻璃。色散折射，次表面散射，物理级光学。',
      application: '应用: 顶级 AI 平台, 空间计算 OS, 奢侈品数字展厅。',
      hasCustomRender: true
  },
  {
      id: 'ambient-aura',
      tier: 'T0',
      tierColorClass: 'bg-amber-50 text-amber-700 ring-2 ring-amber-200',
      description: '2026趋势: 环境氛围。去边框化，光影数据化，极致融合。',
      application: '应用: 智能家居中枢, 沉浸式阅读, 氛围音乐 App。',
      hasCustomRender: true
  },
  {
      id: 'hyper-brutalism',
      tier: 'T0',
      tierColorClass: 'bg-pink-500 text-black ring-2 ring-black',
      description: '2026趋势: 超粗野主义。3D 物理块，破坏性排版，高能交互。',
      application: '应用: 独立游戏, 潮流电商, 青年文化社区。',
      hasCustomRender: true
  },
  // --- NEW 2026 TRENDS (T0++) BATCH 2 ---
  {
      id: 'copilot-ai',
      tier: 'T0',
      tierColorClass: 'bg-violet-100 text-violet-800 ring-2 ring-violet-300',
      description: '2026趋势: AI副驾驶。流式思维链，智能体状态，自主执行面板。',
      application: '应用: AI 编程助手, Copilot UI, 智能体工作流。',
      hasCustomRender: true
  },
  {
      id: 'zero-ui',
      tier: 'T0',
      tierColorClass: 'bg-gray-50 text-gray-500 ring-2 ring-gray-200',
      description: '2026趋势: 零界面。环境计算，上下文感知，隐身式交互。',
      application: '应用: IoT 中枢, 智慧空间, 无感支付。',
      hasCustomRender: true
  },
  {
      id: 'data-ink',
      tier: 'T0',
      tierColorClass: 'bg-white text-gray-800 ring-2 ring-gray-300',
      description: '2026趋势: 数据墨水。Tufte极简哲学，最大化数据-墨水比，信息密度。',
      application: '应用: 金融终端, 科研仪表板, 彭博风格。',
      hasCustomRender: true
  },
  {
      id: 'emotion-adaptive',
      tier: 'T0',
      tierColorClass: 'bg-gradient-to-r from-rose-100 to-sky-100 text-gray-700 ring-2 ring-rose-200',
      description: '2026趋势: 情绪自适应。交互感知，色温渐变，脉搏反馈。',
      application: '应用: 心理健康, 情绪日记, 治愈系社交。',
      hasCustomRender: true
  },
  {
      id: 'agentic-os',
      tier: 'T0',
      tierColorClass: 'bg-zinc-900 text-emerald-400 ring-2 ring-emerald-500',
      description: '2026趋势: 智能体OS。多Agent编排，任务流可视化，自主执行。',
      application: '应用: AI 操作系统, 自动化平台, 企业级Agent。',
      hasCustomRender: true
  },
  {
      id: 'wabi-sabi',
      tier: 'T0',
      tierColorClass: 'bg-stone-100 text-stone-600 ring-2 ring-stone-300',
      description: '2026趋势: 数字侘寂。不完美之美，自然衰变纹理，极致克制。',
      application: '应用: 茶道, 冥想空间, 设计师博客, 美学社区。',
      hasCustomRender: true
  },
  // --- NEW 2025 TRENDS (T0+) ---
  {
      id: 'chromium',
      tier: 'T0',
      tierColorClass: 'bg-gradient-to-r from-gray-200 to-gray-400 text-black border border-gray-300',
      description: '2025趋势: 液态金属，反射材质，哥特未来主义 (Gothic Futurism)。',
      application: '应用: 3D 艺术家, 潮流品牌, Web3 官网。',
      hasCustomRender: true
  },
  {
      id: 'kinetic',
      tier: 'T0',
      tierColorClass: 'bg-black text-lime-400 ring-2 ring-lime-400',
      description: '2025趋势: 文字即图像。极端拉伸，可变字体，物理动势。',
      application: '应用: 创意工作室, 电影宣发, 音乐节。',
      hasCustomRender: true
  },
  {
      id: 'dreamcore',
      tier: 'T0',
      tierColorClass: 'bg-sky-200 text-blue-600 ring-2 ring-white',
      description: '2025趋势: 梦核 (Dreamcore) 与 Frutiger Aero 的超现实变体。',
      application: '应用: Z世代社区, 音乐专辑, 视觉艺术。',
      hasCustomRender: true
  },
  {
      id: 'spatial',
      tier: 'T0',
      tierColorClass: 'bg-zinc-900 text-zinc-100 ring-2 ring-zinc-700',
      description: '2025趋势: 空间计算。光照追踪，深度感，聚光灯效果。',
      application: '应用: 高级 SaaS, AI 界面, Linear-like。',
      hasCustomRender: true
  },
  {
      id: 'holographic',
      tier: 'T0',
      tierColorClass: 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white',
      description: '2025趋势: 物理镭射质感，流动的光谱与噪点。',
      application: '应用: NFT 平台, 时尚杂志, 创意作品集。',
      hasCustomRender: true
  },
  {
      id: 'dither',
      tier: 'T0',
      tierColorClass: 'bg-gray-800 text-gray-200 border border-gray-600',
      description: '2025趋势: 抖动朋克。1-bit 低保真美学，技术复古主义。',
      application: '应用: 独立游戏, 极客博客, 开发者工具。',
      hasCustomRender: true
  },
  {
      id: 'risograph',
      tier: 'T0',
      tierColorClass: 'bg-pink-100 text-pink-600 border border-blue-300',
      description: '2025趋势: 孔版印刷。油墨错位，色彩叠加，纸质温暖感。',
      application: '应用: 艺术展览, 独立刊物, 品牌设计。',
      hasCustomRender: true
  },
  {
      id: 'ethereal',
      tier: 'T0',
      tierColorClass: 'bg-white text-gray-400 border border-yellow-100',
      description: '2025趋势: 以太光晕。过度曝光，极致柔和，神圣的失重感。',
      application: '应用: 冥想, 心理健康, 高端护肤。',
      hasCustomRender: true
  },

  // --- T0 Styles (Existing) ---
  {
      id: 'anthropic-serif',
      tier: 'T0',
      tierColorClass: 'bg-[#EAE0D5] text-[#333333] ring-2 ring-[#D9D2C5]',
      description: '特点: 人文智性，暖色调衬线体，如同一本会呼吸的杂志。',
      application: '应用: 知识库, 深度阅读, 智力型 AI 助手。',
      hasCustomRender: true
  },
  {
      id: 'ai-abstract',
      tier: 'T0',
      tierColorClass: 'bg-indigo-900 text-cyan-300 ring-2 ring-cyan-500',
      description: '特点: 可视化神经网络，潜空间波动，突触激活，粒子流。',
      application: '应用: AI核心引擎, 深度学习可视化, 高维数据面板。',
      hasCustomRender: true
  },
  {
      id: 'blueprint-cad',
      tier: 'T0',
      tierColorClass: 'bg-blue-900 text-white ring-2 ring-blue-500',
      description: '特点: ISO工程标准，无限十字准星，动态测量，参数吸附。',
      application: '应用: 工业软件, 建筑CAD, 精密仪器控制。',
      hasCustomRender: true
  },
  {
      id: 'liquid-glass',
      tier: 'T0',
      tierColorClass: 'bg-blue-100 text-blue-900 ring-2 ring-blue-300',
      description: '特点: 空间计算基础，光学畸变，焦散，动态流体。',
      application: '应用: 空间计算OS, 高级视觉界面。',
      hasCustomRender: true
  },
  {
      id: 'skeuo-nature',
      tier: 'T0',
      tierColorClass: 'bg-green-100 text-green-900 ring-2 ring-green-300',
      description: '特点: 生物亲和性，真实木纹/植物，数字疗愈。',
      application: '应用: 冥想, 环保, 健康管理。',
      hasCustomRender: true
  },
  {
      id: 'skeuo-stone',
      tier: 'T0',
      tierColorClass: 'bg-gray-200 text-gray-800 ring-2 ring-gray-400',
      description: '特点: 大理石/金属，沉重阻尼感，信任与安全。',
      application: '应用: 加密货币, 银行, 保险箱。',
      hasCustomRender: true
  },
  {
      id: '3d-interactive',
      tier: 'T0',
      tierColorClass: 'bg-indigo-100 text-indigo-900 ring-2 ring-indigo-300',
      description: '特点: Z轴功能化，微交互立体化，实时光照。',
      application: '应用: 电商展示, 游戏化UI, 创意工具。',
      hasCustomRender: true
  },
  {
      id: 'aurora-mesh',
      tier: 'T0',
      tierColorClass: 'bg-purple-100 text-purple-900 ring-2 ring-purple-300',
      description: '特点: 视觉白噪音，流体色彩，非侵入式引导。',
      application: '应用: 支付背景, 品牌识别, 沉浸式阅读。',
      hasCustomRender: true
  },
  {
      id: 'atomic-age',
      tier: 'T0',
      tierColorClass: 'bg-teal-100 text-teal-900 ring-2 ring-teal-300',
      description: '特点: 科技乐观主义，星爆图标，流线型，撞色。',
      application: '应用: AI初创, 创新工具, 营销活动。',
      hasCustomRender: true
  },
  {
      id: 'jetsons',
      tier: 'T0',
      tierColorClass: 'bg-sky-100 text-sky-900 ring-2 ring-sky-300',
      description: '特点: Googie建筑风格，悬浮玻璃圆顶，自动化隐喻。',
      application: '应用: 智能家居, 自动化控制, 未来生活。',
      hasCustomRender: true
  },
  {
      id: 'solarpunk-utopia',
      tier: 'T0',
      tierColorClass: 'bg-yellow-100 text-yellow-900 ring-2 ring-yellow-300',
      description: '特点: 新艺术曲线，自然光温，慢技术，社区感。',
      application: '应用: 公益, 社区, 可持续发展。',
      hasCustomRender: true
  },
  {
      id: 'brutal-bw',
      tier: 'T0',
      tierColorClass: 'bg-black text-white ring-2 ring-gray-500',
      description: '特点: 纯黑白，去装饰，反UX，赤裸真相。',
      application: '应用: 新闻, 黑客工具, 深度内容。',
      hasCustomRender: true
  },
  {
      id: 'gen-ui',
      tier: 'T0',
      tierColorClass: 'bg-rose-100 text-rose-900 ring-2 ring-rose-300',
      description: '特点: 实时布局重组，意图驱动生成，情绪感知。',
      application: '应用: 下一代OS, 智能助手, 无障碍适配。',
      hasCustomRender: true
  },
  {
    id: 'bento',
    tier: 'T0',
    tierColorClass: 'bg-black text-white',
    description: '特点: 高度模块化，大圆角(20px+)，信息层级清晰。',
    application: '应用: iOS系统, Linear, 仪表盘后台。',
    hasCustomRender: true
  },
  {
      id: 'material',
      tier: 'T0',
      tierColorClass: 'bg-purple-50 text-purple-600',
      description: '特点: 动态取色，超大圆角，波纹反馈。',
      application: '应用: Android原生应用, Google生态。',
      hasCustomRender: true
  },
  {
      id: 'minimal',
      tier: 'T0',
      tierColorClass: 'bg-gray-100 text-gray-800',
      description: '特点: 极致留白，黑白主色，强调字体排印。',
      application: '应用: 奢侈品官网, 建筑事务所, 高端博客。',
      hasCustomRender: true
  },

  // --- T1 Styles ---
  {
    id: 'glass',
    tier: 'T1',
    tierColorClass: 'bg-blue-600 text-white',
    description: '特点: 背景模糊(Blur)，半透明白，白色细边框。',
    application: '应用: Vision OS, Windows 11, 银行卡展示。',
    hasCustomRender: true
  },
  {
    id: 'brutal',
    tier: 'T1',
    tierColorClass: 'bg-yellow-400 border border-black text-black',
    description: '特点: 高饱和撞色，粗黑边框，硬阴影，无衬线。',
    application: '应用: Gumroad, Figma, 潮牌电商。',
    hasCustomRender: true
  },
  {
      id: 'acid',
      tier: 'T1',
      tierColorClass: 'bg-black text-lime-400',
      description: '特点: 液态金属，哥特字体，极度反差，无视网格。',
      application: '应用: 地下音乐, 独立杂志, 先锋艺术展。',
      hasCustomRender: true
  },
  {
      id: 'aurora',
      tier: 'T1',
      tierColorClass: 'bg-indigo-100 text-indigo-600',
      description: '特点: 高斯模糊色块，梦幻渐变，干净无框。',
      application: '应用: Stripe风格官网, 科技营销页, 冥想。',
      hasCustomRender: true
  },
  {
      id: 'memphis',
      tier: 'T1',
      tierColorClass: 'bg-purple-100 text-purple-800',
      description: '特点: 几何矢量插画，高饱和色，大厂插画风。',
      application: '应用: Notion, Slack, Google, SaaS落地页。',
      hasCustomRender: true
  },
  {
      id: 'natural',
      tier: 'T1',
      tierColorClass: 'bg-green-700 text-white',
      description: '特点: 大地棕/草木绿，手工松弛感，回归土地。',
      application: '应用: 自然品牌，露营，茶叶。',
      hasCustomRender: true
  },
  {
      id: 'personal',
      tier: 'T1',
      tierColorClass: 'bg-yellow-300 text-black border border-black',
      description: '特点: 打破模板，手写字体，专属插画，创作者印记。',
      application: '应用: 个人博客，设计师作品集，独立品牌。',
      hasCustomRender: true
  },
  {
      id: 'tactile',
      tier: 'T1',
      tierColorClass: 'bg-orange-200 text-orange-900',
      description: '特点: 粗糙材质，针织纹路，手工剪裁毛边。',
      application: '应用: 文创，手工艺，纺织品电商。',
      hasCustomRender: true
  },
  {
      id: 'digicute',
      tier: 'T1',
      tierColorClass: 'bg-pink-300 text-white',
      description: '特点: 像素，马卡龙渐变，软萌元素，甜而不腻。',
      application: '应用: 宠物APP，盲盒，二次元社区。',
      hasCustomRender: true
  },
  {
      id: 'microind',
      tier: 'T1',
      tierColorClass: 'bg-slate-300 text-slate-800',
      description: '特点: 齿轮螺栓，银灰冷蓝，细线条，严谨细节。',
      application: '应用: 硬件管理，精密仪器，极客工具。',
      hasCustomRender: true
  },
  {
      id: 'snapshot',
      tier: 'T1',
      tierColorClass: 'bg-white border border-gray-300 text-gray-800',
      description: '特点: 颗粒感，不规则构图，未经修饰的烟火气。',
      application: '应用: 社交分享，相册，生活Vlog。',
      hasCustomRender: true
  },
  {
      id: 'blooming',
      tier: 'T1',
      tierColorClass: 'bg-rose-500 text-white',
      description: '特点: 超饱和色彩，层叠花瓣，密集不杂乱，视觉冲击。',
      application: '应用: 节日营销，时尚美妆，艺术展。',
      hasCustomRender: true
  },
  {
      id: 'distorted',
      tier: 'T1',
      tierColorClass: 'bg-black text-white italic',
      description: '特点: 不规则切割，扭曲图形，错位文字，叛逆态度。',
      application: '应用: 潮牌，滑板，地下音乐。',
      hasCustomRender: true
  },
  {
      id: 'neondark',
      tier: 'T1',
      tierColorClass: 'bg-gray-900 text-purple-400 border border-purple-400',
      description: '特点: 深色背景，荧光粉/电光蓝点缀，神秘高级。',
      application: '应用: 夜店预订，游戏社区，科技发布。',
      hasCustomRender: true
  },
  {
      id: 'freshretro',
      tier: 'T1',
      tierColorClass: 'bg-teal-100 text-teal-800',
      description: '特点: 00年代通透感，渐变玻璃，圆润字体，柔和治愈。',
      application: '应用: 纯净水，健康管理，复古相册。',
      hasCustomRender: true
  },

  // --- T2 Styles ---
  {
    id: 'cassette',
    tier: 'T2',
    tierColorClass: 'bg-orange-100 text-orange-800',
    description: '特点: CRT扫描线，橙/绿单色，等宽字体。',
    application: '应用: 赛博朋克游戏UI, 复古科技工具。',
    hasCustomRender: true
  },
  {
    id: 'neu',
    tier: 'T2',
    tierColorClass: 'bg-gray-200 text-gray-600',
    description: '特点: 同色系浮雕，柔和光影，物理触感。',
    application: '应用: 智能家居控制面板, 极简工具类。',
    hasCustomRender: true
  },
  {
    id: 'frutiger',
    tier: 'T2',
    tierColorClass: 'bg-cyan-100 text-cyan-800',
    description: '特点: 水晶质感，高光，自然元素(水/草)。',
    application: '应用: Windows Vista复古主题, 环保应用。',
    hasCustomRender: true
  },
  {
      id: 'clay',
      tier: 'T2',
      tierColorClass: 'bg-pink-100 text-pink-800',
      description: '特点: 充气感，悬浮，内阴影，圆润可爱。',
      application: '应用: Web3, NFT市场, 儿童教育APP。',
      hasCustomRender: true
  },
  {
      id: 'pixel',
      tier: 'T2',
      tierColorClass: 'bg-purple-100 text-purple-800',
      description: '特点: 锯齿感，8-bit音效感，鲜艳色块。',
      application: '应用: 独立游戏官网, 游戏化营销H5。',
      hasCustomRender: true
  },
  {
      id: 'cyber',
      tier: 'T2',
      tierColorClass: 'bg-gray-800 text-pink-500 border border-pink-500',
      description: '特点: 霓虹光效，故障艺术(Glitch)，黑底高反差。',
      application: '应用: 电竞网站, 加密货币, 科技发布会。',
      hasCustomRender: true
  },
  {
      id: 'solar',
      tier: 'T2',
      tierColorClass: 'bg-green-100 text-green-800',
      description: '特点: 奶油色底，绿色点缀，新艺术运动线条。',
      application: '应用: 环保公益, 农业科技, 可持续品牌。',
      hasCustomRender: true
  },

  // --- T3 Styles ---
  {
      id: 'skeuo',
      tier: 'T3',
      tierColorClass: 'bg-amber-100 text-amber-800',
      description: '特点: 模拟皮革/金属/木纹，真实投影。',
      application: '应用: 专业音频软件, 电子书架, 复古计算器。',
      hasCustomRender: true
  },
  {
      id: 'bauhaus',
      tier: 'T3',
      tierColorClass: 'bg-red-100 text-red-800',
      description: '特点: 红黄蓝三原色，几何图形，倾斜排版。',
      application: '应用: 艺术博物馆, 设计展览, 创意海报。',
      hasCustomRender: true
  },
  {
      id: 'dos',
      tier: 'T3',
      tierColorClass: 'bg-blue-900 text-white',
      description: '特点: 纯代码界面，黑底绿字/蓝底白字。',
      application: '应用: 开发者工具, 黑客主题, 极客博客。',
      hasCustomRender: true
  },
  {
      id: 'doodle',
      tier: 'T3',
      tierColorClass: 'bg-yellow-50 text-yellow-700',
      description: '特点: 粗线条边框，手写字体，不规则图形。',
      application: '应用: 协作白板(Miro), 创意工具, 笔记App。',
      hasCustomRender: true
  },
  {
      id: 'paper',
      tier: 'T3',
      tierColorClass: 'bg-orange-50 text-orange-600',
      description: '特点: 纸质纹理，层叠阴影，撕边效果。',
      application: '应用: 创意广告, 绘本App, 手工艺社区。',
      hasCustomRender: true
  },
  {
      id: 'win95',
      tier: 'T3',
      tierColorClass: 'bg-gray-400 text-white',
      description: '特点: 灰色倒角边框，像素图标，蓝屏背景。',
      application: '应用: 怀旧主题站, 个人作品集, 蒸汽波。',
      hasCustomRender: true
  },
  {
      id: 'vapor',
      tier: 'T3',
      tierColorClass: 'bg-pink-200 text-pink-700',
      description: '特点: 粉紫渐变，石膏像，故障风，80年代。',
      application: '应用: 音乐播放器, 潮流服饰, 艺术实验。',
      hasCustomRender: true
  },
  {
      id: 'swiss',
      tier: 'T3',
      tierColorClass: 'bg-red-600 text-white',
      description: '特点: 严格网格，无衬线字体，非对称布局。',
      application: '应用: 杂志排版, 建筑网站, 出版物。',
      hasCustomRender: true
  },
  {
      id: 'blueprint',
      tier: 'T3',
      tierColorClass: 'bg-blue-900 text-white',
      description: '特点: 深蓝底色，细白线，测量标注，工程感。',
      application: '应用: 建筑施工APP, 机械制造后台, 原型图。',
      hasCustomRender: true
  },
  {
      id: 'gothic',
      tier: 'T3',
      tierColorClass: 'bg-red-900 text-white',
      description: '特点: 石质/金属纹理，暗红/金色，衬线字。',
      application: '应用: RPG游戏界面, 奇幻文学站, 塔罗牌。',
      hasCustomRender: true
  }
];

// Helper to extract base name from ID for display
const getDisplayName = (id: string, description: string) => {
    // Mapping for new and existing styles
    const names: Record<string, string> = {
        'neuro-morphic': 'Neuro-morphic (神经拟态)',
        'quantum-glass': 'Quantum Glass (量子玻璃)',
        'ambient-aura': 'Ambient Aura (环境氛围)',
        'hyper-brutalism': 'Hyper-Brutalism (超粗野主义)',
        'copilot-ai': 'Copilot AI (AI副驾驶)',
        'zero-ui': 'Zero UI (零界面)',
        'data-ink': 'Data Ink (数据墨水)',
        'emotion-adaptive': 'Emotion Adaptive (情绪自适应)',
        'agentic-os': 'Agentic OS (智能体OS)',
        'wabi-sabi': 'Wabi-Sabi Digital (数字侘寂)',
        'chromium': 'Chromium Liquid (液态铬金)',
        'kinetic': 'Kinetic Type (动势排印)',
        'dreamcore': 'Dreamcore Aero (梦核航空)',
        'spatial': 'Spatial Bento (空间便当)',
        'holographic': 'Holographic Foil (全息镭射)',
        'dither': 'Dither Punk (抖动朋克)',
        'risograph': 'Risograph (孔版印刷)',
        'ethereal': 'Ethereal Glow (以太光晕)',
        'anthropic-serif': 'Anthropic Serif (人文智性)',
        'ai-abstract': 'AI Abstract (智构抽象)',
        'blueprint-cad': 'Blueprint CAD (工程蓝图)',
        'liquid-glass': 'Liquid Glass (液态玻璃)',
        'skeuo-nature': 'Neo-Skeuo: Nature (自然复兴)',
        'skeuo-stone': 'Neo-Skeuo: Stone (金融基石)',
        '3d-interactive': 'Interactive 3D (全维空间)',
        'aurora-mesh': 'Aurora Mesh (极光渐变)',
        'atomic-age': 'Atomic Age (原子时代)',
        'jetsons': 'The Jetsons (杰森一家)',
        'solarpunk-utopia': 'Solarpunk Utopia (太阳朋克)',
        'brutal-bw': 'Dystopian Brutalism (反乌托邦)',
        'gen-ui': 'Hyper-personalization (超个性化)',
        'bento': 'Bento Grid (便当盒)',
        'material': 'Material You',
        'minimal': 'Minimalism (极简)',
        'glass': 'Glassmorphism (毛玻璃)',
        'brutal': 'Neo-Brutalism (野兽派)',
        'acid': 'Acid (酸性)',
        'aurora': 'Aurora (弥散)',
        'memphis': 'Memphis (扁平)',
        'natural': 'Natural Native (自然原生)',
        'personal': 'Extreme Personal (极致个性)',
        'tactile': 'Tactile Handmade (触感手工)',
        'digicute': 'Digital Cute (数字萌系)',
        'microind': 'Micro Industrial (微型工业)',
        'snapshot': 'Life Snapshot (生活快照)',
        'blooming': 'Blooming (绚烂繁盛)',
        'distorted': 'Distorted Cut (扭曲切割)',
        'neondark': 'Neon Dark (霓虹暗黑)',
        'freshretro': 'Fresh Retro (清新复古)',
        'cassette': 'Cassette Futurism (磁带)',
        'neu': 'Neomorphism (新拟态)',
        'frutiger': 'Frutiger Aero (Y2K)',
        'clay': 'Claymorphism (黏土)',
        'pixel': 'Pixel Art (像素)',
        'cyber': 'Cyberpunk (赛博)',
        'solar': 'Solarpunk (太阳)',
        'skeuo': 'Skeuomorphism (拟物)',
        'bauhaus': 'Bauhaus (包豪斯)',
        'dos': 'DOS / Terminal',
        'doodle': 'Doodle (手绘)',
        'paper': 'Papercraft (剪纸)',
        'win95': 'Retro OS (Win95)',
        'vapor': 'Vaporwave (蒸汽波)',
        'swiss': 'Swiss (瑞士国际)',
        'blueprint': 'Blueprint (蓝图)',
        'gothic': 'Gothic (暗黑)'
    };
    return names[id] || id;
};

export const STYLE_ITEMS: StyleItem[] = RAW_STYLES.map((style, index) => ({
    ...style,
    title: `${index + 1}. ${getDisplayName(style.id, style.description)}`
}));