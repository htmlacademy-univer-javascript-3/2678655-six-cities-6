import { AuthPage } from "../../src/features/auth/page/authPage";
import { test } from '@playwright/test'

test('Успешный логин', async ({ page }) => {
  const loginPage = new AuthPage(page);
  await loginPage.load();

  await loginPage.login('egor.osipchuk2004@gmail.com', 'password123');
});
