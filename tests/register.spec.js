import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageManager } from '../pages/pageManager';

test.beforeEach(async ({ page }) => {
  const pageManager = new PageManager(page);
  pageManager.getNavigationPage().navigateToRegisterPage();
});

test('Create a new customer account @smoke @regression', async ({ page }) => {
  const pageManager = new PageManager(page);
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  pageManager
    .getRegisterPage()
    .performRegistration(randomName, randomEmail, 'test123', 'test123');
  await expect(pageManager.getLoginPage().loginHeading).toBeVisible();
});
