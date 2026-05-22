# 雲端 AI 服務連接指南：API Key 取得與串接原理

## 基本資訊

- **定位**：課前自學教材 / 補充讀物
- **目標讀者**：需要實際連接 AI 雲端服務的課程學員
- **對應課程**：第 2 課（Model 深探）、第 5 課（Hermes 實作）

---

## 第一部分：理解雲端 AI 服務的運作原理

### 什麼是 API？

API（Application Programming Interface，應用程式介面）是兩個程式之間溝通的橋樑。在 AI 的情境中：

```
你的電腦（Agent 程式）
        │
        │  「請用 Gemini 幫我分析這段文字」
        │  （透過 API 呼叫）
        ▼
雲端 AI 服務商（Google / OpenRouter / ...）
        │
        │  處理請求 → 產生回應
        ▼
回傳結果給你的電腦
```

用人來比喻：

- **API** = 服務櫃台。你填好申請單（請求），遞交給櫃台，櫃台處理後把結果交回給你
- **API Key** = 你的身分證件。櫃台需要確認你是誰、有沒有權限使用這項服務
- **模型** = 櫃台後面的專家。不同的專家擅長不同的事，你可以選擇要哪位專家服務

### API Key 為什麼重要？

API Key 是一串字元（例如 `AIzaSyB...` 或 `sk-or-...`），它的作用是：

1. **身分驗證**：告訴服務商「這個請求來自誰」
2. **權限管控**：決定你能使用哪些模型和功能
3. **用量計費**：追蹤你使用了多少資源，據此計費（或計算免費額度）

**重要安全原則**：

- API Key 就像你的信用卡密碼，**絕對不要**分享給別人
- 不要把 API Key 貼到公開的聊天群組、文件或程式碼倉庫中
- 如果不小心洩漏了，立刻到服務商的網站重新產生一組新的
- 在課堂練習中，不要把含有 API Key 的畫面截圖分享到群組

### 雲端 AI 服務的常見連接方式

市面上有三種主流的連接方式：

**方式一：直接連接服務商**

```
你的程式 → Google Gemini API
你的程式 → OpenAI API
你的程式 → Anthropic API
```

- 每個服務商有自己的 API 格式和 SDK
- 如果你只用一家的模型，這是最直接的方式
- 缺點：換模型就要改程式碼

**方式二：透過統一閘道器（Gateway）**

```
你的程式 → OpenRouter（統一閘道器）→ 背後自動轉發到各服務商
```

- 用統一的 API 格式，一次可以連接多家服務商的模型
- 換模型只需要改一個參數（模型名稱）
- 缺點：多一層中間商，理論上多一個可能出問題的環節

**方式三：本地部署（On-Premise）**

```
你的程式 → 你自己伺服器上跑的開源模型
```

- 資料完全不離開你的機器
- 需要較高的技術能力和硬體資源
- 不在本指南的範圍內

**方式比較：**

| 面向 | 直接連接 | 統一閘道器 | 本地部署 |
|------|---------|-----------|---------|
| 設定難度 | 中（每家不同） | 低（統一格式） | 高 |
| 模型選擇 | 該服務商的模型 | 多家服務商的模型 | 開源模型 |
| 資料隱私 | 資料送出 | 資料送出 | 資料留在本地 |
| 費用 | 依服務商計費 | 依服務商計費（不加價） | 硬體成本 |
| 適合場景 | 穩定使用特定模型 | 需要比較或切換模型 | 資料敏感度高 |

---

## 第二部分：Google Gemini AI Studio

### 服務簡介

Google AI Studio 是 Google 提供的免費 AI 開發平台，讓你透過 API 使用 Gemini 系列模型。它的特色是：

- **有免費方案**，不需要綁定信用卡就能開始使用
- 提供 Gemini 3.5 Flash、Gemini 2.5 Flash、Gemini 2.5 Pro 等主力模型（免費方案可用的模型會隨時間調整）
- 免費方案的資料**會被用於改善 Google 產品**（付費方案則不會）

### 如何取得 API Key

**前置條件**：一個 Google 帳號（Gmail 即可）

**步驟**：

