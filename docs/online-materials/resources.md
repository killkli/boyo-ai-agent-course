# 延伸閱讀與參考資源 — 辦公室 AI Agent 實戰入門

> 以下資源按主題分類整理，依照個人興趣和學習進度挑選閱讀即可。

---

## 一、Hermes Agent 官方資源

### 官方文件

- Hermes Agent Documentation
  - 連結：[https://hermes-agent.nousresearch.com/](https://hermes-agent.nousresearch.com/)
  - 說明：Hermes Agent 的完整官方文件，包含安裝指南、API 參考、整合設定和進階功能。入門建議先讀 Getting Started 和 Core Concepts。

### GitHub 原始碼

- Hermes Agent GitHub Repository
  - 連結：[https://github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)
  - 說明：開源原始碼庫（MIT 授權），包含原始碼、範例、Issue 追蹤和社群貢獻指南。建議至少看過 README.md 和 examples 資料夾。

### 社群討論

- Nous Research Discord
  - 連結：[https://discord.gg/nousresearch](https://discord.gg/nousresearch)
  - 說明：Hermes Agent 的主要社群討論平台，可以提問、分享使用經驗、追蹤最新開發進度。`#hermes` 頻道是討論最踴躍的地方。

---

## 二、Harness Paradigm 相關文章

### 核心概念文章

- Chapter 1: The Harness Paradigm — Claude Code
  - 連結：[https://kenhuangus.substack.com/p/chapter-1-the-harness-paradigm-claude](https://kenhuangus.substack.com/p/chapter-1-the-harness-paradigm-claude)
  - 說明：解釋 Harness Paradigm 的核心概念——「模型提供智慧，Harness 提供控制」。本課程第 3 堂「Harness 控管框架」的重要參考材料。

### 補充閱讀

- Claude Code 官方文件
  - 連結：[https://docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)
  - 說明：Anthropic 官方的 Claude Code 文件，展示 Harness 架構在實際產品中的實作方式。其中 QueryEngine 的設計是課程中用來對比的案例。

- OpenAI Function Calling 文件
  - 連結：[https://platform.openai.com/docs/guides/function-calling](https://platform.openai.com/docs/guides/function-calling)
  - 說明：OpenAI 的工具使用（Tool Use）機制說明，幫助理解 Agent 如何與外部工具互動。

---

## 三、AI Agent 框架比較

### 主流框架

| 框架 | 定位 | 語言 | 授權 | 適合對象 | 亮點數據 |
|------|------|------|------|----------|----------|
| Hermes Agent | 自學習 Agent 框架，跨平台 | Python | MIT | 想快速建置實用 Agent 的開發者 | 2026 年 2 月發布，跨對話持久記憶 |
| LangChain / LangGraph | 通用 LLM 應用開發框架 | Python / JS | MIT | 需要高度客製化 LLM 應用的開發者 | LangGraph GitHub 星數達 126,000 |
| CrewAI | 多 Agent 角色協作框架 | Python | MIT | 需要多角色 Agent 團隊協作的場景 | 月搜尋量 14,800 |
| AutoGen | 對話式多 Agent 協作 | Python | MIT | 需要多 Agent 對話式協作的開發者 | Microsoft 2026 年全面重寫 |
| AutoGPT | 自主 Agent 實驗 | Python | MIT | 想探索自主 Agent 能力邊界的實驗者 | 自主 Agent 先驅專案 |

### 框架深入研究

- LangChain 官方文件
  - 連結：[https://python.langchain.com/](https://python.langchain.com/)
  - 說明：目前最廣泛使用的 LLM 應用開發框架，提供豐富的整合元件。課後想繼續鑽研 Agent 開發的學員可以從這裡開始。

- LangGraph 文件
  - 連結：[https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)
  - 說明：LangChain 團隊推出的狀態圖框架，用於建構具有狀態管理的多步驟 Agent。GitHub 星數已達 126,000，是目前最主流的 Agent 狀態圖框架。

- CrewAI GitHub
  - 連結：[https://github.com/crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)
  - 說明：以角色為基礎的多 Agent 協作框架，適合模擬團隊合作的場景。月搜尋量達 14,800，顯示高度的社群關注。

- AutoGen 文件
  - 連結：[https://microsoft.github.io/autogen/](https://microsoft.github.io/autogen/)
  - 說明：Microsoft 推出的對話式多 Agent 協作框架，2026 年進行全面重寫，提升穩定性與擴充性，支援更複雜的多 Agent 對話流程。

- Hermes Agent 深入介紹
  - 連結：[https://hermes-agent.nousresearch.com/](https://hermes-agent.nousresearch.com/)
  - 說明：Nous Research 於 2026 年 2 月發布的 Agent 框架，四大特色值得關注：（一）跨對話持久記憶——Agent 能在不同對話間保留並調用先前經驗；（二）自我進化技能——Agent 可根據使用回饋自動改良自身行為；（三）多層記憶架構——短期工作記憶、中期能力記憶、長期人格記憶的分層設計；（四）語音備忘錄轉錄——支援語音輸入並自動整理為結構化備忘錄。

### 最新動態

- 2026 年全球 AI Agent 市場規模預計達 503 億美元（資料來源：Grand View Research），反映企業對 Agent 技術的投入正快速升溫。
- 根據 Capgemini 2026 年調查，57% 的組織預期已在生產環境運行 AI Agent，顯示 Agent 已從實驗階段邁向規模化部署。
- LangGraph 以 126,000 顆 GitHub 星數成為最主流的 Agent 狀態圖框架，CrewAI 月搜尋量達 14,800，反映多 Agent 協作的需求持續攀升。

---

## 四、AI Agent 最新發展趨勢

### Anthropic Claude Code 2026 年 5 月重大更新

Anthropic 在 2026 年 5 月為 Claude Code 發布五大功能，標誌著 AI Agent 能力的重大躍進：

- **Dreaming（夢境記憶）**：Agent 能在閒置期間自主整理過往任務經驗，形成可複用的知識模式，讓後續任務執行更精準。
- **Outcomes（成果評估）**：內建任務成果自動評估機制，Agent 能自行驗證產出品質，減少人工覆核負擔。
- **Multi-Agent Orchestration（多 Agent 編排）**：原生支援多 Agent 協作，一個主控 Agent 能同時調度多個專門 Agent 並行處理子任務。
- **Claude Finance**：針對財務場景的專用 Agent 能力，涵蓋報表分析、預算追蹤與合規檢查。
- **Add-ins（擴充機制）**：開放第三方功能擴充介面，讓 Agent 能無縫整合外部工具與服務。

### Claude Opus 4.7

- 連結：[https://docs.anthropic.com/en/docs/about-claude/models](https://docs.anthropic.com/en/docs/about-claude/models)
- 說明：Claude Opus 4.7 帶來更強的編碼能力和 Agent 推理表現，在複雜多步驟任務上的準確度與效率均有顯著提升，是目前驅動 Claude Code Agent 功能的核心模型。

### MCP（Model Context Protocol）

- 連結：[https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)
- 說明：Anthropic 推出的開放協定，讓 AI 模型能以標準化方式連接外部資料來源和工具。2026 年已成為業界工具暴露（Tool Exposure）的事實標準，獲得多家主流框架採用。MCP 讓 Agent 不再需要為每個工具撰寫專屬介面，大幅降低整合成本。

### 企業 Agent 七大趨勢

根據 2026 年產業觀察，企業 Agent 發展呈現以下趨勢：

1. **從試驗到生產**：Agent 不再只是概念驗證，而是真正部署到生產環境處理業務流程。
2. **多 Agent 編排成為標準**：單一 Agent 難以應對複雜場景，多 Agent 協作架構成為主流設計模式。
3. **記憶管理成為核心基礎**：Agent 的持久記憶、情境記憶和能力記憶的設計，直接影響使用體驗和任務品質。
4. **品質評估迴圈**：自動化測試、監控和回饋機制成為 Agent 系統的標準配備。
5. **Agent 嵌入生產力工具**：Agent 不再是獨立應用，而是嵌入在文件、試算表、通訊軟體等日常工作工具中。
6. **安全與合規優先**：隨著 Agent 處理敏感資料的場景增加，存取控制和稽核追蹤成為必備功能。
7. **低程式碼 Agent 建置**：視覺化工具和自然語言定義讓非技術人員也能建置和調整 Agent 流程。

---

## 五、AI 模型基礎知識

### 入門介紹

- 3Blue1Brown — Neural Networks（YouTube）
  - 連結：[https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
  - 說明：用精美動畫解釋類神經網路的基礎原理，不需要數學背景也能看懂。

- Andrej Karpathy — Let's build GPT（YouTube）
  - 連結：[https://www.youtube.com/watch?v=kCc8FmEb1nY](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - 說明：前 OpenAI 科學家 Karpathy 從零開始實作 GPT 的教學影片。想了解語言模型內部運作原理的話，這是最好的資源之一。

### 模型概覽

- OpenAI Models 文件
  - 連結：[https://platform.openai.com/docs/models](https://platform.openai.com/docs/models)
  - 說明：OpenAI 各模型的官方說明，包含能力、價格和使用限制。

- Anthropic Models 文件
  - 連結：[https://docs.anthropic.com/en/docs/about-claude/models](https://docs.anthropic.com/en/docs/about-claude/models)
  - 說明：Claude 系列模型的官方說明。

- Google Gemini 文件
  - 連結：[https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs)
  - 說明：Google Gemini 系列模型的開發者文件。

### Token 與計費

- OpenAI Tokenizer
  - 連結：[https://platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)
  - 說明：互動式工具，輸入文字就能看到 Token 數量，幫助理解 API 計費方式。

---

## 六、AI Agent 在教育領域的應用

> 根據 2026 年調查，86% 的學生已在日常學習中使用 AI 工具，AI Agent 正在重塑教育的各個層面。

### 個人化學習路徑

- **診斷分流**：Agent 能透過互動測驗快速定位學生的知識缺口，自動規劃補強路徑。
- **資源推薦**：根據學習風格和進度，即時推薦最適合的教材、影片和練習題。
- **預測警報**：透過學習行為分析，提前預測學生可能遇到的困難並主動介入。例如 Kira Learning 在 K-12 輔導場景中，利用 Agent 為每位學生提供自適應的學習路徑。

### 數據驅動的學生參與

- **風險評分**：Agent 分析出勤、作業繳交和互動數據，為每位學生計算學習風險分數。
- **個人化提醒**：根據學生狀態自動發送適時的鼓勵和提醒訊息。例如 OPIT（Open Policy Institute for Technology）導入 Agent 後，評分時間減少 30%，教師能將更多心力投入教學本身。

### 加速內容創作

- **大綱合成**：Agent 能根據課程目標自動產出課程大綱和教學計畫草稿。
- **題庫生成**：自動產出選擇題、填充題和問答題，並附帶解答和評分標準，大幅減輕教師的備課負擔。

### 強化研究與洞察

- **Agent Laboratory 框架**：研究顯示，Agent 輔助的研究流程可將研究成本降低 84%，同時維持可接受的產出品質。Agent 能協助文獻回顧、資料分析和論文初稿撰寫。
- **知識圖譜建構**：自動整理研究主題的關聯結構，幫助研究者快速掌握領域全貌。

### 工作流程自動化

- **排程編排**：Agent 自動處理課表安排、教室調度和教學資源分配。
- **文件自動化**：成績單產生、學期報告彙整和行政表單填寫等重複性工作，都能交由 Agent 自動完成。

---

## 七、AI Agent 在非營利組織的應用

> 根據 StackAI 2026 年報告，77% 的非營利組織已使用 AI 進行捐款者參與，90% 表達增加 AI 使用的意願。AI Agent 正成為非營利組織擴大影響力的關鍵工具。

### 會員與民眾服務

- **24/7 支援**：Agent 提供全天候的會員諮詢、服務指引和常見問題解答，減少民眾等候時間。
- **YMCA 案例**：YMCA 導入 Agent 處理會員查詢後，等候時間減少 32%，會員滿意度顯著提升。

### 補助金研究與撰寫

- **自動化流程**：Agent 能自動搜尋符合條件的補助金機會、整理申請要件、撰寫初稿並追蹤申請進度。
- **效率提升**：過去需要 24 至 48 小時的補助金研究工作，現在可由 Agent 完全自動化處理。

### 合規監控與法規審查

- Agent 持續追蹤法規變動，自動比對組織內部流程是否符合最新要求，並在偵測到風險時主動發出警報。

### 文件處理與表單受理

- **法律文件自動化**：法律援助類非營利組織導入 Agent 處理表單和文件後，每年可節省約 4,000 工時。
- **多語言支援**：Agent 能自動翻譯和處理不同語言的服務申請表單。

### 募款、捐款者參與與志工協調

- Agent 分析捐款者行為模式，提供個人化的溝通建議和最佳聯繫時機。
- 自動化志工排班、任務分配和感謝回饋流程。

### 研究、政策分析與知識管理

- Agent 協助整理研究資料、產出政策摘要報告，並自動維護組織的知識庫。

### 相關工具與資源

- **Blackbaud「Agents for Good」AI 套件**：專為非營利組織設計的 AI Agent 解決方案，涵蓋捐款者管理、活動策畫和影響力評估。
- **Salesforce Agentforce for Nonprofit**：Salesforce 推出的非營利專用 Agent 平台，整合 CRM、捐款管理和志工協調功能。

---

## 八、社群與持續學習

### Reddit 社群

- r/AI_Agents
  - 連結：[https://www.reddit.com/r/AI_Agents/](https://www.reddit.com/r/AI_Agents/)
  - 說明：AI Agent 相關的討論社群，各種框架、使用案例和產業動態都有人聊。

- r/LocalLLaMA
  - 連結：[https://www.reddit.com/r/LocalLLaMA/](https://www.reddit.com/r/LocalLLaMA/)
  - 說明：聚焦在本地運行語言模型的社群，對模型部署有興趣的話值得關注。

### YouTube 頻道

- AI Jason
  - 連結：[https://www.youtube.com/@AIJason](https://www.youtube.com/@AIJason)
  - 說明：中文 AI 應用教學頻道，內容涵蓋 Agent、自動化和 AI 工具介紹。

- Matt Wolfe
  - 連結：[https://www.youtube.com/@maboroshi](https://www.youtube.com/@maboroshi)
  - 說明：英文 AI 工具評測和新聞頻道，每週更新 AI 領域的重要發展。

- AI Explained
  - 連結：[https://www.youtube.com/@TheAIExplained](https://www.youtube.com/@TheAIExplained)
  - 說明：拆解 AI 模型能力和新研究，適合想跟進最新發展的讀者。

### 電子報 / Blog

- The Batch (Andrew Ng)
  - 連結：[https://www.deeplearning.ai/the-batch/](https://www.deeplearning.ai/the-batch/)
  - 說明：吳恩達團隊發行的每週 AI 新聞摘要，簡潔實用。

- Ben's Bites
  - 連結：[https://bensbites.beehiiv.com/](https://bensbites.beehiiv.com/)
  - 說明：每日 AI 新聞和工具推薦，適合快速掌握產業動態。

### 台灣在地資源

- 台灣 AI 學校
  - 連結：[https://aiacademy.tw/](https://aiacademy.tw/)
  - 說明：由財團法人人工智慧科技基金會（AIF）營運的 AI 人才培育機構，提供從入門到進階的系統化課程，是台灣最具規模的 AI 教育平台之一。

- AI 新星計畫
  - 連結：[https://www.narlabs.org.tw/](https://www.narlabs.org.tw/)
  - 說明：國家實驗研究院推動的 AI 人才培育計畫，針對在學學生和青年世代提供 AI 實務培訓，涵蓋機器學習、自然語言處理和電腦視覺等領域。

- 數位發展部 AI 相關資源
  - 連結：[https://moda.gov.tw/](https://moda.gov.tw/)
  - 說明：數位發展部推動的 AI 政策與資源，包含 AI 應用指引、資料治理規範和數位轉型輔導資訊，適合關注 AI 政策與合規的組織參考。

- 台灣在地 AI 社群與 Meetup
  - Taipei.py（台北 Python 聚會）
    - 連結：[https://www.meetup.com/Taipei-py/](https://www.meetup.com/Taipei-py/)
    - 說明：台北定期舉辦的 Python 技術聚會，經常有 AI 和 Agent 相關的主題分享。
  - Taiwan AI Meetup
    - 連結：[https://www.meetup.com/](https://www.meetup.com/)（搜尋「AI Taiwan」）
    - 說明：台灣各地的 AI 技術交流聚會，涵蓋 LLM 應用、Agent 開發和資料科學等主題。
  - AI . FREE Team 自由團隊
    - 連結：[https://www.aifreeteam.com/](https://www.aifreeteam.com/)
    - 說明：台灣在地 AI 學習社群，定期分享 AI 技術文章和實作教學。

---

## 九、進階主題

### Prompt Engineering

- OpenAI Prompt Engineering Guide
  - 連結：[https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)
  - 說明：OpenAI 官方的提示工程指南，提供撰寫有效提示詞的實用技巧。

- Anthropic Prompt Engineering
  - 連結：[https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
  - 說明：Anthropic 的提示工程文件，Claude 專用的最佳實踐。

### AI 安全與倫理

- OWASP Top 10 for LLM Applications
  - 連結：[https://owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  - 說明：針對大型語言模型應用的安全風險清單，想了解 AI 安全可以從這份清單入門。

- NIST AI Risk Management Framework
  - 連結：[https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)
  - 說明：美國國家標準與技術研究院的 AI 風險管理框架，提供一套結構化的風險評估方法。

### Agent 評估與監控

- LangFuse：Agent 觀測平台
  - 連結：[https://langfuse.com/](https://langfuse.com/)
  - 說明：開源的 LLM 應用觀測平台，提供 Agent 執行追蹤、成本監控、延遲分析和品質評估功能。能記錄 Agent 的每一步決策過程，方便開發者除錯和優化。支援 LangChain、LangGraph、CrewAI 等主流框架整合。

- Mem0：Agent 記憶管理
  - 連結：[https://mem0.ai/](https://mem0.ai/)
  - 說明：專注於 Agent 記憶層的開發平台，提供結構化的記憶儲存和檢索服務。根據 2026 年《State of AI Agent Memory》報告，有效的記憶管理是 Agent 能力的關鍵差異化因素。Mem0 支援短期對話記憶、長期使用者偏好和情境感知的記憶檢索。

- Agent 品質評估最佳實踐
  - 建議從以下三個面向建立評估機制：
    1. **任務完成率**：Agent 是否能在合理步驟內完成指定任務。
    2. **輸出品質**：產出內容的準確性、完整性和一致性。
    3. **成本效率**：每次任務的 Token 消耗、API 呼叫次數和執行時間。
  - 進階做法包括建立自動化評估迴圈（Evaluation Loop），讓 Agent 在每次執行後自動比對預期結果，並將回饋納入後續改進。

---

## 建議閱讀順序

### 入門階段（課程進行中）

1. Hermes Agent 官方文件 Getting Started
2. Harness Paradigm 介紹文章
3. OpenAI Tokenizer（理解計費）
4. AI Agent 框架比較表（掌握生態全貌）

### 深化階段（課後第 1–2 週）

1. Claude Code 官方文件（對比 Harness 實作）
2. OpenAI Function Calling 文件（理解工具使用）
3. 3Blue1Brown Neural Networks 影片（選讀）
4. AI Agent 最新發展趨勢（了解產業脈動）

### 進階階段（課後第 3–4 週）

1. LangChain 文件（探索其他框架）
2. Prompt Engineering 指南
3. OWASP LLM Top 10（安全意識）
4. AI Agent 在教育領域的應用（教學場景啟發）
5. Agent 評估與監控（實務品質管理）
