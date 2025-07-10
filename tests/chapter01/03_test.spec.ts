
import { test, Page, expect}from '@playwright/test'

test('playwright tutorial test', async({page}) => {

    await page.goto("https://www.google.com");

    await page.getByRole('combobox', { name: 'Search' }).fill('facebook.com');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');


})