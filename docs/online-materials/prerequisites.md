# 課前準備清單 — 辦公室 AI Agent 實戰入門

> 請在上課前依照本清單完成準備，確保課堂上能順利參與所有實作環節。

---

## 硬體需求

### 必要

| 項目 | 最低需求 | 建議規格 |
|------|----------|----------|
| 筆記型電腦 | 任何可上網的筆電 | 8GB 以上記憶體 |
| 作業系統 | macOS 12+、Windows 10+（需 WSL2）、Ubuntu 20.04+ | macOS 或 Linux 體驗較順暢 |
| 網路 | 穩定的 Wi-Fi 連線 | — |
| 電源 | 攜帶筆電充電器 | — |

### 注意事項

- 本課程不需要 GPU，所有 AI 運算均在雲端執行
- 平板電腦（iPad / Android Tab）不適合進行實作環節
- 如果使用公司配發的筆電，請確認已安裝終端機應用程式

---

## 軟體需求

### 必要軟體

#### 1. 網頁瀏覽器

- **用途**：存取 AI 平台網頁介面、查閱文件
- **選項**：Chrome、Firefox、Safari、Edge 擇一（建議 Chrome）
- **確認方式**：開啟瀏覽器，前往 [https://chat.openai.com](https://chat.openai.com)，確認頁面正常顯示

#### 2. Python 3.11 以上

- **用途**：執行 Hermes Agent
- **安裝方式**：
  - **macOS**：`brew install python@3.11` 或從 [python.org](https://www.python.org/downloads/) 下載
  - **Windows**：從 [python.org](https://www.python.org/downloads/) 下載安裝，勾選「Add Python to PATH」
  - **Linux**：`sudo apt install python3.11`（Ubuntu/Debian）
- **確認方式**：開啟終端機，執行以下指令：
  ```bash
  python3 --version
  # 預期輸出：Python 3.11.x 或更高版本
  ```
- **如果已安裝舊版 Python**：建議使用 `pyenv`（macOS/Linux）或直接安裝 3.11+

#### 3. 終端機（Terminal）

- **用途**：安裝和操作 Hermes Agent
- **各系統預設**：
  - **macOS**：Terminal.app 或 iTerm2
  - **Windows**：Windows Terminal（建議）或 PowerShell
  - **Linux**：GNOME Terminal 或其他終端機
- **確認方式**：開啟終端機，輸入 `echo hello`，確認輸出 `hello`

#### 4. 文字編輯器

- **用途**：檢視和編輯設定檔
- **選項**：VS Code（建議）、Sublime Text、nano、vim 均可
- **安裝 VS Code**：[https://code.visualstudio.com/](https://code.visualstudio.com/)

### 可選但建議安裝

- **Git**：用於下載範例專案（`git --version` 確認）
- **Homebrew**（macOS）：套件管理器，方便安裝其他工具

---

## 帳號準備

### AI 平台 API Key（至少準備一個）

課程中會使用 AI 模型的 API 服務。請至少準備以下其中一個平台的 API Key：

#### 選項 A：OpenAI（建議首選）

- **註冊**：[https://platform.openai.com/signup](https://platform.openai.com/signup)
- **取得 API Key**：登入後前往 [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)，點選「Create new secret key」
- **費用**：需儲值才能使用 API，建議先儲值 USD $5（約 NT$160），足夠課堂練習使用
- **支援模型**：GPT-4o、GPT-4o Mini 等

#### 選項 B：Anthropic

- **註冊**：[https://console.anthropic.com/](https://console.anthropic.com/)
- **取得 API Key**：登入後前往 Settings > API Keys，建立新的 Key
- **費用**：需儲值，建議先儲值 USD $5
- **支援模型**：Claude Sonnet、Claude Haiku 等

#### 選項 C：Google AI（Gemini）

- **註冊**：[https://aistudio.google.com/](https://aistudio.google.com/)
- **取得 API Key**：點選「Get API Key」
- **費用**：有免費額度，適合初步體驗
- **支援模型**：Gemini Pro 等

### 帳號安全提醒

- API Key 請妥善保管，不要上傳到公開的 GitHub 倉庫或分享給他人
- 課堂上不會要求你分享 API Key
- 如果不慎洩露，請立即到各平台後台撤銷該 Key

---

## 可選：預先安裝 Hermes Agent

如果你想在課前先熟悉安裝流程，可以預先安裝 Hermes Agent：

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

安裝完成後驗證：

```bash
hermes --version
```

**如果安裝遇到問題不用擔心**，課堂上會帶領大家逐步完成安裝。預先安裝的好處是上課時可以跳過安裝步驟，直接進入操作環節。

---

## 網路需求

### 連線需求

- 需要穩定的網際網路連線（Wi-Fi 或有線網路）
- 課堂場地將提供 Wi-Fi，但建議事先確認
- 課程中會頻繁呼叫 AI API，請確保網路不會限制 HTTPS 連線

### 可能影響連線的因素

#### 公司 VPN

- 如果你使用公司筆電並需透過 VPN 連線，請注意：
  - VPN 可能限制外部 API 的存取
  - 建議上課時暫時關閉 VPN，或改用個人筆電
  - 如果無法關閉 VPN，請事先測試是否能連線到 `api.openai.com`

#### 公司防火牆

- 部分公司防火牆會阻擋以下連線：
  - `api.openai.com`（OpenAI API）
  - `api.anthropic.com`（Anthropic API）
  - `generativelanguage.googleapis.com`（Google AI API）
  - `github.com`（下載 Hermes Agent）
- **測試方式**：在終端機執行以下指令，確認能正常連線：
  ```bash
  curl -s https://api.openai.com/ | head -1
  # 如果有輸出即表示連線正常
  ```
- 如果被防火牆阻擋，建議改用個人筆電或手機熱點

---

## 課前自檢清單

上課前一天，請逐一確認以下項目：

- [ ] 筆記型電腦可正常開機，電池已充電，已攜帶充電器
- [ ] 網路連線正常，可瀏覽一般網站
- [ ] 終端機可正常開啟
- [ ] Python 3.11+ 已安裝（`python3 --version` 確認）
- [ ] 文字編輯器可用（建議 VS Code）
- [ ] 至少一個 AI 平台帳號已註冊，且已取得 API Key
- [ ] API 帳號已儲值或有可用額度
- [ ] 已將 API Key 記錄在安全的地方（密碼管理器或筆記本）
- [ ] 課程講義已下載或可線上存取
- [ ] 已閱讀課程大綱，了解課程進行方式

---

## 常見準備問題

**Q：我的 Python 版本是 3.10，可以嗎？**
A：Hermes Agent 需要 3.11 以上版本。請升級 Python，建議使用 `pyenv` 管理多版本。

**Q：公司筆電無法安裝軟體怎麼辦？**
A：建議改用個人筆電。如果只能使用公司筆電，請事先聯繫 IT 部門確認安裝權限。

**Q：沒有 API Key 可以上課嗎？**
A：可以旁聽，但無法參與實作環節。強烈建議事先準備好至少一個 API Key。

**Q：需要會寫 Python 程式嗎？**
A：不需要。本課程的操作以指令和設定檔為主，不需要撰寫程式碼。但如果具備基本的 Python 概念會更有幫助。

**Q：Windows 使用者需要特別注意什麼？**
A：建議安裝 WSL2（Windows Subsystem for Linux），操作體驗會比原生 Windows 更順暢。安裝方式請參考 [微軟官方文件](https://learn.microsoft.com/zh-tw/windows/wsl/install)。

---

## 需要協助？

如果在課前準備過程中遇到任何問題，歡迎透過以下管道尋求協助：

- 課程報名時提供的聯繫方式
- 課程社群群組（上課前一週會建立）
- 電子郵件（請參考報名確認信中的聯繫資訊）