1. 開啟瀏覽器，前往 **Google AI Studio**：https://aistudio.google.com
2. 用你的 Google 帳號登入
3. 第一次使用時，閱讀並同意服務條款
4. 前往 API Key 管理頁面：https://aistudio.google.com/app/apikey
5. 點選 **「Create API Key」**
6. 系統會自動建立一個 Google Cloud 專案並產生 API Key
7. **立刻複製 API Key 並妥善保存**（關閉視窗後就無法再看到完整的 Key）

**你的 API Key 長這樣**：`AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 免費方案的限制

免費方案雖然不用花錢，但有用量限制。以下為截至 2026 年 5 月的資訊：

| 模型 | 免費方案可用 | 每分鐘請求數 | 每日請求數 | 說明 |
|------|------------|-------------|-----------|------|
| Gemini 3.5 Flash | 是 | 約 10 次 | 約 5,000 次 | 最新旗艦模型，速度快、能力強 |
| Gemini 3.1 Flash-Lite | 是 | 約 30 次 | 約 5,000 次 | 輕量高效率，適合大量簡單任務 |
| Gemini 2.5 Flash | 是 | 約 10 次 | 約 1,500 次 | 穩定好用，日常使用首選 |
| Gemini 2.5 Flash-Lite | 是 | 約 30 次 | 約 1,500 次 | 最經濟實惠，適合高頻率簡單操作 |
| Gemini 2.5 Pro | 是（極度受限） | 約 5 次 | 約 50 次 | 最強推理能力，但免費額度很低 |
| Gemini 2.0 Flash | 是 | 約 15 次 | 約 1,500 次 | 前一代模型，仍然可靠 |
| Gemini 3.1 Pro Preview | 否 | — | — | 僅付費方案可用 |

**注意事項**：

- Gemini 2.5 Flash 與 2.5 Flash-Lite 的每日請求數**共用額度**（合計約 1,500 次）
- Gemini 2.5 Pro 免費方案可用但額度極低，建議優先使用 Flash 系列
- Pro 系列模型（如 Gemini 3.1 Pro Preview）已不開放免費方案使用
- 以上為近似值，實際限制可能隨時調整，請至 https://ai.google.dev/gemini-api/docs/rate-limits 查看最新資訊

### 如何使用 API Key 連接

**方法一：設為環境變數（推薦）**

在終端機中執行：

```bash
export GEMINI_API_KEY="你的API_Key"
```

設定後，Agent 程式會自動讀取這個環境變數來連接 Gemini。

**方法二：在程式設定中直接輸入**

部分 Agent 框架（如 Hermes）在 `setup` 階段會詢問 API Key，直接貼上即可。

**方法三：透過 REST API 直接呼叫**

如果你想自己寫程式連接：

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" \
  -H "x-goog-api-key: 你的API_Key" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"contents":[{"parts":[{"text":"你好，請介紹自己"}]}]}'
```

> 上例使用 `gemini-2.5-flash` 模型。你也可以替換為 `gemini-3.5-flash`（最新旗艦）、`gemini-2.5-pro`（最強推理）等其他模型名稱。完整模型列表請見 https://ai.google.dev/gemini-api/docs/models 。

### 連接原理圖解

```
┌──────────────────────────────────────────────────────────┐
│              Google Gemini 連接流程                        │
│                                                          │
│  你的 Agent 程式                                          │
│       │                                                  │
│       │  ① 帶著 API Key 發出請求                          │
│       ▼                                                  │
│  Google 驗證 API Key                                      │
│       │                                                  │
│       │  ② 確認身分和用量額度                              │
│       ▼                                                  │
│  將請求傳給 Gemini 模型處理                                │
│       │                                                  │
│       │  ③ 模型產生回應                                   │
│       ▼                                                  │
│  回傳結果到你的 Agent 程式                                 │
│                                                          │
│  整個過程透過 HTTPS 加密傳輸                               │
└──────────────────────────────────────────────────────────┘
```

---

## 第三部分：OpenRouter

### 服務簡介

OpenRouter 是一個**統一的 AI 模型 API 閘道器**，讓你透過一個 API Key 就能使用超過 400 個來自不同廠商的 AI 模型。它的特色是：

- **一個 Key 通吃多家模型**：OpenAI、Anthropic、Google、Meta、DeepSeek 等
- **相容 OpenAI API 格式**：如果你的程式已經支援 OpenAI，只需改一個網址就能用 OpenRouter
- **不加價**：直接轉傳各服務商的原始定價
- **有免費模型**：約 28-30 個模型完全免費使用

### OpenRouter 與直接連接的差異

