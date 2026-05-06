# qy-website-astro-exec

## 项目上下文
- 公司：Shenzhen Qiyang Electronics Co., Ltd.
- 类型：B2B 电子元器件企业英文展示站
- 语言：纯英文
- 技术栈：Astro 4.0 + React Islands + Tailwind CSS + Framer Motion + Astro Image
- 部署：Vercel

## 目录结构
/src
  /components/ui          # 按钮、卡片、徽章
  /components/layout      # Header、Footer、MobileNav
  /components/sections    # HeroCarousel、ProductGrid、AboutContent
  /content/products       # 6 大类（含子类）+ 产品详情 JSON
  /content/company        # About Us 文案 MD
  /pages/products/[category]/[subcategory].astro
  /pages/products/[category]/[subcategory]/[product].astro
  /pages/index.astro
  /pages/products.astro
  /pages/applications.astro
  /pages/news.astro
  /pages/about.astro
  /pages/contact.astro
  /layouts/BaseLayout.astro
  /assets/images/factory
  /assets/images/products
  /assets/images/applications
  /assets/images/carousel
  /assets/images/brands

## 全局修改点

### Header
- Logo文字：Shenzhen Qiyang Electronics Co., Ltd.
- 邮箱：sales@sz-qy.com.cn
- 电话：+86 待定（等确认替换）
- 导航顺序：HOME | PRODUCTS | APPLICATIONS | NEWS | ABOUT US | CONTACT US
- 移动端汉堡菜单保持同样顺序

### Footer
- 删除右侧二维码
- 左侧信息：
  Shenzhen Qiyang Electronics Co., Ltd.
  Address: 2nd Floor, 23rd Building of Keyuan West, No.1 of Kezhi West Road
  Yuehai street, Nanshan, Shenzhen, Guangdong, China
  Tel: +86 待定
  Email: sales@sz-qy.com.cn
  Website: www.sz-qy.com.cn
- Fast navigation：HOME | PRODUCTS | APPLICATIONS | NEWS | ABOUT US | CONTACT US

## 首页修改

### Hero轮播图
- 删除原模板轮播
- 替换为提供的图片（文档中"更换为以下图片"）
- 配置：自动播放5s，手动箭头，指示器圆点

### Product Display（7类卡片网格）
- 删除原模板所有产品展示
- 新建7个卡片（首页平铺展示，不分层）：
  1. RECTANGULAR CONNECTOR → /products/electrical-connector/rectangular-connector
  2. CIRCULAR CONNECTOR → /products/electrical-connector/circular-connector
  3. RF CONNECTOR → /products/electrical-connector/rf-connector
  4. CABLE ASSEMBLY → /products/cable-assembly
  5. BLDC TORQUE MOTOR → /products/bldc-torque-motor
  6. RESOLVER TRANSMITTER → /products/resolver-transmitter
  7. ROTARY ENCODER → /products/rotary-encoder
- 每个卡片：代表图 + 名称 + 跳转对应产品列表页
- 注意：首页7个卡片是Products页6大类的展开形式（ELECTRICAL CONNECTOR拆为3个子类展示）

### Product Advantage
- 删除该区块全部内容，不留DOM占位

### Service Case → Applications
- 标题改为APPLICATIONS
- 删除原案例图片
- 替换为提供的3张图片（文档中更换图片1/2/3）
- 布局：3列网格

## Products页面体系

### /products（大类总览）
- 6个主类别卡片：
  1. ELECTRICAL CONNECTOR
  2. CABLE ASSEMBLY
  3. BLDC TORQUE MOTOR
  4. RESOLVER TRANSMITTER
  5. ROTARY ENCODER
  6. INTERNATIONAL BRANDS

### /products/electrical-connector（子类）
- 3个子目录：RECTANGULAR CONNECTOR | CIRCULAR CONNECTOR | RF CONNECTOR

