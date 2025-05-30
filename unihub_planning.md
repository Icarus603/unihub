# UniHub 校園資源平台規劃

## 1. 項目願景與目標

打造一個一站式的校園資源共享平台，整合校園內的各類資訊，包括保研、考研、科研、競賽、實習、學生工作、社團活動、期末考試資料等，旨在打破信息壁壘，提升資訊透明度，方便學生獲取所需資源。平台支持多語言（簡體中文、繁體中文、English、French），並實現全平台覆蓋（Web, Desktop, Mobile）。

## 2. 技術選型

*   **前端：** Flutter (一套程式碼，多端部署：iOS, Android, Web, macOS, Windows, Linux)
*   **後端：** Python Django (強大、穩定、生態豐富)
*   **數據庫：** PostgreSQL (功能強大，適合複雜查詢和數據一致性要求)
*   **API 接口：** RESTful API 或 GraphQL (根據複雜度和前端需求決定，初期建議 RESTful)
*   **版本控制：** Git

## 3. 功能模組規劃

### 3.1 核心功能

*   **用戶系統：**
    *   註冊 (學號/郵箱驗證)
    *   登入 (帳號密碼、第三方登入如微信、Google 等可選)
    *   個人資料管理 (暱稱、頭像、學院、年級等)
    *   密碼找回
    *   用戶角色與權限管理 (普通用戶、上傳者、管理員)
*   **資源展示：**
    *   分類瀏覽 (保研、考研、科研、競賽等)
    *   標籤篩選
    *   關鍵詞搜索
    *   排序 (最新、最熱、評分等)
    *   資源詳情頁 (描述、上傳者、上傳時間、附件下載、預覽、評論、評分)
*   **資源上傳：**
    *   表單提交 (標題、描述、分類、標籤、附件)
    *   文件上傳 (支持多種類型：PDF, DOCX, PPTX, ZIP, 圖像, 視頻等)
    *   上傳審核機制 (可選，由管理員或特定角色審核後發布)
    *   個人上傳記錄管理
*   **互動功能：**
    *   評論與回覆
    *   評分/點讚
    *   收藏資源
    *   分享資源
*   **多語言支持：**
    *   界面語言切換 (簡體中文 - 默認, 繁體中文, English, French)
    *   內容多語言支持 (可選，若資源本身有多語言版本)
*   **通知系統：**
    *   新資源發布通知 (針對訂閱分類或標籤的用戶)
    *   評論回覆通知
    *   上傳審核結果通知
    *   系統公告

### 3.2 輔助功能

*   **管理後台 (Django Admin 或自定義)：**
    *   用戶管理
    *   資源管理 (審核、編輯、刪除)
    *   分類與標籤管理
    *   數據統計與分析
    *   系統配置
*   **信息聚合：**
    *   考慮與學校官方信息渠道的接口 (如果允許)
    *   鼓勵各學生組織/部門入駐發布信息

## 4. 前端規劃 (Flutter)

### 4.1 整體架構

*   **狀態管理：** Provider, Riverpod, BLoC/Cubit (根據團隊熟悉度和項目複雜度選擇，Riverpod 或 BLoC/Cubit 更適合大型應用)
*   **路由管理：** GoRouter 或 AutoRoute
*   **依賴注入：** GetIt
*   **HTTP 客戶端：** Dio 或 http
*   **本地存儲：** shared_preferences (輕量級數據), sqflite (本地數據庫)
*   **國際化 (i18n)：** 使用 Flutter 內建的 `flutter_localizations` 和 `intl` 套件。

### 4.2 主要頁面/視圖

*   **啟動頁 (Splash Screen)**
*   **引導頁 (Onboarding - 首次啟動)**
*   **首頁 (Home Screen):**
    *   各資源分類入口
    *   最新/熱門資源推薦
    *   搜索框
*   **資源列表頁 (Resource List Screen):**
    *   按分類/標籤展示資源
    *   篩選與排序功能
*   **資源詳情頁 (Resource Detail Screen):**
    *   資源內容、附件、評論、評分
*   **資源上傳頁 (Upload Screen):**
    *   表單、文件選擇器
*   **個人中心頁 (Profile Screen):**
    *   用戶信息
    *   我的上傳
    *   我的收藏
    *   設置 (語言切換、通知設定等)
*   **登入/註冊頁 (Auth Screens)**
*   **搜索結果頁 (Search Result Screen)**
*   **設置頁 (Settings Screen)**

### 4.3 UI/UX 設計考量

*   **一致性：** 遵循 Material Design (Android/Web/Desktop) 和 Cupertino (iOS) 風格指南，或設計一套統一的品牌風格。
*   **易用性：** 簡潔直觀的導航和操作流程。
*   **響應式設計：** 適應不同屏幕尺寸和平台。
*   **性能：** 流暢的動畫和快速的加載速度。