```
直接連接 Google：
  你的程式 → Google API（只能用 Google 的模型）

直接連接 OpenAI：
  你的程式 → OpenAI API（只能用 OpenAI 的模型）

透過 OpenRouter：
  你的程式 → OpenRouter → 自動轉發到 Google / OpenAI / Anthropic / Meta / ...
                       ↑
                       你只要指定「我要用哪個模型」
```

用生活比喻：

- **直接連接** = 你分別去 A 餐廳、B 餐廳、C 餐廳點餐，每家有各自的點餐規則
- **OpenRouter** = 你用一個外送平台，上面有 A、B、C 所有餐廳的菜單，統一點餐、統一結帳

### 如何取得 API Key

**前置條件**：一個 Email、GitHub、Google 或 MetaMask 帳號

**步驟**：

1. 開啟瀏覽器，前往 OpenRouter：https://openrouter.ai
2. 點選 **「Sign In」**，用 GitHub、Google 或 Email 註冊/登入
3. 登入後，前往 API Keys 管理頁面：https://openrouter.ai/settings/keys
4. 點選 **「Create New Key」**
5. 輸入一個名稱（例如「課程練習用」）
6. **立刻複製 API Key 並妥善保存**（關閉視窗後就無法再看到完整的 Key）

**你的 API Key 長這樣**：`sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 關於付費

OpenRouter 採用 **Credit 儲值制**（預付制）：

- 需要先儲值 Credits 才能使用付費模型
- 最低儲值金額為 $5 美元
- 支援信用卡、AliPay 或加密貨幣儲值
- 儲值時收取 5.5% 手續費

**但是**：OpenRouter 有約 30 個**完全免費的模型**，不需要儲值就能使用。適合課堂練習和測試。

### 免費模型列表（部分）

以下是適合課堂使用的免費模型（模型 ID 結尾有 `:free`）：

| 模型名稱 | 特色 | 適合場景 |
|----------|------|---------|
| NVIDIA Nemotron 3 Super | 647B 參數超大模型 | 複雜推理、長文分析 |
| OpenAI gpt-oss-120b | OpenAI 開源模型 | 一般對話、文字生成 |
| Qwen3 235B | 數學和科學推理能力強 | 分析任務、程式輔助 |
| DeepSeek R1 | 深度推理模型 | 邏輯推演、數學解題 |
| Meta Llama 4 Scout | 多語言對話能力強 | 一般文字處理、翻譯 |

> 免費模型會不定期更換。完整列表請見：https://openrouter.ai/collections/free-models

### 免費方案的速率限制

| 條件 | 每分鐘請求 | 每日請求 |
|------|-----------|---------|
| 未儲值（免費模型） | 20 次 | 50 次 |
| 已儲值 $10 以上 | 20 次 | 1,000 次 |

> 課堂練習通常一天用不到 50 次請求，免費方案足夠應付大部分練習。

### 如何使用 API Key 連接

OpenRouter 最大的優勢是**相容 OpenAI API 格式**，所以如果你已經有支援 OpenAI 的程式或框架，只需要改兩個地方：

**方法一：設為環境變數**

```bash
export OPENROUTER_API_KEY="你的API_Key"
```

**方法二：在 Agent 框架中使用**

大部分 Agent 框架都支援自訂 API 端點。以 OpenAI SDK 為例：

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="你的API_Key",
)

# 只需要改 model 名稱就能切換不同模型
response = client.chat.completions.create(
    model="nvidia/llama-3.3-nemotron-super-70b:free",
    messages=[{"role": "user", "content": "你好"}]
)
```

### 連接原理圖解

```
┌──────────────────────────────────────────────────────────┐
│              OpenRouter 連接流程                           │
│                                                          │
│  你的 Agent 程式                                          │
│       │                                                  │
│       │  ① 帶著 API Key + 指定模型名稱                    │
│       ▼                                                  │
│  OpenRouter 驗證 API Key                                  │
│       │                                                  │
│       │  ② 根據模型名稱，轉發到對應的服務商                │
│       ▼                                                  │
│  實際的 AI 服務商（Google / OpenAI / Meta / ...）          │
│       │                                                  │
│       │  ③ 模型產生回應                                   │
│       ▼                                                  │
│  OpenRouter 回傳結果到你的 Agent 程式                      │
│                                                          │
│  對你來說，就像直接在跟一個統一的 AI 服務互動               │
└──────────────────────────────────────────────────────────┘
```

