import { MainPage } from "../../src/features/offers/page/mainPage";
import { test, expect } from '@playwright/test';

test('Проверка сортировки', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  await mainPage.selectSort('Price: low to high');
  expect(await mainPage.getCurrentSort()).toContain('Price: low to high');

  await mainPage.selectSort('Price: high to low');
  expect(await mainPage.getCurrentSort()).toContain('Price: high to low');
});

test('Город переключается', async ({ page }) => {
  const mainPage = new MainPage(page);
  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  await mainPage.selectCity('Amsterdam');
  expect(await mainPage.getCityText()).toContain('Amsterdam');
});

test('Сначала город потом сортировка', async ({ page }) => {
  const mainPage = new MainPage(page);
  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  await mainPage.selectCity('Hamburg');
  await mainPage.selectSort('Top rated first');

  expect(await mainPage.getCityText()).toContain('Hamburg');
  expect(await mainPage.getCurrentSort()).toContain('Top rated first');
});
