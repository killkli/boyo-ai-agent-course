# Harness 控管框架：讓 AI 安全自主運作的關鍵

## 基本資訊

- **時長**：50 分鐘
- **型態**：講授 + 程式碼導讀 + 對比分析 + 動手練習
- **對應學習目標**：
  - 3.1 理解 Harness 的核心定位：模型提供智慧，Harness 提供控制
  - 3.2 認識 Harness 的五大職責及其對 Agent 行為的影響
  - 3.3 能比較不同框架中 Harness 實作的異同
  - 3.4 能閱讀簡化的 Harness 程式碼並理解其運作邏輯

---

## 教學流程

### 第一階段：複習與動機建立（5 分鐘）

**講授要點：**

- 快速回顧前兩堂課的關鍵：
  - 第 1 堂：Agent = Model + Harness 的整合
  - 第 2 堂：Model 的能力和限制（幻覺、上下文、不確定性、知識截止）
- **銜接問題**（投影在螢幕上）：
  - 「如果 Model 會犯錯、會忘記、會編造，我們怎麼敢讓它自主行動？」
  - 停頓 3 秒讓學員思考
  - 「答案就是今天的主角：Harness。」

- 重溫實習生比喻：
  - Model = 超聰明的實習生，什麼都會
  - 但沒有管理的實習生 = 災難
  - Harness = 完善的管理制度：工作手冊、權限管控、錯誤通報機制、工作量追蹤

---

### 第二階段：Harness 的核心概念（8 分鐘）

**講授要點：**

#### 核心原則

**「模型提供智慧，Harness 提供控制」**

這句話是整個 Harness 典範的精髓，拆解開來：

- **智慧（來自 Model）**：理解指令、生成方案、推理判斷、語言處理
- **控制（來自 Harness）**：什麼工具能用、能用幾次、出錯怎麼辦、花多少資源

#### 為什麼需要獨立的 Harness 層？

用一個對比來說明：

```
沒有 Harness 的 Model：
  使用者：「幫我發一封 Email 給所有家長，通知本週課輔進度」
  Model：「好的，馬上發送！」（結果不小心夾帶了其他學童的個資）
  → 災難

有 Harness 的 Model：
  使用者：「幫我發一封 Email 給所有家長，通知本週課輔進度」
  Model：「好的，我準備發送...」
  Harness：「等等。偵測到郵件內容包含學童個資，需要主管確認才能發送。」
  → 安全
```

Model 本身沒有「安全意識」，它只是想完成你給的任務。Harness 就是那個踩剎車的機制。

---

### 第三階段：Harness 的五大職責（12 分鐘）

**講授要點：**

逐一介紹五大職責，每個用「問題 → Harness 的角色 → 生活比喻」的結構。

#### 職責一：狀態管理（State Management）

- **問題**：Agent 在執行多步驟任務時，需要記住「做到哪了」、「前面決定了什麼」
- **Harness 的角色**：維護一份工作記錄，追蹤目前的進度、已完成的步驟、待處理的事項
- **比喻**：專案管理工具（如 Trello、Notion），每一張卡片代表一個步驟，看板就是整體狀態
- **實例**：Agent 幫你彙整各中心課輔週報 → 狀態管理記錄「已讀取 17 份週報、已彙整 15 份、2 份需要補資料、1 份標記為異常」

#### 職責二：工具約束（Tool Constraints）

- **問題**：Agent 可以呼叫外部工具（發 Email、查資料庫、執行程式碼），但不是所有工具都應該隨時可用
- **Harness 的角色**：
  - 維護一份「可用工具清單」（Tool Registry）
  - 每個工具有明確的「能做什麼、不能做什麼」規格
  - 限制工具的呼叫次數和參數範圍
- **比喻**：員工的門禁卡，能進哪些門、能操作哪些設備、每個設備的權限等級
- **實例**：Agent 可以「讀取」行事曆，但「修改」行事曆需要確認；可以「搜尋」資料庫，但不能「刪除」資料

#### 職責三：權限控制（Permission Control）

- **問題**：不同的使用者、不同的場景，Agent 應該有不同的權限等級
- **Harness 的角色**：
  - 根據情境決定哪些操作需要人類確認
  - 分層授權：讀取（自動）→ 建議（自動但通知）→ 執行（需確認）→ 危險操作（需雙重確認）
