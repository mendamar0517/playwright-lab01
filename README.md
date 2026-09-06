# Playwright UI Automated Testing - Lab 1

## Оюутны мэдээлэл

- Нэр: О.Мэнд-Амар
- Оюутны код: B232270001
- Хичээл: Программ хангамжийн чанарын баталгаа ба туршилт
- Лаборатори: Lab 1 - UI автомат тест Playwright

## Хийсэн ажил

Энэхүү лабораторийн ажлаар Playwright ашиглан SauceDemo веб application дээр UI automated test хийсэн.

Нийт 3 тест case боловсруулсан:

1. Амжилттай нэвтрэх
2. Буруу нууц үгээр нэвтрэх
3. Бараа сагсанд нэмэх

Тестүүдийг Chromium, Firefox болон WebKit browser дээр ажиллуулсан.

Нийт 9 test run бүгд амжилттай ажилласан.

Мөн Playwright Codegen ашиглан UI үйлдлүүдээс test code үүсгэж үзсэн. Codegen-ийн үүсгэсэн кодыг шууд ашиглахын оронд locator-уудыг шалгаж, шаардлагагүй үйлдлүүдийг цэвэрлэн өөрийн тестийн кодыг бичсэн.

Trace ашиглан тестийн ажиллагааг мөшгөж үзсэн. Мөн assertion-ийг зориудаар буруу болгож test failure үүсгэн Trace Viewer дээр алдааг шалгасан. Дараа нь assertion-ийг засаж, бүх тестийг дахин амжилттай ажиллуулсан.

## Locator сонголт

Тестүүдэд `getByRole()`, `getByPlaceholder()` болон шаардлагатай үед `locator()` ашигласан.

XPath locator ашиглахаас зайлсхийсэн. XPath нь DOM-ийн бүтэц болон байрлалаас ихээхэн хамааралтай тул веб хуудасны бүтэц өөрчлөгдөхөд тест эвдрэх магадлалтай. Харин Playwright-ийн role, placeholder зэрэг semantic locator-ууд нь элементийн зориулалттай илүү ойлгомжтой холбоотой байдаг бөгөөд тестийг унших, засварлахад хялбар.

Codegen зарим үед `div:nth()` зэрэг тогтворгүй locator үүсгэж болохыг ажигласан. Ийм locator-уудыг шууд ашиглахын оронд илүү ойлгомжтой, тогтвортой locator болгон өөрчилсөн.

## Playwright vs Selenium

Playwright нь Chromium, Firefox болон WebKit browser-уудыг нэг framework дотор дэмждэг. Selenium нь мөн олон browser болон олон хэлний дэмжлэгтэй бөгөөд веб automation-д өргөн хэрэглэгддэг. Playwright нь auto-waiting механизмтай тул элемент бэлэн болох хүртэл автоматаар хүлээдэг. Playwright-ийн `getByRole()` болон `getByPlaceholder()` зэрэг locator-ууд нь тестийн кодыг ойлгоход хялбар болгодог. Playwright нь built-in test runner, assertion болон Trace Viewer зэрэг testing-д зориулсан хэрэгслүүдтэй. Selenium нь WebDriver архитектур дээр суурилдаг бөгөөд ecosystem нь маш өргөн. Playwright-ийн Codegen болон Trace Viewer нь тест боловсруулах болон алдаа оношлоход хэрэгтэй гэж ажигласан. Энэ лабораторийн ажлын хүрээнд Playwright нь UI тестийг хурдан боловсруулах, debug хийхэд тохиромжтой санагдсан.

## Test Evidence

Trace evidence:

[Trace файлыг харах](docs/trace.zip)

Trace Viewer ашиглан тестийн алхмууд болон assertion-ийн ажиллагааг шалгасан. Тестийн assertion-ийг зориудаар буруу болгож failure үүсгэн, Trace Viewer ашиглан алдаа гарсан алхмыг мөшгөж шалгасан. Дараа нь assertion-ийг засаж, бүх тестийг амжилттай ажиллуулсан.

## Run tests

Dependencies суулгах:

```bash
npm install
```

Playwright browser-уудыг суулгах:

```bash
npx playwright install
```

Бүх тестийг ажиллуулах:

```bash
npx playwright test
```

HTML report харах:

```bash
npx playwright show-report
```

## AI ашигласан тухай

AI-г тестийн код болон README боловсруулахад туслах зорилгоор ашигласан. AI-ийн санал болгосон кодыг шууд хуулж ашиглаагүй бөгөөд өөрөө ажиллуулж, locator болон assertion-уудыг шалгасан. Зарим locator нь SauceDemo-ийн бодит attribute-тэй тохироогүй тул тест ажиллуулах үед гарсан алдааг үндэслэн өөрчилсөн. Ингэснээр AI-ийн гаргасан кодыг өөрөө шалгаж, шаардлагатай засваруудыг хийж ашигласан.