---

## 第四部分：兩種服務的比較與選擇建議

### 功能比較

| 比較面向 | Google Gemini AI Studio | OpenRouter |
|----------|------------------------|------------|
| **取得門檻** | 低（只需 Google 帳號） | 低（只需 Email/GitHub） |
| **是否需要付費** | 不需要，有完整免費方案 | 免費模型不用付費，付費模型需儲值 |
| **API Key 格式** | `AIzaSy...` | `sk-or-v1-...` |
| **模型選擇** | Google Gemini 系列（含最新 3.5 Flash） | 400+ 模型（各家廠商） |
| **API 格式** | Google 專屬格式 | OpenAI 相容格式（更通用） |
| **免費額度** | Flash 系列約 1,500-5,000 RPD，Pro 極少 | 免費模型 50 RPD（未儲值） |
| **資料隱私** | 免費方案資料用於改善產品 | 依背後服務商的隱私政策 |
| **適合場景** | 穩定使用 Google 模型 | 需要比較或切換多家模型 |

### 選擇建議

**如果你是初學者，建議從 Google Gemini AI Studio 開始**：

- 不需要付費，免費額度較寬鬆
- Google 生態系整合度高
- 介面友善，有 AI Studio 的圖形化操作介面

**如果你需要使用多種模型或比較不同模型，選擇 OpenRouter**：

- 一個 Key 存取所有模型
- 相容 OpenAI 格式，通用性最高
- 免費模型雖然限制較多，但足夠課堂練習

**在課程中的使用建議**：

- 課堂實作優先使用 **Google Gemini AI Studio**（免費額度大，適合多人同時練習）
- 如果學員想嘗試不同模型，可以額外使用 **OpenRouter** 的免費模型
- 兩者都不需要付費即可完成課程所有練習

---

## 第五部分：常見連接問題與排解

### 問題一：API Key 無效

- **症狀**：程式回報「401 Unauthorized」或「Invalid API Key」
- **原因**：Key 複製不完整、有多餘的空格、或者已經被撤銷
- **解法**：回到服務商網站重新確認 Key，如果有問題就重新產生一組

### 問題二：超過用量限制

- **症狀**：程式回報「429 Too Many Requests」或「Rate Limit Exceeded」
- **原因**：短時間內發出太多請求，超過免費方案的速率限制
- **解法**：等幾分鐘後再試。如果頻繁發生，考慮升級付費方案或換一個限制較寬鬆的模型

### 問題三：網路連線問題

- **症狀**：程式回報「Connection Timeout」或「Network Error」
- **原因**：公司防火牆封鎖、VPN 設定問題、或服務商暫時故障
- **解法**：
  - 確認網路連線正常（開瀏覽器訪問 Google 看看）
  - 如果在公司網路內，可能需要切換到手機熱點測試
  - 檢查服務商的狀態頁面（Google Cloud Status、OpenRouter Status）

### 問題四：模型不存在

- **症狀**：程式回報「404 Not Found」或「Model not found」
- **原因**：模型名稱打錯、模型已被停用、或你的方案不支援該模型
- **解法**：確認模型名稱的拼寫，到服務商網站查看可用的模型列表

---

## 延伸資源

### 官方文件

| 資源 | 網址 |
|------|------|
| Google AI Studio | https://aistudio.google.com |
| Gemini API 文件 | https://ai.google.dev/gemini-api/docs |
| Gemini 模型列表 | https://ai.google.dev/gemini-api/docs/models |
| Gemini 定價 | https://ai.google.dev/gemini-api/docs/pricing |
| Gemini 速率限制 | https://ai.google.dev/gemini-api/docs/rate-limits |
| OpenRouter 首頁 | https://openrouter.ai |
| OpenRouter 快速上手 | https://openrouter.ai/docs/quickstart |
| OpenRouter 免費模型 | https://openrouter.ai/collections/free-models |
| OpenRouter 常見問題 | https://openrouter.ai/docs/faq |

### 安全提醒

- API Key 是你的個人憑證，等同於密碼
- 課堂上不要把 API Key 螢幕截圖分享到群組
- 練習結束後，建議到服務商網站刪除或重新產生 API Key
- 不要把 API Key 寫在程式碼中然後上傳到公開的程式碼倉庫