### 4.4 跨平台特定注意事項

*   **Web：** SEO 考量，瀏覽器兼容性。
*   **Desktop：** 窗口管理，鍵盤快捷鍵，原生菜單集成。
*   **Mobile：** 推送通知，權限管理 (相機、存儲等)。

## 5. 後端規劃 (Python Django)

### 5.1 整體架構

*   **Django REST framework (DRF):** 用於快速構建 RESTful API。
*   **項目結構：**
    ```
    unihub_backend/
    ├── manage.py
    ├── unihub_project/  # Django 項目配置
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   ├── wsgi.py
    │   └── asgi.py
    ├── apps/            # 各個應用模組
    │   ├── users/       # 用戶管理 app
    │   ├── resources/   # 資源管理 app
    │   ├── comments/    # 評論管理 app
    │   └── ...
    ├── requirements.txt
    └── staticfiles/     # 部署時的靜態文件
    └── mediafiles/      # 用戶上傳的文件
    ```

### 5.2 API 設計 (RESTful)

*   **版本控制：** `/api/v1/...`
*   **認證：** Token Authentication (例如 JWT - JSON Web Tokens)
*   **主要 Endpoints 示例：**
    *   `POST /api/v1/users/register/`
    *   `POST /api/v1/users/login/`
    *   `GET /api/v1/users/me/`
    *   `GET /api/v1/resources/` (支持分頁、過濾、排序)
    *   `POST /api/v1/resources/`
    *   `GET /api/v1/resources/{id}/`
    *   `PUT /api/v1/resources/{id}/`
    *   `DELETE /api/v1/resources/{id}/`
    *   `GET /api/v1/resources/{id}/comments/`
    *   `POST /api/v1/resources/{id}/comments/`
    *   `GET /api/v1/categories/`
    *   `GET /api/v1/tags/`

### 5.3 數據庫模型 (Django Models - PostgreSQL)

*   **`User` (擴展 Django 自帶 User 或自定義):**
    *   `username` (學號或郵箱)
    *   `password`
    *   `email`
    *   `nickname`
    *   `avatar` (頭像 URL 或文件路徑)
    *   `school_department` (學院)
    *   `grade` (年級)
    *   `role` (普通用戶, 上傳者, 管理員)
    *   `date_joined`, `last_login`
*   **`Category` (資源分類):**
    *   `name` (e.g., "保研專區", "考研資料")
    *   `slug` (URL友好)
    *   `description` (可選)
    *   `parent_category` (支持層級分類，可選)
*   **`Tag` (資源標籤):**
    *   `name` (e.g., "計算機視覺", "線性代數", "面試經驗")
    *   `slug`
*   **`Resource` (資源):**
    *   `title`
    *   `description`
    *   `uploader` (ForeignKey to User)
    *   `category` (ForeignKey to Category)
    *   `tags` (ManyToManyField to Tag)
    *   `status` (e.g., "pending_review", "approved", "rejected")
    *   `upload_date`
    *   `last_modified_date`
    *   `view_count`
    *   `download_count`
    *   `average_rating`
*   **`Attachment` (附件):**
    *   `resource` (ForeignKey to Resource)
    *   `file` (FileField - 存儲路徑)
    *   `filename`
    *   `file_type`
    *   `upload_date`
*   **`Comment` (評論):**
    *   `resource` (ForeignKey to Resource)
    *   `user` (ForeignKey to User)
    *   `content`
    *   `parent_comment` (支持回覆嵌套)
    *   `created_at`
*   **`Rating` (評分/點讚):**
    *   `resource` (ForeignKey to Resource)
    *   `user` (ForeignKey to User)
    *   `score` (e.g., 1-5, 或僅點讚)
    *   `created_at`
*   **`Favorite` (收藏):**
    *   `user` (ForeignKey to User)
    *   `resource` (ForeignKey to Resource)
    *   `created_at`
*   **`Notification` (通知):**
    *   `recipient` (ForeignKey to User)
    *   `message`
    *   `type` (e.g., "new_comment", "resource_approved")
    *   `is_read`
    *   `created_at`
    *   `related_object_url` (指向相關資源或評論的鏈接)

### 5.4 文件上傳與管理

*   使用 Django 的 `FileField` 和 `ImageField`。
*   存儲位置：
    *   開發環境：本地 `media` 文件夾。
    *   生產環境：考慮雲存儲服務 (AWS S3, Google Cloud Storage, Azure Blob Storage) 以提高可擴展性和可靠性。`django-storages` 套件可以幫助集成。
*   文件名處理：避免文件名衝突，可使用 UUID 或時間戳重命名。
*   文件大小和類型限制。

### 5.5 搜索功能

