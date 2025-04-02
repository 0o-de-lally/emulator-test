describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the counter screen', async () => {
    await expect(element(by.text('Count:'))).toBeVisible();
  });

  it('should increment counter when tapped', async () => {
    await element(by.text('Increment')).tap();
    await expect(element(by.text('Count: 1'))).toBeVisible();
  });
});
