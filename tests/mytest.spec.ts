import { expect, test } from "@playwright/test";

test("Амжилттай нэвтрэх", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Products")).toBeVisible();

  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByText("Logout").click();
});

test("Буруу нууц үгээр нэвтрэх", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText(
      "Username and password do not match any user in this service",
    ),
  ).toBeVisible();
});