- **比喻**：銀行 App 的安全機制，查餘額直接看、轉帳需要密碼、大額轉帳需要雙重驗證
- **實例**：Agent 協助社工整理個案記錄時，自動摘要一般訪談紀錄，但涉及敏感資訊或高風險個案必須轉交社工師確認

#### 職責四：錯誤處理（Error Handling）

- **問題**：Agent 執行過程中難免出錯（工具故障、網路中斷、Model 輸出格式不對）
- **Harness 的角色**：
  - 攔截錯誤，不要讓整個 Agent 崩潰
  - 決定重試策略（重試幾次、間隔多久）
  - 記錄錯誤供事後分析
  - 在必要時優雅降級（用替代方案）
- **比喻**：飛機的自動駕駛系統，一個感測器壞了不會讓飛機墜落，系統會切換到備用方案
- **實例**：Agent 呼叫搜尋 API 失敗 → Harness 攔截 → 重試一次 → 仍然失敗 → 改用本地知識 → 通知使用者搜尋功能暫時不可用

#### 職責五：資源追蹤（Resource Tracking）

- **問題**：Agent 消耗資源（API 呼叫次數、Token 數量、執行時間），需要防止失控燒錢或無限迴圈
- **Harness 的角色**：
  - 設定預算上限（最多執行幾步、最多花多少 Token）
  - 即時追蹤已消耗的資源
  - 達到上限時強制停止
- **比喻**：手機的流量管控，設定每月上限，快到上限時警告，超過上限時斷網
- **實例**：設定 Agent 最多執行 20 個步驟、最多花費 10,000 Token，到達上限時停止並回報進度

**白板總整理：**

```
┌──────────────────────────────────────────────────┐
│              Harness 五大職責                      │
│                                                  │
│  1. 狀態管理   → 記住做到哪了                     │
│  2. 工具約束   → 只能用允許的工具                  │
│  3. 權限控制   → 危險操作需要確認                  │
│  4. 錯誤處理   → 出錯不崩潰，有備案               │
│  5. 資源追蹤   → 不會無限跑下去                   │
│                                                  │
│  共同目標：讓 Agent 可靠、安全、可預測             │
└──────────────────────────────────────────────────┘
```

---

### 第四階段：兩個真實 Harness 實作的對比（12 分鐘）

**講授要點：**

告訴學員：「這些職責不是理論，真實的 Agent 框架都有實作。我們來看兩個不同框架是怎麼做的。」

#### 對比一：Claude Code 的 QueryEngine（TypeScript）

**背景**：Claude Code 是 Anthropic 的程式開發 Agent，用 TypeScript 撰寫。

**核心設計：**
- 使用 **typed Tool interface**：每個工具有明確的型別定義（輸入什麼、輸出什麼）
- 使用 **async generator**：非同步的、一步一步產出結果的流程（可以中途暫停、恢復）
- 型別系統提供編譯時期的安全保障，如果工具定義寫錯，在執行前就能發現

**用白話解釋：**
- 「typed Tool interface」→ 每個工具都有一張清楚的說明書，標明接受什麼輸入、產生什麼輸出
- 「async generator」→ Agent 的執行像串流影片，不需要等全部完成才能看，可以邊做邊看進度，也可以隨時暫停

#### 對比二：Hermes 的 AIAgent（Python）

**背景**：Hermes Agent 是 Nous Research 的開源 Agent 框架，用 Python 撰寫。

**核心設計：**
- 使用 **registry pattern**：所有工具在啟動時「註冊」到一個登記冊中，Agent 從登記冊查找可用工具
- 使用**同步迴圈**：一步一步循序執行，每一步都是「Model 思考 → 選工具 → 執行 → 檢查結果 → 下一步」
- 使用 **IterationBudget**：一個線程安全的計數器，確保 Agent 不會超過設定的步數上限

**用白話解釋：**
- 「registry pattern」→ 就像餐廳的菜單，所有能點的菜都在上面，Agent 每次看菜單決定要「點」哪個工具
- 「同步迴圈」→ 一步一步來，做完第一步才做第二步，簡單清楚
- 「IterationBudget」→ 就像遊戲中的行動點數，每做一步扣一點，扣完就必須停止

