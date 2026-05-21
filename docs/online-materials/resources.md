# 延伸閱讀與參考資源 — 辦公室 AI Agent 實戰入門

> 以下資源按主題分類整理，建議依照個人興趣和學習進度挑選閱讀。

---

## 一、Hermes Agent 官方資源

### 官方文件

- **Hermes Agent Documentation**
  - 連結：[https://hermes-agent.nousresearch.com/](https://hermes-agent.nousresearch.com/)
  - 說明：Hermes Agent 的完整官方文件，包含安裝指南、API 參考、整合設定和進階功能說明。入門必讀的是 Getting Started 和 Core Concepts 兩個章節。

### GitHub 原始碼

- **Hermes Agent GitHub Repository**
  - 連結：[https://github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)
  - 說明：開源原始碼庫（MIT 授權），包含完整的原始碼、範例、Issue 追蹤和社群貢獻指南。建議至少閱讀 README.md 和 examples 資料夾中的範例。

### 社群討論

- **Nous Research Discord**
  - 連結：[https://discord.gg/nousresearch](https://discord.gg/nousresearch)
  - 說明：Hermes Agent 的主要社群討論平台，可以提問、分享使用經驗、了解最新開發進度。Discord 中的 `#hermes` 頻道是最活躍的討論區。

---

## 二、Harness Paradigm 相關文章

### 核心概念文章

- **Chapter 1: The Harness Paradigm — Claude Code**
  - 連結：[https://kenhuangus.substack.com/p/chapter-1-the-harness-paradigm-claude](https://kenhuangus.substack.com/p/chapter-1-the-harness-paradigm-claude)
  - 說明：深入解析 Harness Paradigm 的核心概念，說明「模型提供智慧，Harness 提供控制」的設計哲學。本課程第 3 堂「Harness 控管框架」的重要參考材料。

### 補充閱讀

- **Claude Code 官方文件**
  - 連結：[https://docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)
  - 說明：Anthropic 官方的 Claude Code 文件，展示了 Harness 架構在實際產品中的具體實作方式。其中 QueryEngine 的設計是課程中對比的案例之一。

- **OpenAI Function Calling 文件**
  - 連結：[https://platform.openai.com/docs/guides/function-calling](https://platform.openai.com/docs/guides/function-calling)
  - 說明：OpenAI 的工具使用（Tool Use）機制說明，有助於理解 Agent 如何與外部工具互動。

---

## 三、AI Agent 框架比較

### 主流框架

- **Hermes Agent vs 其他框架的定位差異**

  | 框架 | 定位 | 語言 | 授權 | 適合對象 |
  |------|------|------|------|----------|
  | **Hermes Agent** | 自學習 Agent 框架，跨平台 | Python | MIT | 想快速建置實用 Agent 的開發者 |
  | **LangChain / LangGraph** | 通用 LLM 應用開發框架 | Python / JS | MIT | 需要高度客製化 LLM 應用的開發者 |
  | **CrewAI** | 多 Agent 協作框架 | Python | MIT | 需要多角色 Agent 團隊協作的場景 |
  | **AutoGPT** | 自主 Agent 實驗 | Python | MIT | 想探索自主 Agent 能力邊界的實驗者 |

### 框架深入研究

- **LangChain 官方文件**
  - 連結：[https://python.langchain.com/](https://python.langchain.com/)
  - 說明：目前最廣泛使用的 LLM 應用開發框架，提供豐富的整合元件。適合課後想深入 Agent 開發的學員。

- **LangGraph 文件**
  - 連結：[https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)
  - 說明：LangChain 團隊推出的狀態圖框架，專門用於建構具有狀態管理的多步驟 Agent。

- **CrewAI GitHub**
  - 連結：[https://github.com/crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)
  - 說明：以角色為基礎的多 Agent 協作框架，適合模擬團隊合作的場景。

---

## 四、AI 模型基礎知識

### 入門介紹

- **3Blue1Brown — Neural Networks（YouTube）**
  - 連結：[https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
  - 說明：以精美動畫解釋類神經網路的基礎原理，適合視覺學習者。不需要數學背景也能理解。

- **Andrej Karpathy — Let's build GPT（YouTube）**
  - 連結：[https://www.youtube.com/watch?v=kCc8FmEb1nY](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - 說明：前 OpenAI 科學家 Karpathy 從零開始實作 GPT 的教學影片。適合想深入了解語言模型運作原理的學員。

### 模型概覽

- **OpenAI Models 文件**
  - 連結：[https://platform.openai.com/docs/models](https://platform.openai.com/docs/models)
  - 說明：OpenAI 各模型的官方說明，包含能力、價格和使用限制。

- **Anthropic Models 文件**
  - 連結：[https://docs.anthropic.com/en/docs/about-claude/models](https://docs.anthropic.com/en/docs/about-claude/models)
  - 說明：Claude 系列模型的官方說明。

- **Google Gemini 文件**
  - 連結：[https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs)
  - 說明：Google Gemini 系列模型的開發者文件。

### Token 與計費

- **OpenAI Tokenizer**
  - 連結：[https://platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)
  - 說明：互動式工具，可以輸入文字查看 Token 數量，幫助理解 API 計費方式。

---

## 五、社群與持續學習

### Reddit 社群

- **r/AI_Agents**
  - 連結：[https://www.reddit.com/r/AI_Agents/](https://www.reddit.com/r/AI_Agents/)
  - 說明：AI Agent 相關的討論社群，涵蓋各種框架、使用案例和產業動態。

- **r/LocalLLaMA**
  - 連結：[https://www.reddit.com/r/LocalLLaMA/](https://www.reddit.com/r/LocalLLaMA/)
  - 說明：聚焦在本地運行語言模型的社群，適合對模型部署感興趣的學員。

### YouTube 頻道

- **AI Jason**
  - 連結：[https://www.youtube.com/@AIJason](https://www.youtube.com/@AIJason)
  - 說明：中文 AI 應用教學頻道，內容涵蓋 Agent、自動化和 AI 工具介紹。

- **Matt Wolfe**
  - 連結：[https://www.youtube.com/@maboroshi](https://www.youtube.com/@maboroshi)
  - 說明：英文 AI 工具評測和新聞頻道，每週更新 AI 領域的重要發展。

- **AI Explained**
  - 連結：[https://www.youtube.com/@TheAIExplained](https://www.youtube.com/@TheAIExplained)
  - 說明：深入解析 AI 模型能力和新研究，適合想跟進最新發展的學員。

### 電子報 / Blog

- **The Batch (Andrew Ng)**
  - 連結：[https://www.deeplearning.ai/the-batch/](https://www.deeplearning.ai/the-batch/)
  - 說明：吳恩達 (Andrew Ng) 團隊發行的每週 AI 新聞摘要，簡潔實用。

- **Ben's Bites**
  - 連結：[https://bensbites.beehiiv.com/](https://bensbites.beehiiv.com/)
  - 說明：每日 AI 新聞和工具推薦，適合快速掌握產業動態。

---

## 六、進階主題

### Prompt Engineering

- **OpenAI Prompt Engineering Guide**
  - 連結：[https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)
  - 說明：OpenAI 官方的提示工程指南，提供撰寫有效提示詞的實用技巧。

- **Anthropic Prompt Engineering**
  - 連結：[https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
  - 說明：Anthropic 的提示工程文件，涵蓋 Claude 專用的最佳實踐。

### AI 安全與倫理

- **OWASP Top 10 for LLM Applications**
  - 連結：[https://owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  - 說明：針對大型語言模型應用的安全風險清單，適合想深入了解 AI 安全的學員。

- **NIST AI Risk Management Framework**
  - 連結：[https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)
  - 說明：美國國家標準與技術研究院的 AI 風險管理框架，提供系統化的 AI 風險評估方法。

---

## 建議閱讀順序

### 入門階段（課程進行中）

1. Hermes Agent 官方文件 Getting Started
2. Harness Paradigm 深度文章
3. OpenAI Tokenizer（理解計費）

### 深化階段（課後第 1–2 週）

1. Claude Code 官方文件（對比 Harness 實作）
2. OpenAI Function Calling 文件（理解工具使用）
3. 3Blue1Brown Neural Networks 影片（選讀）

### 進階階段（課後第 3–4 週）

1. LangChain 文件（探索其他框架）
2. Prompt Engineering 指南
3. OWASP LLM Top 10（安全意識）
