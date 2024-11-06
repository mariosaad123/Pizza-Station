# مشروع موقع لمطعم محطة البيتزا

## نظرة عامة
هذا المشروع هو موقع ويب بسيط لعرض منتجات البيتزا باستخدام HTML وCSS و SASS. الهدف من هذا المشروع هو إنشاء صفحات عرض بيتزا تحتوي على تصميم مرن وجميل باستخدام تقنيات الـ CSS الحديثة، بما في ذلك الـ mixins لتسهيل إضافة منتجات جديدة مستقبلاً.

### الهيكل العام للمشروع:
المشروع يحتوي على:
- صفحة رئيسية تعرض مجموعة متنوعة من أنواع البيتزا.
- تصميم يتغير قليلًا في كل صفحة، باستخدام تقنيات الـ SASS و mixins.
- يمكن إضافة صفحات أخرى بنفس التنسيقات بسهولة باستخدام الـ mixins.
- صفحة للتواصل مع اصحاب الموقع
- صفحة لمعلومات حول المطعم
- صفحة لمنيو المطعم
- وذيل الصفحة يحتوي على اللوجو وروابط مهمة ووسائل التواصل الاجتماعي

## التقنيات المستخدمة:
- **HTML**: لتحديد الهيكل العام للصفحات.
- **CSS**: لتنسيق وتصميم الموقع.
- **SASS**: لكتابة الـ CSS بشكل أكثر مرونة وتنظيمًا.
- **Mixins في SASS**: لتسهيل إعادة استخدام التنسيقات عبر صفحات متعددة.

## طريقة العمل:
### 1. التحميل والتشغيل المحلي:
لتشغيل المشروع على جهازك المحلي، اتبع الخطوات التالية:

1. **تحميل المشروع**:
   - قم بتحميل المشروع من هذا الرابط:
     https://github.com/mariosaad123/Pizza-Station

2. **انتقل إلى مجلد المشروع**:
   - افتح المجلد الذي يحتوي على المشروع باستخدام محرر النصوص المفضل لديك.

3. **فتح الملفات في المتصفح**:
   - افتح ملف `index.html` في متصفحك لمشاهدة الصفحة الرئيسية للمشروع.

### 2. كيفية إضافة منتجات بيتزا جديدة:
لإضافة صفحة جديدة لمنتج بيتزا، قم باتباع الخطوات التالية:

1. **أنشئ صفحة HTML جديدة**: 
   - قم بإنشاء صفحة جديدة باستخدام `HTML` وأضف تفاصيل المنتج.ولا تنسى تحزيمها في webpack

2. **استخدام Mixins في SASS**:
   - قم بإنشاء تنسيق جديد باستخدام الـ mixin المعتمد لتغيير تنسيق كل صفحة قليلًا.
   
   مثال على مكون Mixins:
   ```scss
   @mixin pizza-theme($background-color, $text-color) {
     background-color: $background-color;
     color: $text-color;
   }

   .pizza-page {
     @include pizza-page(#f5f5f5, #333);
   }