#### 對比總結表

投影以下對比表，引導學員觀察：

| 面向 | Claude Code (QueryEngine) | Hermes (AIAgent) |
|------|--------------------------|-------------------|
| 語言 | TypeScript | Python |
| 工具管理 | typed Tool interface | registry pattern |
| 執行模型 | async generator（非同步串流） | 同步迴圈（循序執行） |
| 資源控制 | 透過型別系統和 async 機制 | IterationBudget（線程安全計數器） |
| 安全保障 | 編譯時期型別檢查 | 執行時期預算檢查 |
| 哲學傾向 | 靜態安全、編譯期防錯 | 動態彈性、執行期管控 |

**講師引導重點：**
- 兩個實作語言不同、技術不同，但五大職責都在
- 不管用什麼語言或框架，Harness 的核心職責是一致的
- 選擇哪種實作取決於使用場景和團隊技術棧

---

### 第五階段：程式碼導讀 — 最小 Harness 實作（13 分鐘）

**講授要點：**

帶學員看兩段簡化的程式碼，目標是「看得懂、說得出在做什麼」，不需要能自己寫。

#### Python 版（靈感來自 Hermes）

投影以下程式碼，逐行導讀：

```python
class SimpleHarness:
    """最小的 Harness 實作——展示五大職責如何體現"""

    def __init__(self, model, tools, max_steps=10):
        # 職責 1：狀態管理 — 初始化記錄
        self.state = {"steps_done": 0, "results": []}

        # 職責 2：工具約束 — 註冊可用工具
        self.tools = {tool.name: tool for tool in tools}

        # 職責 5：資源追蹤 — 設定步數上限
        self.max_steps = max_steps

        self.model = model

    def run(self, task):
        """執行任務的主迴圈"""
        message = task

        while True:
            # 職責 5：檢查是否超過預算
            if self.state["steps_done"] >= self.max_steps:
                return "已達步數上限，任務暫停。"

            # Model 思考下一步
            response = self.model.think(message)

            # 如果 Model 說「完成了」，就結束
            if response.is_done:
                return response.content

            # 如果 Model 想使用工具
            if response.tool_call:
                # 職責 2：檢查工具是否存在
                if response.tool_call.name not in self.tools:
                    message = "錯誤：這個工具不存在。請用其他方式。"
                    continue

                # 職責 3：權限控制 — 檢查是否需要人類確認
                tool = self.tools[response.tool_call.name]
                if tool.needs_confirmation:
                    approved = input(f"Agent 想使用 {tool.name}，允許嗎？(y/n): ")
                    if approved != "y":
                        message = "使用者拒絕了這個操作。請用其他方式。"
                        continue

                # 職責 4：錯誤處理 — 執行工具並處理錯誤
                try:
                    result = tool.run(response.tool_call.args)
                    message = f"工具執行結果：{result}"
                except Exception as e:
                    message = f"工具執行失敗：{e}。請改用其他方式。"
                    continue

            # 職責 1：更新狀態
            self.state["steps_done"] += 1
            self.state["results"].append(response.content)
```

**導讀節奏：**
1. 先看整體結構：`__init__`（設定）和 `run`（執行）
2. 逐一對應五大職責的程式碼位置（用顏色標記或行號）
3. 強調迴圈結構：「思考 → 決定 → 檢查 → 執行 → 更新 → 重複」
4. 指出每個安全檢查點：「你看，這裡就是 Harness 在踩剎車的地方」

#### JavaScript 版（靈感來自 Claude Code）

投影以下程式碼，快速對照：