*   基礎搜索：使用 Django ORM 的 `filter` 和 `Q` 對象。
*   高級搜索：考慮集成全文搜索引擎如 Elasticsearch 或 Solr，配合 `django-haystack` 或類似套件，以支持更複雜的查詢和相關性排序。

### 5.6 國際化 (i18n) 和本地化 (l10n)

*   Django 內建的國際化和本地化框架。
*   標記需要翻譯的字符串 (`_()` 或 `gettext`)。
*   創建 `.po` 和 `.mo` 翻譯文件。

## 6. 數據庫設計 (PostgreSQL)

*   基於 Django Models 自動生成表結構。
*   利用 PostgreSQL 的高級特性，如 JSONB 字段 (若有靈活的元數據需求)、全文搜索支持。
*   設計索引以優化查詢性能，特別是針對常用查詢字段 (如 `Resource.category`, `Resource.tags`, `Resource.upload_date`)。
*   數據備份與恢復策略。

## 7. 開發流程建議

1.  **環境搭建：**
    *   安裝 Flutter SDK, Python, Poetry, PostgreSQL。
    *   配置 pyenv 管理 Python 版本。
    *   創建 Git 倉庫。
2.  **後端先行 (或並行)：**
    *   使用 Poetry 初始化 Django 項目。
    *   設計並實現核心數據模型 (Users, Resources, Categories)。
    *   搭建 Django REST framework，實現基礎的 CRUD API 接口。
    *   實現用戶認證 API。
    *   編寫單元測試和集成測試。
3.  **前端開發：**
    *   初始化 Flutter 項目。
    *   設計 UI/UX 原型。
    *   搭建基礎頁面結構和路由。
    *   實現用戶認證流程 (對接後端 API)。
    *   開發資源展示和上傳功能模塊。
    *   集成多語言支持。
    *   針對各平台進行調試和優化。
4.  **持續集成/持續部署 (CI/CD)：**
    *   考慮使用 GitHub Actions, GitLab CI, Jenkins 等工具。
    *   自動化測試、構建和部署。
5.  **迭代開發：**
    *   先完成 MVP (最小可行產品)，包含核心功能。
    *   根據用戶反饋和需求逐步迭代，添加新功能和優化體驗。

## 8. 部署考量

*   **後端 (Django)：**
    *   Web 服務器：Gunicorn 或 uWSGI。
    *   反向代理：Nginx 或 Apache (處理靜態文件、負載均衡、HTTPS)。
    *   部署平台：
        *   傳統 VPS (DigitalOcean, Linode, AWS EC2)
        *   PaaS (Heroku, Google App Engine, AWS Elastic Beanstalk)
        *   容器化 (Docker, Kubernetes)
*   **前端 (Flutter)：**
    *   **Mobile (iOS/Android):** 分發到 App Store 和 Google Play。
    *   **Web:** 部署到靜態網站托管服務 (Firebase Hosting, Netlify, GitHub Pages) 或與後端服務器一同部署。
    *   **Desktop (macOS/Windows/Linux):** 打包成分發格式 (e.g., .dmg, .exe, .deb/AppImage)。
*   **數據庫 (PostgreSQL)：**
    *   與後端服務器同機部署 (適用於小型項目)。
    *   使用雲數據庫服務 (AWS RDS, Google Cloud SQL, Azure Database for PostgreSQL)。
*   **域名和 SSL 證書。**

## 9. 未來擴展方向

*   **個性化推薦系統：** 根據用戶行為推薦資源。
*   **即時通訊/問答區：** 增強用戶互動。
*   **積分/徽章系統：** 激勵用戶上傳和互動。
*   **與校園卡/教務系統集成 (若可行)：** 提供更便捷服務。
*   **AI 輔助功能：** 例如，AI 自動為上傳的文檔生成摘要或標籤。

## 10. 初期工作建議

1.  **搭建基礎環境：**
    *   `poetry new unihub_backend && cd unihub_backend && poetry shell`
    *   `poetry add django djangorestframework psycopg2-binary djangorestframework-simplejwt python-decouple Pillow django-cors-headers` (Pillow 用於圖片處理，decouple 用於環境變量管理, cors-headers 用於跨域)
    *   `django-admin startproject unihub_project .`
    *   `python manage.py startapp users`
    *   `python manage.py startapp resources`
    *   配置 `settings.py` (數據庫, `INSTALLED_APPS`, `REST_FRAMEWORK` 等)
    *   `flutter create unihub_frontend`
2.  **定義核心 Model 和 API：**
    *   先實現 `User` 和 `Resource` 的基本模型和 API。
3.  **Flutter 端實現用戶登入註冊和資源列表展示。**

這是一個比較全面的規劃，您可以根據實際情況和資源進行調整。祝您的 UniHub 項目順利！ 