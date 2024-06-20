# Development Diary

----------

### 06/21 
#### 1. 建立資料夾分層
````javascript=
src/app/
├── core/            # 核心模組和服務
├── shared/          # 共用模組、元件、指令、管道
├── pages/           # 應用程式的各個頁面模組和元件
├── services/        # 應用程式範圍內的服務
├── utils/           # 實用工具和輔助函數
├── assets/          # 靜態資源（圖片、字體等）

````
> core: 放置應用程式的核心模組和服務，例如單例服務、全局設置等。
````javascript=
src/app/core/
├── services/
├── interceptors/
├── guards/
├── core.module.ts
````
> shared: 放置可重用的模組、元件、指令、管道。
````javascript=
src/app/shared/
├── components/
├── directives/
├── pipes/
├── shared.module.ts
````
> pages: 每個特定頁面模組或元件可以有自己的子資料夾。這樣的結構便於維護和理解。
````javascript=
src/app/pages/
├── home/
├── about/
````
> services: 放置應用程式範圍內的服務，這些服務可能不屬於某個特定模組。

> utils: 放置實用工具和輔助函數，例如日期格式化函數、驗證函數等。

#### 2. 建立基礎路由
