
import { test, Page, expect}from '@playwright/test'

test('playwright tutorial test', async({page}) => {

    await page.goto("https://www.google.com");

    await page.getByRole('combobox', { name: 'Search' }).fill('amazon.com');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.waitForTimeout(3000);

})