### /products/electrical-connector/rectangular（产品列表）
- 数据来源：Excel《公司各类产品明细20260420》
- 每个产品：产品图 + 型号 + 关键参数摘要
- 点击进入详情页

### /products/electrical-connector/rectangular/j30j-series（产品详情）
- 产品图画廊（多图轮播/缩略图）
- 完整参数规格表（来自Excel）
- 下载PDF规格书按钮

### /products/international-brands
- 不展示产品，只展示品牌LOGO网格
- 数据来源：附件文件夹《国际品牌LOGO》

## About Us /about
- 放入公司英文简介（文档完整文案）
- 工厂图片：画廊Grid布局或多张合并长图
- 图片路径：/assets/images/factory/

## Applications /applications
- 标题：APPLICATIONS
- 应用场景图片轮播
- 数据来源：文档提供的图片

## News /news
- 页面留空，仅保留标题和占位文案
- 预留CMS接口

## Contact Us /contact
- 公司信息：
  Shenzhen Qiyang Electronics Co., Ltd.
  Address: 2nd Floor, 23rd Building of Keyuan West, No.1 of Kezhi West Road
  Yuehai street, Nanshan, Shenzhen, Guangdong, China
  Tel: +86 待定
  Email: sales@sz-qy.com.cn
  Website: www.sz-qy.com.cn
- 可选：嵌入Google Maps

## 数据规范

### 产品JSON结构
```json
{
  "category": "Electrical Connector",
  "slug": "electrical-connector",
  "subCategories": [
    {
      "name": "Rectangular Connector",
      "slug": "rectangular-connector",
      "products": [
        {
          "model": "J30J Series",
          "images": ["/images/products/j30j-1.webp"],
          "specs": {
            "contactSpacing": "1.27mm",
            "currentRating": "3A",
            "voltage": "250V AC",
            "temperature": "-55°C ~ +125°C"
          },
          "datasheet": "/datasheets/j30j.pdf"
        }
      ]
    }
  ]
}
```

### 图片命名
- 工厂图：factory-{n}.webp
- 产品图：{category}-{model}-{angle}.webp
- 轮播图：carousel-{n}.webp
- 应用图：application-{n}.webp
- 品牌LOGO：brand-{name}.webp

## 样式规范

### 颜色
- 主色：#1E40AF（深蓝）
- 辅色：#F59E0B（工业橙，CTA按钮）
- 背景：#FFFFFF、#F8FAFC
- 文字：#0F172A（主）、#64748B（次）

### 字体
- 英文：Inter, system-ui, sans-serif
- 中文备用：Noto Sans SC
- 标题：font-weight 700
- 正文：font-weight 400，line-height 1.6

### 响应式断点
- Mobile: <768px（单列，汉堡菜单）
- Tablet: 768-1024px（2列网格）
- Desktop: >1024px（完整布局）

## SEO规范
- 每页独立<title>和<meta description>
- 首页title：Shenzhen Qiyang Electronics Co., Ltd. - Precision Interconnection & Servo Control
- Open Graph标签
- 生成sitemap.xml和robots.txt
- 图片alt：{Product Name} - {Category} - Shenzhen Qiyang Electronics

## 性能要求
- 所有图片通过Astro Image转WebP/AVIF
- 首屏JS体积<100KB
- Lighthouse：Performance≥90, SEO≥95
- 预加载关键字体和首屏图片

## 部署检查
- Vercel绑定域名www.sz-qy.com.cn
- 301重定向：sz-qy.com.cn → www.sz-qy.com.cn
- 开启Vercel Analytics（可选）
- 图片上传CDN

## 待确认事项（开发前）
1. 电话号：+86 待定替换为真实号码
2. 产品Excel：提供JSON或CSV导出
3. 工厂图片：确认画廊or合并长图
4. 应用场景图：确认3张图片内容
5. 品牌LOGO文件夹：确认品牌名称和授权
6. 轮播图：确认首页顶部轮播图数量和内容
