export type IconKey =
  | "care"
  | "layers"
  | "bowl"
  | "shield"
  | "signal"
  | "people"
  | "home"
  | "mind"
  | "recovery"
  | "community"
  | "hospital"
  | "route"
  | "market"
  | "leaf"
  | "call"
  | "record"
  | "family"
  | "trace";

export type ServicePlan = {
  title: string;
  audience: string;
  services: string;
  feature: string;
  icon: IconKey;
};

export type CardItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export const siteConfig = {
  name: "香橼果养老院",
  subtitle: "宛美养老 · 医养康养生活共同体",
  heroStatement: "让长者被认真照护，让家人放心托付。",
  projectStatus: "项目筹建中 · 开放合作与意向咨询",
  addressIsFinal: false,
  addressLabel: "河南省南阳市中心城区",
  province: "河南省",
  city: "南阳市",
  districtCandidates: [
    "宛城区主城区",
    "卧龙区主城区",
    "高铁片区衔接区域",
    "主干交通廊道相衔接的医养资源集聚区域",
  ],
  fullAddress: "",
  latitude: null as number | null,
  longitude: null as number | null,
  mapEmbedUrl: "",
  navigationUrl: "",
  phone: "",
  wechat: "",
  email: "",
  consultationHours: "",
  seo: {
    siteUrl: "https://xiangyuanguo-care-home.netlify.app",
    title: "香橼果养老院 | 宛美养老 · 医养康养生活共同体",
    description:
      "香橼果养老院筹建期宣传站，面向南阳市中心城区展示医养协同、分层照护、食养生活、适老空间、智慧养老和意向咨询规划。",
    ogImage: "/og-placeholder.svg",
    locale: "zh_CN",
  },
  navItems: [
    { label: "首页", href: "#home" },
    { label: "品牌故事", href: "#story" },
    { label: "服务体系", href: "#services" },
    { label: "核心优势", href: "#advantages" },
    { label: "拟选区位", href: "#location" },
    { label: "智慧养老", href: "#smart-care" },
    { label: "联系咨询", href: "#contact" },
  ],
  hero: {
    primaryCta: { label: "了解我们的规划", href: "#services" },
    secondaryCta: { label: "预约咨询", href: "#contact" },
    visualLabel: "温暖安静的适老生活规划插画",
    highlights: ["医养康养", "分层照护", "食养活动", "家属安心"],
  },
  story: {
    paragraphs: [
      "香橼果，取意于四季流转、长久相伴的生命意象。香橼果养老院希望为长者营造一处有温度、有照护、有陪伴的生活家园。",
      "这里不仅关注居住条件，也重视健康管理、营养膳食、生活尊严、兴趣社群和家人之间的安心连接。",
    ],
    value: "做家庭难以持续完成的专业服务，延续子女始终牵挂的孝心。",
  },
  planningPrinciples: [
    "以筹建规划为公开口径",
    "不公开未确认床位数与收费",
    "最终院址确认后再开放导航",
  ],
  advantages: [
    {
      title: "医养协同规划",
      description:
        "围绕健康管理、慢病管理、急救转诊、康复支持和日常照护建立协作体系。",
      icon: "care",
    },
    {
      title: "分层连续照护",
      description:
        "面向自理、半失能、失能、认知障碍、术后康复和短住喘息等不同需求，规划分层照护方案。",
      icon: "layers",
    },
    {
      title: "四季食养生活",
      description:
        "强调适老膳食、三餐两点、少量多样、软烂清淡、营养搭配和四季养生。",
      icon: "bowl",
    },
    {
      title: "适老安全空间",
      description:
        "关注无障碍动线、防滑防碰、明显标识、紧急呼叫、夜间照明和舒适公共空间。",
      icon: "shield",
    },
    {
      title: "智慧养老守护",
      description:
        "规划一键呼叫、跌倒预警、健康档案、家属端信息查看和照护服务留痕。",
      icon: "signal",
    },
    {
      title: "孝笑伴闹人文体系",
      description:
        "通过陪伴、兴趣社群、节日活动、阅读、棋牌、太极和八段锦等方式，让养老生活更有参与感和归属感。",
      icon: "people",
    },
  ] satisfies CardItem[],
  servicePlans: [
    {
      title: "自理与半失能长期照护",
      audience: "适合希望获得规律照料、营养膳食和社群陪伴的长者。",
      services: "拟设置生活照料、健康观察、餐饮营养、文娱活动和家属沟通机制。",
      feature: "规划以尊重生活习惯为基础，逐步建立照护等级评估和个案服务方案。",
      icon: "home",
    },
    {
      title: "失能与认知症专护",
      audience: "适合需要更高护理强度、风险管理和持续陪护的家庭。",
      services: "拟设置分区照护、夜间巡视、压疮与跌倒风险管理、用药提醒和照护记录。",
      feature: "筹建方向强调专业人员、适老空间和家属沟通共同支撑。",
      icon: "mind",
    },
    {
      title: "术后康复与短住喘息",
      audience: "适合术后恢复期、家庭照护暂时缺位或需要短期支持的长者。",
      services: "拟设置康复支持、生活照料、营养餐饮和阶段性照护计划。",
      feature: "规划以短住过渡、恢复支持和家庭照护衔接为重点。",
      icon: "recovery",
    },
    {
      title: "社区与居家延伸服务",
      audience: "适合周边社区中暂不入住、但需要助餐或照护支持的家庭。",
      services: "筹建方向包括助餐、助洁、助浴、上门康复和家庭照护培训等延伸服务。",
      feature: "第一版仅展示规划方向，实际服务范围以正式公告为准。",
      icon: "community",
    },
  ] satisfies ServicePlan[],
  location: {
    publicStatement:
      "拟优先考虑宛城区、卧龙区主城区，以及与医疗资源、高铁片区、主干交通廊道相衔接的医养资源集聚区域。",
    noteWhenPending: "拟选址展示，最终地址确认后开放导航",
  },
  locationAdvantages: [
    {
      title: "医疗协作便利",
      description: "优先关注周边医疗资源和急救转诊效率。",
      icon: "hospital",
    },
    {
      title: "家属探视便利",
      description: "兼顾中心城区交通可达性，方便家庭持续连接。",
      icon: "route",
    },
    {
      title: "生活配套成熟",
      description: "便于采购、招聘和社区服务延伸。",
      icon: "market",
    },
    {
      title: "环境舒适安静",
      description: "兼顾休养环境和户外活动空间。",
      icon: "leaf",
    },
  ] satisfies CardItem[],
  smartCare: [
    { title: "床旁一键呼叫", description: "规划配置便捷呼叫能力，提升日常响应效率。", icon: "call" },
    { title: "跌倒风险预警", description: "拟建设风险识别与提醒机制，服务安全管理。", icon: "shield" },
    { title: "健康数据记录", description: "规划记录基础健康信息，支持持续照护观察。", icon: "record" },
    { title: "电子照护档案", description: "拟建立服务档案，便于照护交接和复盘。", icon: "trace" },
    { title: "家属端信息查看", description: "规划让家属更透明地了解照护动态。", icon: "family" },
    { title: "照护流程留痕", description: "拟建设可追踪、可评价的服务闭环。", icon: "signal" },
  ] satisfies CardItem[],
  dining: {
    title: "食养规划",
    description:
      "围绕长者咀嚼、吞咽和慢病管理需求，规划清淡、柔软、少量多样的日常膳食。",
    items: ["三餐两点", "软、烂、淡", "蒸、煮、煲为主", "少量多样", "四季茶饮", "营养搭配"],
  },
  activities: {
    title: "人文活动",
    description:
      "用规律、轻量、可参与的活动安排，让长者在日常生活中保持连接、表达和归属感。",
    items: ["太极拳", "八段锦", "阅读", "棋牌", "手工", "生日会", "节日活动", "家属互动"],
  },
  contact: {
    title: "咨询登记",
    description:
      "项目处于筹建阶段，欢迎潜在入住家庭、合作机构和关心项目进展的人士留下咨询信息。",
    privacyText: "我已了解并同意仅用于本项目意向咨询联系，不作为正式入住或合作承诺。",
    successMessage: "已收到您的咨询信息。项目团队将在联系方式正式启用后尽快跟进。",
    errorMessage: "提交暂时未成功，请稍后重试，或等待正式联系方式公布后再咨询。",
    formName: "consultation",
  },
  footerNotice:
    "香橼果养老院目前处于筹建阶段。本页面用于展示项目规划方向，具体院址、服务内容、开放时间、收费标准及合作信息以正式公告和实际签约文件为准。",
};
