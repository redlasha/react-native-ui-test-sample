import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'c:/pj_sample/uiTestSample/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load

test('sample appium test', async () => {
    expect(await driver.hasElementByAccessibilityId('helloBtn')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('byeBtn')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('textMsg')).toBe(true);


    const element = await driver.elementByAccessibilityId('helloBtn')
    await element.click()
    const txtMsgEle = await driver.elementByAccessibilityId('textMsg');
    const txtValue = await txtMsgEle.text();
    expect(txtValue).toBe('Welcome!');
});

/**
 *
 *
 *
 * 이런식으로도?
 * expect(component.contains(<ComponentName />)).toBe(false)

 *
 *
 */