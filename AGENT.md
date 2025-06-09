# Project Progress

當前專案包含前端與後端兩部分。後端採用 **Django 5.2** 與 DRF 建置 API，已建立 `users`、`resources` 兩個 app。`resources` app 內含 `Category`、`Tag`、`Resource`、`Attachment`、`Rating` 等模型及其序列化器與 ViewSet，支援基本 CRUD、篩選、搜尋與排序。`users` app 提供使用者註冊 API，並透過 JWT 處理登入驗證。

後端測試位於 `users/tests.py` 與 `resources/tests.py`，共 7 個測試案例。執行 `poetry run python manage.py test` 後全部通過，確認註冊與資源 API 功能正常。

前端以 React 與 Vite 建置，提供多語言環境與資源列表、上傳等元件，可使用 `npm run dev` 啟動。本專案還有 `unihub_planning.md` 描述後續的詳細模組規劃，例如評論、收藏、通知等功能有待實作。

目前基本架構已完成並能通過測試，後續可依規劃持續擴充模型與 API，並完善前端介面與功能。