```javascript
class SimpleHarness {
  // 職責 2：工具約束 — typed Tool interface
  constructor(model, tools, maxSteps = 10) {
    this.model = model;
    // 用 Map 管理工具，type 標注輸入輸出格式
    this.tools = new Map(tools.map(t => [t.name, t]));
    this.maxSteps = maxSteps;

    // 職責 1：狀態管理
    this.state = { stepsDone: 0, results: [] };
  }

  // async generator — 可以逐步產出中間結果
  async *run(task) {
    let message = task;

    while (true) {
      // 職責 5：資源追蹤
      if (this.state.stepsDone >= this.maxSteps) {
        yield { type: "limit_reached", message: "已達步數上限" };
        return;
      }

      const response = await this.model.think(message);

      if (response.isDone) {
        yield { type: "done", content: response.content };
        return;
      }

      if (response.toolCall) {
        // 職責 2：工具約束
        const tool = this.tools.get(response.toolCall.name);
        if (!tool) {
          message = "錯誤：工具不存在";
          continue;
        }

        // 職責 3：權限控制
        if (tool.needsConfirmation) {
          yield { type: "confirm", tool: tool.name };
          // 在真實實作中，這裡會等待使用者回應
        }

        // 職責 4：錯誤處理
        try {
          const result = await tool.run(response.toolCall.args);
          message = `工具執行結果：${result}`;
          yield { type: "tool_result", tool: tool.name, result };
        } catch (error) {
          message = `工具執行失敗：${error.message}`;
          continue;
        }
      }

      // 職責 1：更新狀態
      this.state.stepsDone++;
      this.state.results.push(response.content);
    }
  }
}
```

**導讀重點：**
- 對比 Python 版的異同：邏輯一樣，語法不同
- 強調 `async *run` 和 `yield`，這就是 async generator，每一步都能吐出中間結果讓外界觀察
- `Map` 對應 Python 的 dictionary，`try/catch` 對應 `try/except`

---

## 關鍵概念

1. **Harness 的核心原則**：模型提供智慧，Harness 提供控制。Model 負責想，Harness 負責管
2. **五大職責**：狀態管理、工具約束、權限控制、錯誤處理、資源追蹤
3. **實作的殊途同歸**：TypeScript 的 typed interface + async generator 與 Python 的 registry + 同步迴圈，職責相同但手段不同
4. **Harness 迴圈**：「思考 → 決定 → 檢查 → 執行 → 更新 → 重複」，這是所有 Agent 的基本執行模式
5. Harness 的每一個檢查點都是在回答「如果出錯了怎麼辦」

---

## 教學提示

- **程式碼恐懼症**：這是第一次讓學員看程式碼，一定會有人緊張。事先說明：「你不需要會寫程式，我們只是要像讀說明書一樣，理解它在做什麼。」
- **顏色標記很好用**：用不同顏色標記五大職責在程式碼中的位置，讓學員能視覺化地看到每個職責對應到哪幾行
- **不要逐行解釋語法**：聚焦在「這段在做什麼」而非「這個語法怎麼寫」。例如不要解釋 `self` 是什麼，而是說「這裡在記錄目前走了幾步」
- **IterationBudget 值得強調**：這是學員最容易理解的安全機制，「Agent 最多只能跑 N 步」，非常直覺
- **同步 vs 非同步不用講太深**：重點是讓學員知道有兩種設計思路，不需要解釋 event loop 或 Promise
- **對比表是本堂最重要的總結**：確保學員帶走「不同框架，相同職責」的認知
- **準備紙本講義**：把程式碼印出來發給學員，上面標好顏色和註解，方便他們在上面做筆記
- **時間分配注意**：程式碼導讀很容易超時，Python 版花 8 分鐘，JavaScript 版花 5 分鐘做快速對照即可

---

## 延伸活動（若有餘裕時間）

- **找找五大職責**（5 分鐘）：發一份更完整的 Harness 程式碼（有更多細節），讓學員分組用螢光筆標出五大職責分別對應哪些程式碼片段。每組分享一個發現
- **設計你的 Harness 規則**（5 分鐘）：給一個情境（例如「課輔進度彙整 Agent」），讓學員討論：你會設定哪些工具？哪些操作需要人類確認？步數上限設多少？為什麼？各組用 2 分鐘分享
- **缺了什麼？**（3 分鐘）：展示一段「故意拿掉某個職責」的 Harness 程式碼（例如拿掉錯誤處理），問學員「會出什麼問題？」，訓練他們理解每個職責的必要性
- **預告下一堂課**：如果你要繼續後續課堂，可以預告：「下一堂我們會深入拆解 Agent 的四大組成要素——Model、Harness、Tools、Memory，看看它們各自負責什麼、如何搭配運作。」
