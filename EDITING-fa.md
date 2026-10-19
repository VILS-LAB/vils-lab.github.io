# راهنمای اعضا و انتشار VILS Lab

تمام مسیرهای این راهنما نسبت به ریشهٔ مخزن هستند؛ همان جایی که `_config.yaml` قرار دارد.

## ویرایش اعضای فعلی

| شخص | فایل مشخصات |
| --- | --- |
| Hesam Mohseni | `_members/hesam-ghasemi.md` |
| Hesam Soleymani | `_members/hesam-soleymani.md` |
| Mojtaba Ansari | `_members/mojtaba-asadi.md` |
| Dr. Arash Abdi | `_members/arash-abdi.md` |

برای عکس هر عضو، فایل عکس را در `images/team/` قرار دهید و مقدار `image` را در فایل همان عضو بنویسید. نمونه برای حسام محسنی:

```yaml
---
name: Hesam Ghasemi
native_name: Hesam Ghasemi
initials: HM
image: images/team/hesam-gh.jpeg
role: researcher
description: "Researcher · Computer vision & reinforcement learning"
position: 1
project: low-light-detection
links:
  github: YOUR_GITHUB_USERNAME
  email: YOUR_EMAIL
---

## About

متن معرفی، مقطع تحصیلی، علایق پژوهشی و توضیحات بیشتر را اینجا بنویسید.
```

مقادیر نمونهٔ `YOUR_GITHUB_USERNAME` و `YOUR_EMAIL` را با اطلاعات واقعی جایگزین کنید، یا آن‌ها را حذف کنید. `github` فقط نام کاربری است؛ نشانی کامل لازم نیست.

| فیلد | کاربرد |
| --- | --- |
| `name` | نام اصلی نمایشی |
| `native_name` | نام فارسی اختیاری |
| `image` | مسیر عکس از ریشهٔ مخزن |
| `initials` | حروف اول نام که در نبود عکس نشان داده می‌شود |
| `role` | `researcher` یا `student` برای عضو؛ `supervisor` برای سرپرست |
| `description` | سمت، مقطع یا معرفی کوتاه |
| `position` | ترتیب نمایش؛ عدد کوچک‌تر زودتر نشان داده می‌شود |
| `project` | شناسهٔ پروژه در `_data/research-projects.yaml`؛ اختیاری |
| `links` | ایمیل و نام کاربری GitHub |

عکس مربعی یا عمودی با وضوح حداقل حدود ۶۰۰ پیکسل انتخاب کنید؛ نمایش عکس با `object-fit: cover` است. نام فایل‌ها را انگلیسی و بدون فاصله نگه دارید. نمونهٔ موجود `images/team/hesam.jpg` برای حسام سلیمانی استفاده می‌شود.

## افزودن عضو جدید

۱. فایلی مانند `_members/ali-ahmadi.md` با ساختار بالا بسازید.

۲. عکس را در `images/team/ali-ahmadi.jpg` بگذارید و `image` را تنظیم کنید.

۳. نام، حروف اول، معرفی و ترتیب نمایش را تغییر دهید. اگر پروژه هنوز وارد نشده، فیلد `project` را حذف کنید.

پس از ساخت سایت، عضو به‌طور خودکار در People و بخش اعضای صفحهٔ اصلی ظاهر می‌شود و صفحهٔ شخصی `/members/ali-ahmadi.html` می‌گیرد. عضو بدون پروژه نیز صفحهٔ شخصی و متن معرفی خودش را دارد.

## پروژه‌ها و موضوع پژوهش

فایل `_data/research-projects.yaml` اطلاعات بخش Projects و پژوهش داخل صفحهٔ هر شخص را کنترل می‌کند. شناسه‌های موجود:

- `low-light-detection`: Hesam Ghasemi
- `offline-to-online-rl`: Hesam Soleymani
- `llm-malware-detection`: Mojtaba Asadi

برای پروژهٔ جدید، یک ورودی موجود را کپی و `id`، نام پژوهشگر، عنوان و توضیحات را ویرایش کنید. فیلد `member` برابر نام فایل عضو بدون `.md` است؛ مثلاً `ali-ahmadi`. فیلد `project` در فایل عضو را برابر `id` پروژه بگذارید.

موشن‌های آمادهٔ فیلد `motion` عبارت‌اند از `lowlight`، `reinforcement` و `malware`؛ برای حوزه‌ای متفاوت، یک موشن مرتبط باید به `_includes/project-motion.html` و استایل‌های پروژه افزوده شود. برای عضو بدون پروژه، انتخاب موشن لازم نیست.

نام سرپرست در `_config.yaml` با فیلد `supervisor` و مشخصات شخصی او در `_members/arash-abdi.md` قرار دارد.

## انتشار دوباره در GitHub Pages

این نسخه همان پروژهٔ Jekyll قبلی است؛ `Gemfile`، پوشه‌های Jekyll و گردش‌کار `.github/workflows/build-site.yaml` حفظ شده‌اند. خروجی HTML/CSS/JS ایستا است و برای انتشار، سرور برنامه یا ساخت Node لازم ندارد.

۱. `vils-lab-source.zip` را استخراج کنید و فایل‌ها را در ریشهٔ مخزن `VILS-LAB/vils-lab.github.io` قرار دهید؛ `_config.yaml` و `.github/` باید در ریشه باشند.

۲. پس از ثبت و ارسال تغییرات به `main`، گردش‌کار موجود سایت را می‌سازد. برای ساخت دستی می‌توانید در Actions، گردش‌کار `build-site` را با Run workflow اجرا کنید.

۳. گردش‌کار فعلی با `JamesIves/github-pages-deploy-action` خروجی `_site` را به شاخهٔ `gh-pages` می‌فرستد. تنظیم متناسب با همین گردش‌کار در Settings → Pages عبارت است از `Deploy from a branch`، شاخهٔ `gh-pages` و پوشهٔ `/(root)`.

۴. بعد از موفق‌شدن Actions و انتشار Pages، سایت در نشانی قبلی قابل مشاهده است. اجرای واقعی این گردش‌کار روی GitHub هنوز در این کار انجام نشده است. گردش‌کار `on-push` ابتدا به‌روزرسانی ارجاعات را اجرا می‌کند؛ اگر آن مرحله شکست بخورد، ساخت وابستهٔ سایت اجرا نمی‌شود. اجرای دستی `build-site` امکان ساخت مستقیم را فراهم می‌کند.

برای توسعهٔ محلی:

```sh
bundle install
bundle exec jekyll serve
```

## آیکن تب

ارجاع آیکن‌ها در `_includes/head.html` است. نسخه‌های PNG با ابعاد ۱۶ و ۳۲ و فایل ICO چنداندازه در `assets/icons/` و فایل جایگزین `favicon.ico` در ریشه قرار دارند. این نسخه‌ها از لوگوی اصلی استفاده می‌کنند. اگر آیکن قبلی در تب ماند، تب را ببندید و دوباره باز کنید یا با Ctrl+F5 تازه‌سازی کنید.

## منابع انتشار

- [تنظیم منبع انتشار GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [راهنمای اکشن انتشار استفاده‌شده در همین مخزن](https://github.com/JamesIves/github-pages-deploy-action#readme)
