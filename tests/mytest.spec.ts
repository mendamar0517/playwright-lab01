import { expect, test } from "@playwright/test";

// Зөв хэрэглэгчийн мэдээллээр амжилттай нэвтрэх үйлдлийг шалгана.
test("Амжилттай нэвтрэх", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Нэвтрэх формд зөв username болон password оруулна.
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Нэвтэрсний дараа Products хуудас харагдаж байгаа эсэхийг шалгана.
  await expect(page.getByText("Products")).toBeVisible();

  // Тест тусгаарлагдсан байдлаар дуусахын тулд logout хийнэ.
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByText("Logout").click();
});

// Буруу password ашиглах үед систем нэвтрэхээс татгалзаж байгаа эсэхийг шалгана.
test("Буруу нууц үгээр нэвтрэх", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Зөв username боловч буруу password оруулж login хийнэ.
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  // Буруу нууц үгийн үед алдааны message гарч байгаа эсэхийг шалгана.
  await expect(
    page.getByText(
      "Username and password do not match any user in this service",
    ),
  ).toBeVisible();
});

// Амжилттай нэвтэрсний дараа барааг сагсанд нэмэх үйлдлийг шалгана.
test("Бараа сагсанд нэмэх", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Бараа нэмэхийн өмнө хэрэглэгчийн бүртгэлээр нэвтэрнэ.
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Products")).toBeVisible();

  // Эхний барааг сонгон сагсанд нэмнэ.
  await page.getByRole("button", { name: "Add to cart" }).first().click();

  // Сагсны тоо 1 болсон эсэхийг шалгана.
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );

  // Сагс руу орж бараа нэмэгдсэн үйлдлийг үргэлжлүүлэн шалгана.
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Тестийг logout хийж дуусгана.
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByText("Logout").click();
});
